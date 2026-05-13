#!/usr/bin/env python3
"""Update SPF record to add include:_spf.google.com using correct ZoneEdit API."""
import os, json, subprocess, urllib.parse, time, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

new_spf = "v=spf1 +a +mx +ip4:68.65.120.77 +ip4:68.65.120.137 include:spf.web-hosting.com include:_spf.google.com ~all"

def curl(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

def curl_post(url, data):
    return subprocess.check_output(
        ['curl', '-sk', '-u', f"{cpanel}:{cpass}", '-X', 'POST', '--data-urlencode', f"@-", url],
        input=data, text=True
    )

base_v2 = f"https://{host}:2083/json-api/cpanel"

sections = {}

# Step 1: Fetch all TXT records
print("=== Fetching TXT records ===")
raw = curl(
    f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
    f"&cpanel_jsonapi_func=fetchzone_records"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}&type=TXT"
)
sections['fetch'] = raw[:1000]
print(raw[:500])

try:
    d = json.loads(raw)
    records = d.get('cpanelresult', {}).get('data', [])
    spf_rec = None
    for r in records:
        txt = r.get('txtdata', '')
        if 'spf1' in txt.lower():
            spf_rec = r
            print(f"Found SPF: line={r.get('line')}, ttl={r.get('ttl')}, data={txt}")
            break
except Exception as e:
    print(f"Parse error: {e}")
    spf_rec = None

sections['spf_found'] = json.dumps(spf_rec) if spf_rec else "NOT FOUND"

# Step 2: Remove old SPF
if spf_rec:
    line = spf_rec.get('line')
    print(f"\n=== Removing old SPF at line {line} ===")
    rm = curl(
        f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
        f"&cpanel_jsonapi_func=remove_zone_record"
        f"&cpanel_jsonapi_version=2"
        f"&domain={domain}&line={line}"
    )
    sections['remove'] = rm[:400]
    print(sections['remove'])
else:
    sections['remove'] = "skipped (not found)"
    print("SPF not found, skipping remove")

# Step 3: Add new SPF (with name= parameter)
print(f"\n=== Adding new SPF ===")
print(f"New: {new_spf}")
encoded_spf = urllib.parse.quote(new_spf, safe='')
add_url = (
    f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
    f"&cpanel_jsonapi_func=add_zone_record"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}"
    f"&name={domain}."
    f"&type=TXT"
    f"&ttl=300"
    f"&txtdata={encoded_spf}"
)
add = curl(add_url)
sections['add'] = add[:400]
print(sections['add'])

# Step 4: Verify via fetchzone_records
time.sleep(3)
print("\n=== Verifying new SPF ===")
raw2 = curl(
    f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
    f"&cpanel_jsonapi_func=fetchzone_records"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}&type=TXT"
)
try:
    d2 = json.loads(raw2)
    recs2 = d2.get('cpanelresult', {}).get('data', [])
    txt_records = [r.get('txtdata','') for r in recs2]
    google_added = any('_spf.google.com' in t for t in txt_records)
    sections['verify'] = f"google_in_spf={google_added}\nAll TXT records:\n" + '\n'.join(txt_records)
except Exception as e:
    sections['verify'] = f"error: {e}\nraw: {raw2[:300]}"
print(sections['verify'])

# Step 5: Confirm via public DNS
time.sleep(5)
spf_public = subprocess.getoutput(f"dig +short TXT {domain} | grep spf")
sections['public_dns'] = spf_public or "not found"
print(f"\nPublic DNS SPF: {sections['public_dns']}")

body = f"""## SPF Update: Add Google IPs

**New SPF target:** `{new_spf}`

| Step | Result |
|------|--------|
| SPF record found | `{sections['spf_found'][:100]}` |
| Remove old | `{sections['remove'][:100]}` |
| Add new | `{sections['add'][:100]}` |
| Google in SPF (verify) | `{sections['verify'][:100]}` |
| Public DNS after | `{sections['public_dns']}` |

### Add result (full)
```json
{sections['add']}
```

### Verify result
```
{sections['verify']}
```

### Note
If public DNS still shows old SPF, it may take a few minutes to propagate.
Once Google's IPs are in SPF, Gmail "Send mail as" via Google's servers will work.
"""

payload = json.dumps({'title': '[spf-update] Add _spf.google.com to SPF record', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
