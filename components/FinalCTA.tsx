import { IconArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/SectionHeader";

interface FinalCTAProps {
  priceDisplay: string;
}

export function FinalCTA({ priceDisplay }: FinalCTAProps) {
  return (
    <Section alt className="!pb-20">
      <div className="card-highlight card mx-auto max-w-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Готовы начать?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--muted)] sm:text-base">
          Получите инструкцию и откройте ИП за несколько дней
        </p>
        <a
          href="#pricing"
          className="btn-primary mt-6 inline-flex px-8 py-3.5 text-sm sm:mt-8 sm:text-base"
        >
          Начать за {priceDisplay} BYN
          <IconArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
