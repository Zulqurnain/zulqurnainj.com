#!/usr/bin/env python3
"""Read all inbox messages with full bodies."""
import os, json, imaplib, email as em, urllib.request

host  = os.environ['H']
eu    = os.environ['EU']
ep    = os.environ['EP']
token = os.environ['GT']
repo  = os.environ['GR']

M = imaplib.IMAP4_SSL(host, 993)
M.login(eu, ep)
_, msgs = M.select('INBOX')
count = int(msgs[0])
print(f"Total messages: {count}")

results = []
for i in range(1, count+1):
    _, data = M.fetch(str(i), '(RFC822)')
    if data and isinstance(data[0], tuple):
        msg = em.message_from_bytes(data[0][1])
        frm = msg.get('From', '?')
        subj = msg.get('Subject', '?')
        date = msg.get('Date', '?')
        body = ''
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == 'text/plain':
                    body = part.get_payload(decode=True).decode(errors='replace')[:3000]
                    break
        else:
            pl = msg.get_payload(decode=True)
            body = pl.decode(errors='replace')[:3000] if pl else ''
        results.append({'num': i, 'from': frm, 'subject': subj, 'date': date, 'body': body})
        print(f"\n[{i}] From: {frm}")
        print(f"    Subject: {subj}")
        print(f"    Date: {date}")
        print(f"    Body: {body[:300]}")

M.logout()

# Format for issue
body_parts = []
for r in results:
    body_parts.append(f"### Message {r['num']}\n- **From:** {r['from']}\n- **Subject:** {r['subject']}\n- **Date:** {r['date']}\n```\n{r['body'][:2000]}\n```")

issue_body = f"## Inbox Contents ({count} messages)\n\n" + "\n\n".join(body_parts)

payload = json.dumps({'title': f'[inbox] All {count} messages', 'body': issue_body[:60000]}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
