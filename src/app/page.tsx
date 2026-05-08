import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { WorkSection } from "@/components/WorkSection";

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
            I&apos;m a Senior Mobile &amp; Full Stack Engineer with 8+ years
            shipping consumer apps used by millions. My focus is{" "}
            <span className="font-medium">React Native and Flutter</span> — I&apos;ve
            built and scaled flagship mobile products at{" "}
            <a
              href="https://swvl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              SWVL
            </a>{" "}
            and{" "}
            <a
              href="https://victoriassecret.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Victoria&apos;s Secret &amp; Co.
            </a>
            , from real-time ride-sharing at city scale to personalised shopping
            experiences for 70M+ customers.
          </p>
          <p className="animate-in animate-delay-2">
            At Victoria&apos;s Secret I led the cross-platform mobile team — React
            Native and Flutter apps, Go and Python microservices, LLM-powered search
            with Pinecone and FAISS, and ML recommendation pipelines on AWS. At SWVL
            I owned the rider and captain apps across Android and iOS, shipping
            features across Africa, the Middle East, and Pakistan.
          </p>
          <p className="animate-in animate-delay-3">
            Beyond mobile, I&apos;ve delivered full-stack fintech at{" "}
            <a
              href="https://chase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              JPMorgan Chase
            </a>{" "}
            (Java, Spring Boot, SWIFT MT102/MT202/ISO20022) and currently build
            AI-powered EdTech at{" "}
            <a
              href="https://fuentes.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Fuentes.tech
            </a>{" "}
            — RAG pipelines, OpenAI integrations, and Kubernetes on AWS.
          </p>
          <p className="animate-in animate-delay-4">
            Always open to interesting mobile or full-stack challenges.{" "}
            <a href="mailto:zulqurnainjj@gmail.com" className="link">
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
