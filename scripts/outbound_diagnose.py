#!/usr/bin/env python3
"""Diagnose outbound email issues: SPF, DKIM, Exim queue/logs."""
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

base_uapi = f"https://{host}:2083/execute"
base_v2   = f"https://{host}:2083/json-api/cpanel"

sections = {}

# 1. Check SPF record via DNS
print("=== SPF record ===")
spf = subprocess.getoutput(f"dig +short TXT {domain} | grep spf")
sections['spf'] = spf or "NOT FOUND"
print(sections['spf'])

# 2. Check DKIM status via cPanel UAPI
print("\n=== DKIM status ===")
dkim_raw = curl(f"{base_uapi}/Email/get_domain_dkim?domain={domain}")
sections['dkim'] = dkim_raw[:800]
print(sections['dkim'])

# 3. Check Exim mail queue
print("\n=== Exim mail queue ===")
queue_raw = curl(f"{base_uapi}/Email/get_exim_mailqueue_info")
sections['queue'] = queue_raw[:600]
print(sections['queue'])

# 4. Check Exim send logs (last 50 lines)
print("\n=== Exim mail log (recent) ===")
log_raw = curl(f"{base_uapi}/Email/trace_delivery?sender=me%40{domain}&recipient=&after=0&limit=20")
sections['log_trace'] = log_raw[:1200]
print(sections['log_trace'])

# 5. Check mail delivery stats
print("\n=== Delivery stats ===")
stats_raw = curl(f"{base_uapi}/Email/get_smtp_relay_config")
sections['relay'] = stats_raw[:400]
print(sections['relay'])

# 6. Check if DKIM key exists
print("\n=== DKIM key exists? ===")
dkim_key = curl(f"{base_uapi}/Email/get_dkim_private_key?domain={domain}")
has_key = '"key"' in dkim_key and 'BEGIN' in dkim_key
sections['dkim_key'] = f"has_private_key={has_key} response={dkim_key[:300]}"
print(sections['dkim_key'])

# 7. Check current DNS zone for SPF/DKIM records
print("\n=== DNS zone records (SPF/DKIM) ===")
zone_raw = curl(f"{base_uapi}/DNS/parse_zone?zone={domain}")
try:
    zone_d = json.loads(zone_raw)
    records = zone_d.get('data', {}).get('records', [])
    txt_records = [r for r in records if r.get('type') == 'TXT']
    zone_txt = '\n'.join(f"  {r.get('name','?')} TXT {r.get('data','?')}" for r in txt_records)
except Exception as e:
    zone_txt = f"parse error: {e}\nraw: {zone_raw[:400]}"
sections['dns_txt'] = zone_txt or "none found"
print(sections['dns_txt'])

body = f"""## Outbound Email Diagnosis

Domain: `{domain}`

### 1. SPF Record (public DNS)
```
{sections['spf']}
```

### 2. DKIM Status (cPanel)
```json
{sections['dkim']}
```

### 3. DKIM Private Key Exists?
```
{sections['dkim_key']}
```

### 4. Exim Mail Queue
```json
{sections['queue']}
```

### 5. Delivery Trace
```json
{sections['log_trace']}
```

### 6. SMTP Relay Config
```json
{sections['relay']}
```

### 7. DNS Zone TXT Records
```
{sections['dns_txt']}
```

### What to check:
- SPF should include server385's IP or `include:jellyfish.systems`
- DKIM should be enabled and key present
- If Exim queue has stuck messages, they failed delivery
"""

payload = json.dumps({'title': '[outbound-diagnose] SPF/DKIM/Exim check', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
