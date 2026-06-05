import { IconStar } from "@/components/ui/Icons";
import { Section, SectionHeader } from "@/components/SectionHeader";

const reviews = [
  {
    text: "По инструкции всё сделал за два дня, агрегатор принял с первого раза.",
    author: "Дмитрий",
    role: "водитель, Минск",
  },
  {
    text: "Чек-лист документов — главное. Без него точно бы что-то забыл.",
    author: "Андрей",
    role: "водитель, Гомель",
  },
  {
    text: "Понятно про egovernment.by и налоги. Консультант не понадобился.",
    author: "Сергей",
    role: "начинающий водитель",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-3.5 w-3.5 text-[var(--accent)]" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <Section>
      <SectionHeader
        label="Отзывы"
        title="Водители уже начали работать"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {reviews.map((r) => (
          <blockquote key={r.author} className="card flex h-full flex-col p-6">
            <Stars />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[#c8d3e0]">
              «{r.text}»
            </p>
            <footer className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="text-sm font-medium text-white">{r.author}</p>
              <p className="text-xs text-[var(--muted)]">{r.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
