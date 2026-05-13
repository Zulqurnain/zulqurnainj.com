#!/usr/bin/env python3
"""Test if server accepts SMTP delivery on port 25 for me@zulqurnainj.com."""
import os, json, socket, ssl, urllib.request, time

host  = os.environ['H']
eu    = os.environ['EU']
token = os.environ['GT']
repo  = os.environ['GR']

sections = {}

def smtp_conversation(server, port, use_ssl=False, starttls=False):
    """Do an SMTP conversation and try to deliver a message."""
    log = []
    try:
        raw = socket.create_connection((server, port), timeout=15)
        if use_ssl:
            ctx = ssl.create_default_context()
            sock = ctx.wrap_socket(raw, server_hostname=server)
        else:
            sock = raw

        def send(cmd):
            sock.sendall((cmd + '\r\n').encode())
            resp = sock.recv(4096).decode(errors='replace')
            log.append(f">>> {cmd}")
            log.append(f"<<< {resp.strip()}")
            return resp

        # Read banner
        banner = sock.recv(1024).decode(errors='replace')
        log.append(f"<<< BANNER: {banner.strip()}")

        ehlo = send("EHLO github-test.example.com")
        if starttls and '250' in ehlo:
            tls_resp = send("STARTTLS")
            if '220' in tls_resp:
                ctx = ssl.create_default_context()
                sock = ctx.wrap_socket(sock, server_hostname=server)
                send("EHLO github-test.example.com")

        mail_resp = send("MAIL FROM: <noreply@github-actions-test.example.com>")
        rcpt_resp = send(f"RCPT TO: <{eu}>")
        if '250' in rcpt_resp or '251' in rcpt_resp:
            log.append("RCPT TO accepted - server will deliver locally!")
            data_resp = send("DATA")
            if '354' in data_resp:
                ts = int(time.time())
                send(f"From: GitHub Test <noreply@github-actions-test.example.com>")
                send(f"To: {eu}")
                send(f"Subject: SMTP delivery test {ts}")
                send(f"")
                send(f"This is a direct SMTP delivery test from GitHub Actions.")
                send(f"If you see this in webmail, external delivery is working.")
                end_resp = send(".")
                log.append(f"Message accepted: {'250' in end_resp}")
        else:
            log.append(f"RCPT TO REJECTED: {rcpt_resp.strip()}")

        send("QUIT")
        sock.close()
    except Exception as e:
        log.append(f"Error: {e}")

    return '\n'.join(log)

# Test port 25 (plain SMTP - server to server)
print("=== Testing port 25 (plain SMTP) ===")
r25 = smtp_conversation(host, 25, use_ssl=False)
print(r25)
sections['port_25'] = r25[:1500]

# Test port 587 (submission)
print("\n=== Testing port 587 (STARTTLS) ===")
r587 = smtp_conversation(host, 587, starttls=True)
print(r587)
sections['port_587'] = r587[:800]

# Post as issue
body = f"""## SMTP Delivery Test

Tests if server accepts mail for `{eu}` from external IPs.

### Port 25 (server-to-server, simulates jellyfish.systems delivery)
```
{sections['port_25']}
```

### Port 587 (STARTTLS submission)
```
{sections['port_587']}
```

### Key: RCPT TO accepted = routing is local ✅ | rejected = still routing remotely ❌
"""

payload = json.dumps({'title': '[smtp-test] Direct SMTP delivery to server port 25/587', 'body': body}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{repo}/issues',
    data=payload,
    headers={'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'}
)
with urllib.request.urlopen(req) as r:
    d = json.loads(r.read())
    print(f"\nIssue #{d['number']}")
