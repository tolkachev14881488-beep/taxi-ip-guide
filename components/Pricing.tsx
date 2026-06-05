"use client";

import { useState } from "react";
import { IconCheck } from "@/components/ui/Icons";
import { Section, SectionHeader } from "@/components/SectionHeader";

interface PricingProps {
  priceDisplay: string;
}

const features = [
  "Полная инструкция — 6 этапов",
  "Чек-лист документов",
  "Гид по egovernment.by",
  "Разбор налогообложения",
  "Подключение к агрегатору",
  "Персональная ссылка навсегда",
];

export function Pricing({ priceDisplay }: PricingProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Ошибка");
      window.location.href = data.redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка");
      setLoading(false);
    }
  }

  return (
    <Section id="pricing" alt>
      <SectionHeader
        label="Стоимость"
        title={
          <>
            Один платёж — <span className="text-gradient">полный доступ</span>
          </>
        }
        description="Разовая оплата. Без подписок и скрытых платежей."
      />

      <div className="mx-auto max-w-md">
        <div className="card-highlight card overflow-hidden">
          <div className="border-b border-[var(--border)] px-6 py-8 text-center sm:px-8">
            <p className="text-sm font-medium text-[var(--accent)]">Полный комплект</p>
            <div className="mt-3 flex items-baseline justify-center gap-1.5">
              <span className="font-display text-5xl font-bold text-white sm:text-6xl">
                {priceDisplay}
              </span>
              <span className="text-lg text-[var(--muted)]">BYN</span>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#c8d3e0]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {error && (
              <p className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              className="btn-primary mt-6 w-full py-3.5 text-sm disabled:opacity-60 sm:mt-8 sm:text-base"
            >
              {loading ? "Загрузка..." : `Оплатить ${priceDisplay} BYN`}
            </button>

            <p className="mt-4 text-center text-xs text-[var(--muted)]">
              Безопасная оплата через bePaid · карты банков РБ
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function MobileStickyCTA({ priceDisplay }: PricingProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (res.ok) window.location.href = data.redirectUrl;
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--background)]/95 px-4 py-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="shrink-0">
          <p className="font-display text-base font-bold text-white">{priceDisplay} BYN</p>
        </div>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="btn-primary flex-1 py-3 text-sm disabled:opacity-60"
        >
          {loading ? "..." : "Получить инструкцию"}
        </button>
      </div>
    </div>
  );
}
