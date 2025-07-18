import React from "react";
import { ArrowDown } from "lucide-react";

const JobSearchMarathonSection = () => {
  const categories = [
    {
      title: "Робота",
      items: [
        "Проходження випробувального терміну",
        "Баланс між життям та прокачкою кар’єри",
        "Лайфхаки для полегшення корпоративного життя та роботи на ремоуті",
        "Чи потрібно бути топ-1 в команді",
      ],
    },
    {
      title: "Гроші",
      items: [
        {
          main: "Як вибивати кращі офери?",
          subItems: [
            "Коли це можна/не можна робити?",
            "Як порахувати свою стелю?",
            "Чи потрібно брати декілька фултаймів?",
          ],
        },
        {
          main: "Прямі контракти та офери вище 3 квартилю",
          subItems: ["Чи потрібно бути ТОП-спеціалістом?"],
        },
        "Розбори моїх оферів на 7000$ + 12 000$ бонус, на 7500$ та 7000 євро та чому я не прийняв жоден з них",
        {
          main: "Side hustles для айтішників - бонус",
          subItems: ["Як я продав курсів на 100 000$", "Інвестиції/крипта"],
        },
      ],
    },
    {
      title: "Прокачка себе як спеціаліста",
      items: [
        "Побудова короткострокових і довгострокових цілей",
        "Чи накручувати досвід для досягнення фінансового успіху?",
        {
          main: "Побудова плану розвитку",
          subItems: [
            "Ментор",
            "Курси",
            "Сертифікації",
            "Підготовка до співбесід",
          ],
        },
        "Побудова системи, де не потрібно бути задротом для досягнення фінансових цілей",
      ],
    },
    {
      title: "Твоє позиціювання та упаковка",
      items: [
        {
          main: "Як правильно себе позиціювати та чому це важливо",
          subItems: [
            "Аналіз ринку вакансій: кількість вакансій, конкуренція, актуальність стеку, актуальність в Україні/ЄС",
            "Побудова 'правильної' картинки",
            "Токсичний розділ: накрутка досвіду",
          ],
        },
        {
          main: "Упаковка себе як спеціаліста",
          subItems: [
            "CV",
            "Структура резюме",
            "Як проходити ATS системи",
            "Створення твоєї історії, яка буде зрозуміла рекрутерам",
            "Підбір ключових слів",
          ],
        },
        {
          main: "LinkedIn",
          subItems: [
            "Упаковка",
            "Як прокачувати сторінку",
            "Лайфхаки, які можуть приносити прямі контракти",
          ],
        },
      ],
    },
    {
      title: "Пошук роботи",
      items: [
        "Створення системи пошуку роботи, яка принесе тобі офер",
        "Основні Job платформи в Україні, плюси і мінуси",
        "Cover letter",
        "Використання AI для пошуку роботи",
        "Нюанси пошуку роботи в Україні та країнах ЄС",
        "B2B, країни для оптимізації податків",
      ],
    },
    {
      title: "Співбесіди",
      items: [
        {
          main: "Створення твоєї 'легенди'",
          subItems: [
            "До яких питань потрібно готуватися",
            "Чому рекрутер - твій друг, а не ворог",
            "Приклади",
          ],
        },
        {
          main: "Технічна співбесіда",
          subItems: [
            "Види технічних співбесід",
            "Питання/відповідь",
            "Лайвкодінг",
            "System design",
            "Leetcode",
            "Розповіді про свій досвід, причинно-наслідкові зв’язки",
          ],
        },
        {
          main: "Як постійно тримати себе в тонусі, та бути готовим до будь-яких співбесід",
          subItems: [
            "Як поводити себе в стресових ситуаціях",
            "Підготовка за допомогою AI",
          ],
        },
        {
          main: "Soft skills",
          subItems: [
            "STAR метод",
            "Топ питань зі soft skills співбесід, як готуватися",
            "Найкращі риси топ спеціалістів",
            "Culture fit",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="program"
      className="py-6 md:py-24 bg-[var(--secondary-color)] z-100"
    >
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              14-денна програма марафону
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 px-4 md:p-0">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[var(--main-two-color)] to-[var(--main-color)] relative text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:-translate-y-1 duration-300"
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <ArrowDown className="w-8 h-8 text-white mb-4" />
                  <ul className="text-white text-left list-disc pl-5">
                    {category.items.map((item, i) =>
                      typeof item === "object" && "main" in item ? (
                        <li key={i} className="leading-relaxed">
                          <strong>{item.main}</strong>
                          <ul className="list-disc pl-5 mt-1">
                            {item.subItems.map((subItem, j) => (
                              <li key={j}>{subItem}</li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchMarathonSection;
