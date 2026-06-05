import { Section, SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    num: "1",
    title: "Оплата",
    description: "49 BYN — разовый платёж картой белорусского банка.",
    time: "1 мин",
  },
  {
    num: "2",
    title: "Доступ",
    description: "Мгновенная ссылка на инструкцию. Сохраните в закладках.",
    time: "Сразу",
  },
  {
    num: "3",
    title: "Регистрация ИП",
    description: "6 этапов: документы, egovernment.by, налоги, агрегатор.",
    time: "1–3 дня",
  },
  {
    num: "4",
    title: "Работа",
    description: "Подключение к Яндекс Go и выход на линию.",
    time: "Готово",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" alt>
      <SectionHeader
        label="Этапы"
        title="От оплаты до первого заказа"
        description="Четыре шага — и вы работаете легально"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, i) => (
          <div key={step.num} className="relative flex flex-col">
            {i < steps.length - 1 && (
              <div className="absolute left-1/2 top-8 hidden h-px w-[calc(100%+1.25rem)] bg-[var(--border)] lg:block" />
            )}
            <div className="card relative flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-[#0a0e17]">
                  {step.num}
                </span>
                <span className="text-xs text-[var(--muted)]">{step.time}</span>
              </div>
              <h3 className="font-display mt-4 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
