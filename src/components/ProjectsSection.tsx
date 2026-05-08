type Project = {
  name: string;
  description: string;
  platform: string;
  tools: string[];
  storeUrl?: string;
  storeLabel?: string;
};

type EmployerGroup = {
  id: string;
  company: string;
  period: string;
  url: string;
  projects: Project[];
};

const groups: EmployerGroup[] = [
  {
    id: "fuentes",
    company: "Fuentes.tech",
    period: "2025–Present",
    url: "https://fuentes.tech",
    projects: [
      {
        name: "Genius Drills",
        description:
          "AI-powered K-12 math practice platform that builds speed, accuracy, and confidence through interactive drills — personalized to each student's level.",
        platform: "Web · AI",
        tools: ["Next.js", "React", "OpenAI", "RAG", "Kafka", "AWS ECS", "TypeScript"],
        storeUrl: "https://get.geniusdrills.com",
        storeLabel: "get.geniusdrills.com",
      },
      {
        name: "Spirit of Math Contest",
        description:
          "Online competition platform for Spirit of Math Schools — hosting timed math contests, automated grading, live leaderboards, and certificate generation.",
        platform: "Web",
        tools: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
        storeUrl: "https://spiritofmathcontest.com",
        storeLabel: "spiritofmathcontest.com",
      },
    ],
  },
  {
    id: "vs",
    company: "Victoria's Secret & Co.",
    period: "2023–2025",
    url: "https://victoriassecret.com",
    projects: [
      {
        name: "Victoria's Secret",
        description:
          "Official mobile shopping app for 70M+ customers — personalised product recommendations via LLM search, AR features, loyalty integration, and seamless checkout.",
        platform: "iOS & Android",
        tools: ["React Native", "Flutter", "Go", "Python", "FastAPI", "Pinecone", "FAISS", "AWS"],
        storeUrl: "https://apps.apple.com/us/app/victorias-secret/id409209402",
        storeLabel: "App Store",
      },
    ],
  },
  {
    id: "chase",
    company: "JPMorgan Chase",
    period: "2022–2023",
    url: "https://chase.com",
    projects: [
      {
        name: "Chase Mobile",
        description:
          "One of the largest mobile banking apps in the US — serving 50M+ customers with accounts, investing, P2P payments, and SWIFT messaging (MT102/MT202/ISO20022).",
        platform: "iOS & Android",
        tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "SWIFT MT102/MT202", "ISO20022"],
        storeUrl: "https://apps.apple.com/us/app/chase-mobile/id298867247",
        storeLabel: "App Store",
      },
    ],
  },
  {
    id: "independent_2021",
    company: "Freelance / Independent",
    period: "2021",
    url: "",
    projects: [
      {
        name: "Rechat",
        description:
          "AI-powered real estate operating system — CRM, marketing automation, and transaction management built for real estate teams and brokerages.",
        platform: "Web · AI",
        tools: ["React", "Node.js", "TypeScript", "AI/ML", "PostgreSQL", "AWS"],
        storeUrl: "https://rechat.ai",
        storeLabel: "rechat.ai",
      },
    ],
  },
  {
    id: "swvl",
    company: "SWVL",
    period: "2021–2022",
    url: "https://swvl.com",
    projects: [
      {
        name: "SWVL",
        description:
          "Mass-transit ride-sharing platform across Africa, Middle East, and Pakistan — native iOS and Android apps for riders and captains with real-time booking and payments.",
        platform: "iOS & Android",
        tools: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "GraphQL", "GCP"],
        storeUrl: "https://play.google.com/store/apps/details?id=com.swvl.android",
        storeLabel: "Google Play",
      },
    ],
  },
  {
    id: "cheetay",
    company: "Cheetay",
    period: "2020–2021",
    url: "https://cheetay.pk",
    projects: [
      {
        name: "Cheetay",
        description:
          "Pakistan's leading on-demand delivery app for groceries, food, and retail — native Android with reverse-engineering security hardening using Frida and Burp Suite.",
        platform: "Android",
        tools: ["Kotlin", "Android Native", "Frida", "Burp Suite", "REST APIs"],
        storeUrl: "https://www.apkshub.com/app/com.app.cheetay",
        storeLabel: "APK Hub",
      },
    ],
  },
  {
    id: "smacc",
    company: "Arab Sea / SMACC",
    period: "2018–2019",
    url: "https://smacc.com",
    projects: [
      {
        name: "SMACC V3",
        description:
          "Cloud-based ERP and accounting SaaS for SMEs across the Middle East — invoicing, payroll, VAT compliance, multi-currency, and multi-branch reporting.",
        platform: "Web",
        tools: ["Go", "Java", "Python", "React", "PostgreSQL", "Docker", "Kubernetes", "Jenkins"],
        storeUrl: "https://smacc.io",
        storeLabel: "smacc.io",
      },
      {
        name: "3S POS",
        description:
          "Point-of-sale and inventory management system for retail chains — real-time stock sync, multi-branch reporting, and integrated payment processing.",
        platform: "Android",
        tools: ["Android Native", "Java", "SQLite", "Spring Boot"],
      },
    ],
  },
  {
    id: "freelance",
    company: "Freelance & Contract",
    period: "Various",
    url: "",
    projects: [
      {
        name: "EasyPaisa",
        description:
          "Pakistan's top mobile wallet — P2P transfers, bill payments, mobile top-ups, insurance, and microfinance for the unbanked.",
        platform: "iOS & Android",
        tools: ["React Native", "Java", "Spring Boot", "PostgreSQL", "AWS"],
        storeUrl: "https://play.google.com/store/apps/details?id=pk.com.telenor.phoenix",
        storeLabel: "Google Play",
      },
      {
        name: "UOB Digital Banking",
        description:
          "Mobile banking super-app for United Overseas Bank — accounts, transfers, wealth products, and SWIFT integration for Singapore and SEA markets.",
        platform: "iOS & Android",
        tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "ISO20022"],
        storeUrl: "https://apps.apple.com/sg/app/uob-mighty/id600660396",
        storeLabel: "App Store",
      },
      {
        name: "AySAP",
        description:
          "Enterprise HR and workforce management platform for the Middle East — payroll, attendance, leave management, and employee self-service.",
        platform: "iOS & Android",
        tools: ["Flutter", "Laravel", "MySQL", "AWS"],
        storeUrl: "https://play.google.com/store/apps/details?id=com.aysap.app",
        storeLabel: "Google Play",
      },
      {
        name: "MyPark",
        description:
          "Smart parking app for UAE — real-time spot availability, advance reservation, QR-code entry, and contactless payment.",
        platform: "iOS & Android",
        tools: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        storeUrl: "https://apps.apple.com/ae/app/mypark/id1458849640",
        storeLabel: "App Store",
      },
      {
        name: "CoCare",
        description:
          "Digital health companion for chronic disease management — medication reminders, symptom tracking, and telehealth consultations.",
        platform: "iOS & Android",
        tools: ["React Native", "Node.js", "Firebase", "AWS"],
        storeUrl: "https://apps.apple.com/app/cocare/id1484490359",
        storeLabel: "App Store",
      },
      {
        name: "Almarkaz Almali",
        description:
          "Islamic finance and savings platform for Gulf users — Sharia-compliant investment products, portfolio tracking, and Zakat calculations.",
        platform: "iOS & Android",
        tools: ["Flutter", "Django", "PostgreSQL", "Azure"],
      },
      {
        name: "Alamakin",
        description:
          "Saudi real estate marketplace — property listings, virtual tours, mortgage calculator, and direct agent communication.",
        platform: "iOS & Android",
        tools: ["React Native", "Node.js", "MongoDB", "GCP"],
        storeUrl: "https://play.google.com/store/apps/details?id=com.alamakin.app",
        storeLabel: "Google Play",
      },
      {
        name: "My Tutor Lab",
        description:
          "EdTech platform connecting students with private tutors — live whiteboard sessions, session recordings, and payment processing.",
        platform: "Web",
        tools: ["React", "Next.js", "Node.js", "WebRTC", "Stripe", "AWS"],
        storeUrl: "https://mytutorlab.com",
        storeLabel: "mytutorlab.com",
      },
      {
        name: "Shekinah",
        description:
          "Church community app — live-stream sermons, event calendar, giving portal, small group management, and prayer request tracking.",
        platform: "iOS & Android",
        tools: ["React Native", "Firebase", "Node.js", "Stripe"],
        storeUrl: "https://apps.apple.com/app/shekinah-church/id1541329048",
        storeLabel: "App Store",
      },
    ],
  },
];

