export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-sm text-sky-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Актуально для Республики Беларусь
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Откройте ИП для работы в{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              такси
            </span>{" "}
            за 1 день
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Пошаговая инструкция по регистрации индивидуального предпринимателя
            для водителей такси. Без лишней бюрократии — только конкретные
            действия и чек-листы.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-200/50 transition hover:shadow-xl"
            >
              Получить инструкцию
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-medium text-slate-700 transition hover:bg-white"
            >
              Как это работает
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CheckIcon />
              Мгновенный доступ после оплаты
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              Оплата картой через bePaid
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="glass-card absolute -left-4 top-8 z-10 rounded-2xl p-5 shadow-lg">
            <p className="text-sm font-medium text-slate-500">Шаг 1 из 6</p>
            <p className="mt-1 font-semibold text-slate-800">Подготовка документов</p>
          </div>
          <div className="glass-card absolute -right-2 bottom-12 z-10 rounded-2xl p-5 shadow-lg">
            <p className="text-sm font-medium text-slate-500">Регистрация</p>
            <p className="mt-1 font-semibold text-emerald-600">egovernment.by</p>
          </div>
          <div className="mx-auto aspect-square max-w-md rounded-3xl bg-gradient-to-br from-sky-100 via-white to-cyan-100 p-8 shadow-xl">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/60 bg-white/50 p-6">
              <div>
                <p className="text-sm font-medium text-sky-600">Ваша инструкция</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-800">
                  ИП для такси
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">
                    1
                  </span>
                  Документы и подготовка
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">
                    2
                  </span>
                  Регистрация в МНС
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">
                    3
                  </span>
                  Подключение к агрегатору
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-emerald-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
