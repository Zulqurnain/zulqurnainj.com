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
  title: "Zulqurnain Haider — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with 8+ years building mobile and web products at Victoria's Secret, JPMorgan Chase, SWVL, and Fuentes.tech. Native iOS/Android → React Native/Flutter → Full Stack + AI/RAG.",
  authors: [{ name: "Zulqurnain Haider" }],
  keywords: [
    "Senior Full Stack Developer",
    "React Native",
    "Flutter",
    "iOS Developer",
    "Android Developer",
    "React",
    "Next.js",
    "Go",
    "Python",
    "AI",
    "RAG",
    "LLM",
  ],
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
  openGraph: {
    title: "Zulqurnain Haider — Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer — Native Mobile, React Native, Flutter, Go, Python, AI/RAG.",
    type: "website",
    url: "https://zulqurnainj.com",
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
