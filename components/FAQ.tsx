"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/SectionHeader";

const faqs = [
  {
    q: "Зачем нужно ИП для работы в такси?",
    a: "Агрегаторы (Яндекс Go и др.) работают только с ИП или самозанятыми. Без статуса нельзя легально принимать заказы.",
  },
  {
    q: "Сколько времени займёт регистрация?",
    a: "При готовых документах — 1–3 рабочих дня через egovernment.by.",
  },
  {
    q: "Когда я получу доступ?",
    a: "Сразу после оплаты — персональная ссылка на инструкцию.",
  },
  {
    q: "Какие карты принимаются?",
    a: "Карты белорусских банков через bePaid.",
  },
  {
    q: "Это замена юристу?",
    a: "Нет, это информационный продукт. Для сложных случаев — консультация специалиста.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeader label="FAQ" title="Частые вопросы" />

      <div className="mx-auto max-w-2xl space-y-2">
        {faqs.map((item, i) => (
          <div key={item.q} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="text-sm font-medium text-white sm:text-base">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 text-[var(--accent)] transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open === i && (
              <div className="border-t border-[var(--border)] px-5 pb-4 pt-1 sm:px-6 sm:pb-5">
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
