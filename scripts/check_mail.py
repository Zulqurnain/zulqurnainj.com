#!/usr/bin/env python3
import imaplib, os, email as em, json, urllib.request, subprocess
from email.header import decode_header

host   = os.environ['H']
user   = os.environ['EU']
passwd = os.environ['EP']
token  = os.environ['GT']
repo   = os.environ['GR']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']

# Get current MX routing
mx_raw = subprocess.check_output(
    ['curl', '-sk', '-u', f"{cpanel}:{cpass}",
     f"https://{host}:2083/execute/Email/get_mx?domain={domain}"],
    text=True
)
try:
    mx = json.loads(mx_raw)
    data = mx.get('data', {})
    local_val  = data.get('local')
    always_val = data.get('always_accept')
    detected   = data.get('detected_mx')
except Exception as e:
    local_val = always_val = detected = f'parse error: {e}'
    mx = {}

print(f"get_mx.local={local_val}  always_accept={always_val}  detected_mx={detected}")

# Read IMAP inbox
imap_lines = []
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(user, passwd)
    _, msgs = M.select('INBOX')
    count = int(msgs[0])
    imap_lines.append(f"Inbox count: {count}")
    if count > 0:
        _, data2 = M.fetch(str(count), '(RFC822.HEADER)')
        if data2 and isinstance(data2[0], tuple):
            msg = em.message_from_bytes(data2[0][1])
            raw_subj = msg.get('Subject', '?')
            subj = ''.join(
                p.decode(enc or 'utf-8') if isinstance(p, bytes) else p
                for p, enc in decode_header(raw_subj)
            )
            imap_lines.append(f"Latest subject : {subj}")
            imap_lines.append(f"Latest from    : {msg.get('From','?')}")
            imap_lines.append(f"Latest date    : {msg.get('Date','?')}")
    else:
        imap_lines.append("Inbox is EMPTY - delivery not working")

    for folder in ['INBOX.spam', 'Junk', 'Spam']:
        st, d = M.select(folder, readonly=True)
        if st == 'OK':
            imap_lines.append(f"Spam folder ({folder}): {int(d[0])} messages")
            break
    M.logout()
except Exception as e:
    imap_lines.append(f"IMAP error: {e}")

imap_text = '\n'.join(imap_lines)
local_icon  = "✅" if local_val == 1 else "❌"
always_icon = "✅" if always_val == 1 else "❌"
mx_pretty = json.dumps(mx.get('data', mx), indent=2)[:3000]

body = f"""## Email Routing Status

| Setting | Value | Status |
|---------|-------|--------|
| `get_mx.local` | `{local_val}` | {local_icon} (1=local delivery) |
| `get_mx.always_accept` | `{always_val}` | {always_icon} |
| `get_mx.detected_mx` | `{detected}` | |

## IMAP Inbox (after sendmail test)
```
{imap_text}
```

## Raw get_mx.data
```json
{mx_pretty}
```"""

payload = json.dumps({'title': '[mx-status] Routing & inbox check', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    }
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {d['html_url']}")
