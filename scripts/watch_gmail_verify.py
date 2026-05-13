#!/usr/bin/env python3
"""Watch inbox for Gmail 'Send mail as' verification email and extract the code/link."""
import os, json, imaplib, email as em, re, time, urllib.request

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']

def get_inbox_messages():
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count = int(msgs[0])
    messages = []
    for i in range(1, count+1):
        _, data = M.fetch(str(i), '(RFC822)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            frm = msg.get('From', '')
            subj = msg.get('Subject', '')
            body = ''
            if msg.is_multipart():
                for part in msg.walk():
                    ct = part.get_content_type()
                    if ct in ('text/plain', 'text/html'):
                        pl = part.get_payload(decode=True)
                        if pl:
                            body += pl.decode(errors='replace')
            else:
                pl = msg.get_payload(decode=True)
                body = pl.decode(errors='replace') if pl else ''
            messages.append({'num': i, 'from': frm, 'subject': subj, 'body': body})
    M.logout()
    return count, messages

# Check inbox every 30s for up to 10 minutes
print("Watching for Gmail verification email for up to 10 minutes...")
print("(After starting this, go to Gmail settings and add me@zulqurnainj.com as 'Send mail as')")

initial_count, initial_msgs = get_inbox_messages()
print(f"Starting inbox count: {initial_count}")

verify_email = None
for attempt in range(20):
    time.sleep(30)
    count, msgs = get_inbox_messages()
    print(f"Attempt {attempt+1}/20: inbox count={count}")

    for msg in msgs:
        frm = msg['from'].lower()
        subj = msg['subject'].lower()
        body = msg['body']
        # Gmail sends verification from googlemail or accounts.google.com
        if ('google' in frm or 'gmail' in frm) and ('confirm' in subj or 'verif' in subj or 'send mail' in subj or 'grant' in subj):
            verify_email = msg
            print(f"Found Gmail verification email!")
            print(f"From: {msg['from']}")
            print(f"Subject: {msg['subject']}")
            break
        # Also check by body content
        if body and ('confirmation code' in body.lower() or 'verify' in body.lower()) and 'google' in frm:
            verify_email = msg
            print(f"Found Google verification email!")
            break

    if verify_email:
        break

result = {}
if verify_email:
    body = verify_email['body']
    # Extract verification code (usually 6-9 digits)
    codes = re.findall(r'\b(\d{6,9})\b', body)
    # Extract verification links
    links = re.findall(r'https://accounts\.google\.com/[^\s<>"]+', body)
    if not links:
        links = re.findall(r'https://mail\.google\.com/[^\s<>"]+', body)

    result = {
        'found': True,
        'from': verify_email['from'],
        'subject': verify_email['subject'],
        'codes': codes,
        'links': links[:3],
        'body_excerpt': body[:2000]
    }
    status = "FOUND"
else:
    result = {'found': False}
    status = "NOT_FOUND"

body_md = f"""## Gmail Verification Email: {status}

### How to set up Gmail to send as me@zulqurnainj.com:
1. Open Gmail on phone/browser
2. Settings → Accounts and Import → **Add another email address**
3. Enter name: `Zulqurnain` and email: `me@zulqurnainj.com`
4. Choose: **Send through Gmail** (NOT your own SMTP server)
5. Click Next → Gmail sends verification to me@zulqurnainj.com
6. This workflow catches that email and posts the code here

---

"""

if result.get('found'):
    body_md += f"""### Verification Email Found ✅

**From:** `{result['from']}`
**Subject:** `{result['subject']}`

### Verification Code(s)
```
{', '.join(result['codes']) if result['codes'] else 'No numeric code found — use the link below'}
```

### Verification Link(s)
"""
    for link in result['links']:
        body_md += f"- {link}\n"

    body_md += f"""
### Full Email Body
```
{result['body_excerpt']}
```

### Next Step
Enter the code in Gmail settings, or click the verification link above.
Once verified, Gmail will send from me@zulqurnainj.com via Google's trusted IPs.
"""
else:
    body_md += """### No verification email found within 10 minutes ❌

Either:
1. The "Send mail as" setup wasn't started yet — do that in Gmail settings
2. The verification email went to a different folder
3. Gmail took longer than 10 minutes to send it

Re-run this workflow after starting the Gmail "Send mail as" setup.
"""

payload = json.dumps({'title': f'[gmail-verify] {status}: Gmail Send-As verification', 'body': body_md[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}: {status}")
