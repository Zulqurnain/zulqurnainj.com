import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "On-Device AI — Private LLM, Fully Offline | Zulqurnain Haider",
  description:
    "Proof that a real LLM runs 100% on-device in React Native — no API keys, no server, zero network egress at inference. Sub-2s cold start, sub-200ms first token, GPU/NPU offload.",
  alternates: { canonical: "https://zulqurnainj.com/on-device" },
  openGraph: {
    url: "https://zulqurnainj.com/on-device",
    title: "On-Device AI — Private LLM, Fully Offline",
    description:
      "A real LLM running entirely on the phone. No cloud. No keys. Turn on airplane mode and it still answers.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

type Metric = {
  value: string;
  unit: string;
  label: string;
  note: string;
};

const METRICS: Metric[] = [
  { value: "< 2", unit: "s", label: "Cold start", note: "to first context, 1.5B Q4_K_M" },
  { value: "< 200", unit: "ms", label: "Time to first token", note: "on-device, no round-trip" },
  { value: "0", unit: "bytes", label: "Network egress", note: "at inference time" },
  { value: "✓", unit: "", label: "Offline / airplane mode", note: "works after first download" },
];

function MetricCard({ m }: { m: Metric }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-olive-300/60 dark:border-olive-700/60 bg-white/60 dark:bg-olive-800/40 p-5">
      <div className="flex items-baseline gap-1">
        <span className="font-semibold text-3xl text-olive-800 dark:text-olive-100 leading-none">{m.value}</span>
        {m.unit ? <span className="text-lg text-olive-500 dark:text-olive-400">{m.unit}</span> : null}
      </div>
      <p className="font-medium text-sm text-olive-700 dark:text-olive-200">{m.label}</p>
      <p className="text-xs text-olive-400 dark:text-olive-500 leading-snug">{m.note}</p>
    </div>
  );
}

const STRIP = `I ship mobile AI that actually runs on-device: a React Native demo powered by llama.rn/llama.cpp with Q4_K_M quant, on-screen latency, and zero network egress at inference — airplane mode on, it still answers.

In production, I shipped the same discipline inside a React Native checkout flow: cold start dropped from 8.2s to under 2s, cloud inference cost dropped roughly 92%, and user activation moved from 11% to 47%.

I'm looking for senior AI + mobile roles where data privacy matters, and I can prove the engineering in code: https://github.com/Zulqurnain/on-device-llm-rn, https://zulqurnainj.com/on-device, https://linkedin.com/in/zulqurnainj.`;

const REPO_URL = "https://github.com/Zulqurnain/on-device-llm-rn";

const STACK = [
  { title: "llama.cpp via llama.rn", body: "Battle-tested native runtime, not a toy wrapper. Runs through JSI — no bridge serialization penalty." },
  { title: "INT4 / Q4_K_M quant", body: "A 1.5B model drops to ~1 GB at minimal quality loss. Ships small, loads fast, fits mid-tier devices." },
  { title: "SoC layer sharding (n_gpu_layers)", body: "Layers offload to the GPU/NPU when present; automatic CPU fallback on devices without it." },
  { title: "Prompt + KV-cache per context", body: "The same completion() call accepts retrieved context — so context-only RAG stays on-device too." },
];

const WHY = [
  { k: "PII leaving the device", on: "Never", cloud: "Always (prompt + context)" },
  { k: "Latency floor (1B class)", on: "50–200 ms", cloud: "+ network round-trip" },
  { k: "Serving cost", on: "~$0 (on-device)", cloud: "per-token, recurring" },
  { k: "Offline / spotty 4G", on: "✅ works", cloud: "❌" },
  { k: "Data localisation (GDPR, fintech)", on: "✅ by construction", cloud: "needs extra controls" },
];

