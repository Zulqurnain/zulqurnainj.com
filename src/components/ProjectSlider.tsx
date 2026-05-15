"use client";

import { useState, useRef, useCallback } from "react";

export type Screen = {
  title: string;
  subtitle?: string;
  rows?: string[];
  badge?: string;
  variant: "phone" | "web";
  accent?: string;
};

type Props = {
  projectName: string;
  platform: string;
  screens: Screen[];
};

const accentMap: Record<string, { bg: string; text: string; ring: string }> = {
  blue:   { bg: "from-blue-500 to-blue-700",       text: "text-blue-100",   ring: "ring-blue-400/40" },
  purple: { bg: "from-purple-500 to-fuchsia-700",  text: "text-purple-100", ring: "ring-purple-400/40" },
  rose:   { bg: "from-rose-500 to-pink-700",       text: "text-rose-100",   ring: "ring-rose-400/40" },
  emerald:{ bg: "from-emerald-500 to-teal-700",    text: "text-emerald-100",ring: "ring-emerald-400/40" },
  amber:  { bg: "from-amber-500 to-orange-600",    text: "text-amber-100",  ring: "ring-amber-400/40" },
  slate:  { bg: "from-slate-700 to-slate-900",     text: "text-slate-100",  ring: "ring-slate-400/40" },
  indigo: { bg: "from-indigo-500 to-blue-800",     text: "text-indigo-100", ring: "ring-indigo-400/40" },
  sky:    { bg: "from-sky-500 to-cyan-700",        text: "text-sky-100",    ring: "ring-sky-400/40" },
  red:    { bg: "from-red-500 to-rose-700",        text: "text-red-100",    ring: "ring-red-400/40" },
};

function Mockup({ screen, projectName }: { screen: Screen; projectName: string }) {
  const accent = accentMap[screen.accent || "slate"] || accentMap.slate;

  if (screen.variant === "phone") {
    return (
      <div className="flex items-center justify-center w-full h-full p-6">
        <div className={`w-[180px] h-[340px] rounded-[28px] bg-gradient-to-br ${accent.bg} shadow-xl ring-1 ${accent.ring} p-3 flex flex-col`}>
          <div className="flex justify-between items-center px-2 pt-1 text-[8px] font-mono text-white/70">
            <span>9:41</span>
            <span className="flex gap-0.5"><span>●</span><span>●</span><span>●</span></span>
          </div>
          <div className="mt-2 px-1">
            <div className="text-[10px] font-bold text-white/95 leading-tight">{projectName}</div>
            <div className="text-[8px] text-white/70 mt-0.5">{screen.title}</div>
            {screen.subtitle && <div className="text-[7px] text-white/60 mt-0.5">{screen.subtitle}</div>}
          </div>
          <div className="mt-3 flex flex-col gap-1.5 px-1">
            {(screen.rows ?? ["", "", "", ""]).map((row, i) => (
              <div key={i} className="bg-white/15 backdrop-blur rounded-md px-1.5 py-1.5 flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm bg-white/30 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[7px] text-white/90 leading-tight truncate">{row || `Item ${i + 1}`}</div>
                  <div className="h-0.5 bg-white/20 rounded-full mt-1 w-2/3" />
                </div>
              </div>
            ))}
          </div>
          {screen.badge && (
            <div className="mt-auto pb-1 flex justify-center">
              <span className="text-[7px] bg-white/25 backdrop-blur text-white px-2 py-0.5 rounded-full font-medium">
                {screen.badge}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // web
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className={`w-full max-w-[300px] h-[200px] rounded-lg bg-gradient-to-br ${accent.bg} shadow-xl ring-1 ${accent.ring} p-2.5 flex flex-col`}>
        {/* Browser chrome */}
        <div className="flex items-center gap-1 mb-2">
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/30" />
          <div className="ml-1 flex-1 h-2.5 bg-white/15 rounded-sm" />
        </div>
        <div className="px-1">
          <div className="text-[10px] font-bold text-white/95 leading-tight">{projectName}</div>
          <div className="text-[8px] text-white/70 mt-0.5">{screen.title}</div>
          {screen.subtitle && <div className="text-[7px] text-white/60 mt-0.5">{screen.subtitle}</div>}
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1 flex-1">
          {(screen.rows ?? ["", "", "", "", "", ""]).slice(0, 6).map((row, i) => (
            <div key={i} className="bg-white/15 backdrop-blur rounded-sm p-1 flex flex-col gap-0.5">
              <div className="h-3 bg-white/25 rounded-sm" />
              <div className="text-[6px] text-white/85 leading-tight truncate">{row || `${i + 1}`}</div>
              <div className="h-0.5 bg-white/20 rounded-full w-2/3" />
            </div>
          ))}
        </div>
        {screen.badge && (
          <div className="mt-1.5 flex justify-end">
            <span className="text-[7px] bg-white/25 backdrop-blur text-white px-1.5 py-0.5 rounded font-medium">
              {screen.badge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectSlider({ projectName, platform, screens }: Props) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((i: number) => {
    setActive(i);
    const el = scrollRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: w * i, behavior: "smooth" });
  }, []);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== active) setActive(idx);
  }, [active]);

  if (!screens.length) return null;

  return (
    <div className="w-full rounded-xl overflow-hidden bg-olive-200 dark:bg-olive-950 border border-olive-300 dark:border-olive-800">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide aspect-[5/3]"
        style={{ scrollbarWidth: "none" }}
      >
        {screens.map((screen, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-center"
            aria-label={`${projectName} screenshot ${i + 1}: ${screen.title}`}
          >
            <Mockup screen={screen} projectName={projectName} />
          </div>
        ))}
      </div>

      {screens.length > 1 && (
        <div className="flex items-center justify-between px-3 py-2 bg-olive-100 dark:bg-olive-900 border-t border-olive-300 dark:border-olive-800">
          <button
            type="button"
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="text-xs text-olive-600 dark:text-olive-400 hover:text-olive-900 dark:hover:text-olive-100 disabled:opacity-30 transition-colors"
            aria-label="Previous screenshot"
          >
            ‹ Prev
          </button>
          <div className="flex items-center gap-1.5">
            {screens.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`size-1.5 rounded-full transition-colors ${
                  i === active
                    ? "bg-olive-800 dark:bg-olive-100"
                    : "bg-olive-300 dark:bg-olive-700 hover:bg-olive-500"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === active}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(Math.min(screens.length - 1, active + 1))}
            disabled={active === screens.length - 1}
            className="text-xs text-olive-600 dark:text-olive-400 hover:text-olive-900 dark:hover:text-olive-100 disabled:opacity-30 transition-colors"
            aria-label="Next screenshot"
          >
            Next ›
          </button>
        </div>
      )}
      <div className="px-3 pb-2 pt-1 bg-olive-100 dark:bg-olive-900 flex items-center justify-between text-[10px] text-olive-500 dark:text-olive-500">
        <span className="font-mono">{platform}</span>
        <span>{screens[active]?.title}</span>
      </div>
    </div>
  );
}
