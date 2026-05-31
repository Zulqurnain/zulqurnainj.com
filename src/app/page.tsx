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
    icon: "🤖",
    title: "AI Employee For You",
    sub: "Manage your socials, emails & schedule — from $20/mo",
  },
  {
    href: "/services/mobile-developer",
    icon: "📱",
    title: "Expert Mobile Developer",
    sub: "React Native · Flutter · Swift · Kotlin",
  },
  {
    href: "/services/web-developer",
    icon: "🌐",
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
            <a href="https://linkedin.com/in/zulqurnainjj" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>.
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
                className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800 hover:border-olive-400 dark:hover:border-olive-600 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{svc.icon}</span>
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
