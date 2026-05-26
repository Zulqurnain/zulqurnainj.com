import type { Metadata } from "next";
import { NotepadRedirectClient } from "./NotepadRedirectClient";

const TARGET    = "https://tools.zulqurnainj.com/notepackz";
const OG_IMAGE  = "https://tools.zulqurnainj.com/notepackz/opengraph-image";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: "NotePackz — Free Online Notepad | Write, Share & Save Notes",
  description:
    "Free online notepad with instant shareable links. Write in 10 programmer themes (One Dark, Dracula, Tokyo Night…), auto-save to cloud, and share via one link. No signup required.",

  keywords: [
    "online notepad", "free online notepad", "notepad online",
    "notepad online free", "online text editor", "shareable notes online",
    "share notes via link", "online notepad with shareable link",
    "notepad no login", "free notepad no signup", "cloud notepad",
    "programmer notepad", "dark theme notepad", "one dark notepad",
    "dracula theme notepad", "tokyo night notepad", "google keep alternative",
    "simplenote alternative", "pastebin alternative notes", "NotePackz",
    "notepackz online notepad", "write and share text online free",
    "best free online notepad", "auto save notepad", "quick notepad online",
  ],

  authors: [{ name: "Zulqurnain Haider", url: "https://zulqurnainj.com" }],
  creator: "Zulqurnain Haider",

  // ── Canonical + robots ────────────────────────────────────────────────────
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },          // noindex — pass equity to canonical

  // ── Open Graph (Facebook, LinkedIn, Discord, WhatsApp, Telegram, iMessage) ─
  openGraph: {
    type: "website",
    url: TARGET,
    siteName: "NotePackz",
    title: "NotePackz — Free Online Notepad | Write, Share & Save Notes",
    description:
      "Free online notepad with instant shareable links. 10 programmer themes, auto-save, no signup. Write and share notes in seconds.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NotePackz — Free Online Notepad for Developers",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@zulqurnainjj",
    creator: "@zulqurnainjj",
    title: "NotePackz — Free Online Notepad | Write, Share & Save Notes",
    description:
      "Free online notepad with shareable links, 10 programmer themes, auto-save. No signup needed.",
    images: [{ url: OG_IMAGE, alt: "NotePackz — Free Online Notepad" }],
  },

  // ── PWA / theme colour ────────────────────────────────────────────────────
  other: {
    "application-name": "NotePackz",
    "theme-color": "#0d1117",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "NotePackz",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function NotepadRedirectPage() {
  return <NotepadRedirectClient target={TARGET} />;
}
