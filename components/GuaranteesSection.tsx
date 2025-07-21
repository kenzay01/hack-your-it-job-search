import React from "react";

const GuaranteesSection = () => {
  const guarantees = [
    "Live-сесії з Дмитром + взаємодія з куратором → ставите питання в реальному часі, отримуєте відповіді «на місці».",
    "Ви будете відчувати результат вже під час марафону – після впровадження домашніх завдань конверсія вашого CV та LinkedIn у пропозиції збільшиться.",
    "Чітка гарантія – якщо протягом 7 днів не бачите прогресу (оновлене CV, LinkedIn, план пошуку) – повертаємо кошти без зайвих запитань.",
    "Весь мій 7-річний бекграунд у форматі 14-денного спринту – 100+ власних співбесід і 150+ студентів.",
    "Бонус-тиждень підтримки – після закінчення марафону у вас залишається чат, де ви можете між собою комунікувати і шукати роботу.",
  ];

  const radialYPositions = [
    "bg-radial-[at_50%_450%]",
    "bg-radial-[at_50%_250%]",
    "bg-radial-[at_50%_50%]",
    "bg-radial-[at_50%_-50%]",
    "bg-radial-[at_50%_-350%]",
  ];
  return (
    <section
      id="guarantees"
      className="py-16 pb-4 bg-transparent text-white relative"
    >
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Що гарантує результат:
        </h2>
        <div>
          <ul className="space-y-4 flex flex-col items-start">
            {guarantees.map((item, index) => (
              <li
                key={index}
                className={`flex items-start p-4 md:p-8 ${radialYPositions[index]} to-[var(--secondary-color)] from-[var(--main-two-color)] border-l-4 border-l-[var(--main-two-color)]  rounded-r-2xl shadow-lg transition-all hover:shadow-xl hover:scale-102`}
              >
                {/* <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div> */}
                <p className="text-white text-md md:text-xl">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 mx-6">
        <div className="mt-8 bg-radial-[at_50%_-750%] to-[var(--secondary-color)] from-[var(--main-two-color)] p-6 rounded-xl border-l-4 border-[var(--main-two-color)] flex items-center">
          <p className="text-sm md:text-lg font-semibold text-white">
            Результат: чітке CV, відпрацьовані відповіді, список вакансій і план
            дій на 30 днів – усе за 14 днів спринту.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
