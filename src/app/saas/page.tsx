import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

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

type Tool = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  badge: "Live" | "Beta" | "Coming Soon";
  category: string;
};

const CheckIcon = () => (
  <svg className="size-3.5 shrink-0 mt-0.5 text-amber-500" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const tools: Tool[] = [
  {
    id: "prompt-health-checker",
    name: "Prompt Health Checker",
    tagline: "Score · Analyze · Strengthen",
    description: "Paste any prompt and get a detailed health report — quality score, weak-word detection, structural analysis, token estimates across 7 AI model families, and a rewritten stronger version. Free, no signup, runs in your browser.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="9" width="16" height="20" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M12 14h8M12 18h8M12 22h5" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="29" cy="28" r="7" fill="#22c55e" />
        <path d="M26 28l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "/prompt-health-checker/",
    badge: "Live",
    category: "Developer Tools",
  },
  {
    id: "text-to-leads",
    name: "Text To Leads Extractor",
    tagline: "Paste · Extract · Connect",
    description: "Paste any job post, LinkedIn message, or outreach text — AI extracts recruiter contacts (email, phone, Telegram) and drafts personalised outreach with your CV attached.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="10" width="18" height="22" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M12 16h10M12 20h10M12 24h6" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="30" cy="14" r="5" fill="#fbbf24" />
        <path d="M28 14h4M30 12v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 24l6 6" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    href: "/text-to-leads",
    badge: "Live",
    category: "Job Search",
  },
  {
    id: "cv-builder",
    name: "CV Builder AI",
    tagline: "ATS-optimised in seconds",
    description: "Upload your old CV or start from scratch — AI rewrites it to pass ATS scanners, tailored to a specific job description.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="10" y="8" width="20" height="26" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M14 14h12M14 18h12M14 22h8" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="28" cy="30" r="5" fill="#fbbf24" />
        <path d="M26 30h4M28 28v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    badge: "Coming Soon",
    category: "Job Search",
  },
  {
    id: "linkedin-outreach",
    name: "LinkedIn Outreach",
    tagline: "Personalised DMs at scale",
    description: "Paste a recruiter or hiring manager's LinkedIn profile — AI crafts a personalised connection request and follow-up message.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <circle cx="16" cy="16" r="5" stroke="#d97706" strokeWidth="1.8" />
        <path d="M8 32c0-5 3.6-8 8-8" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 22l8 8M24 30l8-8" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "Coming Soon",
    category: "Networking",
  },
  {
    id: "interview-prep",
    name: "Interview Prep AI",
    tagline: "Practice with real AI feedback",
    description: "Paste a job description and get tailored interview questions with ideal answer frameworks and STAR-method examples.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="12" width="24" height="18" rx="3" stroke="#d97706" strokeWidth="1.8" />
        <path d="M14 20h4M14 24h8" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="26" cy="20" r="3" fill="#fbbf24" />
        <path d="M20 12V9M16 9h8" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    badge: "Coming Soon",
    category: "Interview",
  },
  {
    id: "salary-negotiator",
    name: "Salary Negotiator",
    tagline: "Know your worth, ask for it",
    description: "Input your role, location, and experience — AI generates negotiation scripts and counter-offer responses with market data.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <circle cx="20" cy="20" r="11" stroke="#d97706" strokeWidth="1.8" />
        <path d="M20 13v14M17 16h4.5a2.5 2.5 0 0 1 0 5H17a2.5 2.5 0 0 0 0 5H23" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    badge: "Coming Soon",
    category: "Job Search",
  },
  {
    id: "job-tracker",
    name: "Job Tracker",
    tagline: "All your applications, one place",
    description: "Track every job application — status, contacts, follow-up reminders, and response rates — with a clean dashboard.",
    icon: (
      <svg viewBox="0 0 40 40" className="size-10" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="10" width="24" height="22" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M14 8v4M26 8v4M8 18h24" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 24l2.5 2.5L20 22M23 24h5M23 27h3" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "Coming Soon",
    category: "Productivity",
  },
];

const badgeStyles: Record<Tool["badge"], string> = {
  "Live":         "bg-emerald-100 text-emerald-700 border border-emerald-200",
  "Beta":         "bg-blue-100 text-blue-700 border border-blue-200",
  "Coming Soon":  "bg-amber-100 text-amber-700 border border-amber-200",
};

const categoryColors: Record<string, string> = {
  "Job Search":      "text-amber-600 bg-amber-50 border-amber-200",
  "Networking":      "text-sky-600 bg-sky-50 border-sky-200",
  "Interview":       "text-violet-600 bg-violet-50 border-violet-200",
  "Productivity":    "text-emerald-600 bg-emerald-50 border-emerald-200",
  "Developer Tools": "text-teal-600 bg-teal-50 border-teal-200",
};

function ToolCard({ tool }: { tool: Tool }) {
  const isLive = tool.badge === "Live";
  const card = (
    <div
      className={[
        "group relative flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm",
        "transition-all duration-200",
        isLive
          ? "border-amber-200 hover:border-amber-400 hover:shadow-md hover:shadow-amber-100 cursor-pointer"
          : "border-stone-200 opacity-80",
      ].join(" ")}
    >
      {/* Top row: icon + badges */}
      <div className="flex items-start justify-between gap-2">
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-1">
          {tool.icon}
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeStyles[tool.badge]}`}>
            {tool.badge}
          </span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[tool.category] ?? "text-stone-500 bg-stone-50 border-stone-200"}`}>
            {tool.category}
          </span>
        </div>
      </div>

      {/* Name + tagline */}
      <div>
        <h3 className="font-semibold text-stone-900 text-base leading-snug">{tool.name}</h3>
        <p className="text-[11px] font-medium text-amber-600 mt-0.5 tracking-wide uppercase">
          {tool.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-stone-600 leading-relaxed flex-1">
        {tool.description}
      </p>

      {/* CTA */}
      {isLive ? (
        <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-700 group-hover:gap-2.5 transition-all">
          <span>Open Tool</span>
          <ArrowIcon />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-xs text-stone-400">
          <CheckIcon />
          <span>Notify me when live</span>
        </div>
      )}

      {/* Golden bottom border on hover for live tools */}
      {isLive && (
        <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </div>
  );

  if (isLive && tool.href) {
    return (
      <a href={tool.href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }
  return card;
}

export default function SaasPage() {
  const liveCount = tools.filter(t => t.badge === "Live").length;
  const totalCount = tools.length;

  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 w-full max-w-5xl px-4">

        {/* Shared portfolio header (constrained width) */}
        <div className="animate-in max-w-xl">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 max-w-xl">
          <Divider />
        </div>

        {/* SaaS section header */}
        <div className="animate-in animate-delay-2 flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-300 shadow-sm">
                <svg viewBox="0 0 20 20" className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <h2 className="text-xl font-bold text-stone-900 dark:text-olive-100">
                SaaS Tools
              </h2>
            </div>
            <span className="text-xs text-stone-500 dark:text-olive-400 font-medium bg-stone-100 dark:bg-olive-800 px-2.5 py-1 rounded-full">
              {liveCount} live · {totalCount - liveCount} in development
            </span>
          </div>
          <p className="text-sm text-stone-600 dark:text-olive-400 max-w-xl leading-relaxed">
            AI-powered tools I&apos;ve built to solve real job-search and productivity problems. All run on my own infrastructure — no third-party data sharing.
          </p>
        </div>

        {/* Golden divider */}
        <div className="animate-in animate-delay-2 h-px bg-gradient-to-r from-amber-200 via-yellow-300 to-transparent" />

        {/* Tools grid — 3 columns, scrollable */}
        <div className="animate-in animate-delay-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
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
