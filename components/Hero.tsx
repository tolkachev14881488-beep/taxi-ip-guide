import { IconArrowRight, IconCheck } from "@/components/ui/Icons";

interface HeroProps {
  priceDisplay: string;
}

const stats = [
  { value: "6", label: "этапов в гиде" },
  { value: "1–3", label: "дня на регистрацию" },
  { value: "24/7", label: "доступ к материалам" },
];

const previewSteps = [
  { title: "Документы и подготовка", done: true },
  { title: "Регистрация на egovernment.by", done: true },
  { title: "Система налогообложения", done: false },
  { title: "Подключение к агрегатору", done: false },
];

export function Hero({ priceDisplay }: HeroProps) {
  return (
    <section className="hero-bg pt-8 pb-16 lg:pb-24 lg:pt-12">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <p className="section-label">Беларусь · для водителей такси</p>
            <h1 className="font-display mt-4 text-[1.875rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Откройте ИП и начните работать в{" "}
              <span className="text-gradient">такси легально</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--muted)] lg:text-lg">
              Пошаговый гид: регистрация ИП, налоги, подключение к Яндекс Go.
              Без юридического языка — только конкретные действия.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="btn-primary px-6 py-3.5 text-sm sm:text-base">
                Получить за {priceDisplay} BYN
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a href="#how" className="btn-secondary px-6 py-3.5 text-sm sm:text-base">
                Как это работает
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-[var(--muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preview card */}
          <div className="order-1 lg:order-2">
            <div className="card overflow-hidden">
              <div className="border-b border-[var(--border)] px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                      Инструкция
                    </p>
                    <p className="font-display mt-1 text-lg font-semibold text-white">
                      ИП для такси
                    </p>
                  </div>
                  <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                    Актуально
                  </span>
                </div>
              </div>
              <div className="space-y-2 p-4 sm:p-5">
                {previewSteps.map((step, i) => (
                  <div
                    key={step.title}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                      step.done ? "bg-[var(--accent-soft)]" : "bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                        step.done
                          ? "bg-[var(--accent)] text-[#0a0e17]"
                          : "bg-white/10 text-[var(--muted)]"
                      }`}
                    >
                      {step.done ? <IconCheck className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <span
                      className={`text-sm ${step.done ? "text-white" : "text-[var(--muted)]"}`}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--border)] px-6 py-4 text-center">
                <p className="text-xs text-[var(--muted)]">
                  + чек-листы, шаблоны, ссылки на порталы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
