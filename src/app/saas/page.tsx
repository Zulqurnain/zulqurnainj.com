import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "SaaS Tools",
  description:
    "SaaS tools built by Zulqurnain Haider. Includes Apply for Job — an AI-powered tool to extract recruiter contacts from job posts and apply with one click.",
  alternates: { canonical: "https://zulqurnainj.com/saas" },
  openGraph: {
    url: "https://zulqurnainj.com/saas",
    title: "SaaS Tools | Zulqurnain Haider",
    description: "AI-powered SaaS tools by Zulqurnain Haider.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const tools = [
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
    image: "/saas/apply-for-job.svg",
    badge: "Live",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
];

export default function SaasPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 w-full flex flex-col gap-1">
          <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
            SaaS Tools
          </h2>
          <p className="text-sm text-olive-600 dark:text-olive-400 leading-relaxed">
            AI-powered tools I&apos;ve built to solve real problems.
          </p>
        </div>

        <div className="animate-in animate-delay-2 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-3 w-full flex flex-col gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="flex flex-col gap-4">
              {/* Card image */}
              <div className="w-full rounded-xl overflow-hidden bg-olive-900 dark:bg-olive-950 aspect-[5/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title row */}
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-olive-800 dark:text-olive-100 text-lg">
                  {tool.name}
                </h3>
                <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${tool.badgeColor}`}>
                  {tool.badge}
                </span>
              </div>

              <p className="text-xs text-olive-500 dark:text-olive-500 -mt-2">
                {tool.tagline}
              </p>

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

        <div className="animate-in animate-delay-4 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-5 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
