#!/usr/bin/env python3
"""Test mailbox: IMAP APPEND + sendmail with full output capture."""
import os, json, subprocess, urllib.request, imaplib, email as em, time
from email.mime.text import MIMEText
from email.header import decode_header
from datetime import datetime

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
eu     = os.environ['EU']
ep     = os.environ['EP']
token  = os.environ['GT']
repo   = os.environ['GR']

base = f"https://{host}:2083/json-api/cpanel"

sections = {}

# 1. Confirm routing is local
raw = subprocess.check_output(
    ['curl', '-sk', '-u', f"{cpanel}:{cpass}",
     f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck&cpanel_jsonapi_version=2&domain={domain}"],
    text=True
)
try:
    mxcheck = json.loads(raw)['cpanelresult']['data'][0].get('mxcheck', '?')
except Exception:
    mxcheck = 'parse error'
sections['routing'] = f"mxcheck={mxcheck}"
print(f"Routing: {sections['routing']}")

# Reapply if not local
if mxcheck != 'local':
    subprocess.run(
        ['curl', '-sk', '-u', f"{cpanel}:{cpass}",
         f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=setmxcheck&cpanel_jsonapi_version=2&domain={domain}&mxcheck=local"],
        capture_output=True
    )
    mxcheck = 'local (reapplied)'

# 2. IMAP APPEND — inject a message directly into inbox
append_result = "not attempted"
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    ts = datetime.utcnow().strftime('%H:%M:%S')
    msg = MIMEText(f"Direct IMAP APPEND test at {ts} UTC.\nIf this appears, the mailbox is working.")
    msg['From'] = eu
    msg['To'] = eu
    msg['Subject'] = f"[IMAP-APPEND] Direct inject test {ts}"
    status, resp = M.append('INBOX', None, None, msg.as_bytes())
    append_result = f"status={status} resp={resp}"
    print(f"IMAP APPEND: {append_result}")
    M.logout()
except Exception as e:
    append_result = f"error: {e}"
    print(f"IMAP APPEND error: {e}")

sections['imap_append'] = append_result

# 3. Check inbox count after append
def get_inbox_count():
    try:
        M = imaplib.IMAP4_SSL(host, 993)
        M.login(eu, ep)
        _, msgs = M.select('INBOX')
        count = int(msgs[0])
        latest = ''
        if count > 0:
            _, data = M.fetch(str(count), '(RFC822.HEADER)')
            if data and isinstance(data[0], tuple):
                msg = em.message_from_bytes(data[0][1])
                latest = f" | Latest: {msg.get('Subject','?')}"
        M.logout()
        return f"count={count}{latest}"
    except Exception as e:
        return f"error: {e}"

after_append = get_inbox_count()
sections['after_append'] = after_append
print(f"After APPEND: {after_append}")

# 4. SSH sendmail with full output capture
ssh_out = "not attempted"
try:
    r = subprocess.run(
        ['sshpass', '-p', cpass, 'ssh',
         '-o', 'StrictHostKeyChecking=no', '-o', 'UserKnownHostsFile=/dev/null',
         '-o', 'ConnectTimeout=20', '-p', '21098', f"{cpanel}@{host}",
         f"printf 'To: {eu}\\nFrom: {eu}\\nSubject: sendmail-test-{int(time.time())}\\n\\ntest\\n' | /usr/sbin/sendmail -v {eu} 2>&1"],
        capture_output=True, text=True, timeout=30
    )
    ssh_out = f"rc={r.returncode}\nstdout: {r.stdout[:400]}\nstderr: {r.stderr[:400]}"
except Exception as e:
    ssh_out = f"exception: {e}"

sections['sendmail_output'] = ssh_out
print(f"SSH sendmail:\n{ssh_out}")

# 5. Wait and check inbox
print("Waiting 60s...")
time.sleep(60)

after_sendmail = get_inbox_count()
sections['after_sendmail_60s'] = after_sendmail
print(f"After sendmail 60s: {after_sendmail}")

# Post issue
body = f"""## Delivery Test Results

**Routing:** `{mxcheck}`

| Test | Result |
|------|--------|
| IMAP APPEND | `{append_result}` |
| Inbox after APPEND | `{after_append}` |
| SSH sendmail | see below |
| Inbox after sendmail (60s) | `{after_sendmail}` |

### SSH sendmail output
```
{ssh_out}
```

### Interpretation
- If APPEND worked but inbox shows count=0: IMAP SELECT might not refresh; try EXAMINE
- If APPEND status=OK but count=0: IMAP server may not reflect immediately
- If sendmail rc=0 but no delivery: Exim is queuing and routing remotely despite local setting
"""

payload = json.dumps({'title': '[verify] IMAP APPEND + sendmail test', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}")
