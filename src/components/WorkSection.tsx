"use client";

const techStack: { category: string; items: string[] }[] = [
  {
    category: "Mobile",
    items: [
      "Native Android · Kotlin · Jetpack Compose",
      "Native iOS · Swift · SwiftUI",
      "React Native · Expo",
      "Flutter · Dart",
    ],
  },
  {
    category: "Backend",
    items: [
      "Go · Gin · gRPC",
      "Python · FastAPI · Django",
      "Java · Spring Boot",
      "Node.js · NestJS · Express",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "LLM Integration · Prompt Engineering",
      "RAG Pipelines · Vector Search",
      "OpenAI · Anthropic Claude · Groq",
      "Whisper STT · Piper TTS · ChromaDB",
      "FAISS · Pinecone · sentence-transformers",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Next.js 15 · React · Angular",
      "TypeScript · Tailwind CSS",
      "WebRTC · WebSocket · framer-motion",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS ECS · EKS · Lambda · S3",
      "GCP · Azure",
      "Docker · Kubernetes · Nginx",
      "PM2 · GitHub Actions · CI/CD",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL · MySQL · MongoDB",
      "Redis · Oracle DB · SQLite",
      "PocketBase · ChromaDB",
    ],
  },
  {
    category: "Protocols",
    items: [
      "SWIFT MT102/MT202 · ISO20022",
      "SIP · VOIP · Twilio · Telnyx",
      "REST · GraphQL · gRPC",
    ],
  },
];

const categoryColor = (cat: string) => {
  const map: Record<string, string> = {
    "Mobile": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    "Backend": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    "AI / ML": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    "Frontend": "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400",
    "Cloud & DevOps": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    "Databases": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    "Protocols": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
  };
  return map[cat] ?? "bg-olive-200 text-olive-700 dark:bg-olive-800/40 dark:text-olive-300";
};

export function WorkSection() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-olive-400 dark:text-olive-600 text-sm uppercase font-mono">
        Tech Stack
      </p>
      <div className="flex flex-col gap-3 w-full">
        {techStack.map((group) => (
          <div key={group.category} className="flex gap-3 items-start">
            <span
              className={`text-[10px] font-semibold px-2 py-1 rounded shrink-0 mt-0.5 ${categoryColor(group.category)}`}
            >
              {group.category}
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-olive-600 dark:text-olive-400 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
