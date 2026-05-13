#!/usr/bin/env python3
"""Add CNAME record: tools.zulqurnainj.com → cname.vercel-dns.com (for Vercel deployment)."""
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

def fetch_full():
    raw = curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=fetchzone&cpanel_jsonapi_version=2&domain={domain}")
    return json.loads(raw).get('cpanelresult', {}).get('data', [{}])[0].get('record', [])

def remove_line(line):
    return curl(f"{base_v2}?cpanel_jsonapi_module=ZoneEdit&cpanel_jsonapi_func=remove_zone_record&cpanel_jsonapi_version=2&domain={domain}&line={line}")

def add_cname(name, cname_target, ttl=300):
    return curl(
        f"{base_v2}?cpanel_jsonapi_module=ZoneEdit"
        f"&cpanel_jsonapi_func=add_zone_record"
        f"&cpanel_jsonapi_version=2"
        f"&domain={domain}"
        f"&name={name}"
        f"&type=CNAME"
        f"&ttl={ttl}"
        f"&cname={urllib.parse.quote(cname_target, safe='')}"
    )

print("=== Adding tools.zulqurnainj.com CNAME → Vercel ===")

# Remove any existing CNAME for tools subdomain
records = fetch_full()
existing = [r for r in records if 'tools' in r.get('name', '').lower() and r.get('type') == 'CNAME']
for r in existing:
    print(f"Removing existing CNAME at line {r.get('line')}: {r.get('name')} → {r.get('cname', '')}")
    remove_line(r.get('line'))

result = add_cname(f"tools.{domain}.", "cname.vercel-dns.com.")
print(f"Add result: {result[:300]}")

time.sleep(3)

# Verify in zone
records_after = fetch_full()
found = any('tools' in r.get('name', '').lower() and r.get('type') == 'CNAME' for r in records_after)
print(f"In zone: {found}")

# Public DNS check
pub = subprocess.getoutput(f"dig +short CNAME tools.{domain}")
print(f"Public CNAME: {pub or 'propagating...'}")

status = "ADDED" if found else "FAILED"

body = f"""## tools.{domain} CNAME {status}

**Record:** `tools.{domain} CNAME cname.vercel-dns.com.`

**Add result:** `{result[:200]}`

**In zone:** {found}
**Public DNS:** `{pub or 'propagating (up to 24h)'}`

{'✅ CNAME is live. Add `tools.' + domain + '` as a custom domain in your Vercel project.' if found else '❌ CNAME may not have been added — check result above.'}

### Next Steps
1. Deploy the `apply-for-job-tool` repo to Vercel
2. In Vercel project settings → Domains → add `tools.{domain}`
3. Vercel will verify the CNAME automatically
"""

payload = json.dumps({'title': f'[dns] {status}: tools.{domain} CNAME → Vercel', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {status}")
