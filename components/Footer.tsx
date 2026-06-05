export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="container-main flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-xs font-bold text-[#0a0e17]">
            ИП
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-white">ТаксиПуть</p>
            <p className="text-xs text-[var(--muted)]">Беларусь</p>
          </div>
        </div>
        <p className="text-center text-xs leading-relaxed text-[var(--muted)] sm:text-right">
          Информационный продукт. Не является юридической консультацией.
          <br />© {new Date().getFullYear()} ТаксиПуть
        </p>
      </div>
    </footer>
  );
}
