"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Зачем нужно ИП для работы в такси?",
    answer:
      "Работа водителем такси через агрегаторы (Яндекс Go и др.) требует статуса индивидуального предпринимателя или самозанятого. ИП позволяет легально получать доход и подключаться к сервисам.",
  },
  {
    question: "Сколько времени занимает регистрация ИП?",
    answer:
      "При наличии всех документов регистрация через портал egovernment.by обычно занимает 1–3 рабочих дня. Наша инструкция поможет подготовиться заранее.",
  },
  {
    question: "Как я получу инструкцию после оплаты?",
    answer:
      "Сразу после успешной оплаты вы будете перенаправлены на страницу с персональной ссылкой. Инструкция доступна онлайн — сохраните ссылку в закладках.",
  },
  {
    question: "Какие способы оплаты принимаются?",
    answer:
      "Оплата производится банковской картой через платёжную систему bePaid. Поддерживаются карты белорусских банков.",
  },
  {
    question: "Это юридическая консультация?",
    answer:
      "Нет. Материалы носят информационный характер и не являются юридической или налоговой консультацией. При необходимости обратитесь к специалисту.",
  },
  {
    question: "Можно ли вернуть деньги?",
    answer:
      "После получения доступа к цифровой инструкции возврат не предусмотрен, так как товар предоставляется в электронном виде сразу после оплаты.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ответы на популярные вопросы об открытии ИП для такси
          </p>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="glass-card overflow-hidden rounded-2xl shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-medium text-slate-800">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-sky-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-100 px-6 pb-5 pt-2">
                  <p className="text-sm leading-relaxed text-slate-600">
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
