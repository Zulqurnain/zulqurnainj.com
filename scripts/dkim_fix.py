#!/usr/bin/env python3
"""Check and enable DKIM for zulqurnainj.com via cPanel."""
import os, json, subprocess, urllib.request

host   = os.environ['H']
cpanel = os.environ['U']
cpass  = os.environ['P']
domain = os.environ['D']
token  = os.environ['GT']
repo   = os.environ['GR']

def curl(url):
    return subprocess.check_output(
        ['curl', '-sk', '-u', f"{cpanel}:{cpass}", url], text=True)

def dig(name, rtype='TXT'):
    return subprocess.getoutput(f"dig +short {rtype} {name}")

base_uapi = f"https://{host}:2083/execute"
base_v2   = f"https://{host}:2083/json-api/cpanel"

sections = {}

# 1. Check DKIM DNS record directly
print("=== DKIM DNS check ===")
dkim_dns = dig(f"default._domainkey.{domain}")
sections['dkim_dns'] = dkim_dns or "NOT FOUND - DKIM not in DNS"
print(sections['dkim_dns'])

# 2. Check SPF via DNS
print("\n=== SPF includes check ===")
spf_main = dig(domain)
spf_webhosting = dig("spf.web-hosting.com")
sections['spf_main'] = spf_main
sections['spf_include'] = spf_webhosting
print(f"Main: {spf_main}")
print(f"spf.web-hosting.com: {spf_webhosting}")

# 3. Check DKIM via cPanel API v2
print("\n=== cPanel API v2: DKIM status ===")
dkim_v2 = curl(
    f"{base_v2}?cpanel_jsonapi_module=Email"
    f"&cpanel_jsonapi_func=get_dkim_record"
    f"&cpanel_jsonapi_version=2&domain={domain}"
)
sections['dkim_v2'] = dkim_v2[:600]
print(sections['dkim_v2'])

# 4. Try Email Deliverability UAPI (correct module name)
print("\n=== UAPI: EmailDeliverability ===")
deliv = curl(f"{base_uapi}/EmailDeliverability/check_records_for_domains?domain={domain}")
sections['deliverability'] = deliv[:1500]
print(sections['deliverability'])

# 5. Try to enable DKIM via UAPI EmailDeliverability
print("\n=== Enable DKIM via EmailDeliverability ===")
enable = curl(
    f"{base_uapi}/EmailDeliverability/enable_dkim?domain={domain}"
)
sections['enable_dkim'] = enable[:600]
print(sections['enable_dkim'])

# 6. Re-check DKIM DNS after enable attempt
import time
print("\nWaiting 10s for DNS propagation...")
time.sleep(10)
dkim_dns_after = dig(f"default._domainkey.{domain}")
sections['dkim_dns_after'] = dkim_dns_after or "still NOT FOUND"
print(f"DKIM DNS after: {sections['dkim_dns_after']}")

# 7. Check for bounce in inbox (from the Gmail test)
print("\n=== Checking for bounce messages in inbox ===")
try:
    import imaplib, email as em
    ep = os.environ.get('EP', '')
    eu = os.environ.get('EU', '')
    if ep and eu:
        M = imaplib.IMAP4_SSL(host, 993)
        M.login(eu, ep)
        _, msgs = M.select('INBOX')
        count = int(msgs[0])
        bounce_info = []
        # Check last 5 messages for bounces
        for i in range(max(1, count-4), count+1):
            _, data = M.fetch(str(i), '(RFC822.HEADER)')
            if data and isinstance(data[0], tuple):
                msg = em.message_from_bytes(data[0][1])
                subj = msg.get('Subject', '?')
                frm = msg.get('From', '?')
                bounce_info.append(f"  [{i}] From: {frm} | Subject: {subj}")
        M.logout()
        sections['inbox_recent'] = f"count={count}\n" + '\n'.join(bounce_info)
    else:
        sections['inbox_recent'] = "no credentials"
except Exception as e:
    sections['inbox_recent'] = f"error: {e}"
print(sections['inbox_recent'])

# Parse deliverability check
try:
    deliv_d = json.loads(sections['deliverability'])
    deliv_data = deliv_d.get('data', [])
    if deliv_data:
        for item in (deliv_data if isinstance(deliv_data, list) else [deliv_data]):
            print(f"Deliverability check: {json.dumps(item, indent=2)[:500]}")
except Exception:
    pass

body = f"""## DKIM Fix + Outbound Diagnosis

Domain: `{domain}`

### DKIM DNS Record (default._domainkey.{domain})
```
{sections['dkim_dns']}
```

### SPF Records
**Main SPF:**
```
{sections['spf_main']}
```
**spf.web-hosting.com includes:**
```
{sections['spf_include']}
```

### Email Deliverability Check (UAPI)
```json
{sections['deliverability']}
```

### Enable DKIM Result
```json
{sections['enable_dkim']}
```

### DKIM DNS After Enable Attempt
```
{sections['dkim_dns_after']}
```

### Recent Inbox Messages (bounce check)
```
{sections['inbox_recent']}
```

### cPanel API v2 DKIM record
```json
{sections['dkim_v2']}
```
"""

payload = json.dumps({'title': '[dkim-fix] DKIM check + enable attempt', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
