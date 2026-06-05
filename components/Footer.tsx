export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070b14] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-xs font-bold text-[#0b0f19]">
              ИП
            </span>
            <div>
              <span className="font-display font-semibold text-white">ТаксиПуть</span>
              <p className="text-xs text-slate-600">Инструкция для водителей · РБ</p>
            </div>
          </div>
          <p className="max-w-md text-center text-sm leading-relaxed text-slate-600 sm:text-right">
            Информационный продукт. Не является юридической или налоговой
            консультацией.
            <br />© {new Date().getFullYear()} ТаксиПуть. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
