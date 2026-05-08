import { ThemeToggle } from "./ThemeToggle";

export function Header() {
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
      <nav className="flex gap-4 items-center w-full">
        <span className="font-semibold text-sm text-olive-800 dark:text-olive-100">
          Home
        </span>
        <a
          href="mailto:zulqurnainjj@gmail.com"
          className="font-medium text-sm text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 transition-all"
        >
          Contact
        </a>
        <a
          href="https://linkedin.com/in/zulqurnainjj"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-sm text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 transition-all"
        >
          LinkedIn
        </a>
        <a
          href="/apps"
          className="font-medium text-sm text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100 transition-all"
        >
          Apps
        </a>
        <ThemeToggle />
      </nav>
    </div>
  );
}
