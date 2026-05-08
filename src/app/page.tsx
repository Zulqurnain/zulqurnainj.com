import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { WorkSection } from "@/components/WorkSection";
import { ProjectsSection } from "@/components/ProjectsSection";

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
            I&apos;m a Senior Full Stack Developer with 8+ years building scalable
            products used by millions. Currently at{" "}
            <a
              href="https://fuentes.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Fuentes.tech
            </a>
            , building AI-powered educational platforms with OpenAI, custom LLMs,
            RAG pipelines, and Kubernetes on AWS.
          </p>
          <p className="animate-in animate-delay-2">
            Previously I was a Senior Full Stack Engineer at{" "}
            <a
              href="https://victoriassecret.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Victoria&apos;s Secret &amp; Co.
            </a>
            , where I shipped cross-platform mobile apps in React Native and
            Flutter, built Go and Python microservices, and integrated LLM-powered
            search with Pinecone and FAISS. Before that, I spent a year at{" "}
            <a
              href="https://chase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              JPMorgan Chase
            </a>{" "}
            delivering secure banking software and SWIFT messaging systems (MT102,
            MT202, ISO20022).
          </p>
          <p className="animate-in animate-delay-3">
            My toolkit spans React, Next.js, TypeScript, Go, Python, Java, React
            Native, Flutter, and cloud-native infrastructure on AWS, GCP, and
            Azure. I&apos;m particularly interested in AI integration — RAG
            architectures, vector search, agentic workflows, and prompt engineering
            for production systems.
          </p>
          <p className="animate-in animate-delay-4">
            Always open to interesting engineering challenges and remote
            collaborations.{" "}
            <a href="mailto:zulqurnainjj@gmail.com" className="link">
              Say hello
            </a>{" "}
            or connect on{" "}
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

        {/* Projects */}
        <div className="animate-in animate-delay-8 w-full">
          <ProjectsSection />
        </div>

        {/* Divider */}
        <div className="animate-in animate-delay-9 w-full">
          <Divider />
        </div>

        {/* Footer */}
        <div className="animate-in animate-delay-10 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
