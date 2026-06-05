import { IconCheck, IconArrowRight } from "@/components/ui/Icons";

interface HeroProps {
  priceDisplay: string;
}

export function Hero({ priceDisplay }: HeroProps) {
  return (
    <section className="hero-mesh relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36">
      <div className="pointer-events-none absolute -right-32 top-20 hidden h-96 w-96 rounded-full bg-amber-500/10 blur-3xl glow-orb md:block" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 space-y-6 lg:order-1 lg:space-y-8">
            <div className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Актуально для водителей в РБ · 2025
            </div>

            <h1 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Начните зарабатывать в{" "}
              <span className="text-gradient">такси легально</span> — без
              бюрократического хаоса
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Готовая дорожная карта: от регистрации ИП до первого заказа в
              Яндекс Go. Конкретные шаги, чек-листы и ссылки.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#pricing"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="sm:hidden">Получить за {priceDisplay} BYN</span>
                <span className="hidden sm:inline">
                  Получить инструкцию за {priceDisplay} BYN
                </span>
                <IconArrowRight />
              </a>
              <a
                href="#how"
                className="btn-secondary inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-medium sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Как это работает
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-6 sm:gap-4 sm:pt-8">
              <Stat value="6" label="этапов" />
              <Stat value="1–3" label="дня на ИП" />
              <Stat value="24/7" label="доступ" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="animate-float mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-1 shadow-2xl shadow-black/40 lg:max-w-none">
              <div className="rounded-[0.9rem] bg-[#111827] p-5 sm:rounded-[1.35rem] sm:p-7">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-amber-400 sm:text-xs">
                      Ваша инструкция
                    </p>
                    <p className="font-display mt-1 text-lg font-bold text-white sm:text-xl">
                      ИП для такси
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-400 sm:px-3 sm:text-xs">
                    Готово
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { n: 1, t: "Документы и подготовка", done: true },
                    { n: 2, t: "Регистрация на egovernment.by", done: true },
                    { n: 3, t: "Выбор системы налогообложения", done: false },
                    { n: 4, t: "Подключение к Яндекс Go", done: false },
                  ].map((step) => (
                    <div
                      key={step.n}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 ${
                        step.done
                          ? "border border-amber-500/20 bg-amber-500/10"
                          : "border border-white/5 bg-white/5"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg sm:h-7 sm:w-7 ${
                          step.done
                            ? "bg-amber-400 text-[#0b0f19]"
                            : "bg-white/10 text-slate-500"
                        }`}
                      >
                        {step.done ? (
                          <IconCheck className="h-3.5 w-3.5" />
                        ) : (
                          <span className="text-[10px] font-bold sm:text-xs">{step.n}</span>
                        )}
                      </span>
                      <span
                        className={`text-xs leading-snug sm:text-sm ${
                          step.done ? "text-white" : "text-slate-500"
                        }`}
                      >
                        {step.t}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-dashed border-amber-500/25 bg-amber-500/5 px-3 py-3 text-center sm:mt-6 sm:p-4">
                  <p className="text-xs text-amber-200/80 sm:text-sm">
                    Чек-лист, шаблоны, ссылки на порталы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl">
        {value}
      </p>
      <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
}
