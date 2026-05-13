import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { WorkSection } from "@/components/WorkSection";

export const metadata: Metadata = {
  title: "Zulqurnain Haider — Senior Full Stack Developer | Pakistan",
  description:
    "Zulqurnain Haider — Senior Full Stack Developer from Lahore, Pakistan. 8+ years building apps at Victoria's Secret, JPMorgan Chase, SWVL. React Native, Flutter, Go, Python, AI/RAG.",
  alternates: { canonical: "https://zulqurnainj.com" },
  openGraph: {
    url: "https://zulqurnainj.com",
    title: "Zulqurnain Haider — Senior Full Stack Developer | Pakistan",
    description: "Senior Full Stack Developer from Pakistan. Victoria's Secret · JPMorgan Chase · SWVL · Fuentes.tech.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        {/* Header */}
        <div className="animate-in w-full">
          <Header />
        </div>

        {/* Bio */}
        <div className="font-normal min-w-full text-olive-800 dark:text-olive-100 text-sm/6 text-justify flex flex-col gap-4">
          <p className="animate-in animate-delay-1">
            I&apos;m a Senior Full Stack Developer with 8+ years of experience
            building products used by millions. I started as a{" "}
            <span className="font-medium">native Android and iOS engineer</span>,
            progressed to cross-platform mobile with{" "}
            <span className="font-medium">React Native and Flutter</span>, and have
            since made a permanent move to full-stack development — owning backend,
            frontend, and DevOps end-to-end.
          </p>
          <p className="animate-in animate-delay-2">
            My mobile roots run deep:{" "}
            <a
              href="https://swvl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              SWVL
            </a>{" "}
            (native Swift/iOS and Kotlin/Android for city-scale ride-sharing) and{" "}
            <a
              href="https://victoriassecret.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Victoria&apos;s Secret &amp; Co.
            </a>{" "}
            (React Native and Flutter for 70M+ customers, with LLM-powered search
            via Pinecone and FAISS). I&apos;ve shipped 15+ consumer apps across
            South Asia, the Middle East, and the US.
          </p>
          <p className="animate-in animate-delay-3">
            On the full-stack side I&apos;ve delivered secure banking software at{" "}
            <a
              href="https://chase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              JPMorgan Chase
            </a>{" "}
            (Java, Spring Boot, SWIFT ISO20022), and I currently lead engineering
            at{" "}
            <a
              href="https://fuentes.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Fuentes.tech
            </a>{" "}
            — building AI-powered EdTech products including{" "}
            <a href="https://get.geniusdrills.com" target="_blank" rel="noopener noreferrer" className="link">
              Genius Drills
            </a>{" "}
            and the{" "}
            <a href="https://spiritofmathcontest.com" target="_blank" rel="noopener noreferrer" className="link">
              Spirit of Math Contest
            </a>{" "}
            platform, with RAG pipelines, OpenAI integrations, and Kubernetes on AWS.
          </p>
          <p className="animate-in animate-delay-4">
            Always open to ambitious engineering challenges.{" "}
            <a href="mailto:me@zulqurnainj.com" className="link">
              Say hello
            </a>{" "}
            or find me on{" "}
            <a
              href="https://linkedin.com/in/zulqurnainjj"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        {/* Divider */}
        <div className="animate-in animate-delay-5 w-full">
          <Divider />
        </div>

        {/* Work */}
        <div className="animate-in animate-delay-6 w-full">
          <WorkSection />
        </div>

        {/* Divider */}
        <div className="animate-in animate-delay-7 w-full">
          <Divider />
        </div>

        {/* Footer */}
        <div className="animate-in animate-delay-8 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
