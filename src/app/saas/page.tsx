import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { SaasToolsGrid } from "@/components/SaasToolsGrid";

export const metadata: Metadata = {
  title: "SaaS Tools & Apps",
  description:
    "AI-powered SaaS tools, developer utilities, and browser extensions by Zulqurnain Haider — Prompt Health Checker, Text To Leads Extractor, and more.",
  alternates: { canonical: "https://zulqurnainj.com/saas" },
  openGraph: {
    url: "https://zulqurnainj.com/saas",
    title: "SaaS Tools & Apps | Zulqurnain Haider",
    description: "AI-powered SaaS tools and browser extensions by Zulqurnain Haider.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const chromeExtension = {
  name: "Delete All Messages by Z",
  version: "1.1",
  category: "Chrome Extension",
  platform: "Chrome Web Store",
  description:
    "Automatically delete all Facebook Messenger conversations with one click. Saves hours of manual deletion — the extension cycles through every conversation thread and removes it, leaving your inbox completely clean.",
  features: [
    "One-click bulk delete all Messenger conversations",
    "Auto-scrolls and removes every thread automatically",
    "Works directly in the Facebook Messenger web interface",
    "No data collected — runs entirely in your browser",
    "Lightweight: < 10KB, no dependencies",
  ],
  storeUrl:
    "https://chromewebstore.google.com/detail/delete-all-messages-by-z/dpdlkdbgehhejkfpclhgdbaeahikfnof",
};

export default function SaasPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 w-full max-w-5xl px-4">

        <div className="animate-in max-w-xl">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 max-w-xl">
          <Divider />
        </div>

        {/* SaaS section header */}
        <div className="animate-in animate-delay-2 flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl font-bold text-stone-900 dark:text-olive-100">
              SaaS Tools
            </h2>
            <span className="text-xs text-stone-500 dark:text-olive-400 font-medium bg-stone-100 dark:bg-olive-800 px-2.5 py-1 rounded-full">
              4 live · 4 in development
            </span>
          </div>
          <p className="text-sm text-stone-600 dark:text-olive-400 max-w-xl leading-relaxed">
            AI-powered tools built to solve real productivity and job-search problems. All run on self-hosted infrastructure — no third-party data sharing.
          </p>
        </div>

        <div className="animate-in animate-delay-2 h-px bg-gradient-to-r from-amber-200 via-yellow-300 to-transparent" />

        {/* SaaS tools grid */}
        <div className="animate-in animate-delay-3">
          <SaasToolsGrid />
        </div>

        {/* Infrastructure note */}
        <div className="animate-in animate-delay-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/30 px-4 py-3 max-w-xl">
          <svg viewBox="0 0 20 20" className="size-4 shrink-0 mt-0.5 fill-amber-500" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            All tools run on self-hosted infrastructure (no Vercel, no third-party AI APIs). AI inference powered by{" "}
            <a href="https://github.com/Zulqurnain/offllama" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:text-amber-600">
              offLLama
            </a>
            {" "}— an open-source library I built to run llama.cpp on shared hosting.
          </p>
        </div>

        <div className="animate-in animate-delay-5 max-w-xl">
          <Divider />
        </div>

        {/* Browser Extensions section */}
        <div className="animate-in animate-delay-5 flex flex-col gap-3 max-w-xl">
          <h2 className="text-xl font-bold text-stone-900 dark:text-olive-100">Browser Extensions</h2>
          <p className="text-sm text-stone-600 dark:text-olive-400 leading-relaxed">
            Free browser tools published on the Chrome Web Store.
          </p>
        </div>

        <div className="animate-in animate-delay-6 w-full max-w-xl flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="size-14 rounded-xl bg-olive-200 dark:bg-olive-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.google.com/s2/favicons?domain=chrome.google.com&sz=64"
                alt="Chrome Extension"
                className="size-8"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-olive-800 dark:text-olive-100">
                  {chromeExtension.name}
                </h3>
                <span className="text-xs bg-olive-200 dark:bg-olive-800 text-olive-600 dark:text-olive-400 px-1.5 py-0.5 rounded font-mono">
                  v{chromeExtension.version}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-olive-500">
                <span>{chromeExtension.category}</span>
                <span>·</span>
                <span>{chromeExtension.platform}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-olive-700 dark:text-olive-300 leading-relaxed">
            {chromeExtension.description}
          </p>

          <ul className="flex flex-col gap-1.5">
            {chromeExtension.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-olive-600 dark:text-olive-400">
                <span className="text-olive-400 dark:text-olive-600 mt-0.5 flex-shrink-0">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={chromeExtension.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-medium bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 0 1 6.928 3.999H12a4 4 0 0 0-4 4 4 4 0 0 0 .275 1.457L5.09 8.35A7.965 7.965 0 0 1 12 4zm0 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm6.937 2.207A7.99 7.99 0 0 1 20 12a8 8 0 0 1-8 8 7.99 7.99 0 0 1-3.89-1.005l3.617-6.262A4 4 0 0 0 12 16a4 4 0 0 0 3.45-1.987l3.487-3.806z"/>
            </svg>
            Add to Chrome
          </a>
        </div>

        <div className="animate-in animate-delay-7 max-w-xl">
          <Divider />
        </div>

        <div className="animate-in animate-delay-7 max-w-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}