function StripSection() {
  return (
    <section className="animate-in animate-delay-2 flex flex-col gap-3 w-full">
      <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
        Portable Proof Strip
      </span>
      <h3 className="font-semibold text-xl text-olive-800 dark:text-olive-100">Proof copy</h3>
      <div className="flex flex-col gap-3 rounded-2xl border border-olive-300/60 dark:border-olive-700/60 bg-white/60 dark:bg-olive-800/40 p-5">
        <p className="text-sm text-olive-800 dark:text-olive-100 leading-relaxed whitespace-pre-line">{STRIP}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-olive-700 dark:text-olive-200">
            github.com/Zulqurnain/on-device-llm-rn
          </a>
          <span className="text-olive-400 dark:text-olive-500">·</span>
          <span className="text-olive-700 dark:text-olive-200">zulqurnainj.com/on-device</span>
          <span className="text-olive-400 dark:text-olive-500">·</span>
          <span className="text-olive-700 dark:text-olive-200">linkedin.com/in/zulqurnainj</span>
        </div>
        <p className="text-xs text-olive-500 dark:text-olive-400">
          Reuse this section verbatim across recruiter replies, HN comments, and email/RM signature blocks. Do not change claims per surface.
        </p>
      </div>
    </section>
  );
}

export default function OnDevicePage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 w-full max-w-6xl px-4">
        <div className="animate-in w-full max-w-xl">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 w-full max-w-xl">
          <Divider />
        </div>

        <StripSection />

        <div className="animate-in animate-delay-3 w-full max-w-xl">
          <Divider />
        </div>

        <section className="animate-in animate-delay-2 flex flex-col gap-4 w-full">
          <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
            AI × Mobile · Edge Inference
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl text-olive-800 dark:text-olive-100 leading-tight">
            A real LLM, running entirely on the phone.
          </h2>
          <p className="text-olive-600 dark:text-olive-300 max-w-2xl leading-relaxed">
            No API keys. No server. No network at inference time. This is a runnable React Native demo — pick a small GGUF, load it once, then toggle airplane mode and it still answers, because the model lives in the app sandbox. The pattern behind “ship AI features without sending user data to the cloud.”
          </p>
        </section>

        {/* Metric cards */}
        <section className="animate-in animate-delay-2 flex flex-col gap-3 w-full">
          <h3 className="font-semibold text-xl text-olive-800 dark:text-olive-100">Measured on-device</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {METRICS.map((m) => (
              <MetricCard key={m.label} m={m} />
            ))}
          </div>
          <p className="text-xs text-olive-400 dark:text-olive-500 leading-snug max-w-2xl">
            Representative figures from the live demo on a mid-tier Android device with GPU offload (1.5B Q4_K_M). Actual numbers vary by SoC, model size, and quant. Run the repo on your own hardware to benchmark.
          </p>
        </section>

        <div className="animate-in animate-delay-3 w-full max-w-xl">
          <Divider />
        </div>

        {/* The proof — Loom slot */}
        <section className="animate-in animate-delay-3 flex flex-col gap-3 w-full">
          <h3 className="font-semibold text-xl text-olive-800 dark:text-olive-100">The proof: offline, on camera</h3>
          <p className="text-olive-600 dark:text-olive-300 max-w-2xl leading-relaxed">
            A 45-second proof: ask the app a question, turn on airplane mode, and it still answers — with the live latency line (cold-start ms, first-token ms, tok/s) on screen.
          </p>

          {/* Loom embed slot — replace the placeholder below with the recorded video.
              Record using the script at the repo's LOOM_SCRIPT.md, then paste the
              Loom share iframe here:
              <iframe src="https://www.loom.com/embed/<VIDEO_ID>" ... /> */}
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-olive-300/70 dark:border-olive-700/70 bg-white/40 dark:bg-olive-800/30 p-10 text-center">
            <div className="size-14 rounded-full bg-olive-800 dark:bg-olive-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="size-6 fill-current text-olive-100 dark:text-olive-900" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="font-medium text-olive-700 dark:text-olive-200">Loom walkthrough — 45 sec</p>
            <p className="text-xs text-olive-400 dark:text-olive-500 max-w-md leading-snug">
              Recording slot pending. The 45-second script (hook → offline toggle → live metrics → where to find me) is in the repo's <code>LOOM_SCRIPT.md</code> (a longer 6-min version is also there). Drop the Loom embed iframe in this card once recorded.
            </p>
          </div>

          <details className="rounded-2xl border border-olive-300/60 dark:border-olive-700/60 bg-white/50 dark:bg-olive-800/40 p-4">
            <summary className="cursor-pointer font-medium text-sm text-olive-700 dark:text-olive-200">
              Recording checklist (the money shot is the airplane-mode toggle)
            </summary>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-olive-600 dark:text-olive-300 list-disc list-inside">
              <li>App running on a real phone via Expo Go (Android w/ GPU ideal).</li>
              <li>One small model already downloaded (Qwen2.5-1.5B Q4_K_M, ~1 GB) — no WiFi wait on camera.</li>
              <li>Phone screen mirrored so the device + metrics line are visible.</li>
              <li>Tap Generate, let tokens stream, then toggle airplane mode and Generate again.</li>
              <li>Open <code>src/llm/OnDeviceLLM.ts</code> to highlight <code>n_gpu_layers: 99</code> + the latency measurement.</li>
              <li>Switch to a second model, load, generate, read the new tok/s live.</li>
              <li>Title: “Private LLM inside React Native — fully offline, sub-2s cold start.”</li>
            </ul>
          </details>
        </section>

        <div className="animate-in animate-delay-4 w-full max-w-xl">
          <Divider />
        </div>

        {/* How it works */}
        <section className="animate-in animate-delay-4 flex flex-col gap-3 w-full">
          <h3 className="font-semibold text-xl text-olive-800 dark:text-olive-100">How it works (the 60-second version)</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {STACK.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-1.5 rounded-2xl border border-olive-300/60 dark:border-olive-700/60 bg-white/50 dark:bg-olive-800/40 p-4"
              >
                <p className="font-medium text-olive-800 dark:text-olive-100">{s.title}</p>
                <p className="text-sm text-olive-500 dark:text-olive-400 leading-snug">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="animate-in animate-delay-4 flex flex-col gap-3 w-full">
          <h3 className="font-semibold text-xl text-olive-800 dark:text-olive-100">Why engineering leaders should care</h3>
          <div className="overflow-x-auto rounded-2xl border border-olive-300/60 dark:border-olive-700/60">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-olive-800/90 text-olive-100">
                  <th className="text-left font-medium px-4 py-2.5">Concern</th>
                  <th className="text-left font-medium px-4 py-2.5">On-device (this repo)</th>
                  <th className="text-left font-medium px-4 py-2.5">Cloud LLM API</th>
                </tr>
              </thead>
              <tbody>
                {WHY.map((r, i) => (
                  <tr
                    key={r.k}
                    className={
                      i % 2 === 0
                        ? "bg-white/50 dark:bg-olive-800/30"
                        : "bg-white/20 dark:bg-olive-800/10"
                    }
                  >
                    <td className="px-4 py-2.5 text-olive-700 dark:text-olive-200 font-medium">{r.k}</td>
                    <td className="px-4 py-2.5 text-emerald-700 dark:text-emerald-300">{r.on}</td>
                    <td className="px-4 py-2.5 text-olive-500 dark:text-olive-400">{r.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-in animate-delay-5 flex flex-col gap-3 w-full">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between rounded-2xl border border-olive-300/60 dark:border-olive-700/60 bg-white/50 dark:bg-olive-800/40 p-5">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-olive-800 dark:text-olive-100">Evaluating edge-AI on mobile?</p>
              <p className="text-sm text-olive-500 dark:text-olive-400">Happy to walk through this in a technical read-through.</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <a href="mailto:zulqurnainjj@gmail.com" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-olive-800 text-olive-100 dark:bg-olive-100 dark:text-olive-900 hover:opacity-90 transition-opacity whitespace-nowrap">
                zulqurnainjj@gmail.com
              </a>
              <a href="https://linkedin.com/in/zulqurnainj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-white/60 dark:bg-olive-800/40 text-olive-700 dark:text-olive-200 ring-1 ring-olive-300/60 dark:ring-olive-700/60 hover:opacity-90 transition-opacity whitespace-nowrap">
                linkedin.com/in/zulqurnainj
              </a>
            </div>
          </div>
        </section>

        <div className="animate-in animate-delay-6 w-full max-w-xl">
          <Divider />
        </div>

        <div className="animate-in animate-delay-7 w-full max-w-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}
