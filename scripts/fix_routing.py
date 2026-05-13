#!/usr/bin/env python3
"""Apply the working fix: API v2 setmxcheck=local. DO NOT call set_always_accept (resets to auto)."""
import os, json, subprocess, urllib.request, imaplib, email as em
from email.header import decode_header

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']
eu     = os.environ.get('EU', '')
ep     = os.environ.get('EP', '')

def curl_get(url):
    return subprocess.check_output(
        ['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

base = f"https://{host}:2083/json-api/cpanel"

# Step 1: Check current state
before = curl_get(
    f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck"
    f"&cpanel_jsonapi_version=2&domain={domain}"
)
print(f"BEFORE: {before[:300]}")

# Step 2: Set to local (THE FIX THAT WORKS)
fix = curl_get(
    f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=setmxcheck"
    f"&cpanel_jsonapi_version=2&domain={domain}&mxcheck=local"
)
print(f"SET LOCAL: {fix[:400]}")

# Step 3: Verify
after = curl_get(
    f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck"
    f"&cpanel_jsonapi_version=2&domain={domain}"
)
print(f"AFTER: {after[:300]}")

# Parse results
try:
    after_d = json.loads(after)
    mxcheck = after_d['cpanelresult']['data'][0].get('mxcheck','?')
    always  = after_d['cpanelresult']['data'][0].get('alwaysaccept','?')
    status_line = f"mxcheck={mxcheck}  alwaysaccept={always}"
    success = mxcheck == 'local'
except Exception as e:
    status_line = f"parse error: {e}"
    success = False

# Step 4: Check IMAP inbox (only if credentials provided)
imap_text = "(IMAP check skipped)"
if eu and ep:
    try:
        M = imaplib.IMAP4_SSL(host, 993)
        M.login(eu, ep)
        _, msgs = M.select('INBOX')
        count = int(msgs[0])
        imap_text = f"Inbox count: {count}"
        if count > 0:
            _, data2 = M.fetch(str(count), '(RFC822.HEADER)')
            if data2 and isinstance(data2[0], tuple):
                msg = em.message_from_bytes(data2[0][1])
                subj = msg.get('Subject', '?')
                imap_text += f"\nLatest: {subj} | {msg.get('Date','?')}"
        else:
            imap_text += "\nINBOX is empty (may take minutes for external mail to arrive)"
        M.logout()
    except Exception as e:
        imap_text = f"IMAP error: {e}"

icon = "SUCCESS" if success else "FAILED"
body = f"""## Email Routing Fix Result: {icon}

**Status after fix:** `{status_line}`

Expected: `mxcheck=local  alwaysaccept=1`

---

### Before (getmxcheck)
```json
{before[:800]}
```

### Fix applied (setmxcheck=local)
```json
{fix[:800]}
```

### After (getmxcheck)
```json
{after[:800]}
```

### IMAP Inbox
```
{imap_text}
```

**Note:** If fix is `mxcheck=local`, external emails to me@zulqurnainj.com should now deliver within a few minutes. The relay loop is broken."""

payload = json.dumps({
    'title': f'[fix-routing] {icon}: mxcheck={("local" if success else "auto")}',
    'body': body[:60000]
}).encode()

req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {icon} - {status_line}")
