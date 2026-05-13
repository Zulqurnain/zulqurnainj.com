#!/usr/bin/env python3
"""Verify routing is local, send test email, wait 90s, check inbox."""
import os, json, subprocess, urllib.request, imaplib, email as em, time
from email.header import decode_header

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
eu     = os.environ['EU']
ep     = os.environ['EP']
token  = os.environ['GT']
repo   = os.environ['GR']

base = f"https://{host}:2083/json-api/cpanel"

def curl_get(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

# 1. Check current routing
raw = curl_get(f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck&cpanel_jsonapi_version=2&domain={domain}")
print(f"Current routing: {raw[:300]}")

d = json.loads(raw)
mxcheck = d['cpanelresult']['data'][0].get('mxcheck', 'unknown')
print(f"mxcheck = {mxcheck}")

if mxcheck != 'local':
    print("ROUTING IS NOT LOCAL — reapplying fix...")
    fix = curl_get(f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=setmxcheck&cpanel_jsonapi_version=2&domain={domain}&mxcheck=local")
    print(f"Fix result: {fix[:300]}")
    # Verify
    raw2 = curl_get(f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck&cpanel_jsonapi_version=2&domain={domain}")
    d2 = json.loads(raw2)
    mxcheck = d2['cpanelresult']['data'][0].get('mxcheck', 'unknown')
    print(f"mxcheck after reapply = {mxcheck}")

# 2. Check inbox BEFORE sending
def check_inbox(label):
    results = []
    try:
        M = imaplib.IMAP4_SSL(host, 993)
        M.login(eu, ep)
        _, msgs = M.select('INBOX')
        count = int(msgs[0])
        results.append(f"{label}: count={count}")
        if count > 0:
            _, data = M.fetch(str(count), '(RFC822.HEADER)')
            if data and isinstance(data[0], tuple):
                msg = em.message_from_bytes(data[0][1])
                results.append(f"  Latest: {msg.get('Subject','?')} | {msg.get('Date','?')}")
        M.logout()
    except Exception as e:
        results.append(f"{label}: IMAP error: {e}")
    return results

pre = check_inbox("BEFORE send")
print('\n'.join(pre))

# 3. Send test email via SSH+sendmail (if sendmail is available)
try:
    r = subprocess.run(
        ['sshpass', '-p', cpass, 'ssh',
         '-o', 'StrictHostKeyChecking=no', '-o', 'UserKnownHostsFile=/dev/null',
         '-o', 'ConnectTimeout=20', '-p', '21098', f"{cpanel}@{host}",
         f"printf 'To: {eu}\\nFrom: {eu}\\nSubject: routing-verify-{int(time.time())}\\n\\ntest\\n' | /usr/sbin/sendmail {eu}"],
        capture_output=True, text=True, timeout=30
    )
    print(f"SSH sendmail stdout: {r.stdout[:200]}")
    print(f"SSH sendmail stderr: {r.stderr[:200]}")
    print(f"SSH sendmail returncode: {r.returncode}")
except Exception as e:
    print(f"SSH sendmail error: {e}")

# 4. Wait for delivery
print("Waiting 90 seconds for Exim to deliver...")
time.sleep(90)

# 5. Check inbox after
post = check_inbox("AFTER send (90s wait)")
print('\n'.join(post))

# Post as issue
body = f"""## Routing Verify + Send Test

**Current mxcheck:** `{mxcheck}`

### Before sending
```
{chr(10).join(pre)}
```

### After sending (waited 90s)
```
{chr(10).join(post)}
```
"""

payload = json.dumps({'title': '[verify] Routing check + send test', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}")
