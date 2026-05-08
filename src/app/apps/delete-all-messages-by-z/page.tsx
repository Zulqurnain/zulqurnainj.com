import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const EXT_URL =
  "https://chromewebstore.google.com/detail/delete-all-messages-by-z/dpdlkdbgehhejkfpclhgdbaeahikfnof";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Delete All Messages by Z",
  applicationCategory: "BrowserApplication",
  applicationSubCategory: "Productivity",
  operatingSystem: "Chrome",
  browserRequirements: "Requires Google Chrome",
  softwareVersion: "1.1",
  description:
    "Free Chrome extension that automatically deletes all Facebook Messenger conversations with one click. Auto-scrolls and removes every thread, leaving your inbox completely clean.",
  url: "https://zulqurnainj.com/apps/delete-all-messages-by-z",
  downloadUrl: EXT_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Zulqurnain Haider",
    url: "https://zulqurnainj.com",
  },
  featureList: [
    "One-click bulk delete all Messenger conversations",
    "Auto-scrolls and removes every thread automatically",
    "Works directly on messenger.com",
    "No data collected — runs entirely in your browser",
    "Lightweight — no dependencies",
  ],
};

export const metadata: Metadata = {
  title: "Delete All Messages by Z — Free Chrome Extension",
  description:
    "Bulk-delete every Facebook Messenger conversation with one click. Free Chrome extension by Zulqurnain Haider. Works on messenger.com — no data collected.",
  alternates: { canonical: "https://zulqurnainj.com/apps/delete-all-messages-by-z" },
  keywords: [
    "delete all facebook messages",
    "delete messenger conversations",
    "bulk delete facebook messages",
    "facebook messenger cleaner",
    "chrome extension delete messages",
    "delete all messages chrome extension",
    "messenger inbox cleaner",
    "facebook message deleter",
    "Delete All Messages by Z",
    "Zulqurnain Haider chrome extension",
  ],
  openGraph: {
    type: "website",
    url: "https://zulqurnainj.com/apps/delete-all-messages-by-z",
    title: "Delete All Messages by Z — Free Chrome Extension",
    description:
      "Tired of deleting Facebook Messenger conversations one by one? This free Chrome extension wipes your entire inbox in one click. No data collected.",
    images: [
      {
        url: "/og-extension.jpg",
        width: 1200,
        height: 630,
        alt: "Delete All Messages by Z — Free Chrome Extension",
      },
    ],
    siteName: "Zulqurnain Haider",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete All Messages by Z — Free Chrome Extension",
    description: "Bulk-delete every Facebook Messenger conversation in one click. Free. No data collected.",
    images: ["/og-extension.jpg"],
    creator: "@zulqurnainjj",
  },
};

export default function ExtensionPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="animate-in w-full">
          <Header />
        </div>

        {/* Hero */}
        <div className="animate-in animate-delay-1 w-full flex flex-col gap-3 pt-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              Chrome Extension
            </span>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              Free
            </span>
            <span className="text-xs font-mono text-olive-400">v1.1</span>
          </div>

          <h1 className="text-2xl font-bold text-olive-800 dark:text-olive-100 leading-snug">
            Delete All Messages by Z
          </h1>

          <p className="text-base text-olive-600 dark:text-olive-400 leading-relaxed">
            Tired of deleting Facebook Messenger conversations one by one?
            This free Chrome extension wipes your entire inbox in a single click —
            no manual scrolling, no repetitive clicking.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-in animate-delay-2 w-full">
          <a
            href={EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 0 1 6.928 3.999H12a4 4 0 0 0-4 4 4 4 0 0 0 .275 1.457L5.09 8.35A7.965 7.965 0 0 1 12 4zm0 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm6.937 2.207A7.99 7.99 0 0 1 20 12a8 8 0 0 1-8 8 7.99 7.99 0 0 1-3.89-1.005l3.617-6.262A4 4 0 0 0 12 16a4 4 0 0 0 3.45-1.987l3.487-3.806z"/>
            </svg>
            Add to Chrome — It&apos;s Free
          </a>
        </div>

        {/* How it works */}
        <div className="animate-in animate-delay-3 w-full flex flex-col gap-3">
          <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
            How it works
          </h2>
          <ol className="flex flex-col gap-3">
            {[
              ["Install", "Add the extension from the Chrome Web Store in one click."],
              ["Open Messenger", "Go to messenger.com in your Chrome browser."],
              ["Click Delete All", "Hit the extension button — it auto-scrolls and deletes every conversation for you."],
              ["Done", "Inbox zero. No manual clicking required."],
            ].map(([step, desc], i) => (
              <li key={step} className="flex gap-3 items-start">
                <span className="shrink-0 size-6 rounded-full bg-olive-200 dark:bg-olive-800 text-olive-700 dark:text-olive-300 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">{step} — </span>
                  <span className="text-sm text-olive-600 dark:text-olive-400">{desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Features */}
        <div className="animate-in animate-delay-4 w-full flex flex-col gap-3">
          <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
            Features
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "One click — deletes every conversation automatically",
              "Auto-scrolls through all threads, no manual work",
              "Works on messenger.com",
              "Zero data collected — runs entirely in your browser",
              "Lightweight: no backend, no accounts, no tracking",
              "Completely free, no premium tier",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-olive-600 dark:text-olive-400">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Privacy note */}
        <div className="animate-in animate-delay-5 w-full rounded-xl bg-olive-200/60 dark:bg-olive-800/40 p-4 flex flex-col gap-1.5">
          <p className="font-semibold text-sm text-olive-800 dark:text-olive-100">Privacy first</p>
          <p className="text-sm text-olive-600 dark:text-olive-400">
            The extension runs entirely inside your browser. It never sends your data anywhere,
            has no server, and requires no login. Your messages stay yours.
          </p>
        </div>

        {/* Second CTA */}
        <div className="animate-in animate-delay-6 w-full flex flex-col gap-2">
          <a
            href={EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 0 1 6.928 3.999H12a4 4 0 0 0-4 4 4 4 0 0 0 .275 1.457L5.09 8.35A7.965 7.965 0 0 1 12 4zm0 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm6.937 2.207A7.99 7.99 0 0 1 20 12a8 8 0 0 1-8 8 7.99 7.99 0 0 1-3.89-1.005l3.617-6.262A4 4 0 0 0 12 16a4 4 0 0 0 3.45-1.987l3.487-3.806z"/>
            </svg>
            Add to Chrome — It&apos;s Free
          </a>
          <p className="text-center text-xs text-olive-400 dark:text-olive-600">
            Available on the Chrome Web Store · Built by{" "}
            <a href="https://zulqurnainj.com" className="underline underline-offset-2 hover:text-olive-700 dark:hover:text-olive-300">
              Zulqurnain Haider
            </a>
          </p>
        </div>

        <div className="animate-in animate-delay-7 w-full mt-4">
          <Footer />
        </div>

      </div>
    </div>
  );
}
