import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Employee For You — Social Media, Email & Scheduling | Zulqurnain",
  description:
    "Hire a custom AI employee that manages your Instagram, Facebook, X, TikTok, YouTube, emails, and meetings — all from WhatsApp, Discord, or Telegram. Starting at $20/month.",
  alternates: { canonical: "https://zulqurnainj.com/services/ai-employee" },
  openGraph: {
    url: "https://zulqurnainj.com/services/ai-employee",
    title: "Your AI Employee — Starting at $20/month",
    description: "Custom AI agent that manages your social media, emails, and meetings from WhatsApp, Discord, or Telegram. No new apps. From $20/mo.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Your AI Employee — From $20/month", description: "Custom AI that manages your socials, email & schedule from WhatsApp/Discord/Telegram." },
};

const features = [
  {
    title: "Social Media — Fully Managed",
    desc: "Your AI employee writes captions, researches hashtags, schedules posts, and replies to comments on Instagram, Facebook, X (Twitter), TikTok, and YouTube. Consistent posting without you lifting a finger.",
  },
  {
    title: "Meeting Scheduling",
    desc: "Send a message like \"Schedule a call with Ahmed on Thursday\" and your AI checks your calendar, finds a free slot, sends the invite, and follows up. No more back-and-forth.",
  },
  {
    title: "Email Management",
    desc: "Reads your inbox, summarises what matters, drafts replies in your tone, and flags urgent messages. Handles routine emails so you only deal with what needs you.",
  },
  {
    title: "Content Ideas & Suggestions",
    desc: "Weekly content calendars, trending topic alerts, viral post ideas, and performance summaries — delivered as a simple chat message every morning.",
  },
  {
    title: "Lead Follow-ups & Outreach",
    desc: "Follows up with leads, sends check-in messages, and keeps your pipeline warm — all personalised, none of it generic.",
  },
  {
    title: "Anything Repetitive",
    desc: "Research, reminders, data entry, report generation, customer support FAQs — if it's repetitive, your AI employee does it.",
  },
];

const platforms = [
  { name: "WhatsApp", color: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800/40 dark:text-green-300" },
  { name: "Telegram", color: "bg-sky-50 border-sky-200 text-sky-800 dark:bg-sky-900/20 dark:border-sky-800/40 dark:text-sky-300" },
  { name: "Discord", color: "bg-indigo-50 border-indigo-200 text-indigo-800 dark:bg-indigo-900/20 dark:border-indigo-800/40 dark:text-indigo-300" },
  { name: "Web Chat", color: "bg-olive-100 border-olive-200 text-olive-800 dark:bg-olive-800/30 dark:border-olive-700/40 dark:text-olive-300" },
];

const pricing = [
  {
    tier: "Starter",
    price: "$20",
    period: "/month",
    features: ["1 social media channel", "Email management", "Meeting scheduling", "Daily summaries"],
    cta: "Get Started",
    highlight: false,
  },
  {
    tier: "Growth",
    price: "$49",
    period: "/month",
    features: ["Up to 4 social channels", "Email + inbox management", "Content calendar", "Lead follow-ups", "Weekly analytics"],
    cta: "Most Popular",
    highlight: true,
  },
  {
    tier: "Full Team",
    price: "$99",
    period: "/month",
    features: ["Unlimited channels", "Full social media ops", "Email + CRM integration", "Content creation", "Priority support"],
    cta: "Contact Me",
    highlight: false,
  },
];

export default function AiEmployeePage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen">

      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col gap-5">
          <a href="/" className="text-violet-200 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5">
            ← Zulqurnain Haider
          </a>
          <div>
            <p className="text-violet-200 text-xs font-medium uppercase tracking-widest mb-2">Service</p>
            <h1 className="text-3xl font-bold leading-tight">Your AI Employee</h1>
          </div>
          <p className="text-xl text-violet-100 leading-relaxed max-w-lg">
            A tireless digital team member that manages your socials, emails, and schedule —
            all from <strong className="text-white">WhatsApp, Discord, or Telegram</strong>.
          </p>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold">$20</span>
            <span className="text-violet-200 text-lg mb-1">/month to start</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/60178613992?text=Hi!%20I'm%20interested%20in%20the%20AI%20Employee%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-violet-700 font-semibold hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://t.me/zthenomad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500/30 border border-violet-400/40 text-white font-semibold hover:bg-violet-500/40 transition-colors"
            >
              Message on Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-12">

        {/* What it does */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Everything a normal employee does — in your chat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
                <h3 className="font-semibold text-sm text-olive-800 dark:text-olive-100">{f.title}</h3>
                <p className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Works where you already are</h2>
          <p className="text-sm text-olive-600 dark:text-olive-400">No new apps to install. Your AI employee lives inside your favourite chat platform.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platforms.map((p) => (
              <div key={p.name} className={`flex items-center justify-center p-3 rounded-xl border font-semibold text-sm ${p.color}`}>
                {p.name}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Simple pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pricing.map((p) => (
              <div key={p.tier} className={`flex flex-col gap-3 p-5 rounded-2xl border ${p.highlight ? "bg-violet-600 border-violet-500 text-white" : "bg-white dark:bg-olive-950 border-olive-200 dark:border-olive-800"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider ${p.highlight ? "text-violet-200" : "text-olive-500 dark:text-olive-400"}`}>{p.tier}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-3xl font-bold ${p.highlight ? "text-white" : "text-olive-900 dark:text-olive-100"}`}>{p.price}</span>
                  <span className={`text-sm mb-0.5 ${p.highlight ? "text-violet-200" : "text-olive-500 dark:text-olive-400"}`}>{p.period}</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-1.5 text-xs ${p.highlight ? "text-violet-100" : "text-olive-600 dark:text-olive-400"}`}>
                      <span className="mt-0.5 shrink-0">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/60178613992?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.tier)}%20AI%20Employee%20plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto text-center text-sm font-semibold py-2 px-4 rounded-lg transition-opacity hover:opacity-80 ${p.highlight ? "bg-white text-violet-700" : "bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900"}`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
          <h2 className="text-lg font-bold text-olive-900 dark:text-olive-100">How does it work?</h2>
          <ol className="flex flex-col gap-3">
            {[
              "You contact me on WhatsApp or Telegram — we discuss your needs in 15 minutes.",
              "I set up and configure a custom AI agent tailored to your business and communication style.",
              "Your AI employee goes live inside your preferred chat app — ready to manage your socials, emails, and schedule.",
              "I monitor and improve the agent weekly. You stay in control and can adjust anytime.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-olive-700 dark:text-olive-300">
                <span className="shrink-0 size-6 flex items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col items-center gap-4 text-center py-6">
          <p className="text-lg font-bold text-olive-900 dark:text-olive-100">Ready to hire your AI employee?</p>
          <p className="text-sm text-olive-600 dark:text-olive-400 max-w-sm">Message me now and your AI employee can be live within 48 hours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/60178613992?text=Hi!%20I'm%20interested%20in%20the%20AI%20Employee%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:me@zulqurnainj.com?subject=AI%20Employee%20Service"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 font-semibold hover:opacity-80 transition-opacity"
            >
              Send Email
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
