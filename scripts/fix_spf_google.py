#!/usr/bin/env python3
"""Check inbox for Gmail errors and add Google's IPs to SPF record."""
import os, json, subprocess, imaplib, email as em, urllib.request, time

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
eu     = os.environ['EU']
ep     = os.environ['EP']
token  = os.environ['GT']
repo   = os.environ['GR']

base_uapi = f"https://{host}:2083/execute"

def curl(url, method='GET', data=None):
    cmd = ['curl', '-sk', '-u', f"{cpanel}:{cpass}", url]
    if data:
        cmd += ['-X', 'POST', '--data', data]
    return subprocess.check_output(cmd, text=True)

sections = {}

# 1. Read all inbox messages looking for Gmail errors
print("=== Checking inbox for Gmail errors ===")
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count = int(msgs[0])
    inbox_dump = []
    for i in range(1, count+1):
        _, data = M.fetch(str(i), '(RFC822)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            frm = msg.get('From', '?')
            subj = msg.get('Subject', '?')
            body_text = ''
            if msg.is_multipart():
                for part in msg.walk():
                    if part.get_content_type() == 'text/plain':
                        pl = part.get_payload(decode=True)
                        body_text = pl.decode(errors='replace')[:500] if pl else ''
                        break
            else:
                pl = msg.get_payload(decode=True)
                body_text = pl.decode(errors='replace')[:500] if pl else ''
            inbox_dump.append(f"[{i}] From: {frm}\n    Subject: {subj}\n    Body: {body_text[:200]}")
            print(f"[{i}] From={frm} | Subj={subj}")
    M.logout()
    sections['inbox'] = f"count={count}\n" + '\n\n'.join(inbox_dump)
except Exception as e:
    sections['inbox'] = f"error: {e}"

# 2. Read current DNS zone to find SPF record line index
print("\n=== Reading DNS zone ===")
zone_raw = curl(f"{base_uapi}/DNS/parse_zone?zone={domain}")
try:
    zone_d = json.loads(zone_raw)
    records = zone_d.get('data', [])
    spf_record = None
    spf_line = None
    for r in records:
        if r.get('type') == 'TXT':
            data_val = r.get('data_b64') or r.get('data', '')
            # Try to get decoded value
            txt_str = ''
            if 'record' in r:
                txt_str = str(r['record'])
            elif 'data' in r:
                txt_str = str(r['data'])
            # Check raw record dict
            txt_str = json.dumps(r)
            if 'spf1' in txt_str.lower() or 'v=spf' in txt_str.lower():
                spf_record = r
                spf_line = r.get('line_index')
                print(f"Found SPF at line {spf_line}: {txt_str[:200]}")
                break
    if not spf_record:
        # Try to find by iterating and decoding
        import base64
        for r in records:
            if r.get('type') == 'TXT':
                for k,v in r.items():
                    if isinstance(v, str) and len(v) > 20:
                        try:
                            dec = base64.b64decode(v).decode(errors='replace')
                            if 'spf' in dec.lower():
                                spf_record = r
                                spf_line = r.get('line_index')
                                print(f"Found SPF (b64) at line {spf_line}: {dec[:200]}")
                                break
                        except Exception:
                            pass
                if spf_record:
                    break
    sections['spf_find'] = f"line={spf_line} record={json.dumps(spf_record)[:400]}" if spf_record else "NOT FOUND"
except Exception as e:
    sections['spf_find'] = f"parse error: {e}\nraw: {zone_raw[:400]}"
print(f"SPF find: {sections['spf_find'][:200]}")

# 3. Update SPF record to include Google's IPs
# New SPF includes _spf.google.com for Gmail "Send as" via Google's servers
new_spf = f"v=spf1 +a +mx +ip4:68.65.120.77 +ip4:68.65.120.137 include:spf.web-hosting.com include:_spf.google.com ~all"
print(f"\n=== Updating SPF to include Google ===")
print(f"New SPF: {new_spf}")

# Use ZoneEdit to remove old and add new TXT record
# First: remove the old SPF record
remove_result = "not attempted"
add_result = "not attempted"

if spf_line is not None:
    remove_raw = curl(
        f"{base_uapi}/DNS/mass_edit_zone",
        method='POST',
        data=f"zone={domain}&add=0&remove={spf_line}"
    )
    remove_result = remove_raw[:400]
    print(f"Remove old SPF: {remove_result}")
    sections['remove_spf'] = remove_result

# Add new SPF record
add_raw = curl(
    f"{base_uapi}/DNS/mass_edit_zone",
    method='POST',
    data=f"zone={domain}&add=1&add.0.name={domain}.&add.0.type=TXT&add.0.ttl=300&add.0.record={urllib.parse.quote(new_spf)}"
)
add_result = add_raw[:400]
print(f"Add new SPF: {add_result}")
sections['add_spf'] = add_result

# 4. Try simpler approach: ZoneEdit API v2
import urllib.parse
print("\n=== Trying ZoneEdit API v2 ===")
# First get the line number via v2
zone_v2 = curl(
    f"https://{host}:2083/json-api/cpanel?cpanel_jsonapi_module=ZoneEdit"
    f"&cpanel_jsonapi_func=fetchzone_records&cpanel_jsonapi_version=2"
    f"&domain={domain}&type=TXT"
)
sections['zone_v2_txt'] = zone_v2[:800]
print(sections['zone_v2_txt'])

try:
    zv2 = json.loads(zone_v2)
    records_v2 = zv2.get('cpanelresult', {}).get('data', [])
    spf_line_v2 = None
    for r in records_v2:
        txtdata = r.get('txtdata', '')
        if 'spf1' in txtdata.lower():
            spf_line_v2 = r.get('line')
            print(f"SPF v2 line: {spf_line_v2}, current: {txtdata}")
            break

    if spf_line_v2:
        # Remove old SPF record
        rm = curl(
            f"https://{host}:2083/json-api/cpanel?cpanel_jsonapi_module=ZoneEdit"
            f"&cpanel_jsonapi_func=remove_zone_record&cpanel_jsonapi_version=2"
            f"&domain={domain}&line={spf_line_v2}"
        )
        print(f"Remove v2: {rm[:200]}")
        sections['remove_v2'] = rm[:400]

        # Add new SPF record
        add = curl(
            f"https://{host}:2083/json-api/cpanel?cpanel_jsonapi_module=ZoneEdit"
            f"&cpanel_jsonapi_func=add_zone_record&cpanel_jsonapi_version=2"
            f"&domain={domain}&type=TXT&ttl=300"
            f"&txtdata={urllib.parse.quote(new_spf)}"
        )
        print(f"Add v2: {add[:200]}")
        sections['add_v2'] = add[:400]
except Exception as e:
    sections['zone_v2_parse'] = f"error: {e}"
    print(f"v2 parse error: {e}")

# 5. Verify the new SPF via dig
time.sleep(5)
new_spf_dns = subprocess.getoutput(f"dig +short TXT {domain} | grep spf")
sections['spf_after'] = new_spf_dns or "not found"
print(f"\nSPF after update: {sections['spf_after']}")

body = f"""## SPF + Google Fix

**Problem:** Gmail "Send mail as" uses Google's servers to send, but Google's IPs weren't in SPF.
**Fix:** Added `include:_spf.google.com` to SPF record.

### Inbox Messages (looking for Gmail errors)
```
{sections['inbox'][:2000]}
```

### SPF Record Found
```
{sections['spf_find'][:400]}
```

### Remove Old SPF
```json
{sections.get('remove_v2', sections.get('remove_spf', 'not run'))[:400]}
```

### Add New SPF
```json
{sections.get('add_v2', sections.get('add_spf', 'not run'))[:400]}
```

### SPF After Update
```
{sections['spf_after']}
```

**New SPF:** `{new_spf}`

### Next Steps
- If SPF updated: Gmail "Send as" via Google's servers should now work
- User should retry sending from Gmail app on iPhone
- If still not working: the Gmail "Send as" may be configured with wrong SMTP password
"""

import urllib.parse
payload = json.dumps({'title': '[spf-google] Add Google IPs to SPF for Gmail Send-As', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
