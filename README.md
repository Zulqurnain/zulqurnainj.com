# zulqurnainj.com

Portfolio website for Zulqurnain Haider — Senior Full Stack Developer (Gen AI).

Built with Next.js (static export), React 19, Tailwind CSS v4. Deployed to a self-managed VPS via GitHub Actions (build → rsync `out/` to the server → nginx reload) on every push to `master`.

**Live at:** [zulqurnainj.com](https://zulqurnainj.com)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — intro, skills, experience, links |
| `/services` | Services overview |
| `/services/ai-employee` | AI Employee service landing page |
| `/services/mobile-developer` | Mobile Developer service landing page |
| `/services/web-developer` | Web Developer service landing page |
| `/projects` | Client project gallery |
| `/saas` | SaaS tools — Text To Leads Extractor and upcoming tools |
| `/on-device` | On-device LLM inference proof page |
| `/notepad` | Redirects to the NotePackz app |

---

## SaaS Tools (`/saas`)

The `/saas` page showcases AI-powered tools built on self-hosted infrastructure:

| Tool | Status | URL |
|------|--------|-----|
| Text To Leads Extractor | Live | [GitHub](https://github.com/Zulqurnain/text-to-leads-extractor) |
| CV Builder AI | Coming Soon | — |
| LinkedIn Outreach | Coming Soon | — |
| Interview Prep AI | Coming Soon | — |
| Salary Negotiator | Coming Soon | — |
| Job Tracker | Coming Soon | — |

All tools run on self-hosted infrastructure powered by [offLLama](https://github.com/Zulqurnain/offllama) — no Vercel, no third-party AI APIs, no data sharing.

---

## Related Repositories

| Repo | Description |
|------|-------------|
| [text-to-leads-extractor](https://github.com/Zulqurnain/text-to-leads-extractor) | AI outreach tool for extracting leads from job posts |
| [offllama](https://github.com/Zulqurnain/offllama) | npm library: self-hosted llama.cpp inference, universal client for browser/RN/Android |

---

## Development

```bash
git clone https://github.com/Zulqurnain/zulqurnainj.com
cd zulqurnainj.com
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

## Deployment

Pushes to `master` trigger GitHub Actions (`.github/workflows/deploy.yml`) which:
1. Builds the static site (`npm run build`)
2. rsyncs the `out/` directory to `/var/www/zulqurnainj.com/out/` on the VPS
3. Reloads nginx

A manual fallback script (`scripts/deploy-portfolio.sh`) exists on the server for cases where GitHub Actions isn't available.

---

## Tech Stack

- **Framework**: Next.js (static export, `output: "export"`)
- **Styling**: Tailwind CSS v4 with custom olive color palette (oklch)
- **Hosting**: Self-managed VPS (nginx)
- **Deploy**: GitHub Actions → rsync → nginx reload

---

**[Zulqurnain Haider](https://zulqurnainj.com/) — Senior Full Stack Developer (Gen AI) — shipping on-device AI that keeps data on the phone**

## Recent changes

- 2026-10-22: nginx config: the AI assistant's chat page (/assistant/chat) may now use the microphone, for the new voice input (Permissions-Policy microphone=(self), from /etc/nginx/snippets/proxy-security-headers-mic.conf on the VPS). Every other page still blocks it.
- 2026-10-20: Added a Markdown copy of the On-Device AI page (/on-device.md) and listed every Markdown page in llms.txt.
- 2026-10-20: nginx config: per-page Markdown URLs (/services.md -> /services/index.md, served as text/markdown) and security headers on /assistant/chat. These were live-only edits that the deploy's nginx sync had overwritten; they now live in this repo.
- 2026-10-20: Fixed every LinkedIn link to https://www.linkedin.com/in/zulqurnainj/ (header, footer, home page, structured data, on-device page, email signature, llms.txt, Markdown pages).
- 2026-10-20: Commit history tidied up: every commit is now credited to Zulqurnain.
