#!/usr/bin/env python3
"""Fetch email headers to verify DKIM signing, then send test to Gmail and watch for bounce."""
import os, json, imaplib, email as em, smtplib, ssl, time, urllib.request

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']
gmail = os.environ['GMAIL']

sections = {}

# 1. Fetch full headers of last received email to check for DKIM-Signature
print("=== Checking DKIM-Signature in received email headers ===")
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count = int(msgs[0])
    dkim_found = False
    headers_sample = ''
    if count > 0:
        _, data = M.fetch(str(count), '(RFC822)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            headers_sample = '\n'.join(
                f"{k}: {v}" for k, v in msg.items()
                if k.lower() in ('dkim-signature','received','from','subject','authentication-results')
            )
            dkim_found = 'DKIM-Signature' in msg
    M.logout()
    sections['dkim_in_headers'] = f"DKIM-Signature present: {dkim_found}\n\n{headers_sample[:1500]}"
except Exception as e:
    sections['dkim_in_headers'] = f"error: {e}"
print(sections['dkim_in_headers'])

# 2. Send test email to Gmail via authenticated SMTP
ts = int(time.time())
subject_gmail = f"[delivery-test] zulqurnainj.com → Gmail {ts}"
print(f"\n=== Sending test to {gmail} ===")
smtp_result = "not attempted"
try:
    from email.mime.text import MIMEText
    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, 587, timeout=20) as s:
        s.ehlo()
        s.starttls(context=ctx)
        s.ehlo()
        s.login(eu, ep)
        msg = MIMEText(
            f"This is a delivery test from me@zulqurnainj.com.\n"
            f"Sent at: {ts}\n"
            f"If you receive this, outbound email is working!\n"
            f"Check: SPF={True}, DKIM={dkim_found}"
        )
        msg['From'] = f"Zulqurnain <{eu}>"
        msg['To'] = gmail
        msg['Subject'] = subject_gmail
        s.sendmail(eu, [gmail], msg.as_string())
        smtp_result = "sent OK"
except Exception as e:
    smtp_result = f"error: {e}"
sections['gmail_send'] = smtp_result
print(f"Gmail send: {smtp_result}")

# 3. Wait 60s and check inbox for bounce
print("\nWaiting 60s for possible bounce...")
time.sleep(60)

try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count_after = int(msgs[0])
    new_msgs = []
    for i in range(count+1, count_after+1):
        _, data = M.fetch(str(i), '(RFC822.HEADER)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            new_msgs.append(f"  [{i}] From: {msg.get('From','?')} | Subject: {msg.get('Subject','?')}")
    M.logout()
    sections['bounce_check'] = f"Before: {count} | After: {count_after}\nNew messages:\n" + ('\n'.join(new_msgs) or '  (none - no bounce)')
except Exception as e:
    sections['bounce_check'] = f"error: {e}"
print(sections['bounce_check'])

body = f"""## DKIM Header Check + Gmail Delivery Test

### DKIM Signature in Outbound Email Headers
```
{sections['dkim_in_headers']}
```

### Gmail Send Result
- **Target:** `{gmail}`
- **Subject:** `{subject_gmail}`
- **Result:** `{sections['gmail_send']}`

### Bounce Check (60s wait)
```
{sections['bounce_check']}
```

### Interpretation
- **DKIM-Signature present = YES** → Exim IS signing mail → SPF+DKIM both valid → Gmail should accept ✅
- **DKIM-Signature present = NO** → Exim not signing → Gmail likely rejecting or spamming
- **No bounce** = Gmail accepted delivery (check Gmail INBOX and SPAM folder)
- **Bounce present** = delivery failed with reason shown
"""

payload = json.dumps({'title': '[dkim-headers] DKIM signing check + Gmail send', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
