import { Section, SectionHeader } from "@/components/SectionHeader";

const benefits = [
  {
    title: "6 этапов от А до Я",
    description:
      "Документы, egovernment.by, налоги, агрегатор и первый заказ — ничего не пропущено.",
    highlight: true,
  },
  {
    title: "Актуально для РБ",
    description: "Порталы, сроки и требования именно для Беларуси.",
    highlight: false,
  },
  {
    title: "Чек-листы",
    description: "Отмечайте выполненные пункты — ничего не забудете.",
    highlight: false,
  },
  {
    title: "Доступ навсегда",
    description: "Персональная ссылка после оплаты без ограничений по времени.",
    highlight: false,
  },
  {
    title: "Понятный язык",
    description: "Без юридического жаргона — разберётесь с первого прочтения.",
    highlight: false,
  },
  {
    title: "Подключение к агрегатору",
    description: "Инструкция по регистрации в Яндекс Go и аналогах.",
    highlight: false,
  },
];

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeader
        label="Содержание"
        title={
          <>
            Всё необходимое —{" "}
            <span className="text-gradient">в одном гиде</span>
          </>
        }
        description="Не курс и не консультация. Готовый алгоритм действий для водителя такси."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {benefits.map((item) => (
          <div
            key={item.title}
            className={`card flex flex-col p-6 ${item.highlight ? "card-highlight lg:col-span-1" : ""}`}
          >
            {item.highlight && (
              <span className="mb-3 w-fit rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-[var(--accent)]">
                Основное
              </span>
            )}
            <h3 className="font-display text-base font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
