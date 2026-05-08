import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { ProjectsSection } from "@/components/ProjectsSection";

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
