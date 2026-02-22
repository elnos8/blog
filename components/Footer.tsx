export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-stone-200 dark:border-stone-800 mt-auto">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-8">
        <p className="text-xs text-stone-500 dark:text-stone-400">
          © {year} elnos
        </p>
      </div>
    </footer>
  );
}
