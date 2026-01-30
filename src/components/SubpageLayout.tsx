import HeaderWithSidebar from "@/components/HeaderWithSidebar";
import Footer from "@/components/Footer";

export default function SubpageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0f172a] dark:text-slate-200 font-[var(--font-geist-sans)] flex flex-col">
      <HeaderWithSidebar />
      <main className="flex-1 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl w-full">
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 font-mono text-slate-500 dark:text-slate-400 text-lg">
                {subtitle}
              </p>
            )}
          </header>
          <div className="animate-hero-in">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
