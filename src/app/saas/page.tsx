import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { SaasToolsGrid } from "@/components/SaasToolsGrid";

export const metadata: Metadata = {
  title: "SaaS Tools",
  description:
    "AI-powered SaaS tools and developer utilities by Zulqurnain Haider — Prompt Health Checker, Text To Leads Extractor, and more.",
  alternates: { canonical: "https://zulqurnainj.com/saas" },
  openGraph: {
    url: "https://zulqurnainj.com/saas",
    title: "SaaS Tools | Zulqurnain Haider",
    description: "AI-powered SaaS tools by Zulqurnain Haider.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
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

        {/* Section header */}
        <div className="animate-in animate-delay-2 flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-300 shadow-sm">
                <svg viewBox="0 0 20 20" className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <h2 className="text-xl font-bold text-stone-900 dark:text-olive-100">
                SaaS Tools
              </h2>
            </div>
            <span className="text-xs text-stone-500 dark:text-olive-400 font-medium bg-stone-100 dark:bg-olive-800 px-2.5 py-1 rounded-full">
              2 live · 5 in development
            </span>
          </div>
          <p className="text-sm text-stone-600 dark:text-olive-400 max-w-xl leading-relaxed">
            AI-powered tools I&apos;ve built to solve real job-search and productivity problems. All run on my own infrastructure — no third-party data sharing.
          </p>
        </div>

        <div className="animate-in animate-delay-2 h-px bg-gradient-to-r from-amber-200 via-yellow-300 to-transparent" />

        {/* Animated tools grid */}
        <div className="animate-in animate-delay-3">
          <SaasToolsGrid />
        </div>

        {/* Bottom note */}
        <div className="animate-in animate-delay-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/30 px-4 py-3">
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

        <div className="animate-in animate-delay-5 max-w-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}
