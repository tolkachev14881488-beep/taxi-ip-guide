const benefits = [
  {
    title: "Пошаговая инструкция",
    description:
      "Каждый этап расписан простым языком: от сбора документов до первого заказа в агрегаторе.",
    icon: "📋",
  },
  {
    title: "Актуально для РБ",
    description:
      "Информация о регистрации ИП, налогообложении и требованиях для водителей такси в Беларуси.",
    icon: "🇧🇾",
  },
  {
    title: "Экономия времени",
    description:
      "Не нужно искать разрозненную информацию — всё собрано в одном месте с чек-листами.",
    icon: "⏱️",
  },
  {
    title: "Доступ навсегда",
    description:
      "После оплаты инструкция остаётся доступна по вашей персональной ссылке.",
    icon: "🔗",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Почему это удобно
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Мы собрали всё необходимое для быстрого старта работы водителем такси
            на легальной основе
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="glass-card group rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
