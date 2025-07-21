"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  Briefcase,
  DollarSign,
  Star,
  Check,
  Search,
  MessageSquare,
  CheckSquare,
  Target,
} from "lucide-react";

const JobSearchMarathonSection = () => {
  const [activeModule, setActiveModule] = useState(1);

  const modules = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />,
      category: {
        title: "Твоє позиціювання та упаковка",
        items: [
          {
            main: "Як «правильно» себе позиціювати та чому це важливо",
            subItems: [
              "Аналіз ринку вакансій: кількість вакансій, конкуренція, актуальність стеку, актуальність в Україні/ЄС",
              "Побудова 'правильної' картинки",
              "Токсичний розділ: накрутка досвіду",
            ],
          },
          {
            main: "Упаковка себе як спеціаліста",
            subItems: [
              {
                main: "CV",
                subItems: [
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
        ],
      },
    },
    {
      id: 2,
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />,
      category: {
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
    },
    {
      id: 3,
      icon: (
        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />
      ),
      category: {
        title: "Співбесіди",
        items: [
          {
            main: "HR співбесіда",
            subItems: [
              "Створення твоєї 'легенди'",
              "До яких питань потрібно готуватися",
              "Чому рекрутер - твій друг, а не ворог",
              "Приклади `правильних` відповідей на типові питання",
            ],
          },
          {
            main: "Технічна співбесіда",
            subItems: [
              {
                main: "Види технічних співбесід",
                subItems: [
                  "Питання/відповідь",
                  "Лайвкодінг",
                  "System design",
                  "Leetcode",
                  "Розповіді про свій досвід, причинно-наслідкові зв'язки",
                ],
              },
              "Як постійно тримати себе в тонусі, та бути готовим до будь-яких співбесід",
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
    },
    {
      id: 4,
      icon: (
        <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />
      ),
      category: {
        title: "Гроші",
        items: [
          {
            main: "Як вибивати кращі офери?",
            subItems: [
              "Коли це можна/не можна робити?",
              "Як порахувати свою стелю?",
              "Чи потрібно брати декілька фултаймів?",
              {
                main: "Прямі контракти та офери вище 3 квартилю",
                subItems: [
                  "Чи потрібно бути ТОП-спеціалістом?",
                  "Розбори моїх оферів на 7000$ + 12 000$ бонус, на 7500$ та 7000 євро та чому я не прийняв жоден з них",
                ],
              },
            ],
          },
        ],
      },
    },

    {
      id: 5,
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />,
      category: {
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
    },

    {
      id: 6,
      icon: (
        <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />
      ),
      category: {
        title: "Робота",
        items: [
          "Проходження випробувального терміну",
          "Баланс між життям та прокачкою кар'єри",
          "Лайфхаки для полегшення корпоративного життя та роботи на ремоуті",
          "Чи потрібно бути топ-1 в команді",
        ],
      },
    },
  ];

  type Item =
    | string
    | {
        main: string;
        subItems?: Item[];
      };

  const renderItems = (items: Item[], isTopLevel = false) => {
    return items.map((item, index) => {
      if (typeof item === "object" && "main" in item) {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const topLevelWithoutSubItems = isTopLevel && !hasSubItems;

        return (
          <div key={index} className="mb-3 last:mb-0">
            <div
              className={`mb-3 flex items-center py-2 px-2 rounded-lg transition-all duration-300 group shadow-sm min-h-[25px] ${
                topLevelWithoutSubItems
                  ? "bg-white/10 hover:bg-white/10 border-2 border-white/50 hover:border-white/70 ring-1 ring-white/20"
                  : "bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-center w-6 h-6 mr-3 flex-shrink-0 rounded-full bg-white/20 group-hover:bg-white/25 transition-colors">
                <Target className="w-4 h-4 text-white/80 rounded-full" />
              </div>
              <span className="text-white text-sm sm:text-base leading-relaxed group-hover:text-white/95 transition-colors font-extrabold">
                {item.main}
              </span>
            </div>
            {item.subItems && (
              <div className="space-y-2 ml-4">
                {renderItems(item.subItems, false)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div
            key={index}
            className={`flex items-center transition-all duration-300 mb-3 last:mb-0 min-h-[25px] ${
              isTopLevel
                ? "py-2 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 shadow-sm group"
                : "py-1 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 shadow-sm group"
            }`}
          >
            <div className="flex items-center justify-center w-6 h-6 mr-2 rounded-full flex-shrink-0 bg-white/20 group-hover:bg-white/25 transition-colors">
              {isTopLevel ? (
                <Target className="w-4 h-4 text-white/80 " />
              ) : (
                <Check className="w-4 h-4 text-white/80 " />
              )}
            </div>
            <span
              className={`${
                isTopLevel
                  ? "text-white text-sm sm:text-base leading-relaxed group-hover:text-white/95 transition-colors font-extrabold"
                  : "text-white text-sm sm:text-md leading-relaxed group-hover:text-white/95 transition-colors"
              }`}
            >
              {item}
            </span>
          </div>
        );
      }
    });
  };

  const currentModule = modules.find((m) => m.id === activeModule);
  const gradientClass = [
    "bg-gradient-to-tl from-[var(--main-two-color)] to-[var(--secondary-color)]",
    "bg-gradient-to-tr from-[var(--main-two-color)] to-[var(--secondary-color)]",
    "bg-gradient-to-tl from-[var(--main-two-color)] to-[var(--secondary-color)]",
    "bg-gradient-to-tr from-[var(--main-two-color)] to-[var(--secondary-color)]",
    "bg-gradient-to-tl from-[var(--main-two-color)] to-[var(--secondary-color)]",
    "bg-gradient-to-tr from-[var(--main-two-color)] to-[var(--secondary-color)]",
  ];

  return (
    <section
      id="program"
      className="py-8 max-w-6xl mx-auto sm:py-12 md:py-24 bg-[var(--secondary-color)] text-white relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              14-денна програма марафону:
            </h2>
          </div>

          {/* Module Switcher */}
          <div className="mb-8 overflow-x-auto md:overflow-hidden py-2">
            <div className="flex flex-wrap gap-2 justify-center min-w-max px-4">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap border flex-shrink-0 ${
                    activeModule === module.id
                      ? "bg-gradient-to-br from-[var(--main-color)] to-[var(--main-two-color)] text-white shadow-lg transform scale-105 border-purple-500"
                      : "bg-white text-gray-600 hover:bg-purple-100 shadow-sm hover:shadow-md border-gray-200 hover:border-purple-200"
                  }`}
                >
                  МОДУЛЬ {module.id}
                </button>
              ))}
            </div>
          </div>

          {/* Module Content */}
          {currentModule && (
            <div className="flex justify-center">
              <div
                className={`${
                  gradientClass[(activeModule - 1) % gradientClass.length]
                } relative rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200 duration-300 min-h-[400px] flex flex-col max-w-4xl w-full`}
              >
                <div className="flex flex-col h-full">
                  <div className="text-center mb-4 flex items-center justify-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-white/15 backdrop-blur-sm flex-shrink-0">
                      {currentModule.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                      {currentModule.category.title}
                    </h3>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <div
                      className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#888 #333",
                      }}
                    >
                      {renderItems(currentModule.category.items, true)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--secondary-color);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: var(--main-two-color);
          border-radius: 4px;
          border: 2px solid var(--secondary-color);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: var(--main-color);
        }
      `}</style>
      {/* Додаткова інформація */}
      <div className="mt-12 mx-6 bg-gradient-to-br from-[var(--main-two-color)] to-[var(--secondary-color)] rounded-2xl p-8 text-center border border-gray-200 hover:scale-[1.01] transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-4">
          Що гарантує результат:
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-white">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-left">
              <strong>Live-сесії з Дмитром</strong> + взаємодія з куратором →
              ставите питання в реальному часі, отримуєте відповіді «на місці».
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-left">
              <strong>
                Ви будете відчувати результат вже під час марафону
              </strong>{" "}
              – після впровадження домашніх завдань конверсія вашого CV та
              LinkedIn у пропозиції збільшиться.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-left">
              <strong>Чітка гарантія</strong> – якщо протягом 7 днів не бачите
              прогресу (оновлене CV, LinkedIn, план пошуку) – повертаємо кошти
              без зайвих запитань.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-left">
              <strong>Весь мій 7-річний бекграунд</strong> у форматі 14-денного
              спринту – 100+ власних співбесід і 150+ студентів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchMarathonSection;
