import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Expert Mobile Developer — React Native, Flutter, iOS & Android | Zulqurnain",
  description:
    "Hire an expert mobile developer for React Native, Flutter, Swift, and Kotlin projects. 15+ shipped consumer apps, millions of users, full-lifecycle delivery from design to App Store.",
  alternates: { canonical: "https://zulqurnainj.com/services/mobile-developer" },
  openGraph: {
    url: "https://zulqurnainj.com/services/mobile-developer",
    title: "Expert Mobile Developer — React Native · Flutter · iOS · Android",
    description: "15+ shipped consumer apps. React Native, Flutter, Swift, Kotlin. Full-lifecycle mobile development — from design to App Store.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Expert Mobile Developer", description: "React Native · Flutter · iOS · Android. 15+ apps shipped." },
};

const skills = [
  { name: "React Native", level: 5, desc: "Cross-platform apps with native performance. Custom modules, animations, Expo and bare workflow." },
  { name: "Flutter", level: 5, desc: "Beautiful, expressive UIs that feel native on both platforms. Dart, BLoC, Riverpod." },
  { name: "iOS · Swift · SwiftUI", level: 4, desc: "Full native iOS apps. UIKit, SwiftUI, Core Data, push notifications, App Store submission." },
  { name: "Android · Kotlin · Compose", level: 5, desc: "Modern Android with Jetpack Compose, MVVM, Room, coroutines, and Play Store publishing." },
  { name: "Backend Integration", level: 5, desc: "REST, GraphQL, WebSockets, Firebase, and custom APIs. I build the backend too if needed." },
  { name: "Security", level: 4, desc: "Certificate pinning, code obfuscation, Frida countermeasures, and secure storage." },
];

const deliverables = [
  "Full source code with clean architecture",
  "App Store and Google Play submission",
  "CI/CD pipeline setup",
  "Push notifications (FCM / APNs)",
  "In-app purchases & subscriptions",
  "Analytics & crash reporting",
  "Offline-first data sync",
  "Accessibility compliance",
];

const industries = [
  "Fintech & Banking",
  "E-commerce",
  "Ride-sharing & Transit",
  "Healthcare",
  "EdTech",
  "Real Estate",
  "Enterprise / B2B",
  "Social & Community",
];

const projects = [
  { label: "Mobile wallet for millions of users", stack: "React Native · Spring Boot · AWS", platform: "iOS & Android" },
  { label: "Shopping app with AI-powered search", stack: "React Native · Flutter · Python · Pinecone", platform: "iOS & Android" },
  { label: "Banking app with SWIFT integration", stack: "React Native · Java · Oracle DB", platform: "iOS & Android" },
  { label: "Mass-transit booking & real-time tracking", stack: "Swift · SwiftUI · Kotlin · Compose · GCP", platform: "iOS & Android" },
  { label: "HR & workforce management platform", stack: "Flutter · Laravel · MySQL", platform: "iOS & Android" },
  { label: "On-demand delivery with security hardening", stack: "Kotlin · Jetpack Compose · Frida", platform: "Android" },
];

export default function MobileDeveloperPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen">

      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col gap-5">
          <a href="/" className="text-blue-200 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5">
            ← Zulqurnain Haider
          </a>
          <div>
            <p className="text-blue-200 text-xs font-medium uppercase tracking-widest mb-2">Service</p>
            <h1 className="text-3xl font-bold leading-tight">Expert Mobile Developer</h1>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
            Pixel-perfect, high-performance mobile apps built to scale. React Native, Flutter, Swift, and Kotlin —
            delivered end-to-end, from first wireframe to App Store.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React Native", "Flutter", "iOS", "Android", "15+ apps shipped"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 font-medium">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/60178613992?text=Hi!%20I%20need%20a%20mobile%20app%20built"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project
            </a>
            <a
              href="mailto:me@zulqurnainj.com?subject=Mobile%20Development%20Project"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500/30 border border-blue-400/40 text-white font-semibold hover:bg-blue-500/40 transition-colors"
            >
              Send Brief
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-12">

        {/* Skills */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">What I build with</h2>
          <div className="flex flex-col gap-3">
            {skills.map((s) => (
              <div key={s.name} className="flex flex-col gap-1.5 p-4 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-sm text-olive-800 dark:text-olive-100">{s.name}</p>
                  <div className="flex gap-1 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`size-1.5 rounded-full ${i < s.level ? "bg-blue-500" : "bg-olive-200 dark:bg-olive-700"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Industries I&apos;ve built for</h2>
          <div className="flex flex-wrap gap-2">
            {industries.map((a) => (
              <span key={a} className="text-sm px-3 py-1.5 rounded-lg bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800 text-olive-700 dark:text-olive-300 font-medium">
                {a}
              </span>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="flex flex-col gap-4 p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40">
          <h2 className="text-lg font-bold text-olive-900 dark:text-olive-100">What you get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-2 text-sm text-olive-700 dark:text-olive-300">
                <span className="text-blue-500 shrink-0 font-bold">—</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Types of apps I&apos;ve shipped</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((p) => (
              <div key={p.label} className="flex flex-col gap-1.5 p-4 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
                <p className="text-sm font-semibold text-olive-800 dark:text-olive-100">{p.label}</p>
                <p className="text-xs text-olive-500 font-mono">{p.stack}</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 self-start font-medium">{p.platform}</span>
              </div>
            ))}
          </div>
          <a href="/projects" className="text-sm text-olive-500 hover:text-olive-800 dark:hover:text-olive-200 transition-colors">
            See full project gallery →
          </a>
        </section>

        {/* Process */}
        <section className="flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
          <h2 className="text-lg font-bold text-olive-900 dark:text-olive-100">How we work together</h2>
          <ol className="flex flex-col gap-3">
            {[
              "Discovery call — I understand your idea, users, and goals.",
              "Scope & estimate — clear deliverables, timeline, and price. No surprises.",
              "Build — weekly updates, staging previews, and you're always in the loop.",
              "QA & launch — I handle testing, App Store submission, and production deployment.",
              "Support — bug fixes and iterations post-launch.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-olive-700 dark:text-olive-300">
                <span className="shrink-0 size-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-4 text-center py-6">
          <p className="text-lg font-bold text-olive-900 dark:text-olive-100">Have a mobile app idea?</p>
          <p className="text-sm text-olive-600 dark:text-olive-400 max-w-sm">Let&apos;s talk scope, timeline, and budget. I respond within 24 hours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/60178613992?text=Hi!%20I%20need%20a%20mobile%20app%20built"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:me@zulqurnainj.com?subject=Mobile%20App%20Project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 font-semibold hover:opacity-80 transition-opacity"
            >
              Send Brief
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
