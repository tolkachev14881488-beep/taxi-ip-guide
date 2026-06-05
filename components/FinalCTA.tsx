import { IconArrowRight } from "@/components/ui/Icons";

interface FinalCTAProps {
  priceDisplay: string;
}

export function FinalCTA({ priceDisplay }: FinalCTAProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/15 via-[#111827] to-[#111827] px-5 py-12 text-center sm:rounded-3xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Готовы выйти на линию?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-lg">
              Получите инструкцию прямо сейчас — и через несколько дней
              начните зарабатывать легально
            </p>
            <a
              href="#pricing"
              className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-sm sm:mt-8 sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              Начать за {priceDisplay} BYN
              <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
