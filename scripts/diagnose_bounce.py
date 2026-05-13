#!/usr/bin/env python3
"""Check IP blacklists, send a proper test email to Gmail, watch for bounce."""
import os, json, subprocess, smtplib, ssl, imaplib, email as em, time, urllib.request

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']

sending_ip = "68.65.120.137"  # confirmed from Port25 report
sections = {}

# 1. Check IP against major spam blacklists
print("=== Checking IP against spam blacklists ===")
blacklists = [
    "zen.spamhaus.org",
    "bl.spamcop.net",
    "dnsbl.sorbs.net",
    "b.barracudacentral.org",
    "dnsbl-1.uceprotect.net",
    "spam.dnsbl.sorbs.net",
    "combined.abuse.ch",
    "cbl.abuseat.org",
]
reversed_ip = ".".join(reversed(sending_ip.split(".")))
bl_results = []
for bl in blacklists:
    query = f"{reversed_ip}.{bl}"
    result = subprocess.getoutput(f"dig +short A {query}")
    listed = bool(result and result.strip() and "NXDOMAIN" not in result and "connection timed out" not in result)
    status = f"LISTED ({result.strip()})" if listed else "clean"
    bl_results.append(f"  {bl}: {status}")
    print(f"{bl}: {status}")

sections['blacklist'] = f"IP: {sending_ip}\n" + '\n'.join(bl_results)

# 2. Check DMARC record
print("\n=== DMARC record ===")
dmarc = subprocess.getoutput(f"dig +short TXT _dmarc.{os.environ.get('D','zulqurnainj.com')}")
sections['dmarc'] = dmarc or "NOT FOUND"
print(sections['dmarc'])

# 3. Count inbox before sending
def imap_count():
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count = int(msgs[0])
    M.logout()
    return count

before = imap_count()

# 4. Send a PROPER well-formed test email (not "Test")
ts = int(time.time())
gmail = "zulqurnainjj@gmail.com"
subject = f"Hello from Zulqurnain - email test {ts}"
print(f"\n=== Sending proper test email to {gmail} ===")

smtp_result = "not attempted"
try:
    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText
    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, 587, timeout=20) as s:
        s.ehlo()
        s.starttls(context=ctx)
        s.ehlo()
        s.login(eu, ep)

        msg = MIMEMultipart('alternative')
        msg['From'] = f"Zulqurnain <{eu}>"
        msg['To'] = gmail
        msg['Subject'] = subject
        msg['Reply-To'] = eu
        msg['Message-ID'] = f"<{ts}.test@zulqurnainj.com>"

        text_part = MIMEText(
            "Hi,\n\n"
            "This is a test email from me@zulqurnainj.com.\n\n"
            "I am verifying that my email setup is working correctly.\n"
            "Please ignore this message.\n\n"
            "Best regards,\n"
            "Zulqurnain\n"
            "https://zulqurnainj.com",
            'plain'
        )
        html_part = MIMEText(
            "<html><body>"
            "<p>Hi,</p>"
            "<p>This is a test email from <a href='mailto:me@zulqurnainj.com'>me@zulqurnainj.com</a>.</p>"
            "<p>I am verifying that my email setup is working correctly.</p>"
            "<p>Best regards,<br>Zulqurnain<br>"
            "<a href='https://zulqurnainj.com'>zulqurnainj.com</a></p>"
            "</body></html>",
            'html'
        )
        msg.attach(text_part)
        msg.attach(html_part)

        s.sendmail(eu, [gmail], msg.as_string())
        smtp_result = "sent OK"
except Exception as e:
    smtp_result = f"error: {e}"
sections['smtp'] = smtp_result
print(f"SMTP: {smtp_result}")

# 5. Wait 90s and check for bounce
print("Waiting 90s for bounce detection...")
time.sleep(90)

after = imap_count()
bounce_text = "none"
if after > before:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, _ = M.select('INBOX')
    bounces = []
    for i in range(before+1, after+1):
        _, data = M.fetch(str(i), '(RFC822)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            frm = msg.get('From', '')
            subj = msg.get('Subject', '')
            body = ''
            for part in (msg.walk() if msg.is_multipart() else [msg]):
                if part.get_content_type() == 'text/plain':
                    pl = part.get_payload(decode=True)
                    if pl:
                        body = pl.decode(errors='replace')[:800]
                        break
            bounces.append(f"From: {frm}\nSubject: {subj}\nBody: {body}")
    M.logout()
    bounce_text = '\n---\n'.join(bounces) if bounces else "new messages but not bounces"
sections['bounce'] = bounce_text

body_md = f"""## Bounce Diagnosis: IP Blacklist + Proper Email Test

### Sending IP: `{sending_ip}`

### Blacklist Check
```
{sections['blacklist']}
```

### DMARC Record
```
{sections['dmarc']}
```

### Proper Test Email to Gmail
- **Subject:** `{subject}`
- **SMTP result:** `{sections['smtp']}`

### Bounce (90s wait)
```
{sections['bounce']}
```

### Key
- If IP is clean on all blacklists → bounce is content/reputation, NOT IP block
- If IP is on Spamhaus/CBL → IP reputation problem
- If proper email bounces → domain reputation issue
- If proper email delivered → previous bounce was due to "Test" content
"""

payload = json.dumps({'title': '[bounce-diag] IP blacklist check + proper email test', 'body': body_md[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
