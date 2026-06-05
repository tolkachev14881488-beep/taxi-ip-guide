"use client";

import { useState } from "react";
import { IconCheck } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/SectionHeader";

interface PricingProps {
  priceDisplay: string;
}

export function Pricing({ priceDisplay }: PricingProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", { method: "POST" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Не удалось создать платёж");
      }

      window.location.href = data.redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
      setLoading(false);
    }
  }

  const features = [
    "Полная инструкция — 6 этапов от А до Я",
    "Чек-лист документов для агрегатора",
    "Пошаговый гид по egovernment.by",
    "Разбор систем налогообложения",
    "Подключение к Яндекс Go и другим сервисам",
    "Персональная ссылка — доступ навсегда",
  ];

  return (
    <section id="pricing" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Специальное предложение"
          title={
            <>
              Один платёж — <span className="text-gradient">полный старт</span>
            </>
          }
          description="Дешевле одной консультации. Дороже, чем месяцы проб и ошибок."
        />

        <div className="mx-auto mt-10 max-w-lg sm:mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#111827] shadow-2xl shadow-amber-500/10 sm:rounded-3xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl" />

            <div className="relative border-b border-white/5 bg-gradient-to-r from-amber-500/15 to-transparent px-5 py-6 sm:px-8 sm:py-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-amber-300">
                    Полный комплект
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-white sm:text-6xl">
                      {priceDisplay}
                    </span>
                    <span className="text-lg text-slate-400 sm:text-xl">BYN</span>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-bold text-[#0b0f19] sm:px-3 sm:text-xs">
                  ХИТ
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                Разовая оплата · мгновенный доступ · без подписок
              </p>
            </div>

            <div className="relative px-5 py-6 sm:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {error && (
                <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="btn-primary mt-6 w-full rounded-2xl py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60 sm:mt-8 sm:py-4 sm:text-base"
              >
                {loading ? (
                  "Перенаправление..."
                ) : (
                  <>
                    <span className="sm:hidden">Оплатить {priceDisplay} BYN</span>
                    <span className="hidden sm:inline">
                      Оплатить {priceDisplay} BYN и получить инструкцию
                    </span>
                  </>
                )}
              </button>

              <div className="mt-5 flex flex-col items-center gap-2 text-xs text-slate-500 sm:mt-6 sm:flex-row sm:justify-center sm:gap-4">
                <span className="flex items-center gap-1.5">
                  <LockIcon />
                  Безопасная оплата bePaid
                </span>
                <span className="flex items-center gap-1.5">
                  <CardIcon />
                  Карты банков РБ
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-600 sm:mt-6">
            Цифровой продукт — доступ предоставляется сразу после оплаты
          </p>
        </div>
      </div>
    </section>
  );
}

export function MobileStickyCTA({ priceDisplay }: PricingProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", { method: "POST" });
      const data = await response.json();
      if (response.ok) {
        window.location.href = data.redirectUrl;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#070b14]/95 px-4 py-3 backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="shrink-0">
          <p className="font-display text-base font-bold text-white">
            {priceDisplay} BYN
          </p>
          <p className="text-[10px] text-slate-500">разовый платёж</p>
        </div>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="btn-primary flex-1 rounded-xl py-3 text-sm disabled:opacity-60"
        >
          {loading ? "Загрузка..." : "Получить инструкцию"}
        </button>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}
