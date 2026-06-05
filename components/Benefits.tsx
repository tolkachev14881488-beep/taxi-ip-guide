import { SectionHeader } from "@/components/SectionHeader";

const benefits = [
  {
    title: "6 этапов от А до Я",
    description:
      "Документы → egovernment.by → налоги → агрегатор → первый заказ. Ничего не пропущено.",
    span: "sm:col-span-2",
    highlight: true,
  },
  {
    title: "Актуально для РБ",
    description:
      "Порталы, сроки и требования именно для Беларуси — не общие статьи из интернета.",
    span: "",
    highlight: false,
  },
  {
    title: "Чек-листы",
    description:
      "Отмечайте выполненные пункты — не забудете ни одного документа.",
    span: "",
    highlight: false,
  },
  {
    title: "Доступ навсегда",
    description:
      "Персональная ссылка после оплаты. Возвращайтесь в любой момент.",
    span: "",
    highlight: false,
  },
  {
    title: "Без юридического жаргона",
    description:
      "Пишем понятным языком — без сложных терминов. Разберётесь с первого прочтения.",
    span: "sm:col-span-2",
    highlight: false,
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            label="Что внутри"
            title={
              <>
                Всё, что нужно водителю —{" "}
                <span className="text-gradient">в одной инструкции</span>
              </>
            }
          />
          <p className="max-w-sm text-center text-sm leading-relaxed text-slate-400 sm:text-base lg:text-right">
            Готовый алгоритм действий, который экономит недели
            самостоятельного поиска
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className={`card-elevated flex h-full flex-col rounded-2xl p-5 sm:p-6 ${item.span} ${
                item.highlight
                  ? "border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent"
                  : ""
              }`}
            >
              {item.highlight && (
                <span className="mb-3 inline-block w-fit rounded-full bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-300">
                  Главное
                </span>
              )}
              <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
