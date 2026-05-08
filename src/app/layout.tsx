import type { Metadata } from "next";
import {
  Schibsted_Grotesk,
  IM_Fell_Great_Primer,
  Sono,
} from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const fell = IM_Fell_Great_Primer({
  subsets: ["latin"],
  variable: "--font-fell",
  style: ["normal", "italic"],
  weight: "400",
  display: "swap",
});

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zulqurnain Haider",
  description:
    "Senior Full Stack Developer with 8+ years building scalable products at JPMorgan Chase, Victoria's Secret, SWVL, and more.",
  authors: [{ name: "Zulqurnain Haider" }],
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Go",
    "Python",
    "React Native",
    "Flutter",
    "LLM",
    "AI",
  ],
  openGraph: {
    title: "Zulqurnain Haider",
    description:
      "Senior Full Stack Developer — React, Next.js, Go, Python, React Native, LLMs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${grotesk.variable} ${fell.variable} ${sono.variable}`}
    >
      <body>
        {/* Inline script runs synchronously before paint — prevents dark-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark');}}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
