import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { WorkSection } from "@/components/WorkSection";

export const metadata: Metadata = {
  title: "Zulqurnain Haider — Software Engineer & World Traveler | Pakistan",
  description:
    "Zulqurnain Haider — software engineer, maker, and traveler from Lahore, Pakistan. 8+ years building mobile and web products across fintech, e-commerce, EdTech, and transit. React Native, Flutter, Go, Python, AI/RAG.",
  alternates: { canonical: "https://zulqurnainj.com" },
  openGraph: {
    url: "https://zulqurnainj.com",
    title: "Zulqurnain Haider — Software Engineer & World Traveler | Pakistan",
    description: "Software engineer, maker, and traveler from Lahore, Pakistan. React Native · Flutter · Go · Python · AI/RAG.",
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
            I&apos;m a software engineer from Lahore, Pakistan — builder, traveler,
            and creator of software used by millions. Over{" "}
            <span className="font-medium">8+ years</span> I&apos;ve shipped mobile
            and web products across{" "}
            <span className="font-medium">fintech, e-commerce, EdTech, and mass transit</span>,
            serving users in South Asia, the Middle East, Europe, and the US.
          </p>
          <p className="animate-in animate-delay-2">
            My journey started in native mobile —{" "}
            <span className="font-medium">Swift for iOS, Kotlin for Android</span> — then
            expanded to cross-platform with{" "}
            <span className="font-medium">React Native and Flutter</span>. I&apos;ve
            since gone full-stack, owning backend APIs, web frontends, and cloud
            infrastructure end-to-end. 15+ consumer apps shipped and counting.
          </p>
          <p className="animate-in animate-delay-3">
            On the AI side I build{" "}
            <span className="font-medium">RAG pipelines and LLM-powered features</span>{" "}
            using OpenAI, Pinecone, FAISS, and custom toolchains. I&apos;m also the
            author of{" "}
            <a href="https://github.com/Zulqurnain/offllama" target="_blank" rel="noopener noreferrer" className="link">
              offLLama
            </a>{" "}
            — an open-source library to run llama.cpp on shared hosting without a GPU.
          </p>
          <p className="animate-in animate-delay-4">
            Always chasing the next challenge, from a café in Lahore to wherever
            the work takes me.{" "}
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
