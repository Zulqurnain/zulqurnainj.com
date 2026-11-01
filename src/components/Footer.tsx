"use client";

import { useState } from "react";

// Latest CV on Google Drive (owner replaces the file in place, so this link is stable).
const CV_URL =
  "https://drive.google.com/file/d/1jLqo7UzUfXucfAIm-U31lNsqHJ2JAuZ_/view?usp=sharing";

const linkCls =
  "hover:text-olive-800 dark:hover:text-olive-100 transition-colors cursor-pointer";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText("zulqurnainjutt");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the handle is shown on the button anyway
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full text-center">
      <p className="font-serif italic text-lg text-olive-800 dark:text-olive-100">
        Zulqurnain Haider
      </p>

      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium px-4 py-1.5 rounded-full bg-olive-800 text-olive-100 dark:bg-olive-100 dark:text-olive-900 hover:opacity-90 transition-opacity"
      >
        Download CV
      </a>

      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-olive-500 dark:text-olive-400">
        <a href="mailto:zulqurnainjj@gmail.com" className={linkCls}>
          Email
        </a>
        <a href="tel:+628217201641" className={linkCls}>
          Call
        </a>
        <a
          href="https://wa.me/628217201641"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          WhatsApp
        </a>
        <a
          href="https://t.me/zthenomad"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Telegram
        </a>
        <button
          type="button"
          onClick={copyDiscord}
          title="Copy Discord handle: zulqurnainjutt"
          className={linkCls}
        >
          {copied ? "Copied!" : "Discord"}
        </button>
        <a
          href="https://linkedin.com/in/zulqurnainj"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/zulqurnain"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/zjnomad"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Instagram
        </a>
        <a
          href="https://fb.com/zjnomad"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Facebook
        </a>
        <a
          href="https://medium.com/@zulqurnainjj"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Medium
        </a>
        <a
          href="https://stackexchange.com/users/11459153/zulqurnain-haider"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          StackExchange
        </a>
      </div>

      <p className="text-xs text-olive-400 dark:text-olive-600">
        Jakarta, Indonesia · Open to remote worldwide
      </p>
    </div>
  );
}
