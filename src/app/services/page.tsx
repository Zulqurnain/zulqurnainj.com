"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

const services = [
  {
    id: "ai-employee",
    label: "AI",
    accentBorder: "border-l-violet-400",
    accentBg: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    iconEl: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Create Your AI Employee",
    badge: "From $20 / month",
    tagline: "A tireless digital team member that lives in your favourite chat app.",
    href: "/services/ai-employee",
    summary:
      "Hire a fully custom AI agent that manages your social media, answers emails, schedules meetings, and keeps your business running — all from WhatsApp, Discord, or Telegram.",
    features: [
      {
        title: "Social Media Management",
        desc: "Automated posting, caption writing, hashtag research, and engagement replies for Instagram, Facebook, X (Twitter), TikTok, and YouTube.",
      },
      {
        title: "Meeting Scheduling",
        desc: "Checks your calendar, proposes slots, sends invites, and follows up — no back-and-forth email chains.",
      },
      {
        title: "Email Management",
        desc: "Reads, summarises, drafts replies, and flags urgent messages. Acts as your always-on inbox assistant.",
      },
      {
        title: "Works Where You Are",
        desc: "Available on WhatsApp, Telegram, Discord, or any platform you prefer to chat. No new apps to learn.",
      },
      {
        title: "Content Suggestions",
        desc: "Weekly content ideas, trending topic alerts, and performance insights delivered as a simple chat message.",
      },
      {
        title: "Everything a Normal Employee Does",
        desc: "Research, reminders, lead follow-ups, customer support replies — your AI employee handles the grind so you can focus on the vision.",
      },
    ],
    cta: "Get Your AI Employee",
    ctaHref: "/services/ai-employee",
  },
  {
    id: "mobile-developer",
    label: "MOB",
    accentBorder: "border-l-blue-400",
    accentBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    iconEl: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Expert Mobile Developer",
    badge: "iOS · Android · Cross-platform",
    tagline: "Pixel-perfect apps that perform at scale.",
    href: "/services/mobile-developer",
    summary:
      "I build native and cross-platform mobile apps from scratch — React Native, Flutter, Swift, and Kotlin. 15+ shipped apps, millions of users, clean architecture.",
    features: [
      {
        title: "React Native",
        desc: "High-performance cross-platform apps with native feel — shared codebase, platform-specific polish.",
      },
      {
        title: "Flutter",
        desc: "Beautiful, fast, and expressive apps for iOS and Android from a single codebase.",
      },
      {
        title: "Native iOS — Swift / SwiftUI",
        desc: "Pure native iOS development — full access to platform APIs, smooth animations, App Store ready.",
      },
      {
        title: "Native Android — Kotlin / Compose",
        desc: "Modern Android with Jetpack Compose, MVVM architecture, and Kotlin coroutines.",
      },
      {
        title: "Security & Performance",
        desc: "Code hardening, obfuscation, certificate pinning, and reverse-engineering countermeasures.",
      },
      {
        title: "Full Delivery",
        desc: "From design handoff to App Store and Google Play submission — I handle the full lifecycle.",
      },
    ],
    cta: "Hire Mobile Developer",
    ctaHref: "/services/mobile-developer",
  },
  {
    id: "web-developer",
    label: "WEB",
    accentBorder: "border-l-emerald-400",
    accentBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    iconEl: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Expert Web Developer",
    badge: "Next.js · Go · Python · AI",
    tagline: "Fast, scalable web products with AI built in.",
    href: "/services/web-developer",
    summary:
      "I build full-stack web products — from marketing sites to complex SaaS platforms with AI/RAG pipelines. TypeScript, Next.js, Go, Python, and cloud infrastructure.",
    features: [
      {
        title: "Next.js & React",
        desc: "Server-side rendering, static generation, and modern React — fast, SEO-friendly, production-ready.",
      },
      {
        title: "Backend APIs — Go · Python · Node.js",
        desc: "High-throughput REST and GraphQL APIs. Go for performance, Python for AI/ML, Node.js for rapid iteration.",
      },
      {
        title: "AI / RAG Pipelines",
        desc: "LLM integrations, retrieval-augmented generation, semantic search with Pinecone and FAISS, OpenAI APIs.",
      },
      {
        title: "Databases & Storage",
        desc: "PostgreSQL, MySQL, MongoDB, Redis — schema design, migrations, query optimisation.",
      },
      {
        title: "Cloud & DevOps",
        desc: "AWS, GCP, Docker, Kubernetes, CI/CD pipelines. I deploy, monitor, and scale.",
      },
      {
        title: "SaaS & Product",
        desc: "Payments (Stripe), auth, multi-tenancy, subscriptions — I've built end-to-end SaaS products.",
      },
    ],
    cta: "Hire Web Developer",
    ctaHref: "/services/web-developer",
  },
];

export default function ServicesPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-2 w-full flex flex-col gap-1">
          <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">Services</h2>
          <p className="text-sm text-olive-600 dark:text-olive-400 leading-relaxed">
            Three ways I can help — expand each card to learn more.
          </p>
        </div>

        <div className="animate-in animate-delay-3 w-full flex flex-col gap-3">
          {services.map((svc) => {
            const isOpen = open === svc.id;
            return (
              <div
                key={svc.id}
                className={`rounded-2xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800 border-l-4 ${svc.accentBorder} overflow-hidden transition-all`}
              >
                {/* Header row */}
                <button
                  onClick={() => setOpen(isOpen ? null : svc.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`shrink-0 size-8 flex items-center justify-center rounded-lg ${svc.accentBg}`}>
                      {svc.iconEl}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">{svc.title}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${svc.accentBg}`}>{svc.badge}</span>
                      </div>
                      <p className="text-xs text-olive-500 dark:text-olive-400 mt-0.5">{svc.tagline}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 text-olive-400 dark:text-olive-600 transition-transform duration-200 text-lg leading-none ${isOpen ? "rotate-90" : ""}`}>
                    ›
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-4 pb-5 flex flex-col gap-4 border-t border-olive-100 dark:border-olive-800 pt-4">
                    <p className="text-sm text-olive-700 dark:text-olive-300 leading-relaxed">{svc.summary}</p>

                    <div className="flex flex-col gap-3">
                      {svc.features.map((f) => (
                        <div key={f.title} className="flex gap-3 items-start">
                          <span className="shrink-0 mt-1 size-1.5 rounded-full bg-olive-400 dark:bg-olive-600" />
                          <div>
                            <p className="text-sm font-semibold text-olive-800 dark:text-olive-100">{f.title}</p>
                            <p className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed mt-0.5">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={svc.ctaHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 text-sm font-semibold hover:opacity-80 transition-opacity self-start"
                    >
                      {svc.cta} →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="animate-in animate-delay-4 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-4 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
