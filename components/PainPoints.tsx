import {
  IconMap,
  IconChart,
  IconCar,
  IconClock,
} from "@/components/ui/Icons";
import { Section, SectionHeader } from "@/components/SectionHeader";

const items = [
  {
    problem: "Не понятно, с чего начать",
    solution: "Пошаговый план из 6 этапов — делаете по порядку",
    Icon: IconMap,
  },
  {
    problem: "Страх ошибиться с налогами",
    solution: "Разбор систем налогообложения простым языком",
    Icon: IconChart,
  },
  {
    problem: "Агрегатор отклоняет заявку",
    solution: "Чек-лист документов для Яндекс Go и других сервисов",
    Icon: IconCar,
  },
  {
    problem: "Потеря времени на форумах",
    solution: "Вся информация в одном месте, без устаревших советов",
    Icon: IconClock,
  },
];

export function PainPoints() {
  return (
    <Section id="pain" alt>
      <SectionHeader
        label="Проблема"
        title={
          <>
            Без ИП вы теряете <span className="text-gradient">деньги и время</span>
          </>
        }
        description="Агрегаторы работают только с легальными партнёрами. Мы собрали всё необходимое в одном гиде."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {items.map((item) => (
          <div key={item.problem} className="card flex gap-4 p-6">
            <div className="icon-box">
              <item.Icon />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-[var(--muted)] line-through decoration-white/20">
                {item.problem}
              </p>
              <p className="mt-2 text-[0.9375rem] font-medium leading-snug text-white">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