const platformColor = (p: string) => {
  if (p.includes("AI")) return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
  if (p === "Android") return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  if (p === "iOS") return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
  if (p === "Web") return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400";
  return "bg-olive-200 text-olive-700 dark:bg-olive-800/40 dark:text-olive-300";
};

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
        Projects
      </h2>

      {groups.map((group) => (
        <div key={group.id} className="flex flex-col gap-4">
          {/* Employer header */}
          <div className="flex items-center gap-2">
            {group.url ? (
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm text-olive-800 dark:text-olive-100 hover:underline underline-offset-2"
              >
                {group.company}
              </a>
            ) : (
              <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">
                {group.company}
              </span>
            )}
            <span className="text-xs font-mono text-olive-400 dark:text-olive-600">
              {group.period}
            </span>
          </div>

          {/* Projects under this employer */}
          <div className="flex flex-col gap-5 pl-3 border-l border-olive-200 dark:border-olive-800">
            {group.projects.map((project) => (
              <div key={project.name} className="flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">
                      {project.name}
                    </span>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${platformColor(project.platform)}`}>
                      {project.platform}
                    </span>
                  </div>
                  {project.storeUrl && (
                    <a
                      href={project.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 transition-colors underline underline-offset-2 flex-shrink-0"
                    >
                      {project.storeLabel} ↗
                    </a>
                  )}
                </div>
                <p className="text-sm text-olive-600 dark:text-olive-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-olive-200 dark:bg-olive-800 text-olive-700 dark:text-olive-300 px-1.5 py-0.5 rounded font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
