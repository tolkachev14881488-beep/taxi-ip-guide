import {
  IconMap,
  IconChart,
  IconCar,
  IconClock,
  IconArrowRight,
} from "@/components/ui/Icons";
import { SectionHeader } from "@/components/SectionHeader";

const pains = [
  {
    problem: "Не понятно, с чего начать",
    solution: "Пошаговый план из 6 этапов — открываете и делаете по порядку",
    Icon: IconMap,
  },
  {
    problem: "Боитесь ошибиться с налогами",
    solution: "Разбор систем налогообложения простым языком для водителей",
    Icon: IconChart,
  },
  {
    problem: "Агрегатор отклоняет заявку",
    solution: "Чек-лист документов и требований для Яндекс Go и других сервисов",
    Icon: IconCar,
  },
  {
    problem: "Теряете время на форумах",
    solution: "Вся информация собрана в одном месте — без устаревших советов",
    Icon: IconClock,
  },
];

export function PainPoints() {
  return (
    <section id="pain" className="section-light px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Знакомо?"
          title={
            <>
              Без ИП вы теряете деньги и{" "}
              <span className="text-gradient">нервы</span>
            </>
          }
          description="Агрегаторы требуют легальный статус. Мы убрали всё лишнее и оставили только то, что нужно водителю"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          {pains.map((item) => (
            <div
              key={item.problem}
              className="card-elevated flex h-full gap-4 rounded-2xl p-5 sm:p-6"
            >
              <div className="icon-box">
                <item.Icon />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-red-400/80 line-through decoration-red-400/30">
                  {item.problem}
                </p>
                <div className="mt-2 flex items-start gap-2">
                  <IconArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-amber-400" />
                  <p className="text-sm leading-relaxed text-white sm:text-base">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
