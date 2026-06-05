export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/50 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 text-xs font-bold text-white">
              ИП
            </span>
            <span className="font-semibold text-slate-800">Такси РБ</span>
          </div>
          <p className="text-center text-sm text-slate-500 sm:text-right">
            Информационные материалы. Не является юридической консультацией.
            <br />
            © {new Date().getFullYear()} Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
