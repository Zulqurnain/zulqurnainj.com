import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";

const chromeExtension = {
  name: "Delete All Messages by Z",
  version: "1.1",
  author: "Zulqurnain Haider",
  category: "Chrome Extension",
  description:
    "Automatically delete all Facebook Messenger conversations with one click. Saves hours of manual deletion — the extension cycles through every conversation thread and removes it, leaving your inbox completely clean.",
  features: [
    "One-click bulk delete all Messenger conversations",
    "Auto-scrolls and removes every thread automatically",
    "Works directly in the Facebook Messenger web interface",
    "No data collected — runs entirely in your browser",
    "Lightweight: < 10KB, no dependencies",
  ],
  storeUrl:
    "https://chromewebstore.google.com/detail/delete-all-messages-by-z/dpdlkdbgehhejkfpclhgdbaeahikfnof",
  stats: {
    platform: "Chrome Web Store",
  },
};

export default function AppsPage() {
  return (
    <div className="bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl px-4">

        <div className="animate-in w-full">
          <Header />
        </div>

        <div className="animate-in animate-delay-1 w-full flex flex-col gap-1">
          <h2 className="font-semibold text-sm text-olive-500 dark:text-olive-400 uppercase tracking-wider">
            My Apps
          </h2>
          <p className="text-sm text-olive-600 dark:text-olive-400 leading-relaxed">
            Personal tools and browser extensions I&apos;ve built and published.
          </p>
        </div>

        <div className="animate-in animate-delay-2 w-full">
          <Divider />
        </div>

        {/* Chrome Extension */}
        <div className="animate-in animate-delay-3 w-full flex flex-col gap-4">
          <div className="flex items-start gap-4">
            {/* Icon placeholder */}
            <div className="size-14 rounded-xl bg-olive-200 dark:bg-olive-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://www.google.com/s2/favicons?domain=chrome.google.com&sz=64`}
                alt="Chrome Extension"
                className="size-8"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-olive-800 dark:text-olive-100">
                  {chromeExtension.name}
                </h3>
                <span className="text-xs bg-olive-200 dark:bg-olive-800 text-olive-600 dark:text-olive-400 px-1.5 py-0.5 rounded font-mono">
                  v{chromeExtension.version}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-olive-500 dark:text-olive-500">
                <span>{chromeExtension.category}</span>
                <span>·</span>
                <span>{chromeExtension.stats.platform}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-olive-700 dark:text-olive-300 leading-relaxed">
            {chromeExtension.description}
          </p>

          <ul className="flex flex-col gap-1.5">
            {chromeExtension.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-olive-600 dark:text-olive-400"
              >
                <span className="text-olive-400 dark:text-olive-600 mt-0.5 flex-shrink-0">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={chromeExtension.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-medium bg-olive-800 dark:bg-olive-100 text-olive-100 dark:text-olive-900 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 0 1 6.928 3.999H12a4 4 0 0 0-4 4 4 4 0 0 0 .275 1.457L5.09 8.35A7.965 7.965 0 0 1 12 4zm0 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm6.937 2.207A7.99 7.99 0 0 1 20 12a8 8 0 0 1-8 8 7.99 7.99 0 0 1-3.89-1.005l3.617-6.262A4 4 0 0 0 12 16a4 4 0 0 0 3.45-1.987l3.487-3.806z"/>
            </svg>
            Add to Chrome
          </a>
        </div>

        <div className="animate-in animate-delay-4 w-full">
          <Divider />
        </div>

        <div className="animate-in animate-delay-5 w-full">
          <Footer />
        </div>

      </div>
    </div>
  );
}
