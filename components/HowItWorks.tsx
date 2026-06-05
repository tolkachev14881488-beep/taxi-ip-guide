const steps = [
  {
    step: "01",
    title: "Оплата на сайте",
    description:
      "Выберите тариф и оплатите картой через защищённый платёжный виджет bePaid.",
  },
  {
    step: "02",
    title: "Мгновенный доступ",
    description:
      "После успешной оплаты вы получите персональную ссылку на инструкцию.",
  },
  {
    step: "03",
    title: "Регистрация ИП",
    description:
      "Следуйте пошаговому руководству и откройте ИП для работы в такси.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Как это работает
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Три простых шага от оплаты до готовности работать
          </p>
        </div>
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-sky-200 to-transparent md:block" />
          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-sky-200/50">
                {item.step}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
