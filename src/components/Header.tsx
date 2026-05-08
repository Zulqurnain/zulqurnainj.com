"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "mailto:zulqurnainjj@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/zulqurnainjj", external: true },
  { label: "Projects", href: "/projects" },
  { label: "Apps", href: "/apps" },
  { label: "Linktree", href: "https://linktr.ee/zulqurnainjj", external: true },
];

export function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 items-start w-full">
      {/* Avatar */}
      <div className="flex h-10 items-center justify-start w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpg"
          alt="Zulqurnain Haider"
          className="size-10 rounded-full object-cover"
          loading="eager"
        />
      </div>

      {/* Name */}
      <div className="flex gap-1 h-6 items-center w-full">
        <h1 className="font-medium text-olive-800 dark:text-olive-100 text-xl text-nowrap whitespace-pre">
          <span className="font-medium">Zulqurnain Haider </span>
          <span className="font-serif text-2xl italic">aka</span>
          <span className="font-medium"> @zulqurnainjj</span>
        </h1>
      </div>

      {/* Nav */}
      <nav className="flex flex-wrap gap-x-4 gap-y-2 items-center w-full">
        {navItems.map(({ label, href, external }) => {
          const isActive = !external && pathname === href;
          return (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={
                isActive
                  ? "font-semibold text-sm text-olive-800 dark:text-olive-100"
                  : "font-medium text-sm text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 transition-all"
              }
            >
              {label}
            </a>
          );
        })}
        <ThemeToggle />
      </nav>

      {/* Chat buttons */}
      <div className="flex flex-wrap gap-2 w-full">
        <a
          href="https://wa.me/923364116933"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:opacity-80 transition-opacity"
        >
          <svg viewBox="0 0 24 24" className="size-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </a>
        <a
          href="https://t.me/zthenomad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400 hover:opacity-80 transition-opacity"
        >
          <svg viewBox="0 0 24 24" className="size-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Chat on Telegram
        </a>
      </div>
    </div>
  );
}
