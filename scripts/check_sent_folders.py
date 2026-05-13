#!/usr/bin/env python3
"""Check all mailbox folders for sent messages and verify SPF propagation."""
import os, json, imaplib, email as em, subprocess, urllib.request, time

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']
domain = os.environ['D']

sections = {}

# 1. List ALL folders in the mailbox
print("=== Listing all IMAP folders ===")
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, folder_list = M.list()
    folders = []
    for f in folder_list:
        if f:
            parts = f.decode(errors='replace').split('"."')
            fname = parts[-1].strip().strip('"') if parts else str(f)
            folders.append(fname)
    sections['folders'] = '\n'.join(folders)
    print(sections['folders'])

    # 2. Check each folder for messages
    folder_summary = []
    for fname in folders:
        try:
            status, msgs = M.select(f'"{fname}"', readonly=True)
            if status == 'OK':
                count = int(msgs[0])
                if count > 0:
                    # Get subject of last message
                    _, data = M.fetch(str(count), '(RFC822.HEADER)')
                    subj = '?'
                    if data and isinstance(data[0], tuple):
                        msg = em.message_from_bytes(data[0][1])
                        subj = msg.get('Subject', '?')
                    folder_summary.append(f"  {fname}: {count} messages | Latest: {subj}")
                else:
                    folder_summary.append(f"  {fname}: 0 messages")
        except Exception as e:
            folder_summary.append(f"  {fname}: error: {e}")

    sections['folder_summary'] = '\n'.join(folder_summary)
    print("\n=== Folder message counts ===")
    print(sections['folder_summary'])
    M.logout()
except Exception as e:
    sections['folders'] = f"error: {e}"
    sections['folder_summary'] = f"error: {e}"

# 3. Check public DNS for updated SPF
print("\n=== SPF public DNS check ===")
# Multiple DNS resolvers to check propagation
for resolver in ['8.8.8.8', '1.1.1.1', '9.9.9.9']:
    result = subprocess.getoutput(f"dig @{resolver} +short TXT {domain} | grep spf")
    print(f"DNS {resolver}: {result}")
sections['spf_dns'] = subprocess.getoutput(f"dig +short TXT {domain}")
print(f"\nAll TXT records:\n{sections['spf_dns']}")

# 4. Check if there are duplicate SPF records (invalid)
spf_lines = [l for l in sections['spf_dns'].split('\n') if 'v=spf1' in l.lower()]
sections['spf_count'] = f"SPF records found: {len(spf_lines)}\n" + '\n'.join(spf_lines)
print(f"\n{sections['spf_count']}")

body = f"""## Sent Folder + SPF Propagation Check

### All Mailbox Folders
```
{sections['folders']}
```

### Folder Message Counts
```
{sections['folder_summary']}
```

### SPF DNS Propagation (Google 8.8.8.8 | Cloudflare 1.1.1.1 | Quad9 9.9.9.9)
```
{sections['spf_dns']}
```

### SPF Record Count (must be exactly 1)
```
{sections['spf_count']}
```

### What to look for
- **Sent folder has messages** → Gmail app IS sending via Namecheap SMTP, but storing sent mail in IMAP Sent (not Gmail Sent)
- **Sent folder is empty** → Gmail app failed to send (wrong SMTP config or using Gmail's servers without proper auth)
- **2 SPF records** → Invalid, need to deduplicate
- **google_in_spf and propagated** → Gmail "Send as" via Google's servers should now work
"""

payload = json.dumps({'title': '[sent-check] IMAP Sent folder + SPF propagation', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
