#!/usr/bin/env python3
"""Clean up SPF: remove +a and +mx which add useless DNS lookups."""
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

# Cleaner SPF: remove +a (GitHub Pages IPs = irrelevant) and +mx (jellyfish.systems inbound = irrelevant)
# Keep explicit server IPs + spf.web-hosting.com (covers all Namecheap outbound) + Google
new_spf = "v=spf1 ip4:68.65.120.77 ip4:68.65.120.137 ip4:68.65.120.156 include:spf.web-hosting.com include:_spf.google.com ~all"

# Fetch TXT records to find current SPF line
raw = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone_records&cpanel_jsonapi_version=2&domain={domain}&type=TXT")
d = json.loads(raw)
records = d.get('cpanelresult', {}).get('data', [])

spf_line = None
current_spf = None
for r in records:
    txt = r.get('txtdata', '')
    if 'v=spf1' in txt:
        spf_line = r.get('line')
        current_spf = txt
        print(f"Current SPF (line {spf_line}): {txt}")
        break

if not spf_line:
    print("SPF not found via fetchzone_records, trying full zone...")
    raw2 = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone&cpanel_jsonapi_version=2&domain={domain}")
    d2 = json.loads(raw2)
    for r in d2.get('cpanelresult', {}).get('data', [{}])[0].get('record', []):
        if r.get('type') == 'TXT' and 'v=spf1' in r.get('txtdata', ''):
            spf_line = r.get('line')
            current_spf = r.get('txtdata')
            print(f"Found SPF (line {spf_line}): {current_spf}")
            break

# Remove old SPF
if spf_line:
    rm = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=remove_zone_record&cpanel_jsonapi_version=2&domain={domain}&line={spf_line}")
    print(f"Remove: {rm[:100]}")

# Add clean SPF
encoded = urllib.parse.quote(new_spf, safe='')
add = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=add_zone_record&cpanel_jsonapi_version=2&domain={domain}&name={domain}.&type=TXT&ttl=300&txtdata={encoded}")
print(f"Add: {add[:200]}")

time.sleep(5)
# Verify
raw3 = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone_records&cpanel_jsonapi_version=2&domain={domain}&type=TXT")
d3 = json.loads(raw3)
new_record = next((r.get('txtdata') for r in d3.get('cpanelresult', {}).get('data', []) if 'v=spf1' in r.get('txtdata', '')), None)
print(f"New SPF in zone: {new_record}")

pub = subprocess.getoutput(f"dig +short TXT {domain} | grep spf")
print(f"Public DNS: {pub}")

body = f"""## SPF Cleanup

**Before:** `{current_spf}`
**After:** `{new_spf}`

**Changes:**
- Removed `+a` — root A records point to GitHub Pages (185.199.x.x), not mail servers
- Removed `+mx` — MX records point to jellyfish.systems (inbound only), not outbound
- Added `ip4:68.65.120.156` — covers the mail.zulqurnainj.com server IP
- Saves ~5 DNS lookups, well under the 10-lookup SPF limit

**In zone:** `{new_record}`
**Public DNS:** `{pub}`
"""

payload = json.dumps({'title': '[spf-clean] Removed +a and +mx from SPF', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}")
