import { ImageSlider } from "@/components/ImageSlider";

type Project = {
  name: string;
  description: string;
  platform: string;
  tools: string[];
  images: string[];
  storeUrl?: string;
  storeLabel?: string;
  category: "professional" | "personal";
};

const P = (name: string) => `/images/projects/${name}`;

const projects: Project[] = [
  // ── Professional ───────────────────────────────────────────────────────────
  {
    name: "Genius Drills",
    description:
      "AI-powered K-12 math practice platform that builds speed, accuracy, and confidence through adaptive interactive drills with real-time feedback.",
    platform: "Web · AI",
    tools: ["Next.js", "React", "OpenAI", "RAG", "Kafka", "AWS ECS", "TypeScript"],
    images: [P("genius-drills-1.svg"), P("genius-drills-2.svg"), P("genius-drills-3.svg"), P("genius-drills-4.svg")],
    storeUrl: "https://get.geniusdrills.com",
    storeLabel: "Open App",
    category: "professional",
  },
  {
    name: "Spirit of Math Contest",
    description:
      "Online competition platform hosting timed math contests, automated grading, live leaderboards, and PDF certificate generation for thousands of students.",
    platform: "Web",
    tools: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    images: [P("spirit-math-1.jpg"), P("spirit-math-2.jpg"), P("spirit-math-3.jpg"), P("spirit-math-4.jpg")],
    storeUrl: "https://spiritofmathcontest.com",
    storeLabel: "Open Site",
    category: "professional",
  },
  {
    name: "Victoria's Secret",
    description:
      "Official mobile shopping app for 70M+ customers — personalised LLM search, AR try-on features, loyalty integration, and seamless one-click checkout.",
    platform: "iOS & Android",
    tools: ["React Native", "Flutter", "Go", "Python", "FastAPI", "Pinecone", "FAISS", "AWS"],
    images: [P("vs-1.jpg"), P("vs-2.jpg"), P("vs-3.jpg"), P("vs-4.jpg")],
    storeUrl: "https://apps.apple.com/us/app/victorias-secret/id409209402",
    storeLabel: "App Store",
    category: "professional",
  },
  {
    name: "Chase Mobile",
    description:
      "One of the largest mobile banking apps in the US — serving 50M+ customers with accounts, investing, P2P payments, and SWIFT ISO20022 messaging.",
    platform: "iOS & Android",
    tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "SWIFT MT102/MT202", "ISO20022"],
    images: [P("chase-1.jpg"), P("chase-2.jpg"), P("chase-3.jpg"), P("chase-4.jpg")],
    storeUrl: "https://apps.apple.com/us/app/chase-mobile/id298867247",
    storeLabel: "App Store",
    category: "professional",
  },
  {
    name: "SWVL",
    description:
      "Mass-transit ride-sharing across Africa, the Middle East, and Pakistan — native iOS and Android apps with real-time booking, tracking, and in-app payments.",
    platform: "iOS & Android",
    tools: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "GraphQL", "GCP"],
    images: [P("swvl-1.jpg"), P("swvl-2.jpg"), P("swvl-3.jpg"), P("swvl-4.jpg")],
    storeUrl: "https://play.google.com/store/apps/details?id=com.swvl.android",
    storeLabel: "Google Play",
    category: "professional",
  },
  {
    name: "Rechat",
    description:
      "AI-powered real estate operating system — CRM, marketing automation, and transaction management platform for real estate teams and brokerages.",
    platform: "Web · AI",
    tools: ["React", "Node.js", "TypeScript", "AI/ML", "PostgreSQL", "AWS"],
    images: [P("rechat-1.svg"), P("rechat-2.svg"), P("rechat-3.svg"), P("rechat-4.svg")],
    storeUrl: "https://rechat.com",
    storeLabel: "Open Site",
    category: "professional",
  },
  {
    name: "EasyPaisa",
    description:
      "Pakistan's top mobile wallet — P2P transfers, bill payments, mobile top-ups, insurance, and microfinance for the unbanked population.",
    platform: "iOS & Android",
    tools: ["React Native", "Java", "Spring Boot", "PostgreSQL", "AWS"],
    images: [P("easypaisa-1.jpg"), P("easypaisa-2.jpg"), P("easypaisa-3.jpg"), P("easypaisa-4.jpg")],
    storeUrl: "https://play.google.com/store/apps/details?id=pk.com.telenor.phoenix",
    storeLabel: "Google Play",
    category: "professional",
  },
  {
    name: "UOB Digital Banking",
    description:
      "Mobile banking super-app for United Overseas Bank — accounts, transfers, wealth products, and SWIFT integration for Southeast Asian markets.",
    platform: "iOS & Android",
    tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "ISO20022"],
    images: [P("uob-1.jpg"), P("uob-2.jpg"), P("uob-3.jpg"), P("uob-4.jpg")],
    storeUrl: "https://apps.apple.com/sg/app/uob-mighty/id600660396",
    storeLabel: "App Store",
    category: "professional",
  },
  {
    name: "Cheetay",
    description:
      "Pakistan's leading on-demand delivery app — native Android with advanced performance optimisation and security hardening against reverse-engineering.",
    platform: "Android",
    tools: ["Kotlin", "Android Native", "Jetpack", "REST APIs", "Firebase"],
    images: [P("cheetay-1.svg"), P("cheetay-2.svg"), P("cheetay-3.svg"), P("cheetay-4.svg")],
    storeUrl: "https://cheetay.pk",
    storeLabel: "Open Site",
    category: "professional",
  },
  {
    name: "SMACC V3",
    description:
      "Cloud-based ERP and accounting SaaS for SMEs across the Middle East — invoicing, payroll, VAT compliance, and multi-branch reporting.",
    platform: "Web",
    tools: ["Go", "Java", "Python", "React", "PostgreSQL", "Docker", "Kubernetes", "Jenkins"],
    images: [P("smacc-1.svg"), P("smacc-2.svg"), P("smacc-3.svg"), P("smacc-4.svg")],
    storeUrl: "https://smacc.io",
    storeLabel: "Open Site",
    category: "professional",
  },
  {
    name: "3S POS",
    description:
      "Point-of-sale and inventory management system for retail chains — real-time stock sync, multi-branch reporting, and integrated payment processing.",
    platform: "Android",
    tools: ["Android Native", "Java", "SQLite", "Spring Boot", "REST"],
    images: [P("3spos-1.svg"), P("3spos-2.svg"), P("3spos-3.svg"), P("3spos-4.svg")],
    category: "professional",
  },
  {
    name: "AySAP",
    description:
      "Enterprise HR and workforce management for the Middle East — payroll, attendance, leave management, and employee self-service portal.",
    platform: "iOS & Android",
    tools: ["Flutter", "Laravel", "MySQL", "AWS"],
    images: [P("aysap-1.svg"), P("aysap-2.svg"), P("aysap-3.svg"), P("aysap-4.svg")],
    storeUrl: "https://play.google.com/store/apps/details?id=com.aysap.app",
    storeLabel: "Google Play",
    category: "professional",
  },
  {
    name: "MyPark",
    description:
      "Smart parking app for UAE — real-time spot availability, advance reservation, QR-code gate entry, and contactless payment.",
    platform: "iOS & Android",
    tools: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    images: [P("mypark-1.jpg"), P("mypark-2.jpg"), P("mypark-3.jpg"), P("mypark-4.jpg")],
    storeUrl: "https://apps.apple.com/ae/app/mypark/id1458849640",
    storeLabel: "App Store",
    category: "professional",
  },
  {
    name: "CoCare",
    description:
      "Digital health companion for chronic disease management — medication reminders, symptom tracking, and telehealth consultations.",
    platform: "iOS & Android",
    tools: ["React Native", "Node.js", "Firebase", "AWS", "HL7"],
    images: [P("cocare-1.svg"), P("cocare-2.svg"), P("cocare-3.svg"), P("cocare-4.svg")],
    storeUrl: "https://apps.apple.com/app/cocare/id1484490359",
    storeLabel: "App Store",
    category: "professional",
  },
  {
    name: "Almarkaz Almali",
    description:
      "Islamic finance and savings platform for Gulf users — Sharia-compliant investment products, portfolio tracking, and Zakat calculations.",
    platform: "iOS & Android",
    tools: ["Flutter", "Django", "PostgreSQL", "Azure"],
    images: [P("almarkaz-1.svg"), P("almarkaz-2.svg"), P("almarkaz-3.svg"), P("almarkaz-4.svg")],
    category: "professional",
  },
  {
    name: "Alamakin",
    description:
      "Saudi real estate marketplace — property listings, virtual tours, mortgage calculator, and direct agent communication features.",
    platform: "iOS & Android",
    tools: ["React Native", "Node.js", "MongoDB", "GCP"],
    images: [P("alamakin-1.svg"), P("alamakin-2.svg"), P("alamakin-3.svg"), P("alamakin-4.svg")],
    storeUrl: "https://play.google.com/store/apps/details?id=com.alamakin.app",
    storeLabel: "Google Play",
    category: "professional",
  },
  {
    name: "My Tutor Lab",
    description:
      "EdTech platform connecting students with private tutors — live whiteboard sessions, session recordings, and integrated payment processing.",
    platform: "Web",
    tools: ["React", "Next.js", "Node.js", "WebRTC", "Stripe", "AWS"],
    images: [P("mytutorlab-1.svg"), P("mytutorlab-2.svg"), P("mytutorlab-3.svg"), P("mytutorlab-4.svg")],
    storeUrl: "https://mytutorlab.com",
    storeLabel: "Open Site",
    category: "professional",
  },
  {
    name: "Shekinah",
    description:
      "Church community app — live-stream sermons, event calendar, giving portal, small group management, and prayer request tracking.",
    platform: "iOS & Android",
    tools: ["React Native", "Firebase", "Node.js", "Stripe"],
    images: [P("shekinah-1.jpg"), P("shekinah-2.jpg"), P("shekinah-3.jpg"), P("shekinah-4.jpg")],
    storeUrl: "https://apps.apple.com/app/shekinah-church/id1541329048",
    storeLabel: "App Store",
    category: "professional",
  },

  // ── Personal / SaaS ─────────────────────────────────────────────────────────
  {
    name: "NotePackz",
    description:
      "Online notepad SaaS with rich text editor, folder organisation, tagging, and team collaboration. Three-tier pricing with free tier.",
    platform: "Web · SaaS",
    tools: ["Next.js 15", "MySQL", "TypeScript", "Tailwind CSS", "PM2"],
    images: [P("notepackz-1.svg"), P("notepackz-2.svg"), P("notepackz-3.svg"), P("notepackz-4.svg")],
    storeUrl: "https://tools.zulqurnainj.com/notepackz",
    storeLabel: "Open App",
    category: "personal",
  },
  {
    name: "ZBuyMe",
    description:
      "Real estate marketplace for Malaysia and Pakistan — property listings, smart search, agent contact forms, and multi-currency support.",
    platform: "Web · SaaS",
    tools: ["FastAPI", "Python", "Jinja2", "PocketBase", "Nginx"],
    images: [P("zbuyme-1.svg"), P("zbuyme-2.svg"), P("zbuyme-3.svg"), P("zbuyme-4.svg")],
    storeUrl: "https://zbuyme.com",
    storeLabel: "Open Site",
    category: "personal",
  },
  {
    name: "CC Platform",
    description:
      "AI-powered outbound call center SaaS — businesses bring their own VOIP keys, train AI agents from recordings, and run 24/7 calling campaigns.",
    platform: "Web · AI · SaaS",
    tools: ["Next.js 15", "FastAPI", "Pipecat", "Whisper STT", "Piper TTS", "ChromaDB", "PocketBase"],
    images: [P("cc-platform-1.svg"), P("cc-platform-2.svg"), P("cc-platform-3.svg"), P("cc-platform-4.svg")],
    storeUrl: "https://cc.zulqurnainj.com",
    storeLabel: "Open App",
    category: "personal",
  },
  {
    name: "DummyFlights",
    description:
      "Mock flight search and booking API for developers and testers — realistic data, no rate limits, full Swagger docs at /docs.",
    platform: "API · Web",
    tools: ["FastAPI", "Python", "PostgreSQL", "Nginx", "PM2"],
    images: [P("dummyflights-1.svg"), P("dummyflights-2.svg"), P("dummyflights-3.svg"), P("dummyflights-4.svg")],
    storeUrl: "https://dummyflights.zulqurnainj.com/docs",
    storeLabel: "API Docs",
    category: "personal",
  },
  {
    name: "Nayab AI",
    description:
      "Personal AI assistant powered by Anthropic Claude — code help, analysis, writing assistance, and research tasks via a clean chat interface.",
    platform: "Web · AI",
    tools: ["Next.js", "Anthropic Claude API", "TypeScript", "Tailwind CSS"],
    images: [P("nayab-1.svg"), P("nayab-2.svg"), P("nayab-3.svg"), P("nayab-4.svg")],
    storeUrl: "https://zulqurnainj.com/chat",
    storeLabel: "Open App",
    category: "personal",
  },
  {
    name: "ZCraper",
    description:
      "Web scraping API with Cloudflare bypass, JS rendering, proxy rotation, and gRPC + REST endpoints. Built for reliability at scale.",
    platform: "API · Backend",
    tools: ["Python", "FastAPI", "gRPC", "Playwright", "Rotating Proxies"],
    images: [P("zcraper-1.svg"), P("zcraper-2.svg"), P("zcraper-3.svg"), P("zcraper-4.svg")],
    category: "personal",
  },
  {
    name: "Delete All Messages",
    description:
      "Chrome extension to bulk-delete all DMs in Facebook Messenger with one click — 1000+ active users on Chrome Web Store.",
    platform: "Chrome Extension",
    tools: ["JavaScript", "Chrome Extension API", "Manifest V3"],
    images: [P("delete-msgs-1.svg"), P("delete-msgs-2.svg"), P("delete-msgs-3.svg"), P("delete-msgs-4.svg")],
    storeUrl: "https://chromewebstore.google.com/detail/delete-all-messages-by-z/dpdlkdbgehhejkfpclhgdbaeahikfnof",
    storeLabel: "Chrome Store",
    category: "personal",
  },
];

