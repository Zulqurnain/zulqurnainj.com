#!/usr/bin/env python3
"""Remove duplicate old DMARC record, keep only the new one with rua/ruf."""
import os, json, subprocess, time, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

base_v2 = f"https://{host}:2083/json-api/cpanel"

def curl(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

# Fetch ALL zone records (not filtered by type) to find both DMARC records
raw = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone&cpanel_jsonapi_version=2&domain={domain}")
d = json.loads(raw)
records = d.get('cpanelresult', {}).get('data', [{}])[0].get('record', [])

print(f"Total zone records: {len(records)}")
dmarc_records = []
for r in records:
    name = r.get('name', '')
    rtype = r.get('type', '')
    txtdata = r.get('txtdata', '')
    if '_dmarc' in name.lower() and rtype == 'TXT':
        dmarc_records.append(r)
        print(f"DMARC record: line={r.get('line')} name={name} data={txtdata[:100]}")

print(f"\nFound {len(dmarc_records)} DMARC records")

# The old one has no rua= in it, the new one has rua=
old_dmarc = [r for r in dmarc_records if 'rua=' not in r.get('txtdata','')]
new_dmarc = [r for r in dmarc_records if 'rua=' in r.get('txtdata','')]

print(f"Old DMARC (to remove): {len(old_dmarc)}")
print(f"New DMARC (to keep): {len(new_dmarc)}")

removed = []
for r in old_dmarc:
    line = r.get('line')
    rm = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=remove_zone_record&cpanel_jsonapi_version=2&domain={domain}&line={line}")
    print(f"Removed line {line}: {rm[:100]}")
    removed.append(line)

# Verify
time.sleep(5)
raw2 = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone&cpanel_jsonapi_version=2&domain={domain}")
d2 = json.loads(raw2)
recs2 = d2.get('cpanelresult', {}).get('data', [{}])[0].get('record', [])
remaining_dmarc = [r for r in recs2 if '_dmarc' in r.get('name','').lower() and r.get('type') == 'TXT']
print(f"\nRemaining DMARC records: {len(remaining_dmarc)}")
for r in remaining_dmarc:
    print(f"  {r.get('txtdata','')[:120]}")

public = subprocess.getoutput(f"dig +short TXT _dmarc.{domain}")
print(f"Public DNS: {public}")

body = f"""## DMARC Dedup Fix

Removed {len(old_dmarc)} old DMARC record(s), kept the new one with rua+ruf.

**Remaining in zone:** {len(remaining_dmarc)} records
**Current DMARC:** `{remaining_dmarc[0].get('txtdata','?') if remaining_dmarc else 'none'}`
**Public DNS:** `{public}`
"""

payload = json.dumps({'title': '[dmarc-dedup] Removed old DMARC duplicate', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}")
