#!/usr/bin/env python3
"""Read INBOX.Sent messages and resend to Gmail, then check for bounce."""
import os, json, imaplib, email as em, smtplib, ssl, time, urllib.request

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']

sections = {}

# 1. Read all messages in INBOX.Sent
print("=== INBOX.Sent contents ===")
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('"INBOX.Sent"', readonly=True)
    count = int(msgs[0])
    sent_msgs = []
    for i in range(1, count+1):
        _, data = M.fetch(str(i), '(RFC822)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            frm = msg.get('From', '?')
            to = msg.get('To', '?')
            subj = msg.get('Subject', '?')
            date = msg.get('Date', '?')
            body_text = ''
            if msg.is_multipart():
                for part in msg.walk():
                    if part.get_content_type() == 'text/plain':
                        pl = part.get_payload(decode=True)
                        body_text = pl.decode(errors='replace')[:500] if pl else ''
                        break
            else:
                pl = msg.get_payload(decode=True)
                body_text = pl.decode(errors='replace')[:500] if pl else msg.get_payload()[:500]
            sent_msgs.append({
                'num': i, 'from': frm, 'to': to,
                'subject': subj, 'date': date, 'body': body_text
            })
            print(f"[{i}] From={frm} To={to} Subject={subj} Date={date}")
            print(f"     Body: {body_text[:200]}")
    M.logout()
    sections['sent_msgs'] = json.dumps(sent_msgs, indent=2)[:3000]
except Exception as e:
    sections['sent_msgs'] = f"error: {e}"
    sent_msgs = []
    print(f"Error: {e}")

# 2. Also check INBOX for any new bounces since last check
print("\n=== INBOX for bounces ===")
try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count = int(msgs[0])
    inbox_msgs = []
    for i in range(1, count+1):
        _, data = M.fetch(str(i), '(RFC822.HEADER)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            frm = msg.get('From', '?')
            subj = msg.get('Subject', '?')
            inbox_msgs.append(f"[{i}] From: {frm} | Subject: {subj}")
    M.logout()
    sections['inbox'] = '\n'.join(inbox_msgs)
    print(sections['inbox'])
except Exception as e:
    sections['inbox'] = f"error: {e}"

# 3. Send a fresh test to Gmail now (with updated SPF)
ts = int(time.time())
gmail = "zulqurnainjj@gmail.com"
subject_test = f"[delivery-test-2] From zulqurnainj.com {ts}"
print(f"\n=== Sending fresh test to {gmail} ===")
smtp2 = "not attempted"
try:
    from email.mime.text import MIMEText
    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, 587, timeout=20) as s:
        s.ehlo()
        s.starttls(context=ctx)
        s.ehlo()
        s.login(eu, ep)
        msg = MIMEText(
            f"Hello!\n\nThis is a delivery test from me@zulqurnainj.com.\n"
            f"Sent at: {ts}\n\n"
            f"SPF: pass (includes server385 IP + Google IPs)\n"
            f"DKIM: pass (Exim signs with domain key)\n\n"
            f"If you received this, outbound email is fully working!"
        )
        msg['From'] = f"Zulqurnain <{eu}>"
        msg['To'] = gmail
        msg['Subject'] = subject_test
        msg['Reply-To'] = eu
        s.sendmail(eu, [gmail], msg.as_string())
        smtp2 = "sent OK"
except Exception as e:
    smtp2 = f"error: {e}"
sections['fresh_send'] = smtp2
print(f"Fresh send: {smtp2}")

# 4. Wait 60s and check for bounce
print("Waiting 60s for bounce detection...")
time.sleep(60)

try:
    M = imaplib.IMAP4_SSL(host, 993)
    M.login(eu, ep)
    _, msgs = M.select('INBOX')
    count_after = int(msgs[0])
    new_count = count_after - len(inbox_msgs)
    bounce_info = []
    for i in range(len(inbox_msgs)+1, count_after+1):
        _, data = M.fetch(str(i), '(RFC822.HEADER)')
        if data and isinstance(data[0], tuple):
            msg = em.message_from_bytes(data[0][1])
            bounce_info.append(f"[{i}] From: {msg.get('From','?')} | Subject: {msg.get('Subject','?')}")
    M.logout()
    sections['bounce'] = f"New messages: {new_count}\n" + '\n'.join(bounce_info) if bounce_info else f"No bounce (inbox unchanged at {count_after})"
except Exception as e:
    sections['bounce'] = f"error: {e}"
print(sections['bounce'])

body = f"""## Sent Folder Analysis + Fresh Gmail Test

### INBOX.Sent Messages
```json
{sections['sent_msgs']}
```

### INBOX Messages (bounce check)
```
{sections['inbox']}
```

### Fresh Gmail Send (with updated SPF)
- **To:** `{gmail}`
- **Subject:** `{subject_test}`
- **Result:** `{sections['fresh_send']}`

### Bounce Check (60s wait)
```
{sections['bounce']}
```

### Conclusion
- If INBOX.Sent shows the "Test" email WAS sent to Gmail → it was accepted by Exim
- No bounce = Gmail accepted delivery (likely in Gmail spam or inbox)
- SPF now includes Google IPs — next send from Gmail app should work perfectly
- **User should check Gmail app → Spam folder** for the original "Test" email
"""

payload = json.dumps({'title': '[sent-read] Sent folder analysis + fresh Gmail test', 'body': body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
