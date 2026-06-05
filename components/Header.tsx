import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-[#0a0e17]">
            ИП
          </span>
          <span className="font-display text-[0.9375rem] font-semibold text-white">
            ТаксиПуть
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {[
            ["#pain", "Зачем ИП"],
            ["#benefits", "Содержание"],
            ["#how", "Этапы"],
            ["#pricing", "Стоимость"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--muted)] transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#pricing" className="btn-primary px-4 py-2 text-sm sm:px-5 sm:py-2.5">
          Получить доступ
        </a>
      </div>
    </header>
  );
}
