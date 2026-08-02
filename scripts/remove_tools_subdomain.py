#!/usr/bin/env python3
"""Remove the tools.zulqurnainj.com subdomain from cPanel -- undoes exactly what
scripts/add_tools_cname.py (now deleted) created via SubDomain::addsubdomain. The
subdomain never got a real app deployed to it and DNS for it was pointing at an
unrelated VPS with nothing configured for the hostname, so it's being retired."""
import os, json, subprocess, time, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

base_uapi = f"https://{host}:2083/execute"

def curl(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

print(f"=== Removing tools.{domain} subdomain from cPanel ===")

result = curl(
    f"{base_uapi}/SubDomain/delsubdomain"
    f"?domain=tools.{domain}"
)
print(f"Removal result: {result[:400]}")

time.sleep(3)

pub = subprocess.getoutput(f"dig +short A tools.{domain}")
print(f"Now resolves to: {pub or '(nothing -- removed)'}")

status = "REMOVED" if ('"status":1' in result or '"errors":null' in result) else "CHECK"

body = f"""## tools.{domain} Subdomain {status}

Removed via cPanel SubDomain::delsubdomain -- this subdomain never had a real app
deployed to it, and its DNS had drifted to point at an unrelated VPS with nothing
configured for the hostname. Retired at the owner's request.

**Result:** `{result[:300]}`

**DNS now resolves to:** `{pub or '(nothing -- propagating removal, up to 24h)'}`
"""

payload = json.dumps({'title': f'[dns] {status}: tools.{domain} subdomain removed', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {status}")
