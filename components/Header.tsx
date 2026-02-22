import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur supports-[backdrop-filter]:bg-stone-50/60 dark:supports-[backdrop-filter]:bg-stone-950/60 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-stone-900 dark:text-stone-100 hover:opacity-80 transition-opacity flex flex-col sm:flex-row sm:items-baseline sm:gap-2"
        >
          <span>elnos</span>
          <span className="text-xs font-normal text-stone-500 dark:text-stone-400">
            thoughts on math, code, life
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/posts/about"
            className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            Posts
          </Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
