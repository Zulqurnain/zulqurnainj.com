#!/usr/bin/env python3
"""Add Google Postmaster Tools verification TXT record."""
import os, json, subprocess, urllib.parse, time, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

base_v2 = f"https://{host}:2083/json-api/cpanel"

def curl(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

txt_value = "google-site-verification=E9mUfadeeeWGT_c7zGloZ9OrWsBDLfqtabxo436Suj4"
encoded = urllib.parse.quote(txt_value, safe='')

print(f"Adding TXT: {txt_value}")

result = curl(
    f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
    f"&cpanel_jsonapi_func=add_zone_record"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}"
    f"&name={domain}."
    f"&type=TXT"
    f"&ttl=300"
    f"&txtdata={encoded}"
)
print(f"Result: {result[:300]}")

time.sleep(5)

# Verify it's in the zone
verify = curl(
    f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
    f"&cpanel_jsonapi_func=fetchzone_records"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}&type=TXT"
)
d = json.loads(verify)
records = d.get('cpanelresult', {}).get('data', [])
found = any('google-site-verification' in r.get('txtdata', '') for r in records)
print(f"Verified in zone: {found}")

# Also check public DNS
pub = subprocess.getoutput(f"dig +short TXT {domain}")
google_pub = any('google-site-verification' in line for line in pub.split('\n'))
print(f"In public DNS: {google_pub}")
print(f"All TXT records: {pub}")

status = "ADDED" if found else "FAILED"

body = f"""## Google Postmaster Tools: TXT Record {status}

**TXT value:** `{txt_value}`

**Add result:** `{result[:200]}`

**In zone:** {found}
**In public DNS:** {google_pub}

```
{pub}
```

{'✅ Go to postmaster.google.com and click **Verify** — DNS is ready.' if found else '❌ Record may not have been added, check the result above.'}
"""

payload = json.dumps({'title': f'[postmaster] {status}: Google verification TXT added', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {status}")
