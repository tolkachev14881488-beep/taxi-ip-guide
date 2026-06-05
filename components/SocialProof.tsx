import { IconStar } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/SectionHeader";

const reviews = [
  {
    text: "Думал, что регистрация ИП — это кошмар на неделю. По инструкции всё сделал за два дня, агрегатор принял с первого раза.",
    author: "Дмитрий",
    role: "водитель, Минск",
  },
  {
    text: "Главное — чек-лист документов. Без него точно бы что-то забыл. Заплатил 49 рублей — сэкономил кучу нервов.",
    author: "Андрей",
    role: "водитель, Гомель",
  },
  {
    text: "Понятно расписано про egovernment.by и налоги. Не пришлось платить консультанту — всё нашёл в инструкции.",
    author: "Сергей",
    role: "начинающий водитель",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-3.5 w-3.5 text-amber-400 sm:h-4 sm:w-4" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Отзывы"
          title="Водители уже начали работать"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="card-elevated flex h-full flex-col rounded-2xl p-5 sm:p-6"
            >
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                «{review.text}»
              </p>
              <footer className="mt-5 border-t border-white/5 pt-4">
                <p className="text-sm font-medium text-white">{review.author}</p>
                <p className="text-xs text-slate-500">{review.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
