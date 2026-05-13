#!/usr/bin/env python3
"""Send authenticated email via SMTP and verify IMAP delivery."""
import os, json, smtplib, imaplib, ssl, time, urllib.request
from email.mime.text import MIMEText

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']

ts = int(time.time())
subject = f"[smtp-auth-test] Delivery check {ts}"

sections = {}

# 1. Count inbox before
def imap_count():
    try:
        M = imaplib.IMAP4_SSL(host, 993)
        M.login(eu, ep)
        _, msgs = M.select('INBOX')
        count = int(msgs[0])
        subj = ''
        if count > 0:
            _, data = M.fetch(str(count), '(RFC822.HEADER)')
            if data and isinstance(data[0], tuple):
                import email as em
                msg = em.message_from_bytes(data[0][1])
                subj = msg.get('Subject', '?')
        M.logout()
        return count, subj
    except Exception as e:
        return -1, str(e)

before_count, before_subj = imap_count()
sections['before'] = f"count={before_count} latest={before_subj!r}"
print(f"IMAP before: {sections['before']}")

# 2. Send via authenticated SMTP port 587
smtp_result = "not attempted"
try:
    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, 587, timeout=20) as s:
        s.ehlo()
        s.starttls(context=ctx)
        s.ehlo()
        s.login(eu, ep)
        msg = MIMEText(f"Authenticated SMTP test at {ts}.\nSent from GitHub Actions via port 587 with STARTTLS+AUTH.")
        msg['From'] = eu
        msg['To'] = eu
        msg['Subject'] = subject
        s.sendmail(eu, [eu], msg.as_string())
        smtp_result = "sent OK"
        print(f"SMTP: {smtp_result}")
except Exception as e:
    smtp_result = f"error: {e}"
    print(f"SMTP error: {e}")

sections['smtp'] = smtp_result

# 3. Wait 45s and check inbox
print("Waiting 45s for delivery...")
time.sleep(45)

after_count, after_subj = imap_count()
sections['after'] = f"count={after_count} latest={after_subj!r}"
print(f"IMAP after: {sections['after']}")

delivered = after_count > before_count or subject[:30] in after_subj
icon = "DELIVERED" if delivered else "NOT_DELIVERED"

body = f"""## Authenticated SMTP Send + IMAP Verify: {icon}

Tests sending via authenticated SMTP (port 587, STARTTLS) and receiving via IMAP.

| Step | Result |
|------|--------|
| IMAP inbox before | `{sections['before']}` |
| SMTP send (port 587 auth) | `{sections['smtp']}` |
| IMAP inbox after (45s wait) | `{sections['after']}` |
| Delivered? | **{icon}** |

Subject sent: `{subject}`

### Interpretation
- If SMTP sent OK and after count > before count → full send+receive cycle works ✅
- If SMTP sent OK but count unchanged → Exim may be queuing/routing elsewhere
- If SMTP error → port 587 auth not working
"""

payload = json.dumps({'title': f'[smtp-auth] {icon}: send+receive via port 587', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"Issue #{d['number']}: {icon}")
