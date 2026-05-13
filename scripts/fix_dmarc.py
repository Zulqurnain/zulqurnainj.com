#!/usr/bin/env python3
"""Strengthen DMARC record: add rua reporting so Gmail sees active monitoring."""
import os, json, subprocess, urllib.parse, time, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
eu     = os.environ['EU']
token  = os.environ['GT']
repo   = os.environ['GR']

base_v2 = f"https://{host}:2083/json-api/cpanel"

def curl(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

# New DMARC: add rua (aggregate reports), ruf (forensic), sp (subdomain policy), fo=1
new_dmarc = f"v=DMARC1; p=none; rua=mailto:{eu}; ruf=mailto:{eu}; fo=1; sp=none; adkim=r; aspf=r;"

# Step 1: Find existing DMARC record
raw = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone_records&cpanel_jsonapi_version=2&domain={domain}&type=TXT")
d = json.loads(raw)
records = d.get('cpanelresult', {}).get('data', [])

dmarc_line = None
for r in records:
    txt = r.get('txtdata', '')
    if 'dmarc1' in txt.lower() or 'v=dmarc' in txt.lower():
        dmarc_line = r.get('line')
        print(f"Found DMARC at line {dmarc_line}: {txt}")
        break

# Step 2: Remove old DMARC
if dmarc_line:
    rm = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=remove_zone_record&cpanel_jsonapi_version=2&domain={domain}&line={dmarc_line}")
    print(f"Removed old DMARC: {rm[:100]}")

# Step 3: Add new DMARC (at _dmarc subdomain)
encoded = urllib.parse.quote(new_dmarc, safe='')
add = curl(
    f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=add_zone_record"
    f"&cpanel_jsonapi_version=2&domain={domain}&name=_dmarc.{domain}."
    f"&type=TXT&ttl=300&txtdata={encoded}"
)
print(f"Add new DMARC: {add[:200]}")

# Step 4: Verify
time.sleep(5)
raw2 = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone_records&cpanel_jsonapi_version=2&domain={domain}&type=TXT")
d2 = json.loads(raw2)
recs2 = d2.get('cpanelresult', {}).get('data', [])
dmarc_new = next((r.get('txtdata') for r in recs2 if 'dmarc' in r.get('txtdata','').lower()), None)
print(f"DMARC after: {dmarc_new}")

# Public DNS check
dmarc_pub = subprocess.getoutput(f"dig +short TXT _dmarc.{domain}")
print(f"Public DNS: {dmarc_pub}")

body = f"""## DMARC Update

**New DMARC:** `{new_dmarc}`

| Field | Value |
|-------|-------|
| p=none | No enforcement (safe for now) |
| rua= | Aggregate reports → me@zulqurnainj.com |
| ruf= | Forensic reports → me@zulqurnainj.com |
| fo=1 | Report on any SPF or DKIM failure |

**Internal zone:** `{dmarc_new}`
**Public DNS:** `{dmarc_pub}`

Aggregate reports from Gmail will arrive in your inbox and show Google
that this domain is actively monitoring authentication — this improves trust score.
"""

payload = json.dumps({'title': '[dmarc] Updated with rua+ruf reporting', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}")
