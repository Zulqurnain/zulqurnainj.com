import type { Metadata } from "next";
import type React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "SaaS Tools",
  description:
    "AI-powered SaaS tools and developer utilities built by Zulqurnain Haider — including Prompt Health Checker, Apply for Job, and more.",
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
  features: string[];
  href: string;
  badge: "Live" | "Beta" | "Coming Soon";
  badgeColor: string;
  icon: React.ReactNode;
  isNew?: boolean;
};

const PromptIcon = () => (
  <svg viewBox="0 0 40 40" className="size-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#0ea5e920"/>
    <rect x="7" y="10" width="20" height="3" rx="1.5" fill="#38bdf8"/>
    <rect x="7" y="16" width="15" height="2" rx="1" fill="#7dd3fc"/>
    <rect x="7" y="21" width="18" height="2" rx="1" fill="#7dd3fc"/>
    <circle cx="29" cy="28" r="7" fill="#22c55e"/>
    <path d="M26 28l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ApplyIcon = () => (
  <svg viewBox="0 0 40 40" className="size-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#fef3c720"/>
    <rect x="8" y="10" width="18" height="22" rx="2" stroke="#d97706" strokeWidth="1.8"/>
    <path d="M12 16h10M12 20h10M12 24h6" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="30" cy="14" r="5" fill="#fbbf24"/>
    <path d="M28 14h4M30 12v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 24l6 6" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const tools: Tool[] = [
  {
    id: "prompt-health-checker",
    name: "Prompt Health Checker",
    tagline: "Score · Analyze · Strengthen",
    description:
      "Paste any prompt and get a detailed health report — quality score, weak word detection, structural analysis, token estimates across 7 AI model families, and a rewritten stronger version. Free, no signup, runs locally in your browser.",
    features: [
      "Prompt health score (0–100) with 10-dimension weighted breakdown",
      "Detects hedging/weak language and highlights it inline",
      "Analyzes structural completeness: role, task, context, format, and more",
      "Token estimation for OpenAI, Anthropic, Gemini, Llama, Mistral, Grok, DeepSeek",
      "Generates 5 improved prompt variants: Concise, Expert, ChatGPT Style, Claude Style",
      "No API calls needed — fully deterministic and private",
    ],
    href: "https://tools.zulqurnainj.com/prompt-health-checker",
    badge: "Live",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    icon: <PromptIcon />,
    isNew: true,
  },
  {
    id: "apply-for-job",
    name: "Apply for Job",
    tagline: "Paste · Extract · Apply in one click",
    description:
      "Paste any job post or LinkedIn text and our AI extracts recruiter emails, WhatsApp numbers, and Telegram handles. Generates a personalised application email with your CV attached and lets you send it with a single click via your Gmail, Outlook, or Yahoo account.",
    features: [
      "Connect Gmail, Outlook, or Yahoo — send from your own address",
      "AI extracts emails, phone numbers, and Telegram usernames from any text",
      "Auto-generates a personalised email with your CV attached",
      "One-click WhatsApp and Telegram links with pre-filled message",
      "Upload your CV once — reused for every application",
    ],
    href: "https://tools.zulqurnainj.com",
    badge: "Live",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    icon: <ApplyIcon />,
  },
];

export default function SaasPage() {
  const liveCount = tools.filter((t) => t.badge === "Live").length;

  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 w-full flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
              SaaS Tools
            </h2>
            <span className="text-xs text-olive-400 dark:text-olive-600 bg-olive-200 dark:bg-olive-800 px-2 py-0.5 rounded-full">
              {liveCount} live
            </span>
          </div>
          <p className="text-sm text-olive-600 dark:text-olive-400 leading-relaxed">
            AI-powered tools and developer utilities I&apos;ve built to solve real problems. All run on self-hosted infrastructure.
          </p>
        </div>

        <div className="animate-in animate-delay-2 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-3 w-full flex flex-col gap-10">
          {tools.map((tool) => (
            <div key={tool.id} className="flex flex-col gap-4">
              {/* Title row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="rounded-xl border border-olive-200 dark:border-olive-700 bg-olive-50 dark:bg-olive-800 p-1.5">
                  {tool.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-olive-800 dark:text-olive-100 text-base">
                      {tool.name}
                    </h3>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                    {tool.isNew && (
                      <span className="text-xs px-1.5 py-0.5 rounded font-semibold bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-olive-500 dark:text-olive-500">
                    {tool.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-olive-700 dark:text-olive-300 leading-relaxed">
                {tool.description}
              </p>

              <ul className="flex flex-col gap-1.5">
                {tool.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-olive-600 dark:text-olive-400"
                  >
                    <span className="text-olive-400 dark:text-olive-600 mt-0.5 flex-shrink-0">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-sm font-medium bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Open Tool
              </a>
            </div>
          ))}
        </div>

        {/* offLlama note */}
        <div className="animate-in animate-delay-4 w-full flex items-start gap-2 text-xs text-olive-500 dark:text-olive-600 border border-olive-200 dark:border-olive-800 rounded-xl px-4 py-3 bg-olive-50 dark:bg-olive-800/40">
          <svg viewBox="0 0 20 20" className="size-3.5 shrink-0 mt-0.5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"/>
          </svg>
          <span>
            All tools run on self-hosted infrastructure. AI inference powered by{" "}
            <a href="https://github.com/Zulqurnain/offllama" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-olive-800 dark:hover:text-olive-300 transition-colors">
              offLLama
            </a>
            {" "}— an open-source library I built to run llama.cpp on shared hosting.
          </span>
        </div>

        <div className="animate-in animate-delay-5 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-5 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
