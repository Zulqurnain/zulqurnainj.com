"use client";

interface WorkItem {
  id: string;
  company: string;
  role: string;
  url: string;
  period: string;
}

const work: WorkItem[] = [
  {
    id: "fuentes",
    company: "Fuentes.tech",
    role: "AI EdTech · RAG, OpenAI, Kafka, Next.js, AWS ECS",
    url: "https://fuentes.tech",
    period: "2025–Present",
  },
  {
    id: "vs",
    company: "Victoria's Secret & Co.",
    role: "React Native, Flutter, Go, Python · LLM search pipelines",
    url: "https://victoriassecret.com",
    period: "2023–2025",
  },
  {
    id: "chase",
    company: "JPMorgan Chase",
    role: "Java, Spring Boot, React · SWIFT MT102/MT202/ISO20022",
    url: "https://chase.com",
    period: "2022–2023",
  },
  {
    id: "swvl",
    company: "SWVL",
    role: "Native iOS (Swift/SwiftUI) · Native Android (Kotlin/Compose)",
    url: "https://swvl.com",
    period: "2021–2022",
  },
  {
    id: "cheetay",
    company: "Cheetay",
    role: "Native Android · Kotlin · security testing, Frida & Burp Suite",
    url: "https://cheetay.pk",
    period: "2020–2021",
  },
  {
    id: "smacc",
    company: "Arab Sea / SMACC",
    role: "Go, Java, Python · SaaS ERP · Docker, Kubernetes, Jenkins",
    url: "https://smacc.com",
    period: "2018–2019",
  },
];

function CompanyIcon({ company, url }: { company: string; url: string }) {
  const domain = (() => {
    try { return new URL(url).hostname; } catch { return ""; }
  })();
  const initial = company.charAt(0).toUpperCase();

  return (
    <div className="shrink-0 size-5 relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={`${company} logo`}
        className="size-full object-contain"
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
        width={20}
        height={20}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <span
        className="absolute inset-0 hidden items-center justify-center rounded-sm text-[10px] font-bold bg-olive-300 dark:bg-olive-700 text-olive-800 dark:text-olive-100"
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
        Work
      </p>
      <div className="flex flex-col gap-3 w-full">
        {work.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center w-full group"
          >
            <div className="flex gap-4 grow items-center min-w-0">
              <CompanyIcon company={item.company} url={item.url} />
              <div className="flex gap-2 grow items-center min-w-0">
                <p className="font-semibold shrink-0 text-olive-800 dark:text-olive-100 text-sm text-nowrap whitespace-pre group-hover:underline underline-offset-4">
                  {item.company}
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
          </a>
        ))}
      </div>
    </div>
  );
}
