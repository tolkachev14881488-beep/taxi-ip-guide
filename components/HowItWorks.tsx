import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Оплачиваете на сайте",
    description: "49 BYN — разовый платёж. Карта любого белорусского банка через bePaid.",
    time: "1 мин",
  },
  {
    step: "02",
    title: "Получаете доступ",
    description: "Мгновенно — персональная ссылка на инструкцию. Сохраните в закладки.",
    time: "Сразу",
  },
  {
    step: "03",
    title: "Открываете ИП",
    description: "Следуете 6 этапам: документы, egovernment.by, налоги, агрегатор.",
    time: "1–3 дня",
  },
  {
    step: "04",
    title: "Выходите на линию",
    description: "Подключаетесь к Яндекс Go или другому сервису и начинаете зарабатывать.",
    time: "Готово",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section-light px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Простой процесс"
          title="От оплаты до первого заказа"
          description="Четыре шага — и вы на легальной основе"
        />

        <div className="relative mt-10 sm:mt-14">
          <div className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-white/10 sm:hidden" />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex gap-4 sm:block sm:gap-0">
                <div className="relative z-10 flex shrink-0 flex-col items-center sm:hidden">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-500/30 bg-[#111827] text-xs font-bold text-amber-400">
                    {item.step}
                  </div>
                </div>

                <div className="card-elevated flex h-full flex-1 flex-col rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display hidden text-3xl font-bold text-amber-400/30 sm:inline">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-slate-500 sm:text-xs">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-base font-semibold text-white sm:mt-4 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-amber-500/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