const platformColor = (p: string) => {
  if (p.includes("AI")) return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
  if (p.includes("SaaS")) return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
  if (p.includes("API")) return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400";
  if (p === "Android") return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  if (p.includes("iOS") && p.includes("Android")) return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
  if (p.includes("iOS")) return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
  if (p === "Web") return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400";
  if (p.includes("Chrome")) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
  return "bg-olive-200 text-olive-700 dark:bg-olive-800/40 dark:text-olive-300";
};

export function ProjectsSection() {
  const professional = projects.filter((p) => p.category === "professional");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <div className="flex flex-col gap-10 w-full">
      <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
        Projects
      </h2>

      {/* Professional */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-olive-400 dark:text-olive-600 uppercase tracking-widest">
          Professional · Client Work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {professional.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* Personal / SaaS */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono text-olive-400 dark:text-olive-600 uppercase tracking-widest">
          Personal · SaaS · Open Source
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {personal.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-3d flex flex-col rounded-xl overflow-hidden border border-olive-200 dark:border-olive-800 bg-white dark:bg-olive-950 hover:border-olive-400 dark:hover:border-olive-600 transition-colors duration-200">
      {/* Image slider */}
      <ImageSlider images={project.images} alt={project.name} />

      {/* Info */}
      <div className="flex flex-col gap-2 p-3 grow">
        <div className="flex items-start gap-2 flex-wrap">
          <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">
            {project.name}
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 ${platformColor(project.platform)}`}>
            {project.platform}
          </span>
        </div>

        <p className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed line-clamp-2 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-0.5">
          {project.tools.slice(0, 5).map((tool) => (
            <span
              key={tool}
              className="text-[10px] bg-olive-100 dark:bg-olive-800 text-olive-600 dark:text-olive-300 px-1.5 py-0.5 rounded font-mono"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 5 && (
            <span className="text-[10px] text-olive-400 dark:text-olive-500 px-1 py-0.5">
              +{project.tools.length - 5}
            </span>
          )}
        </div>

        {/* Open Project button */}
        {project.storeUrl && (
          <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold px-3 py-2 rounded-lg bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 hover:bg-olive-700 dark:hover:bg-olive-200 transition-colors"
          >
            {project.storeLabel ?? "Open Project"}
            <svg className="size-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
