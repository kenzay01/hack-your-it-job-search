import React from "react";

const GuaranteesSection = () => {
  const guarantees = [
    "Live-сесії з Дмитром + взаємодія з куратором → ставите питання в реальному часі, отримуєте відповіді «на місці».",
    "Ви будете відчувати результат вже під час марафону – після впровадження домашніх завдань конверсія вашого CV та LinkedIn у пропозиції збільшиться.",
    "Чітка гарантія – якщо протягом 7 днів не бачите прогресу (оновлене CV, LinkedIn, план пошуку) – повертаємо кошти без зайвих запитань.",
    "Весь мій 7-річний бекграунд у форматі 14-денного спринту – 100+ власних співбесід і 150+ студентів.",
    "Бонус-тиждень підтримки – після закінчення марафону у вас залишається чат, де ви можете між собою комунікувати і шукати роботу.",
  ];

  return (
    <section id="guarantees" className="py-16 pb-4 bg-white">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Що гарантує результат:
        </h2>
        <div>
          <ul className="space-y-4 flex flex-col items-start">
            {guarantees.map((item, index) => (
              <li
                key={index}
                className="flex items-start p-8 bg-gradient-to-r from-blue-600 to-blue-700  border-l-4 border-blue-500 rounded-r-2xl shadow-lg transition-all hover:shadow-xl hover:scale-102"
              >
                {/* <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div> */}
                <p className="text-white text-xl">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 flex items-center">
          <p className="text-lg font-semibold text-blue-600">
            Результат: чітке CV, відпрацьовані відповіді, список вакансій і план
            дій на 30 днів – усе за 14 днів спринту.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
