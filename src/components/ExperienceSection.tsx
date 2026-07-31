type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Innovate Core X Sdn Bhd",
    title: "Generative AI Engineer",
    period: "06/2026 – Present",
    location: "USA (Remote)",
    bullets: [
      "Building AI/LLM systems in Python on Nvidia GPUs",
      "Integrating the Hermes model, OpenClaw, LangChain, and Pinecone vector databases",
    ],
  },
  {
    company: "Innovate Core X Sdn Bhd",
    title: "Senior Full Stack Developer",
    period: "12/2025 – 05/2026",
    location: "USA (Remote)",
    bullets: [
      "Mobile product delivery and web application support for Malaysian fintech (Android, React Native, Flutter)",
      "Production stability, issue triage, and release reliability using Claude Code, OpenClaw, N8N, and Zapier",
    ],
  },
  {
    company: "Fuentes.tech LLC",
    title: "Senior Full Stack Engineer",
    period: "06/2023 – 11/2025",
    location: "USA (Remote)",
    bullets: [
      "Victoria's Secret & Co. (Contractor) — hybrid backend on Golang, Python, Gin, Fiber, FastAPI, Redis, and RabbitMQ; frontend on Next.js, NestJS, Angular, Node.js, TypeScript, and React",
      "Cartier (Contractor) — cross-platform mobile apps in React Native and Flutter",
      "GeniusDrills (Contractor) — AI-based school platform (OpenAI, LLM, Docker, Kubernetes, AWS ECS); RAG architectures, hybrid search, and LLM integration",
    ],
  },
  {
    company: "Sky Talents Management LLC",
    title: "Senior Full Stack Developer",
    period: "06/2022 – 05/2023",
    location: "USA (Remote)",
    bullets: [
      "JPMorgan Chase (Contractor) — backend on NestJS, Node.js, and TypeScript; RAG pipelines with Pinecone, Weaviate, and FAISS; enterprise Java (Spring Boot, JBoss/WildFly, Oracle WebLogic); banking messaging (MT102/MT202, ISO20022)",
    ],
  },
  {
    company: "SWVL",
    title: "Application Engineer II",
    period: "06/2021 – 05/2022",
    location: "Remote",
    bullets: [
      "Led the mobile squad on booking and payments — native iOS (Swift/SwiftUI) and native Android (Kotlin/Jetpack Compose)",
      "MVVM/Clean Architecture, Firebase/Room/Retrofit, CI/CD on Bitrise",
    ],
  },
  {
    company: "SDSol Technologies (PVT) LTD",
    title: "Android Engineer",
    period: "12/2017 – 05/2020",
    location: "Pakistan",
    bullets: [
      "Shipped Shekinah, Surete, MyTutorLab, and other Android apps (Java, PHP, Kotlin, RxJava, Firebase)",
      "App security testing with Frida, Objection, and Burp Suite",
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-olive-400 dark:text-olive-600 text-sm uppercase font-mono">
        Experience
      </p>
      <div className="flex flex-col gap-4 w-full">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="flex flex-col gap-1.5 rounded-xl bg-white dark:bg-olive-950 border border-olive-200 dark:border-olive-800 p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <p className="font-semibold text-sm text-olive-800 dark:text-olive-100">
                {job.title} <span className="font-normal text-olive-500 dark:text-olive-400">· {job.company}</span>
              </p>
              <p className="text-[11px] font-mono text-olive-400 dark:text-olive-600 shrink-0">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="flex flex-col gap-1 mt-1">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed flex gap-2">
                  <span className="text-olive-300 dark:text-olive-700 shrink-0">–</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
