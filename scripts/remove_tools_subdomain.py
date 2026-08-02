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

def curl(url, extra_headers=None):
    cmd = ['curl', '-sk', '-u', f"{cpanel}:{cpass}", '-w', '\\nHTTP_STATUS:%{http_code}']
    for h in (extra_headers or []):
        cmd += ['-H', h]
    cmd += [url]
    return subprocess.check_output(cmd, text=True)

print(f"=== Removing tools.{domain} subdomain from cPanel ===")

attempts = [
    ("UAPI (FQDN, with Accept header)",
     f"https://{host}:2083/execute/SubDomain/delsubdomain?domain=tools.{domain}",
     ['Accept: application/json']),
    ("JSON-API v2 (split domain/rootdomain, matching how addsubdomain was originally called)",
     f"https://{host}:2083/json-api/cpanel?cpanel_jsonapi_user={cpanel}&cpanel_jsonapi_module=SubDomain&cpanel_jsonapi_func=delsubdomain&domain=tools&domain2={domain}&cpanel_jsonapi_apiversion=2",
     ['Accept: application/json']),
]

result = None
succeeded_via = None
for label, url, headers in attempts:
    print(f"\n--- Attempt: {label} ---")
    try:
        out = curl(url, headers)
    except subprocess.CalledProcessError as e:
        out = f"curl failed: {e}"
    print(out[:600])
    if '"status":1' in out or '"errors":null' in out or '"result":1' in out:
        result = out
        succeeded_via = label
        break
    result = out  # keep the last attempt's output for the issue body either way

time.sleep(3)

pub = subprocess.getoutput(f"dig +short A tools.{domain}")
print(f"\nNow resolves to: {pub or '(nothing -- removed)'}")

status = "REMOVED" if succeeded_via else "CHECK"

body = f"""## tools.{domain} Subdomain {status}

Attempted removal via cPanel SubDomain::delsubdomain -- this subdomain never had a
real app deployed to it, and its DNS had drifted to point at an unrelated VPS with
nothing configured for the hostname. Retired at the owner's request.

**Succeeded via:** `{succeeded_via or "none of the attempts succeeded -- see raw output below"}`

**Last result:**
```
{result[:1500]}
```

**DNS now resolves to:** `{pub or '(nothing -- propagating removal, up to 24h)'}`
"""

payload = json.dumps({'title': f'[dns] {status}: tools.{domain} subdomain removal', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {status}")
