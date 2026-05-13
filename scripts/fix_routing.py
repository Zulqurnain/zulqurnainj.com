#!/usr/bin/env python3
import os, json, subprocess, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

def curl_get(url):
    return subprocess.check_output(
        ['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

def curl_post(url, **data):
    args = ['curl', '-sk', '-u', f"{cpanel}:{cpass}", '-X', 'POST', url]
    for k, v in data.items():
        args += ['--data-urlencode', f"{k}={v}"]
    return subprocess.check_output(args, text=True)

results = {}

# 1. API v2 getmxcheck (check current state)
base = f"https://{host}:2083/json-api/cpanel"
results['v2_getmxcheck'] = curl_get(
    f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck"
    f"&cpanel_jsonapi_version=2&domain={domain}"
)

# 2. API v2 setmxcheck to local
results['v2_setmxcheck_local'] = curl_get(
    f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=setmxcheck"
    f"&cpanel_jsonapi_version=2&domain={domain}&mxcheck=local"
)

# 3. Verify
results['v2_getmxcheck_after'] = curl_get(
    f"{base}?cpanel_jsonapi_module=Email&cpanel_jsonapi_func=getmxcheck"
    f"&cpanel_jsonapi_version=2&domain={domain}"
)

# 4. UAPI set_always_accept with 0 then 1 to reset
results['uapi_accept_0'] = curl_post(
    f"https://{host}:2083/execute/Email/set_always_accept",
    domain=domain, value='0'
)
results['uapi_accept_1'] = curl_post(
    f"https://{host}:2083/execute/Email/set_always_accept",
    domain=domain, value='1'
)

# Print all
for k, v in results.items():
    print(f"--- {k} ---")
    print(v[:300])
    print()

# Build issue body
sections = []
for k, v in results.items():
    sections.append(f"### {k}\n```\n{v[:400]}\n```")
body = "## Fix Email Routing Results\n\n" + "\n\n".join(sections)

payload = json.dumps({
    'title': '[fix-routing] API v2 setmxcheck results',
    'body': body[:60000]
}).encode()

req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    }
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {d['html_url']}")
