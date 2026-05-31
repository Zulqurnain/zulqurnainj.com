import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Expert Web Developer — Next.js, Go, Python, AI & Full Stack | Zulqurnain",
  description:
    "Hire an expert full-stack web developer. Next.js, React, Go, Python, TypeScript, AI/RAG pipelines, AWS, and SaaS platforms. Fast, scalable, production-ready.",
  alternates: { canonical: "https://zulqurnainj.com/services/web-developer" },
  openGraph: {
    url: "https://zulqurnainj.com/services/web-developer",
    title: "Expert Web Developer — Next.js · Go · Python · AI",
    description: "Full-stack web development with AI built in. Next.js, Go, Python, TypeScript, RAG pipelines, AWS. From landing pages to complex SaaS.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Expert Web Developer", description: "Next.js · Go · Python · AI/RAG · Full Stack. Fast, scalable web products." },
};

const skills = [
  { name: "Next.js & React", level: 5, cat: "Frontend", desc: "Server-side rendering, static generation, React Server Components, app router, and pixel-perfect UIs with Tailwind." },
  { name: "TypeScript", level: 5, cat: "Frontend", desc: "Type-safe, maintainable codebases. End-to-end typing from API to UI." },
  { name: "Go", level: 5, cat: "Backend", desc: "High-throughput services, REST APIs, microservices, and CLI tools. Fast to build, blazing to run." },
  { name: "Python", level: 5, cat: "Backend", desc: "FastAPI, Django, data processing, ML pipelines, and scripting. My go-to for AI work." },
  { name: "Node.js", level: 4, cat: "Backend", desc: "Express, NestJS, serverless functions, and real-time WebSocket applications." },
  { name: "AI / RAG Pipelines", level: 5, cat: "AI", desc: "Retrieval-augmented generation, semantic search, LLM orchestration, embeddings, Pinecone, FAISS." },
  { name: "OpenAI Integration", level: 5, cat: "AI", desc: "GPT-4o, assistants API, function calling, streaming, and fine-tuning for production applications." },
  { name: "AWS / GCP", level: 4, cat: "DevOps", desc: "ECS, Lambda, S3, RDS, CloudFront — full cloud architecture and cost-optimised deployments." },
  { name: "Docker & Kubernetes", level: 4, cat: "DevOps", desc: "Containerised microservices, Helm charts, CI/CD with GitHub Actions." },
  { name: "Databases", level: 5, cat: "Data", desc: "PostgreSQL, MySQL, MongoDB, Redis, SQLite. Schema design, indexing, query optimisation, migrations." },
];

const catColor: Record<string, string> = {
  Frontend: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  Backend: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  AI: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  DevOps: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Data: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const projects = [
  { label: "AI-powered K-12 math practice platform", stack: "Next.js · OpenAI · RAG · Kafka · AWS ECS", type: "EdTech SaaS" },
  { label: "Online math contest with live leaderboards", stack: "Next.js · Node.js · PostgreSQL · AWS", type: "Web Platform" },
  { label: "Real estate CRM with AI marketing automation", stack: "React · Node.js · TypeScript · PostgreSQL", type: "AI / CRM" },
  { label: "Cloud ERP for Middle East SMEs", stack: "Go · Java · Python · React · Docker · Kubernetes", type: "SaaS" },
  { label: "EdTech tutoring with live whiteboard & WebRTC", stack: "React · Next.js · WebRTC · Stripe · AWS", type: "EdTech" },
  { label: "Islamic finance & investment platform", stack: "Django · PostgreSQL · Azure", type: "Fintech" },
];

const saasFeatures = [
  "Stripe payments & subscriptions",
  "Multi-tenant architecture",
  "Auth — JWT, OAuth, SSO",
  "Role-based access control",
  "Admin dashboards",
  "Email — SendGrid / Resend",
  "File uploads & CDN",
  "Rate limiting & security hardening",
];

export default function WebDeveloperPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen">

      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
        <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col gap-5">
          <a href="/" className="text-emerald-200 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5">
            ← Zulqurnain Haider
          </a>
          <div>
            <p className="text-emerald-200 text-xs font-medium uppercase tracking-widest mb-2">Service</p>
            <h1 className="text-3xl font-bold leading-tight">Expert Web Developer</h1>
          </div>
          <p className="text-xl text-emerald-100 leading-relaxed max-w-lg">
            Fast, scalable web products with AI built in — from landing pages to complex SaaS platforms.
            Full stack: frontend, backend, database, cloud, and AI pipelines.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Go", "Python", "TypeScript", "AI/RAG", "AWS"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/30 text-emerald-100 font-medium">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/60178613992?text=Hi!%20I%20need%20a%20web%20app%20built"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project
            </a>
            <a
              href="mailto:me@zulqurnainj.com?subject=Web%20Development%20Project"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/30 border border-emerald-400/40 text-white font-semibold hover:bg-emerald-500/40 transition-colors"
            >
              Send Brief
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-12">

        {/* Skills */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Tech stack</h2>
          <div className="flex flex-col gap-3">
            {skills.map((s) => (
              <div key={s.name} className="flex flex-col gap-1.5 p-4 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-sm text-olive-800 dark:text-olive-100">{s.name}</p>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${catColor[s.cat]}`}>{s.cat}</span>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`size-1.5 rounded-full ${i < s.level ? "bg-emerald-500" : "bg-olive-200 dark:bg-olive-700"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SaaS features */}
        <section className="flex flex-col gap-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40">
          <h2 className="text-lg font-bold text-olive-900 dark:text-olive-100">SaaS capabilities I ship out of the box</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {saasFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-olive-700 dark:text-olive-300">
                <span className="text-emerald-500 shrink-0 font-bold">—</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-olive-900 dark:text-olive-100">Web projects I&apos;ve built</h2>
          <div className="flex flex-col gap-3">
            {projects.map((p) => (
              <div key={p.label} className="flex flex-col gap-1.5 p-4 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-olive-800 dark:text-olive-100">{p.label}</p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">{p.type}</span>
                </div>
                <p className="text-xs text-olive-500 font-mono">{p.stack}</p>
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
              "Discovery call — I understand your product, users, and goals.",
              "Scope & estimate — clear deliverables, timeline, and price. No surprises.",
              "Build — bi-weekly demos on a staging URL. You give feedback, I iterate.",
              "Deploy — production deployment with monitoring, backups, and CI/CD.",
              "Support — available post-launch for fixes and feature additions.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-olive-700 dark:text-olive-300">
                <span className="shrink-0 size-6 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-4 text-center py-6">
          <p className="text-lg font-bold text-olive-900 dark:text-olive-100">Have a web product to build?</p>
          <p className="text-sm text-olive-600 dark:text-olive-400 max-w-sm">Tell me your idea. I respond within 24 hours with a rough scope and estimate.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/60178613992?text=Hi!%20I%20need%20a%20web%20app%20built"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:me@zulqurnainj.com?subject=Web%20Development%20Project"
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
