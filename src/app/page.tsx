import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Zulqurnain Haider — Senior Full Stack Developer (Gen AI)",
  description:
    "Zulqurnain Haider — Senior Full Stack Developer (Gen AI). 8+ years shipping mobile, web, and AI/LLM systems for enterprise fintech and retail platforms — Android, React Native, Node.js, RAG pipelines.",
  alternates: { canonical: "https://zulqurnainj.com" },
  openGraph: {
    url: "https://zulqurnainj.com",
    title: "Zulqurnain Haider — Senior Full Stack Developer (Gen AI)",
    description: "8+ years shipping mobile, web, and AI/LLM systems for enterprise fintech and retail platforms.",
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
  { label: "NestJS", cat: "web" },
  { label: "TypeScript", cat: "web" },
  { label: "Go", cat: "web" },
  { label: "Python", cat: "web" },
  { label: "Gen AI", cat: "ai" },
  { label: "RAG", cat: "ai" },
  { label: "Agentic AI", cat: "ai" },
  { label: "OpenAI / Claude API", cat: "ai" },
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
  { href: "/services/ai-employee", label: "AI Employee", color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" },
  { href: "/services/mobile-developer", label: "Mobile Developer", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { href: "/services/web-developer", label: "Web Developer", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
];

export default function Home() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-5">
      <div className="flex flex-col gap-3 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        {/* AI × Mobile positioning block */}
        <div className="animate-in animate-delay-2 w-full flex flex-col gap-2 rounded-2xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800 p-3.5">
          <p className="text-xs font-mono text-olive-500 dark:text-olive-400 uppercase tracking-wider">AI × Mobile</p>
          <p className="text-olive-800 dark:text-olive-100 text-sm leading-relaxed">
            <span className="font-semibold">Shipping on-device AI that keeps data on the phone.</span>{" "}
            RAG and LLM pipelines that run on-device, not in the cloud —{" "}
            <a href="/on-device" className="text-olive-700 dark:text-olive-300 hover:underline font-medium">see the proof →</a>
          </p>
          <div className="flex flex-wrap gap-2">
            {["On-device LLM", "RAG pipelines", "React Native", "Flutter"].map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-olive-100 dark:bg-olive-900 text-olive-700 dark:text-olive-300 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="font-normal min-w-full text-olive-800 dark:text-olive-100 text-sm/5 text-justify flex flex-col gap-2.5">
          <p className="animate-in animate-delay-1">
            I&apos;m Zulqurnain — a{" "}
            <span className="font-medium">Senior Full Stack Developer (Gen AI)</span>{" "}
            based in Lahore, Pakistan, with 8+ years across mobile, full-stack web,
            and Gen AI. I build production mobile apps, private on-device AI, and
            full-stack web systems for enterprise fintech and EdTech platforms
            serving millions of users — moving fast, owning the full stack, zero
            to production.
          </p>
          <p className="animate-in animate-delay-2">
            When I&apos;m not writing code, I&apos;m on the road exploring new places and
            cultures. Open to client work, collabs, and new adventures.{" "}
            <a href="mailto:zulqurnainjj@gmail.com" className="link">Say hello</a>{" "}
            or find me on{" "}
            <a href="https://linkedin.com/in/zulqurnainj" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>.
          </p>
        </div>

        {/* Skills */}
        <div className="animate-in animate-delay-3 w-full flex flex-col gap-2.5">
          <p className="text-olive-400 dark:text-olive-600 text-sm uppercase font-mono">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s.label} className={`text-xs px-2.5 py-1 rounded-full font-medium ${catColor[s.cat]}`}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-in animate-delay-4 w-full">
          <Divider />
        </div>

        {/* Services */}
        <div className="animate-in animate-delay-5 w-full flex flex-col gap-2.5">
          <p className="text-olive-400 dark:text-olive-600 text-sm uppercase font-mono">What I offer</p>
          <div className="flex flex-wrap gap-2">
            {services.map((svc) => (
              <a
                key={svc.href}
                href={svc.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-full ${svc.color} hover:opacity-80 transition-opacity`}
              >
                {svc.label}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-in animate-delay-6 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-6 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
