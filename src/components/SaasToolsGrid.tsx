"use client";

import type React from "react";
import { motion, type Variants } from "framer-motion";

type Tool = {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  image: string;
  href?: string;
  badge: "Live" | "Beta" | "Coming Soon";
};

const ArrowIcon = () => (
  <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const tools: Tool[] = [
  {
    id: "dummyflights",
    name: "Dummy Flights",
    tagline: "Sample Itinerary · Educational",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <path d="M20 9l2 9 7 4-7 1-2 8-2-8-7-1 7-4z" fill="#d97706" />
        <path d="M11 31h18" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    href: "https://zulqurnainj.com/dummyflights/",
    badge: "Live",
  },
  {
    id: "prompt-health-checker",
    name: "Prompt Health Checker",
    tagline: "Score · Analyze · Strengthen",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="9" width="16" height="20" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M12 14h8M12 18h8M12 22h5" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="29" cy="28" r="7" fill="#22c55e" />
        <path d="M26 28l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "https://tools.zulqurnainj.com/prompt-health-checker",
    badge: "Live",
  },
  {
    id: "text-to-leads",
    name: "Text To Leads Extractor",
    tagline: "Paste · Extract · Connect",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="10" width="18" height="22" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M12 16h10M12 20h10M12 24h6" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="30" cy="14" r="5" fill="#fbbf24" />
        <path d="M28 14h4M30 12v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "https://tools.zulqurnainj.com/text-to-leads",
    badge: "Live",
  },
  {
    id: "notepackz",
    name: "NotePackz",
    tagline: "Write · Store · Share",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="8" y="8" width="18" height="22" rx="2" stroke="#d97706" strokeWidth="1.8" />
        <path d="M12 14h10M12 18h10M12 22h6" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="30" cy="29" r="6" fill="#d97706" />
        <path d="M27.5 29h5M30 26.5v5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    href: "https://tools.zulqurnainj.com/notepackz",
    badge: "Live",
  },
  {
    id: "nayab",
    name: "Nayab",
    tagline: "Chat · Demo of llmizeOFF",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 40 40" className="size-8" fill="none">
        <rect width="40" height="40" rx="10" fill="#fef3c7" />
        <rect x="6" y="9" width="22" height="16" rx="3" stroke="#d97706" strokeWidth="1.8" />
        <path d="M10 14h14M10 18h10" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 25l2 4 2-4" stroke="#d97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="31" cy="12" r="6" fill="#f97316" />
        <path d="M28.5 12h5M31 9.5v5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    href: "https://zulqurnainj.com/chat",
    badge: "Live",
  },
];

const badgeStyles: Record<Tool["badge"], string> = {
  Live: "bg-emerald-500 text-white",
  Beta: "bg-blue-500 text-white",
  "Coming Soon": "bg-stone-200 text-stone-600 dark:bg-olive-800 dark:text-olive-300",
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

function ToolCard({ tool }: { tool: Tool }) {
  const isLive = tool.badge === "Live";

  const card = (
    <motion.div
      variants={cardVariants}
      whileHover={isLive ? { y: -7, transition: { duration: 0.2 } } : {}}
      className={[
        "group relative flex flex-col rounded-2xl overflow-hidden border h-[300px]",
        "transition-shadow duration-200",
        isLive
          ? "border-amber-200 dark:border-amber-900/60 hover:shadow-xl hover:shadow-amber-100/60 dark:hover:shadow-amber-900/20 cursor-pointer"
          : "border-stone-200 dark:border-olive-800",
      ].join(" ")}
    >
      {/* Preview image */}
      <div className="relative h-[165px] shrink-0 overflow-hidden bg-stone-100 dark:bg-olive-800">
        <img
          src={tool.image}
          alt={`${tool.name} preview`}
          className={[
            "w-full h-full object-cover transition-transform duration-500",
            "group-hover:scale-105",
            !isLive ? "grayscale opacity-70" : "",
          ].join(" ")}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        {/* Badge */}
        <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeStyles[tool.badge]}`}>
          {tool.badge === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse align-middle" />}
          {tool.badge}
        </span>
      </div>

      {/* Info area */}
      <div className="flex flex-col flex-1 gap-2 px-4 py-3 bg-white dark:bg-olive-950">
        <div className="flex items-center gap-2.5">
          <div className="rounded-lg border border-amber-100 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/40 p-1 shrink-0">
            {tool.icon}
          </div>
          <h3 className="font-semibold text-stone-900 dark:text-olive-100 text-sm leading-snug">
            {tool.name}
          </h3>
        </div>
        <p className="text-[11px] font-medium text-amber-600 dark:text-amber-500 uppercase tracking-wider font-mono">
          {tool.tagline}
        </p>
        <div className="mt-auto">
          {isLive ? (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:gap-2.5 transition-all duration-150">
              Open Tool <ArrowIcon />
            </span>
          ) : (
            <span className="text-[10px] text-stone-400 dark:text-olive-600 italic">Coming soon</span>
          )}
        </div>
      </div>

      {/* Amber glow bottom border on hover */}
      {isLive && (
        <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </motion.div>
  );

  if (isLive && tool.href) {
    return (
      <a href={tool.href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }
  return card;
}

export function SaasToolsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </motion.div>
  );
}
