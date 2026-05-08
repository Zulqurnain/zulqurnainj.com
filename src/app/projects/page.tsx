import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Zulqurnain Haider — 18+ apps shipped at Victoria's Secret, JPMorgan Chase, SWVL, and more. React Native, Flutter, iOS, Android, AI/RAG, Web.",
  alternates: { canonical: "https://zulqurnainj.com/projects" },
  openGraph: {
    url: "https://zulqurnainj.com/projects",
    title: "Projects | Zulqurnain Haider",
    description: "18+ apps shipped at Victoria's Secret, JPMorgan Chase, SWVL, Fuentes.tech and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-2 w-full">
          <ProjectsSection />
        </div>

        <div className="animate-in animate-delay-3 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-4 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
