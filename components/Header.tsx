import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-sm font-bold text-white shadow-sm">
            ИП
          </span>
          <span className="text-lg font-semibold text-slate-800">Такси РБ</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 sm:flex">
          <a href="#benefits" className="transition hover:text-sky-600">
            Преимущества
          </a>
          <a href="#how" className="transition hover:text-sky-600">
            Как это работает
          </a>
          <a href="#pricing" className="transition hover:text-sky-600">
            Тариф
          </a>
          <a href="#faq" className="transition hover:text-sky-600">
            FAQ
          </a>
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
        >
          Оплатить
        </a>
      </div>
    </header>
  );
}
