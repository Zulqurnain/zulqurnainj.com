import { ProjectSlider, type Screen } from "./ProjectSlider";

type Project = {
  name: string;
  description: string;
  platform: string;
  tools: string[];
  storeUrl?: string;
  storeLabel?: string;
  screens: Screen[];
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
          "AI-powered K-12 math practice platform that builds speed, accuracy, and confidence through interactive drills — personalized to each student's level. Built RAG architecture combining LLMs, vector search, and retrieval pipelines for adaptive learning.",
        platform: "Web · AI",
        tools: ["Next.js", "React", "OpenAI", "RAG", "Pinecone", "Kafka", "AWS ECS", "TypeScript"],
        storeUrl: "https://get.geniusdrills.com",
        storeLabel: "get.geniusdrills.com",
        screens: [
          { variant: "web", title: "Student dashboard", subtitle: "Personalised practice path", accent: "amber",
            rows: ["Algebra", "Geometry", "Fractions", "Word problems", "Mental math", "Times tables"], badge: "AI-curated" },
          { variant: "web", title: "AI tutor chat", subtitle: "GPT + RAG over textbooks", accent: "purple",
            rows: ["Hint 1", "Hint 2", "Solution", "Why?", "More like this", "Worked example"], badge: "Live" },
          { variant: "web", title: "Progress analytics", subtitle: "Accuracy & speed trends", accent: "emerald",
            rows: ["Week 1", "Week 2", "Week 3", "Week 4", "Goals", "Streak"] },
        ],
      },
      {
        name: "Spirit of Math Contest",
        description:
          "Online competition platform for Spirit of Math Schools — hosting timed math contests, automated grading, live leaderboards, certificate generation, and multi-region tournament management.",
        platform: "Web",
        tools: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Redis"],
        storeUrl: "https://spiritofmathcontest.com",
        storeLabel: "spiritofmathcontest.com",
        screens: [
          { variant: "web", title: "Contest registration", subtitle: "Grade 3 – Grade 8", accent: "blue",
            rows: ["Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"] },
          { variant: "web", title: "Live leaderboard", subtitle: "Real-time rankings", accent: "amber",
            rows: ["1st place", "2nd place", "3rd place", "4th place", "5th place", "6th place"], badge: "Live" },
          { variant: "web", title: "Certificate", subtitle: "Auto-generated PDF", accent: "rose",
            rows: ["Award", "Score", "Rank", "Date", "Signature", "Download"] },
        ],
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
          "Official mobile shopping app for 70M+ customers — personalised product recommendations via LLM semantic search, AR try-on, loyalty integration, and seamless checkout. Built with React Native and Flutter, backed by Go and Python (FastAPI) microservices on AWS.",
        platform: "iOS & Android",
        tools: ["React Native", "Flutter", "Go", "Python", "FastAPI", "Pinecone", "FAISS", "AWS", "NestJS"],
        storeUrl: "https://apps.apple.com/us/app/victorias-secret/id409209402",
        storeLabel: "App Store",
        screens: [
          { variant: "phone", title: "Shop the lookbook", subtitle: "Personalised feed", accent: "rose",
            rows: ["New arrivals", "Bestsellers", "PINK", "Sport", "Beauty", "Sale"], badge: "70M users" },
          { variant: "phone", title: "AI search", subtitle: "Semantic + visual", accent: "purple",
            rows: ["Like this", "Similar style", "Same color", "Matching set", "In your size"], badge: "Vector" },
          { variant: "phone", title: "Checkout", subtitle: "Apple Pay · Klarna · Afterpay", accent: "rose",
            rows: ["Shipping", "Payment", "Promo", "Review", "Place order"] },
          { variant: "phone", title: "Loyalty rewards", subtitle: "PINK Nation member", accent: "amber",
            rows: ["Points: 2,840", "Tier: Pink VIP", "Rewards", "Birthday gift", "Member offers"], badge: "VIP" },
        ],
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
          "One of the largest mobile banking apps in the US — serving 50M+ customers with accounts, investing, P2P payments, and SWIFT financial messaging (MT102, MT202, ISO20022). Built secure Java 8/11 + Spring Boot services on Oracle DB with OAuth/JWT, deployed on JBoss/WildFly within Citrix environments.",
        platform: "iOS & Android",
        tools: ["React Native", "Java 11", "Spring Boot", "Oracle DB", "SWIFT MT102/MT202", "ISO20022", "OAuth", "JWT", "WebSockets"],
        storeUrl: "https://apps.apple.com/us/app/chase-mobile/id298867247",
        storeLabel: "App Store",
        screens: [
          { variant: "phone", title: "Account overview", subtitle: "Checking · Savings · Credit", accent: "blue",
            rows: ["Chase Total", "Savings Plus", "Sapphire", "Freedom Unlimited"], badge: "50M users" },
          { variant: "phone", title: "Zelle transfer", subtitle: "Real-time P2P", accent: "indigo",
            rows: ["From: Total", "To: Contact", "Amount", "Memo", "Review", "Send"], badge: "Instant" },
          { variant: "phone", title: "Chase Investing", subtitle: "Trade & track portfolio", accent: "emerald",
            rows: ["Portfolio", "Watchlist", "Buy", "Sell", "Research", "News"] },
          { variant: "phone", title: "SWIFT wire", subtitle: "MT202 / ISO20022", accent: "slate",
            rows: ["Beneficiary", "BIC/SWIFT", "Amount", "Currency", "Charges", "Confirm"], badge: "Secure" },
        ],
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
          "Mass-transit ride-sharing platform across Africa, Middle East, and Pakistan — native iOS and Android apps for riders and captains with real-time booking, payments, and order flow. Led the mobile squad within Booking Squad (BoX) using MVVM + Clean Architecture.",
        platform: "iOS & Android",
        tools: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Retrofit", "Room", "Bitrise", "GraphQL"],
        storeUrl: "https://play.google.com/store/apps/details?id=com.swvl.android",
        storeLabel: "Google Play",
        screens: [
          { variant: "phone", title: "Pick a route", subtitle: "Daily commute bus pass", accent: "emerald",
            rows: ["Home → Office", "School run", "Airport", "Late night", "Custom"], badge: "Live" },
          { variant: "phone", title: "Booking flow", subtitle: "Reserve your seat", accent: "blue",
            rows: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
          { variant: "phone", title: "Live captain", subtitle: "Real-time bus tracking", accent: "amber",
            rows: ["ETA: 4 min", "Captain: Ali", "Bus: 27A", "Seat: 12B", "Share trip"], badge: "On the way" },
          { variant: "phone", title: "Payments", subtitle: "Wallet · Card · Cash", accent: "rose",
            rows: ["Wallet: 280 EGP", "Top up", "Add card", "History", "Promo code"] },
        ],
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
          "Pakistan's leading on-demand delivery app for groceries, food, and retail. Performed security hardening with reverse engineering and runtime analysis using Frida, Objection, and Burp Suite — bypassing SSL pinning, validating root detection, and instrumenting network interception tests.",
        platform: "Android",
        tools: ["Kotlin", "Android Native", "Jetpack Compose", "MVVM", "Frida", "Objection", "Burp Suite", "Retrofit", "Firebase"],
        storeUrl: "https://www.apkshub.com/app/com.app.cheetay",
        storeLabel: "APK Hub",
        screens: [
          { variant: "phone", title: "Order food", subtitle: "Restaurants near you", accent: "amber",
            rows: ["Pizza", "Burgers", "Desi", "Chinese", "BBQ", "Healthy"], badge: "Hot" },
          { variant: "phone", title: "Grocery", subtitle: "Daily essentials", accent: "emerald",
            rows: ["Fruits", "Vegetables", "Dairy", "Bakery", "Snacks", "Beverages"] },
          { variant: "phone", title: "Live tracking", subtitle: "Rider on the way", accent: "rose",
            rows: ["Order placed", "Preparing", "Picked up", "On the way", "Delivered"], badge: "8 min" },
        ],
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
        screens: [
          { variant: "web", title: "CRM pipeline", subtitle: "Lead → Close", accent: "indigo",
            rows: ["New leads", "Qualified", "Showing", "Offer", "Pending", "Closed"] },
          { variant: "web", title: "Listings", subtitle: "MLS sync & marketing", accent: "amber",
            rows: ["123 Maple", "456 Oak", "789 Pine", "12 Birch", "34 Cedar", "56 Elm"], badge: "Live" },
          { variant: "web", title: "Automation", subtitle: "Drip campaigns & flows", accent: "purple",
            rows: ["Welcome", "Day 3 nudge", "Open house", "Price drop", "Anniversary", "Re-engage"] },
        ],
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
          "Cloud-based ERP and accounting SaaS for SMEs across the Middle East — invoicing, payroll, VAT compliance, multi-currency, and multi-branch reporting. Led backend with Go, Java 11, and Python (Spring Boot microservices + Oracle DB). Built CI/CD on Jenkins/Bitrise with Docker, Kubernetes, GitHub Actions.",
        platform: "Web",
        tools: ["Go", "Java 11", "Python", "Spring Boot", "ReactJS", "Node.js", "Oracle DB", "Docker", "Kubernetes", "Jenkins"],
        storeUrl: "https://smacc.io",
        storeLabel: "smacc.io",
        screens: [
          { variant: "web", title: "Invoicing", subtitle: "Multi-currency · VAT", accent: "blue",
            rows: ["Draft", "Pending", "Paid", "Overdue", "Cancelled", "Recurring"] },
          { variant: "web", title: "Payroll", subtitle: "GCC compliance", accent: "emerald",
            rows: ["Employees", "Salaries", "Allowances", "Deductions", "WPS export", "Payslips"], badge: "VAT" },
          { variant: "web", title: "Multi-branch", subtitle: "Consolidated reports", accent: "slate",
            rows: ["Branch A", "Branch B", "Branch C", "Group P&L", "Inventory", "Cash flow"] },
        ],
      },
      {
        name: "3S POS",
        description:
          "Point-of-sale and inventory management system for retail chains — real-time stock sync, multi-branch reporting, integrated payment processing, and Epson SDK robotics integration.",
        platform: "Android",
        tools: ["Android Native", "Java", "SQLite", "Spring Boot", "Epson SDK"],
        screens: [
          { variant: "phone", title: "POS terminal", subtitle: "Touch checkout", accent: "indigo",
            rows: ["Item 1", "Item 2", "Item 3", "Item 4", "Subtotal", "VAT"] },
          { variant: "phone", title: "Inventory", subtitle: "Real-time stock", accent: "emerald",
            rows: ["Low stock", "Restock", "Transfer", "Adjust", "Cycle count"] },
          { variant: "phone", title: "Receipts", subtitle: "Epson SDK printing", accent: "slate",
            rows: ["Today: 84", "Reprint", "Refund", "Daily Z-report", "Cash drawer"], badge: "Live" },
        ],
      },
    ],
  },
  {
    id: "sdsol",
    company: "SDSol Technologies",
    period: "2017–2018",
    url: "https://sdsoltechnologies.com",
    projects: [
      {
        name: "MyTutorLab",
        description:
          "EdTech platform connecting students with private tutors — live whiteboard sessions, session recordings, and payment processing. Handled GAP analysis, PRD, and system analysis.",
        platform: "Android",
        tools: ["Java", "Kotlin", "RxJava", "Firebase", "PHP"],
        screens: [
          { variant: "phone", title: "Find a tutor", subtitle: "By subject & rating", accent: "amber",
            rows: ["Math", "Physics", "Chemistry", "English", "Biology", "Computer Sci"] },
          { variant: "phone", title: "Live session", subtitle: "Whiteboard + voice", accent: "purple",
            rows: ["Whiteboard", "Mic", "Share", "Record", "End"], badge: "Live" },
          { variant: "phone", title: "Booking", subtitle: "Schedule & pay", accent: "blue",
            rows: ["Pick slot", "Duration", "Subject", "Topic", "Pay & confirm"] },
        ],
      },
      {
        name: "Shekinah",
        description:
          "Church community app — live-stream sermons, event calendar, giving portal, small group management, and prayer request tracking.",
        platform: "Android",
        tools: ["Java", "Kotlin", "RxJava", "Firebase"],
        storeUrl: "https://apps.apple.com/app/shekinah-church/id1541329048",
        storeLabel: "App Store",
        screens: [
          { variant: "phone", title: "Live stream", subtitle: "Sunday service", accent: "purple",
            rows: ["Watch live", "Chat", "Notes", "Share", "Donate"], badge: "Live" },
          { variant: "phone", title: "Small groups", subtitle: "Find & join", accent: "emerald",
            rows: ["Young adults", "Families", "Couples", "Bible study", "Worship", "Outreach"] },
          { variant: "phone", title: "Giving", subtitle: "Tithe & offering", accent: "amber",
            rows: ["One-time", "Recurring", "Building fund", "Missions", "History"] },
        ],
      },
      {
        name: "Surete",
        description:
          "Mobile security and surveillance app — alarm system control, live camera feeds, motion alerts, and emergency contact dispatch.",
        platform: "Android",
        tools: ["Java", "Kotlin", "RxJava", "Firebase", "WebSocket"],
        screens: [
          { variant: "phone", title: "Live cameras", subtitle: "All zones", accent: "slate",
            rows: ["Front door", "Garage", "Living room", "Backyard"], badge: "Armed" },
          { variant: "phone", title: "Alerts", subtitle: "Motion · Door · Glass", accent: "red",
            rows: ["Motion detected", "Door opened", "Glass break", "Window", "Smoke"] },
          { variant: "phone", title: "Arm/Disarm", subtitle: "One-tap mode", accent: "emerald",
            rows: ["Stay", "Away", "Disarm", "Panic", "Custom"] },
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
        storeUrl: "https://play.google.com/store/apps/details?id=pk.com.telenor.phoenix",
        storeLabel: "Google Play",
        screens: [
          { variant: "phone", title: "Wallet home", subtitle: "Send · Pay · Receive", accent: "emerald",
            rows: ["Balance: Rs 12,400", "Send money", "Mobile load", "Bill pay", "Cash in"], badge: "PKR" },
          { variant: "phone", title: "Bills", subtitle: "Electricity · Gas · Water", accent: "blue",
            rows: ["LESCO", "SNGPL", "PTCL", "WAPDA", "Internet", "Tax"] },
          { variant: "phone", title: "Insurance", subtitle: "Health & life", accent: "rose",
            rows: ["Health plan", "Life cover", "Travel", "Claims", "Renew"] },
        ],
      },
      {
        name: "UOB Digital Banking",
        description:
          "Mobile banking super-app for United Overseas Bank — accounts, transfers, wealth products, and SWIFT integration for Singapore and SEA markets.",
        platform: "iOS & Android",
        tools: ["React Native", "Java", "Spring Boot", "Oracle DB", "ISO20022"],
        storeUrl: "https://apps.apple.com/sg/app/uob-mighty/id600660396",
        storeLabel: "App Store",
        screens: [
          { variant: "phone", title: "Accounts", subtitle: "SGD · USD · MYR", accent: "indigo",
            rows: ["UOB One Account", "Savings", "USD account", "FX timer", "Loans"], badge: "SEA" },
          { variant: "phone", title: "Transfer", subtitle: "PayNow · FAST · SWIFT", accent: "blue",
            rows: ["Recipient", "Mobile/NRIC", "Amount", "Currency", "Send"] },
          { variant: "phone", title: "Wealth", subtitle: "Funds & insurance", accent: "emerald",
            rows: ["Portfolio", "Funds", "Insurance", "FX", "Rates"] },
        ],
      },
      {
        name: "AySAP",
        description:
          "Enterprise HR and workforce management platform for the Middle East — payroll, attendance, leave management, and employee self-service.",
        platform: "iOS & Android",
        tools: ["Flutter", "Laravel", "MySQL", "AWS"],
        storeUrl: "https://play.google.com/store/apps/details?id=com.aysap.app",
        storeLabel: "Google Play",
        screens: [
          { variant: "phone", title: "Punch in", subtitle: "Geo-fenced clock", accent: "amber",
            rows: ["Clock in", "Clock out", "Break", "Location", "Notes"] },
          { variant: "phone", title: "Leave", subtitle: "Apply & approve", accent: "emerald",
            rows: ["Annual: 12", "Sick: 5", "Casual: 3", "Apply", "Approve team"] },
          { variant: "phone", title: "Payslip", subtitle: "Monthly", accent: "slate",
            rows: ["Gross", "Deductions", "Net", "WPS", "Download PDF"] },
        ],
      },
      {
        name: "MyPark",
        description:
          "Smart parking app for UAE — real-time spot availability, advance reservation, QR-code entry, and contactless payment.",
        platform: "iOS & Android",
        tools: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        storeUrl: "https://apps.apple.com/ae/app/mypark/id1458849640",
        storeLabel: "App Store",
        screens: [
          { variant: "phone", title: "Find parking", subtitle: "Live availability", accent: "sky",
            rows: ["Dubai Mall · 24", "Marina · 7", "JBR · 12", "DIFC · 3", "Airport · 84"], badge: "Live" },
          { variant: "phone", title: "Reserve", subtitle: "1-tap booking", accent: "blue",
            rows: ["Time slot", "Duration", "Spot #B12", "Pay", "Confirm"] },
          { variant: "phone", title: "Entry", subtitle: "QR scan at gate", accent: "emerald",
            rows: ["QR code", "Spot: B12", "Time left: 1h 24m", "Extend", "End"] },
        ],
      },
      {
        name: "CoCare",
        description:
          "Digital health companion for chronic disease management — medication reminders, symptom tracking, and telehealth consultations.",
        platform: "iOS & Android",
        tools: ["React Native", "Node.js", "Firebase", "AWS"],
        storeUrl: "https://apps.apple.com/app/cocare/id1484490359",
        storeLabel: "App Store",
        screens: [
          { variant: "phone", title: "Medications", subtitle: "Today's schedule", accent: "rose",
            rows: ["Metformin 8 AM", "Aspirin 12 PM", "Atorvastatin 8 PM"], badge: "Reminder" },
          { variant: "phone", title: "Symptoms", subtitle: "Daily log", accent: "purple",
            rows: ["Energy", "Pain", "Sleep", "Mood", "Notes"] },
          { variant: "phone", title: "Telehealth", subtitle: "Video consult", accent: "emerald",
            rows: ["Dr. Khan", "10:30 AM", "Join call", "Notes", "Follow-up"], badge: "Live" },
        ],
      },
      {
        name: "Almarkaz Almali",
        description:
          "Islamic finance and savings platform for Gulf users — Sharia-compliant investment products, portfolio tracking, and Zakat calculations.",
        platform: "iOS & Android",
        tools: ["Flutter", "Django", "PostgreSQL", "Azure"],
        screens: [
          { variant: "phone", title: "Sukuk", subtitle: "Sharia-compliant", accent: "emerald",
            rows: ["Govt Sukuk", "Corporate", "REIT", "Gold", "Sukuk fund"], badge: "Halal" },
          { variant: "phone", title: "Portfolio", subtitle: "Asset allocation", accent: "amber",
            rows: ["Cash", "Sukuk", "Equities", "Gold", "Real estate"] },
          { variant: "phone", title: "Zakat", subtitle: "Annual calculator", accent: "slate",
            rows: ["Assets", "Liabilities", "Nisab", "Zakat due", "Pay"] },
        ],
      },
      {
        name: "Alamakin",
        description:
          "Saudi real estate marketplace — property listings, virtual tours, mortgage calculator, and direct agent communication.",
        platform: "iOS & Android",
        tools: ["React Native", "Node.js", "MongoDB", "GCP"],
        storeUrl: "https://play.google.com/store/apps/details?id=com.alamakin.app",
        storeLabel: "Google Play",
        screens: [
          { variant: "phone", title: "Search homes", subtitle: "Riyadh · Jeddah · Dammam", accent: "sky",
            rows: ["Villa", "Apartment", "Townhouse", "Land", "Commercial", "New"], badge: "KSA" },
          { variant: "phone", title: "Listing", subtitle: "Photos & 360° tour", accent: "amber",
            rows: ["4 BR · 5 BA", "Riyadh, Hittin", "SAR 2.4M", "Virtual tour", "Contact"] },
          { variant: "phone", title: "Mortgage", subtitle: "Sharia-compliant calc", accent: "emerald",
            rows: ["Price", "Down payment", "Tenor", "Monthly", "Apply"] },
        ],
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
    <div className="flex flex-col gap-10 w-full">
      <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
        Projects
      </h2>

      {groups.map((group) => (
        <div key={group.id} className="flex flex-col gap-5">
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

          {/* Projects under this employer — full cards with sliders */}
          <div className="flex flex-col gap-6">
            {group.projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-3 rounded-xl bg-olive-50 dark:bg-olive-950/40 border border-olive-200 dark:border-olive-800 p-4"
              >
                {/* Image slider */}
                <ProjectSlider
                  projectName={project.name}
                  platform={project.platform}
                  screens={project.screens}
                />

                {/* Title row */}
                <div className="flex items-start justify-between gap-3 flex-wrap mt-1">
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
                      className="text-xs text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 transition-colors flex-shrink-0 font-mono"
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
