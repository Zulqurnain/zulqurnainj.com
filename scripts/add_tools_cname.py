#!/usr/bin/env python3
"""Create tools.zulqurnainj.com subdomain in cPanel (same Namecheap server — no external CNAME needed)."""
import os, json, subprocess, urllib.parse, time, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

base_v2   = f"https://{host}:2083/json-api/cpanel"
base_uapi = f"https://{host}:2083/execute"

def curl(url):
    return subprocess.check_output(['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

print("=== Creating tools.zulqurnainj.com subdomain in cPanel ===")

# Create the subdomain (points to /home/zulqhhkj/tools.zulqurnainj.com by default)
result = curl(
    f"{base_uapi}/SubDomain/addsubdomain"
    f"?domain=tools"
    f"&rootdomain={domain}"
    f"&dir=tools.{domain}"
    f"&disallowdot=0"
)
print(f"Subdomain result: {result[:300]}")

time.sleep(3)

# Verify it exists in DNS
pub = subprocess.getoutput(f"dig +short A tools.{domain}")
print(f"Resolves to: {pub or 'propagating...'}")

status = "CREATED" if ('"status":1' in result or '"errors":null' in result or '"error":null' in result) else "CHECK"

body = f"""## tools.{domain} Subdomain {status}

Subdomain created on cPanel (same Namecheap server — no external CNAME needed).

**Result:** `{result[:200]}`

**DNS resolves to:** `{pub or 'propagating (up to 24h)'}`

### Next Steps
1. In cPanel → Setup Node.js App: create app at `tools.{domain}`, startup file `.next/standalone/server.js`
2. Build the `apply-for-job-tool` repo locally: `npm run build`
3. Upload `.next/standalone/` to `/home/zulqhhkj/tools.{domain}/` via SFTP (port 21098)
4. Create CV storage dir: `mkdir -p /home/zulqhhkj/tool_cvs && chmod 700 /home/zulqhhkj/tool_cvs`
5. Set all environment variables in the Node.js App panel
6. Restart the Node.js App
"""

payload = json.dumps({'title': f'[dns] {status}: tools.{domain} subdomain on cPanel', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {status}")
