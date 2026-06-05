"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

const faqs = [
  {
    question: "Зачем нужно ИП для работы в такси?",
    answer:
      "Агрегаторы (Яндекс Go и др.) работают только с легальными партнёрами — ИП или самозанятыми. Без статуса вы не сможете принимать заказы и получать выплаты официально.",
  },
  {
    question: "Сколько времени займёт регистрация?",
    answer:
      "При готовых документах — 1–3 рабочих дня через egovernment.by. Инструкция поможет подготовиться заранее, чтобы не затягивать процесс.",
  },
  {
    question: "Когда я получу доступ к инструкции?",
    answer:
      "Сразу после успешной оплаты — автоматически. Вы получите персональную ссылку, которую можно сохранить в закладках.",
  },
  {
    question: "Какие карты принимаются?",
    answer:
      "Любые карты белорусских банков через платёжную систему bePaid. Оплата защищена и проходит на стороне банка.",
  },
  {
    question: "Это замена юристу?",
    answer:
      "Нет. Это информационный продукт с пошаговым алгоритмом. Для сложных случаев рекомендуем консультацию специалиста.",
  },
  {
    question: "Можно вернуть деньги?",
    answer:
      "После получения цифрового доступа возврат не предусмотрен — продукт доставляется мгновенно после оплаты.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-light px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader label="FAQ" title="Остались вопросы?" />

        <div className="mt-8 space-y-2 sm:mt-12 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-white/5 bg-[#111827]/80 transition-colors hover:border-white/10 sm:rounded-2xl"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="text-sm font-medium text-white sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm text-amber-400 transition-transform sm:h-8 sm:w-8 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-white/5 px-4 pb-4 pt-1 sm:px-6 sm:pb-5">
                  <p className="text-sm leading-relaxed text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
