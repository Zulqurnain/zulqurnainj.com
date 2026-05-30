"use client";

interface WorkItem {
  id: string;
  client: string;
  role: string;
  period: string;
}

const work: WorkItem[] = [
  {
    id: "edtech-client",
    client: "EdTech Startup",
    role: "Full Stack + AI Focus · RAG, OpenAI, Kafka, Next.js, Go, AWS ECS",
    period: "2025–Present",
  },
  {
    id: "retail-senior",
    client: "Global Retail Brand",
    role: "Senior App Dev · React Native, Flutter, NestJS, Go, Python, LLMs",
    period: "2024–2025",
  },
  {
    id: "retail-fullstack",
    client: "Global Retail Brand",
    role: "Full Stack · Next.js, NestJS, Angular, Golang, RAG pipelines",
    period: "2023–2024",
  },
  {
    id: "banking-client",
    client: "US Investment Bank",
    role: "Senior Full Stack · Java, Spring Boot, React · SWIFT ISO20022",
    period: "2022–2023",
  },
  {
    id: "transit-client",
    client: "Mass Transit Platform",
    role: "Application Engineer · Native iOS (Swift) · Android (Kotlin/Compose)",
    period: "2021–2022",
  },
  {
    id: "delivery-client",
    client: "On-demand Delivery App",
    role: "Android Engineer · Kotlin, Jetpack Compose · Security testing",
    period: "2020–2021",
  },
  {
    id: "erp-client",
    client: "ERP SaaS Company",
    role: "Backend Engineer · Go, Java, Python · SaaS ERP · Docker, K8s",
    period: "2018–2019",
  },
  {
    id: "agency-client",
    client: "Software Development Agency",
    role: "Android Engineer · Java, Kotlin, RxJava, Firebase",
    period: "2017–2018",
  },
];

function ClientIcon({ client }: { client: string }) {
  const initial = client.charAt(0).toUpperCase();

  return (
    <div className="shrink-0 size-5 relative">
      <span
        className="absolute inset-0 flex items-center justify-center rounded-sm text-[10px] font-bold bg-olive-300 dark:bg-olive-700 text-olive-800 dark:text-olive-100"
      >
        {initial}
      </span>
    </div>
  );
}

export function WorkSection() {
  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <p className="text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono">
        Clients
      </p>
      <div className="flex flex-col gap-3 w-full">
        {work.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center w-full"
          >
            <div className="flex gap-4 grow items-center min-w-0">
              <ClientIcon client={item.client} />
              <div className="flex gap-2 grow items-center min-w-0">
                <p className="font-semibold shrink-0 text-olive-800 dark:text-olive-100 text-sm text-nowrap whitespace-pre">
                  {item.client}
                </p>
                <p className="shrink-0 text-xs text-olive-500">/</p>
                <p className="grow min-w-0 overflow-hidden text-ellipsis text-olive-500 dark:text-olive-400 text-sm text-nowrap">
                  {item.role}
                </p>
              </div>
            </div>
            <p className="shrink-0 text-xs text-olive-400 dark:text-olive-600 font-mono">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
