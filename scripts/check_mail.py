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

def api(endpoint, **params):
    """Call cPanel UAPI, return (raw_text, parsed_dict)."""
    cmd = ['curl', '-sk', '-u', f"{cpanel}:{cpass}",
           f"https://{host}:2083/execute/{endpoint}"]
    for k, v in params.items():
        cmd += ['--data-urlencode', f"{k}={v}"]
    if params:
        cmd.insert(2, '-X')
        cmd.insert(3, 'POST')
    raw = subprocess.check_output(cmd, text=True)
    try:
        return raw, json.loads(raw)
    except Exception:
        return raw, {}

# 1. get_mx raw response
mx_raw, mx = api('Email/get_mx', domain=domain)
print(f"[get_mx raw]: {mx_raw[:500]}")

# 2. set_mx local
set_raw, set_d = api('Email/set_mx', domain=domain, mxcheck='local')
print(f"[set_mx]: {set_raw[:200]}")

# 3. set_always_accept
acc_raw, acc_d = api('Email/set_always_accept', domain=domain, value='1')
print(f"[set_always_accept]: {acc_raw[:200]}")

# 4. get_mx again after fix
mx2_raw, mx2 = api('Email/get_mx', domain=domain)
print(f"[get_mx after fix]: {mx2_raw[:500]}")

# 5. Read IMAP inbox
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
            imap_lines.append(f"Latest subject: {subj}")
            imap_lines.append(f"Latest from: {msg.get('From','?')}")
            imap_lines.append(f"Latest date: {msg.get('Date','?')}")
    else:
        imap_lines.append("INBOX is EMPTY")

    for folder in ['INBOX.spam', 'Junk', 'Spam']:
        st, d = M.select(folder, readonly=True)
        if st == 'OK':
            imap_lines.append(f"Spam ({folder}): {int(d[0])} msgs")
            break
    M.logout()
except Exception as e:
    imap_lines.append(f"IMAP error: {e}")

imap_text = '\n'.join(imap_lines)

body = f"""## get_mx raw response (before fix)
```
{mx_raw[:2000]}
```

## set_mx result
```
{set_raw[:500]}
```

## set_always_accept result
```
{acc_raw[:500]}
```

## get_mx raw response (after fix)
```
{mx2_raw[:2000]}
```

## IMAP Inbox
```
{imap_text}
```"""

payload = json.dumps({'title': '[mx-status] Full routing debug', 'body': body}).encode()
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
