import { ImageSlider } from "@/components/ImageSlider";

type Project = {
  name: string;
  description: string;
  platform: string;
  tools: string[];
  images: string[];
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

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

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
          "AI-powered K-12 math practice platform that builds speed, accuracy, and confidence through interactive drills.",
        platform: "Web · AI",
        tools: ["Next.js", "React", "OpenAI", "RAG", "Kafka", "AWS ECS", "TypeScript"],
        images: [
          U("1503676260728-1c00da094a0b"),
          U("1596495577886-d920f1fb7238"),
          U("1509062522246-3755977927d7"),
        ],
        storeUrl: "https://get.geniusdrills.com",
        storeLabel: "get.geniusdrills.com",
      },
      {
        name: "Spirit of Math Contest",
        description:
          "Online competition platform hosting timed math contests, automated grading, live leaderboards, and certificate generation.",
        platform: "Web",
        tools: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
        images: [
          U("1635070041078-e363dbe005cb"),
          U("1434030216411-0b793f4b4173"),
          U("1509062522246-3755977927d7"),
        ],
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
          "Official mobile shopping app for 70M+ customers — personalised LLM search, AR features, loyalty integration, and seamless checkout.",
        platform: "iOS & Android",
        tools: ["React Native", "Flutter", "Go", "Python", "FastAPI", "Pinecone", "FAISS", "AWS"],
        images: [
          U("1445205170230-053b83016050"),
          U("1483985988355-763728e1802c"),
          U("1558769132-cb1aea458c5e"),
        ],
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
          "One of the largest mobile banking apps in the US — serving 50M+ customers with accounts, investing, P2P payments, and SWIFT messaging.",
        platform: "iOS & Android",
        tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "SWIFT MT102/MT202", "ISO20022"],
        images: [
          U("1563013544-824ae1b704d3"),
          U("1579621970795-87facc2f976d"),
          U("1460925895917-afdab827c52f"),
        ],
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
          "AI-powered real estate operating system — CRM, marketing automation, and transaction management for real estate teams.",
        platform: "Web · AI",
        tools: ["React", "Node.js", "TypeScript", "AI/ML", "PostgreSQL", "AWS"],
        images: [
          U("1560518883-ce09059eeffa"),
          U("1582407947304-fd86f28320c3"),
          U("1486406146926-c627a92ad1ab"),
        ],
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
          "Mass-transit ride-sharing across Africa, Middle East, and Pakistan — native iOS and Android apps with real-time booking and payments.",
        platform: "iOS & Android",
        tools: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "GraphQL", "GCP"],
        images: [
          U("1544620347-c4fd4a3d5957"),
          U("1449965408869-eaa3f722e40d"),
          U("1477959858617-67f85cf4f1df"),
        ],
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
          "Pakistan's leading on-demand delivery app — native Android with reverse-engineering security hardening using Frida and Burp Suite.",
        platform: "Android",
        tools: ["Kotlin", "Android Native", "Frida", "Burp Suite", "REST APIs"],
        images: [
          U("1526367790999-0150786686a2"),
          U("1568901346375-23c9450c58cd"),
          U("1526170375885-4d8ecf77b99f"),
        ],
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
          "Cloud-based ERP and accounting SaaS for SMEs across the Middle East — invoicing, payroll, VAT compliance, and multi-branch reporting.",
        platform: "Web",
        tools: ["Go", "Java", "Python", "React", "PostgreSQL", "Docker", "Kubernetes", "Jenkins"],
        images: [
          U("1551288049-bebda4e38f71"),
          U("1460925895917-afdab827c52f"),
          U("1504868584819-f8e8b4b6d7e3"),
        ],
        storeUrl: "https://smacc.io",
        storeLabel: "smacc.io",
      },
      {
        name: "3S POS",
        description:
          "Point-of-sale and inventory management for retail chains — real-time stock sync, multi-branch reporting, and integrated payments.",
        platform: "Android",
        tools: ["Android Native", "Java", "SQLite", "Spring Boot"],
        images: [
          U("1556742044-3c52d6e88c62"),
          U("1607082348824-0a96f2a4b9da"),
          U("1556742049-0cfed4f6a45d"),
        ],
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
        images: [
          U("1563013544-824ae1b704d3"),
          U("1579621970795-87facc2f976d"),
        ],
        storeUrl: "https://play.google.com/store/apps/details?id=pk.com.telenor.phoenix",
        storeLabel: "Google Play",
      },
      {
        name: "UOB Digital Banking",
        description:
          "Mobile banking super-app for United Overseas Bank — accounts, transfers, wealth products, and SWIFT integration for SEA markets.",
        platform: "iOS & Android",
        tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "ISO20022"],
        images: [
          U("1601597111158-2fceff292cdc"),
          U("1563013544-824ae1b704d3"),
        ],
        storeUrl: "https://apps.apple.com/sg/app/uob-mighty/id600660396",
        storeLabel: "App Store",
      },
      {
        name: "AySAP",
        description:
          "Enterprise HR and workforce management for the Middle East — payroll, attendance, leave management, and employee self-service.",
        platform: "iOS & Android",
        tools: ["Flutter", "Laravel", "MySQL", "AWS"],
        images: [
          U("1521737604893-d14cc237f11d"),
          U("1553877522-43269d4ea984"),
        ],
        storeUrl: "https://play.google.com/store/apps/details?id=com.aysap.app",
        storeLabel: "Google Play",
      },
      {
        name: "MyPark",
        description:
          "Smart parking app for UAE — real-time spot availability, advance reservation, QR-code entry, and contactless payment.",
        platform: "iOS & Android",
        tools: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        images: [
          U("1506521781263-d8422e82f27a"),
          U("1545569341-9eb8b30979d9"),
        ],
        storeUrl: "https://apps.apple.com/ae/app/mypark/id1458849640",
        storeLabel: "App Store",
      },
      {
        name: "CoCare",
        description:
          "Digital health companion for chronic disease management — medication reminders, symptom tracking, and telehealth consultations.",
        platform: "iOS & Android",
        tools: ["React Native", "Node.js", "Firebase", "AWS"],
        images: [
          U("1576091160399-112ba8d25d1d"),
          U("1559757175-0eb30cd8c063"),
        ],
        storeUrl: "https://apps.apple.com/app/cocare/id1484490359",
        storeLabel: "App Store",
      },
      {
        name: "Almarkaz Almali",
        description:
          "Islamic finance and savings platform for Gulf users — Sharia-compliant investment products, portfolio tracking, and Zakat calculations.",
        platform: "iOS & Android",
        tools: ["Flutter", "Django", "PostgreSQL", "Azure"],
        images: [
          U("1559526324-593bc073d938"),
          U("1444653614773-995cb1ef9efa"),
        ],
      },
      {
        name: "Alamakin",
        description:
          "Saudi real estate marketplace — property listings, virtual tours, mortgage calculator, and direct agent communication.",
        platform: "iOS & Android",
        tools: ["React Native", "Node.js", "MongoDB", "GCP"],
        images: [
          U("1512917774080-9991f1c4c750"),
          U("1560518883-ce09059eeffa"),
        ],
        storeUrl: "https://play.google.com/store/apps/details?id=com.alamakin.app",
        storeLabel: "Google Play",
      },
      {
        name: "My Tutor Lab",
        description:
          "EdTech platform connecting students with private tutors — live whiteboard sessions, session recordings, and payment processing.",
        platform: "Web",
        tools: ["React", "Next.js", "Node.js", "WebRTC", "Stripe", "AWS"],
        images: [
          U("1509062522246-3755977927d7"),
          U("1580582932707-520aed937b7b"),
        ],
        storeUrl: "https://mytutorlab.com",
        storeLabel: "mytutorlab.com",
      },
      {
        name: "Shekinah",
        description:
          "Church community app — live-stream sermons, event calendar, giving portal, small group management, and prayer request tracking.",
        platform: "iOS & Android",
        tools: ["React Native", "Firebase", "Node.js", "Stripe"],
        images: [
          U("1438032005730-c779502df39b"),
          U("1529070538774-1843cb3265df"),
        ],
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

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-3 border-l border-olive-200 dark:border-olive-800">
            {group.projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-xl overflow-hidden border border-olive-200 dark:border-olive-800 bg-white dark:bg-olive-950 hover:border-olive-300 dark:hover:border-olive-700 transition-colors"
              >
                {/* Image slider */}
                <ImageSlider images={project.images} alt={project.name} />

                {/* Info */}
                <div className="flex flex-col gap-2 p-3">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">
                        {project.name}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${platformColor(project.platform)}`}>
                        {project.platform}
                      </span>
                    </div>
                    {project.storeUrl && (
                      <a
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-olive-400 dark:text-olive-500 hover:text-olive-700 dark:hover:text-olive-200 transition-colors shrink-0"
                        title={project.storeLabel}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-olive-600 dark:text-olive-400 leading-relaxed line-clamp-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
