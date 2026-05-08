"use client";

// Both icons are always in the DOM; CSS shows/hides based on .dark on <html>.
// This avoids any React hydration mismatch between SSR (always light) and client.
export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="cursor-pointer bg-transparent border-none px-2 py-1 -mx-2 -my-1 transition-all text-olive-500 hover:text-olive-800 dark:text-olive-400 dark:hover:text-olive-100 flex items-center ml-auto"
    >
      {/* Moon — visible in light mode */}
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4 dark:hidden"
        aria-hidden="true"
      >
        <path d="M6 2a6 6 0 0 0 0 12 6 6 0 0 0 4.33-1.86A4.5 4.5 0 0 1 6 7.5 4.5 4.5 0 0 1 9.67 3.1 6 6 0 0 0 6 2Z" />
      </svg>

      {/* Sun — visible in dark mode */}
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4 hidden dark:block"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3" />
        <path
          d="M8 1v2M8 13v2M1 8h2m10 0h2M3.22 3.22l1.42 1.42m6.72 6.72 1.42 1.42M3.22 12.78l1.42-1.42m6.72-6.72 1.42-1.42"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
