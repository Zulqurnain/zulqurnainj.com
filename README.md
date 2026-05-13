# zulqurnainj.com

Portfolio website for Zulqurnain Haider — Senior Full Stack Developer.

Built with Next.js (static export), React 19, Tailwind CSS v4. Deployed to Namecheap cPanel shared hosting via GitHub Actions FTP on every push to `master`.

**Live at:** [zulqurnainj.com](https://zulqurnainj.com)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — intro, skills, links |
| `/apps` | Open-source and personal projects |
| `/saas` | SaaS tools — Text To Leads Extractor and upcoming tools |
| `/blog` | Technical writing |

---

## SaaS Tools (`/saas`)

The `/saas` page showcases AI-powered tools built on self-hosted infrastructure:

| Tool | Status | URL |
|------|--------|-----|
| Text To Leads Extractor | Live | [tools.zulqurnainj.com/text-to-leads](https://tools.zulqurnainj.com/text-to-leads) |
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
| [text-to-leads-extractor](https://github.com/Zulqurnain/text-to-leads-extractor) | AI outreach tool at `tools.zulqurnainj.com/text-to-leads` |
| [offllama](https://github.com/Zulqurnain/offllama) | npm library: llama.cpp on cPanel, universal client for browser/RN/Android |

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

Pushes to `master` trigger GitHub Actions which:
1. Builds the static site (`npm run build`)
2. FTPs the `out/` directory to `public_html/` on Namecheap cPanel

---

## Tech Stack

- **Framework**: Next.js (static export, `output: "export"`)
- **Styling**: Tailwind CSS v4 with custom olive color palette (oklch)
- **Hosting**: Namecheap cPanel shared hosting
- **Deploy**: GitHub Actions → FTP

---

**[Zulqurnain Haider](https://zulqurnainj.com/) — Senior Full Stack Engineer**
