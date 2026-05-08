export function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full text-center">
      <p className="font-serif italic text-2xl text-olive-800 dark:text-olive-100">
        Zulqurnain Haider
      </p>
      <div className="flex gap-5 text-sm text-olive-500 dark:text-olive-400">
        <a
          href="mailto:zulqurnainjj@gmail.com"
          className="hover:text-olive-800 dark:hover:text-olive-100 transition-colors"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/zulqurnainjj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-olive-800 dark:hover:text-olive-100 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/zulqurnain"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-olive-800 dark:hover:text-olive-100 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://medium.com/@zulqurnainjj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-olive-800 dark:hover:text-olive-100 transition-colors"
        >
          Medium
        </a>
        <a
          href="https://stackexchange.com/users/11459153/zulqurnain-haider"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-olive-800 dark:hover:text-olive-100 transition-colors"
        >
          StackExchange
        </a>
      </div>
      <p className="text-xs text-olive-400 dark:text-olive-600">
        Lahore, Pakistan · Open to remote worldwide
      </p>
    </div>
  );
}
