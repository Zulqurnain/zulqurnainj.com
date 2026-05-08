type Platform = "Android" | "iOS" | "Web" | "Android & iOS" | "iOS & Android";

type Project = {
  name: string;
  company: string;
  description: string;
  platform: Platform;
  tools: string[];
  storeUrl?: string;
  storeLabel?: string;
};

const projects: Project[] = [
  {
    name: "Cheetay",
    company: "Cheetay Logistics",
    description: "Pakistan's leading on-demand delivery platform for groceries, food, and retail — serving millions of users across major cities.",
    platform: "Android & iOS",
    tools: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
    storeUrl: "https://www.apkshub.com/app/com.app.cheetay",
    storeLabel: "APK Hub",
  },
  {
    name: "SWVL",
    company: "SWVL Inc.",
    description: "Mass-transit ride-sharing app operating across Africa, Middle East, and Pakistan — enabling fixed-route commuting at scale.",
    platform: "Android & iOS",
    tools: ["React Native", "GraphQL", "Node.js", "MongoDB", "GCP"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.swvl.android",
    storeLabel: "Google Play",
  },
  {
    name: "Victoria's Secret",
    company: "Victoria's Secret & Co.",
    description: "Official mobile shopping app for Victoria's Secret — personalized recommendations, AR try-on, loyalty integration, and seamless checkout.",
    platform: "iOS & Android",
    tools: ["React Native", "Flutter", "Go", "Python", "FastAPI", "Pinecone", "AWS"],
    storeUrl: "https://apps.apple.com/us/app/victorias-secret/id409209402",
    storeLabel: "App Store",
  },
  {
    name: "AySAP",
    company: "AySAP",
    description: "Enterprise workforce and HR management platform for the Middle East — payroll, attendance, leave management, and employee self-service.",
    platform: "Android & iOS",
    tools: ["Flutter", "Laravel", "MySQL", "AWS"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.aysap.app",
    storeLabel: "Google Play",
  },
  {
    name: "CoCare",
    company: "CoCare Health",
    description: "Digital health companion for chronic disease management — medication reminders, symptom tracking, and telehealth consultations.",
    platform: "iOS & Android",
    tools: ["React Native", "Node.js", "Firebase", "AWS"],
    storeUrl: "https://apps.apple.com/app/cocare/id1484490359",
    storeLabel: "App Store",
  },
  {
    name: "Almarkaz Almali",
    company: "Almarkaz Almali",
    description: "Islamic finance and savings platform for Gulf-region users — compliant investment products, portfolio tracking, and Zakat calculations.",
    platform: "Android & iOS",
    tools: ["Flutter", "Django", "PostgreSQL", "Azure"],
    storeUrl: "https://apkpure.com/almarkaz-almali/com.almarkaz.almali",
    storeLabel: "APKPure",
  },
  {
    name: "Alamakin",
    company: "Alamakin Real Estate",
    description: "Saudi real estate marketplace — property listings, virtual tours, mortgage calculator, and direct agent communication.",
    platform: "Android & iOS",
    tools: ["React Native", "Node.js", "MongoDB", "GCP"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.alamakin.app",
    storeLabel: "Google Play",
  },
  {
    name: "3S POS",
    company: "3S Technology",
    description: "Point-of-sale and inventory management system for retail chains — real-time stock sync, multi-branch reporting, and integrated payments.",
    platform: "Android",
    tools: ["Android Native", "Java", "SQLite", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "SMACC V3",
    company: "SMACC",
    description: "Cloud-based accounting and ERP solution for SMEs in the Middle East — invoicing, payroll, VAT compliance, and multi-currency support.",
    platform: "Web",
    tools: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    storeUrl: "https://smacc.io",
    storeLabel: "smacc.io",
  },
  {
    name: "UOB Digital Banking",
    company: "United Overseas Bank",
    description: "Mobile banking super-app for UOB customers — account management, fund transfers, bill payments, wealth products, and SWIFT integration.",
    platform: "iOS & Android",
    tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "ISO20022"],
    storeUrl: "https://apps.apple.com/sg/app/uob-mighty/id600660396",
    storeLabel: "App Store",
  },
  {
    name: "MyPark",
    company: "MyPark",
    description: "Smart parking solution for UAE — real-time spot availability, advance reservation, QR-code entry, and contactless payment.",
    platform: "iOS & Android",
    tools: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    storeUrl: "https://apps.apple.com/ae/app/mypark/id1458849640",
    storeLabel: "App Store",
  },
  {
    name: "My Tutor Lab",
    company: "My Tutor Lab",
    description: "EdTech platform connecting students with private tutors — live sessions, whiteboard tools, session recordings, and payment processing.",
    platform: "Web",
    tools: ["React", "Next.js", "Node.js", "WebRTC", "Stripe", "AWS"],
    storeUrl: "https://mytutorlab.com",
    storeLabel: "mytutorlab.com",
  },
  {
    name: "Shekinah",
    company: "Shekinah Church",
    description: "Church community app — live-stream sermons, event calendar, giving portal, small group management, and prayer request tracking.",
    platform: "iOS & Android",
    tools: ["React Native", "Firebase", "Node.js", "Stripe"],
    storeUrl: "https://apps.apple.com/app/shekinah-church/id1541329048",
    storeLabel: "App Store",
  },
  {
    name: "Chase Mobile",
    company: "JPMorgan Chase",
    description: "One of the largest mobile banking apps in the US — serving 50M+ customers with accounts, investing, P2P payments, and SWIFT messaging.",
    platform: "iOS & Android",
    tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "SWIFT MT102/MT202"],
    storeUrl: "https://apps.apple.com/us/app/chase-mobile/id298867247",
    storeLabel: "App Store",
  },
  {
    name: "EasyPaisa",
    company: "Telenor Microfinance Bank",
    description: "Pakistan's top mobile wallet — peer-to-peer transfers, bill payments, mobile top-ups, insurance, and microfinance products for the unbanked.",
    platform: "iOS & Android",
    tools: ["React Native", "Java", "Spring Boot", "PostgreSQL", "AWS"],
    storeUrl: "https://play.google.com/store/apps/details?id=pk.com.telenor.phoenix",
    storeLabel: "Google Play",
  },
];

const platformColors: Record<Platform, string> = {
  "Android": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "iOS": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "Web": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  "Android & iOS": "bg-olive-200 text-olive-700 dark:bg-olive-800/40 dark:text-olive-300",
  "iOS & Android": "bg-olive-200 text-olive-700 dark:bg-olive-800/40 dark:text-olive-300",
};

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-1.5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">
                  {project.name}
                </span>
                <span className="text-xs text-olive-500 dark:text-olive-500">
                  · {project.company}
                </span>
                <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${platformColors[project.platform]}`}>
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
  );
}
