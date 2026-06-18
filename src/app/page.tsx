import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Zulqurnain Haider — Explorer, Maker & Software Engineer | Pakistan",
  description:
    "Zulqurnain Haider — software engineer, explorer, and maker from Lahore, Pakistan. I build mobile apps, web platforms, and AI tools from wherever the road takes me. React Native, Flutter, Go, Python, AI/RAG.",
  alternates: { canonical: "https://zulqurnainj.com" },
  openGraph: {
    url: "https://zulqurnainj.com",
    title: "Zulqurnain Haider — Explorer, Maker & Software Engineer | Pakistan",
    description: "Explorer and software engineer from Pakistan. I build apps, AI tools, and ship ideas — from wherever the road takes me.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const skills = [
  { label: "React Native", cat: "mobile" },
  { label: "Flutter", cat: "mobile" },
  { label: "iOS · Swift", cat: "mobile" },
  { label: "Android · Kotlin", cat: "mobile" },
  { label: "Next.js", cat: "web" },
  { label: "React", cat: "web" },
  { label: "TypeScript", cat: "web" },
  { label: "Go", cat: "web" },
  { label: "Python", cat: "web" },
  { label: "Node.js", cat: "web" },
  { label: "AI / RAG", cat: "ai" },
  { label: "OpenAI", cat: "ai" },
  { label: "LLM Pipelines", cat: "ai" },
  { label: "Pinecone / FAISS", cat: "ai" },
  { label: "AWS", cat: "devops" },
  { label: "Docker", cat: "devops" },
  { label: "Kubernetes", cat: "devops" },
  { label: "PostgreSQL", cat: "devops" },
];

const catColor: Record<string, string> = {
  mobile: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  web: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  ai: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  devops: "bg-olive-200 text-olive-700 dark:bg-olive-800 dark:text-olive-300",
};

const services = [
  {
    href: "/services/ai-employee",
    accent: "border-l-violet-400",
    iconBg: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "AI Employee For You",
    sub: "Manage your socials, emails & schedule — from $20/mo",
  },
  {
    href: "/services/mobile-developer",
    accent: "border-l-blue-400",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Expert Mobile Developer",
    sub: "React Native · Flutter · Swift · Kotlin",
  },
  {
    href: "/services/web-developer",
    accent: "border-l-emerald-400",
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Expert Web Developer",
    sub: "Next.js · Go · Python · AI/RAG · Full Stack",
  },
];

export default function Home() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        {/* Bio */}
        <div className="font-normal min-w-full text-olive-800 dark:text-olive-100 text-sm/6 text-justify flex flex-col gap-4">
          <p className="animate-in animate-delay-1">
            I&apos;m Zulqurnain — a{" "}
            <span className="font-medium">software engineer, explorer, and maker</span>{" "}
            from Lahore, Pakistan. I build mobile apps, web platforms, and AI tools
            from wherever the road takes me. The world is my office.
          </p>
          <p className="animate-in animate-delay-2">
            8+ years of engineering, 15+ shipped consumer apps, millions of users —
            across fintech, e-commerce, EdTech, transit, and healthcare. I move fast,
            own the full stack, and take ideas from zero to production.
          </p>
          <p className="animate-in animate-delay-3">
            When I&apos;m not writing code, I&apos;m on the road —{" "}
            <span className="font-medium">exploring new places, cultures, and perspectives</span>.
            Adventure sharpens the mind. Curiosity drives the work.
          </p>
          <p className="animate-in animate-delay-4">
            Open to client work, collabs, and new adventures.{" "}
            <a href="mailto:me@zulqurnainj.com" className="link">Say hello</a>{" "}
            or find me on{" "}
            <a href="https://linkedin.com/in/zulqurnainj" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>.
          </p>
        </div>

        {/* Skills */}
        <div className="animate-in animate-delay-5 w-full flex flex-col gap-3">
          <p className="text-olive-400 dark:text-olive-600 text-sm uppercase font-mono">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s.label} className={`text-xs px-2.5 py-1 rounded-full font-medium ${catColor[s.cat]}`}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-in animate-delay-6 w-full">
          <Divider />
        </div>

        {/* Services */}
        <div className="animate-in animate-delay-7 w-full flex flex-col gap-3">
          <p className="text-olive-400 dark:text-olive-600 text-sm uppercase font-mono">What I offer</p>
          <div className="flex flex-col gap-2.5">
            {services.map((svc) => (
              <a
                key={svc.href}
                href={svc.href}
                className={`flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800 border-l-4 ${svc.accent} hover:border-olive-400 dark:hover:border-olive-600 transition-all group`}
              >
                <div className="flex items-center gap-3">
                  <span className={`shrink-0 size-8 flex items-center justify-center rounded-lg ${svc.iconBg}`}>
                    {svc.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-olive-800 dark:text-olive-100">{svc.title}</p>
                    <p className="text-xs text-olive-500 dark:text-olive-400">{svc.sub}</p>
                  </div>
                </div>
                <span className="text-olive-400 group-hover:text-olive-700 dark:group-hover:text-olive-200 transition-colors text-lg leading-none">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="animate-in animate-delay-8 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-8 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
