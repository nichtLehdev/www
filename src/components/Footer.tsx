import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/60 px-6 py-8">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-slate-500">
          lars.dev · lehdev
        </span>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-slate-600 dark:text-slate-500">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
