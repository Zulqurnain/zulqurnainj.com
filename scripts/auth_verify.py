#!/usr/bin/env python3
"""Send to Port25 auth verifier and wait for their reply with DKIM/SPF results."""
import os, json, imaplib, email as em, smtplib, ssl, time, urllib.request

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']

# Port25 auth verifier: send it an email, it replies with full auth results
verifier = "check-auth@verifier.port25.com"

def imap_get_latest(label="check"):
    try:
        M = imaplib.IMAP4_SSL(host, 993)
        M.login(eu, ep)
        _, msgs = M.select('INBOX')
        count = int(msgs[0])
        msgs_info = []
        for i in range(max(1, count-4), count+1):
            _, data = M.fetch(str(i), '(RFC822)')
            if data and isinstance(data[0], tuple):
                msg = em.message_from_bytes(data[0][1])
                subj = msg.get('Subject', '')
                frm = msg.get('From', '')
                body = ''
                if msg.is_multipart():
                    for part in msg.walk():
                        if part.get_content_type() == 'text/plain':
                            body = part.get_payload(decode=True).decode(errors='replace')[:2000]
                            break
                else:
                    body = msg.get_payload(decode=True).decode(errors='replace')[:2000] if msg.get_payload(decode=True) else ''
                msgs_info.append({'from': frm, 'subject': subj, 'body': body})
        M.logout()
        return count, msgs_info
    except Exception as e:
        return -1, [{'from': '', 'subject': '', 'body': f"error: {e}"}]

before_count, _ = imap_get_latest()
print(f"Inbox before: {before_count}")

# Send to verifier
ts = int(time.time())
print(f"\nSending to {verifier}...")
smtp_result = "not attempted"
try:
    from email.mime.text import MIMEText
    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, 587, timeout=20) as s:
        s.ehlo()
        s.starttls(context=ctx)
        s.ehlo()
        s.login(eu, ep)
        msg = MIMEText(f"Auth verification test from me@zulqurnainj.com at {ts}")
        msg['From'] = eu
        msg['To'] = verifier
        msg['Subject'] = f"auth-test {ts}"
        s.sendmail(eu, [verifier], msg.as_string())
        smtp_result = "sent OK"
except Exception as e:
    smtp_result = f"error: {e}"
print(f"SMTP: {smtp_result}")

# Wait 90s for verifier reply
print("Waiting 90s for verifier reply...")
time.sleep(90)

after_count, msgs = imap_get_latest()
print(f"Inbox after: {after_count}")

verifier_reply = "(no reply received)"
for m in msgs:
    if 'port25' in m['from'].lower() or 'verif' in m['subject'].lower() or 'auth' in m['subject'].lower():
        verifier_reply = f"From: {m['from']}\nSubject: {m['subject']}\n\n{m['body']}"
        break
    elif after_count > before_count:
        verifier_reply = f"New message: From={m['from']} Subject={m['subject']}\n{m['body']}"

print(f"\nVerifier reply:\n{verifier_reply[:1000]}")

body = f"""## Auth Verification: DKIM + SPF Results

Sent to Port25 check-auth verifier. Their reply shows actual DKIM/SPF pass/fail.

### Send Result
- **SMTP:** `{smtp_result}`
- **Inbox before:** {before_count} | **After:** {after_count}

### Verifier Reply (Port25)
```
{verifier_reply[:3000]}
```

### Interpretation
- `dkim=pass` → Exim IS signing with DKIM ✅ Gmail will trust it
- `dkim=fail` or absent → DKIM not signing → Gmail marks as spam ❌
- `spf=pass` → SPF OK ✅
- `spf=fail` → IP not in SPF → Gmail rejects ❌
"""

payload = json.dumps({'title': '[auth-verify] DKIM+SPF pass/fail check', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
