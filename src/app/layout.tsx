import type { Metadata } from "next";
import { Schibsted_Grotesk, IM_Fell_Great_Primer, Sono } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const fell    = IM_Fell_Great_Primer({ subsets: ["latin"], variable: "--font-fell", style: ["normal", "italic"], weight: "400", display: "swap" });
const sono    = Sono({ subsets: ["latin"], variable: "--font-sono", display: "swap" });

const BASE = "https://zulqurnainj.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Zulqurnain Haider — Senior Full Stack Developer | Pakistan",
    template: "%s | Zulqurnain Haider",
  },

  description:
    "Zulqurnain Haider is a Senior Full Stack Developer from Lahore, Pakistan with 8+ years building mobile and web products at Victoria's Secret, JPMorgan Chase, SWVL, and Fuentes.tech. Expert in React Native, Flutter, Go, Python, AI/RAG.",

  keywords: [
    "Zulqurnain Haider",
    "Zulqurnain",
    "zulqurnainjj",
    "Zulqurnain developer",
    "Top Pakistani developer",
    "Pakistani software engineer",
    "Senior Full Stack Developer Pakistan",
    "Senior Full Stack Developer",
    "Full Stack Developer Lahore",
    "Full Stack Developer",
    "React Native developer Pakistan",
    "Flutter developer Pakistan",
    "Mobile developer Pakistan",
    "iOS developer Pakistan",
    "Android developer Pakistan",
    "Victoria Secret developer",
    "Victoria's Secret engineer",
    "JPMorgan Chase developer",
    "SWVL developer",
    "Fuentes tech developer",
    "AI developer Pakistan",
    "RAG developer",
    "LLM engineer",
    "Go developer",
    "Python developer",
    "Next.js developer Pakistan",
    "remote developer Pakistan",
    "hire Pakistani developer",
  ],

  authors: [{ name: "Zulqurnain Haider", url: BASE }],
  creator: "Zulqurnain Haider",
  publisher: "Zulqurnain Haider",

  alternates: {
    canonical: BASE,
    languages: { "en-US": BASE },
  },

  openGraph: {
    type: "website",
    url: BASE,
    siteName: "Zulqurnain Haider",
    title: "Zulqurnain Haider — Senior Full Stack Developer | Pakistan",
    description:
      "Senior Full Stack Developer from Lahore, Pakistan. 8+ years at Victoria's Secret, JPMorgan Chase, SWVL. Expert in React Native, Flutter, Go, Python, AI/RAG.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zulqurnain Haider — Senior Full Stack Developer",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zulqurnain Haider — Senior Full Stack Developer | Pakistan",
    description:
      "Senior Full Stack Developer from Lahore, Pakistan. 8+ years at Victoria's Secret, JPMorgan Chase, SWVL.",
    images: ["/og-image.jpg"],
    creator: "@zulqurnainjj",
    site: "@zulqurnainjj",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "E9mUfadeeeWGT_c7zGloZ9OrWsBDLfqtabxo436Suj4",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      name: "Zulqurnain Haider",
      alternateName: ["Zulqurnain", "zulqurnainjj", "ZulqurnainJJ"],
      url: BASE,
      image: {
        "@type": "ImageObject",
        url: `${BASE}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
      jobTitle: "Senior Full Stack Developer",
      description:
        "Senior Full Stack Developer from Lahore, Pakistan with 8+ years experience in React Native, Flutter, Go, Python, AI/RAG. Previously at Victoria's Secret, JPMorgan Chase, SWVL.",
      nationality: { "@type": "Country", name: "Pakistan" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      email: "me@zulqurnainj.com",
      sameAs: [
        "https://github.com/zulqurnain",
        "https://linkedin.com/in/zulqurnainjj",
        "https://medium.com/@zulqurnainjj",
        "https://linktr.ee/zulqurnainjj",
        "https://stackexchange.com/users/11459153/zulqurnain-haider",
      ],
      knowsAbout: [
        "React Native", "Flutter", "iOS Development", "Android Development",
        "Go", "Python", "TypeScript", "Next.js", "React",
        "AI", "RAG", "LLM", "OpenAI", "Machine Learning",
        "AWS", "Kubernetes", "Docker", "DevOps",
        "SWIFT ISO20022", "Fintech", "Mobile Development", "Full Stack Development",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Fuentes.tech",
        url: "https://fuentes.tech",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Zulqurnain Haider",
      description: "Portfolio of Zulqurnain Haider — Senior Full Stack Developer from Pakistan",
      author: { "@id": `${BASE}/#person` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${grotesk.variable} ${fell.variable} ${sono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Prevents dark-mode flash on load */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark');}}catch(e){}})()` }} />
        {children}
      </body>
    </html>
  );
}
