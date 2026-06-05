import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-sm font-bold text-[#0b0f19] shadow-lg shadow-amber-500/20 sm:h-10 sm:w-10">
            ИП
          </span>
          <div className="min-w-0">
            <span className="font-display block truncate text-sm font-semibold text-white sm:text-base">
              ТаксиПуть
            </span>
            <span className="hidden text-[10px] uppercase tracking-widest text-slate-500 sm:block">
              Беларусь
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-400 lg:flex lg:gap-8">
          <a href="#pain" className="transition hover:text-amber-400">
            Зачем ИП
          </a>
          <a href="#benefits" className="transition hover:text-amber-400">
            Что внутри
          </a>
          <a href="#how" className="transition hover:text-amber-400">
            Как работает
          </a>
          <a href="#pricing" className="transition hover:text-amber-400">
            Цена
          </a>
        </nav>

        <a
          href="#pricing"
          className="btn-primary shrink-0 rounded-full px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="sm:hidden">Купить</span>
          <span className="hidden sm:inline">Получить инструкцию</span>
        </a>
      </div>
    </header>
  );
}
