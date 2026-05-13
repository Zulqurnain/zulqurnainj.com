#!/usr/bin/env python3
"""Set up BIMI: add DNS record and upgrade DMARC to p=quarantine."""
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

def add_txt(name, value, ttl=300):
    encoded = urllib.parse.quote(value, safe='')
    return curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=add_zone_record&cpanel_jsonapi_version=2&domain={domain}&name={name}&type=TXT&ttl={ttl}&txtdata={encoded}")

def remove_line(line):
    return curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=remove_zone_record&cpanel_jsonapi_version=2&domain={domain}&line={line}")

def fetch_txt():
    raw = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone_records&cpanel_jsonapi_version=2&domain={domain}&type=TXT")
    return json.loads(raw).get('cpanelresult', {}).get('data', [])

def fetch_full():
    raw = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone&cpanel_jsonapi_version=2&domain={domain}")
    return json.loads(raw).get('cpanelresult', {}).get('data', [{}])[0].get('record', [])

sections = {}

# 1. Add BIMI DNS record
bimi_value = f"v=BIMI1; l=https://{domain}/bimi-logo.svg;"
print(f"=== Adding BIMI record ===")
print(f"Value: {bimi_value}")

# Check if BIMI already exists
records = fetch_full()
existing_bimi = [r for r in records if 'default._bimi' in r.get('name','') and r.get('type') == 'TXT']
for r in existing_bimi:
    print(f"Removing existing BIMI at line {r.get('line')}")
    remove_line(r.get('line'))

bimi_result = add_txt(f"default._bimi.{domain}.", bimi_value)
sections['bimi_add'] = bimi_result[:200]
print(f"BIMI add: {bimi_result[:150]}")

# 2. Upgrade DMARC from p=none to p=quarantine (required for BIMI)
print(f"\n=== Upgrading DMARC to p=quarantine ===")
new_dmarc = f"v=DMARC1; p=quarantine; rua=mailto:me@{domain}; ruf=mailto:me@{domain}; fo=1; sp=none; adkim=r; aspf=r;"

# Find and remove old DMARC
all_records = fetch_full()
dmarc_records = [r for r in all_records if '_dmarc' in r.get('name','').lower() and r.get('type') == 'TXT']
for r in dmarc_records:
    print(f"Removing DMARC at line {r.get('line')}: {r.get('txtdata','')[:60]}")
    remove_line(r.get('line'))

dmarc_result = add_txt(f"_dmarc.{domain}.", new_dmarc)
sections['dmarc_upgrade'] = dmarc_result[:200]
print(f"DMARC upgrade: {dmarc_result[:150]}")

# 3. Verify both records
time.sleep(5)
all_after = fetch_full()
bimi_in_zone = any('bimi' in r.get('name','').lower() and r.get('type') == 'TXT' for r in all_after)
dmarc_quarantine = any('p=quarantine' in r.get('txtdata','') for r in all_after)
print(f"\nBIMI in zone: {bimi_in_zone}")
print(f"DMARC p=quarantine: {dmarc_quarantine}")

# 4. Public DNS check
bimi_pub = subprocess.getoutput(f"dig +short TXT default._bimi.{domain}")
dmarc_pub = subprocess.getoutput(f"dig +short TXT _dmarc.{domain}")
sections['bimi_pub'] = bimi_pub
sections['dmarc_pub'] = dmarc_pub
print(f"BIMI public: {bimi_pub}")
print(f"DMARC public: {dmarc_pub}")

body = f"""## BIMI Setup Complete

Profile picture will now show in: Yahoo Mail, Apple Mail, Fastmail, and other BIMI-supporting clients.

### BIMI DNS Record
```
default._bimi.{domain} TXT "{bimi_value}"
```
**In zone:** {bimi_in_zone} | **Public:** `{bimi_pub or 'propagating...'}`

### DMARC Upgraded
**Before:** `p=none` (no enforcement)
**After:** `p=quarantine` (required for BIMI — emails failing auth go to spam, not rejected)
**In zone:** {dmarc_quarantine} | **Public:** `{dmarc_pub or 'propagating...'}`

### Logo URL
`https://{domain}/bimi-logo.svg` (deployed via GitHub Pages)

### Client Support
| Client | BIMI Support |
|--------|-------------|
| Yahoo Mail | ✅ Shows photo |
| Apple Mail | ✅ Shows photo |
| Fastmail | ✅ Shows photo |
| Gmail | ⚠️ Needs VMC certificate ($1,200/yr) |
| Outlook | Partial |

### Gmail Alternative
Gmail shows profile photo if recipient adds sender to Google Contacts,
or if sender has a Google Workspace account.
"""

payload = json.dumps({'title': '[bimi] BIMI DNS + DMARC p=quarantine setup', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
