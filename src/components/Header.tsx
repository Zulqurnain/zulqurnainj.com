"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "SaaS", href: "/saas" },
  { label: "Contact", href: "mailto:zulqurnainjj@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/zulqurnainjj", external: true },
  { label: "Linktree", href: "https://linktr.ee/zulqurnainjj", external: true },
  { label: "llms.txt", href: "/llms.txt", external: true },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2.5 items-start w-full">
      {/* Avatar + identity row */}
      <div className="flex items-center gap-4 w-full">
        <div className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Zulqurnain Haider"
            className="size-14 rounded-full object-cover ring-2 ring-olive-300 dark:ring-olive-700"
            loading="eager"
          />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <h1 className="font-semibold text-olive-800 dark:text-olive-100 text-xl leading-tight">
            Zulqurnain Haider
          </h1>
          <p className="text-sm text-olive-500 dark:text-olive-400 font-serif italic leading-snug">
            Senior Full Stack Developer (Gen AI) — shipping on-device AI that keeps data on the phone.
          </p>
          <p className="text-xs text-olive-400 dark:text-olive-600 mt-0.5">
            Lahore, Pakistan · Open to remote worldwide
          </p>
        </div>
      </div>

      {/* Nav — desktop: single row, always visible */}
      <nav className="hidden sm:flex flex-wrap gap-x-4 gap-y-1.5 items-center w-full">
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

      {/* Nav — mobile: hamburger + dropdown, avoids nav items wrapping across lines */}
      <div className="flex sm:hidden items-center gap-3 w-full">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex items-center justify-center size-9 rounded-lg border border-olive-300 dark:border-olive-700 text-olive-600 dark:text-olive-300"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
        <ThemeToggle />
      </div>
      {menuOpen && (
        <div className="flex sm:hidden flex-col w-full rounded-lg border border-olive-200 dark:border-olive-800 divide-y divide-olive-200 dark:divide-olive-800 overflow-hidden">
          {navItems.map(({ label, href, external }) => {
            const isActive = !external && pathname === href;
            return (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? "px-3 py-2.5 font-semibold text-sm text-olive-800 dark:text-olive-100"
                    : "px-3 py-2.5 font-medium text-sm text-olive-500 dark:text-olive-400"
                }
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
