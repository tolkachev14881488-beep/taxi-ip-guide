"use client";

import { useState } from "react";

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
    "Полная инструкция по открытию ИП",
    "Чек-лист документов",
    "Руководство по egovernment.by",
    "Выбор системы налогообложения",
    "Подключение к агрегатору такси",
    "Персональная ссылка на инструкцию",
  ];

  return (
    <section id="pricing" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Тариф
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Одна оплата — полный доступ к инструкции
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="glass-card overflow-hidden rounded-3xl shadow-xl">
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-6 text-white">
              <p className="text-sm font-medium opacity-90">Стандарт</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-bold">{priceDisplay}</span>
                <span className="text-xl opacity-90">BYN</span>
              </div>
              <p className="mt-2 text-sm opacity-90">
                Разовая оплата, доступ без ограничений по времени
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {error && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 py-4 text-base font-semibold text-white shadow-lg shadow-sky-200/50 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Перенаправление..." : "Оплатить и получить инструкцию"}
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Безопасная оплата через bePaid. Принимаются карты белорусских банков.
              </p>
            </div>
          </div>
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
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-4 backdrop-blur-md sm:hidden">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 py-3.5 text-base font-semibold text-white shadow-lg disabled:opacity-60"
      >
        {loading ? "Загрузка..." : `Оплатить ${priceDisplay} BYN`}
      </button>
    </div>
  );
}
