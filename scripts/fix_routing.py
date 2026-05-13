#!/usr/bin/env python3
"""Force email routing to LOCAL using cPanel API v2 (setmxcheck)."""
import os, json, subprocess, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

def curl(*args):
    out = subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}"] + list(args), text=True)
    print(out[:600])
    return out

lines = []

# Try cPanel API v2 setmxcheck (older API, works on more server versions)
print("\n=== API v2: setmxcheck local ===")
r1 = curl(
    f"https://{host}:2083/json-api/cpanel"
    f"?cpanel_jsonapi_module=Email"
    f"&cpanel_jsonapi_func=setmxcheck"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}"
    f"&mxcheck=local"
)
lines.append(f"API v2 setmxcheck local:\n{r1[:500]}")

# Also try UAPI set_always_accept with value=local
print("\n=== UAPI set_always_accept value=local ===")
r2 = curl('-X', 'POST',
    f"https://{host}:2083/execute/Email/set_always_accept",
    '--data-urlencode', f"domain={domain}",
    '--data-urlencode', "value=local"
)
lines.append(f"set_always_accept(local):\n{r2[:500]}")

# Try WHM API on port 2086 (no SSL) in case cPanel user has partial WHM access
print("\n=== WHM setemailrouting ===")
r3 = curl('-X', 'POST',
    f"https://{host}:2087/json-api/setemailrouting",
    '--data-urlencode', f"domain={domain}",
    '--data-urlencode', "mxcheck=local"
)
lines.append(f"WHM setemailrouting:\n{r3[:300]}")

# Check the API v2 getmxcheck result
print("\n=== API v2: getmxcheck ===")
r4 = curl(
    f"https://{host}:2083/json-api/cpanel"
    f"?cpanel_jsonapi_module=Email"
    f"&cpanel_jsonapi_func=getmxcheck"
    f"&cpanel_jsonapi_version=2"
    f"&domain={domain}"
)
lines.append(f"API v2 getmxcheck:\n{r4[:500]}")

# Check UAPI list_pops to confirm account exists
print("\n=== UAPI list_pops ===")
r5 = curl(f"https://{host}:2083/execute/Email/list_pops?domain={domain}")
lines.append(f"list_pops:\n{r5[:500]}")

body = "## Email Routing Fix Attempt\n\n" + "\n\n".join(
    f"### {l.split(chr(10))[0]}\n```\n{chr(10).join(l.split(chr(10))[1:])}\n```"
    for l in lines
)

payload = json.dumps({'title': '[fix-routing] API v2 setmxcheck attempt', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}: {d['html_url']}")
