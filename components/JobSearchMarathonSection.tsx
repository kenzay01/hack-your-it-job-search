"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  ChevronDown,
  ChevronRight,
  Target,
  Briefcase,
  Star,
  DollarSign,
  Search,
  MessageSquare,
} from "lucide-react";

// Інтерфейс для об'єкта з вкладеними підпунктами
interface SubItem {
  main: string;
  subItems: (string | SubItem)[];
}

// Тип для елементів категорії (рядок або об'єкт із subItems)
type CategoryItem = string | { main: string; subItems: (string | SubItem)[] };

const JobSearchMarathonSection = () => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (
    categoryIndex: number,
    itemIndex: number,
    subItemIndex: number | null = null
  ) => {
    const key =
      subItemIndex !== null
        ? `${categoryIndex}-${itemIndex}-${subItemIndex}`
        : `${categoryIndex}-${itemIndex}`;

    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categories = [
    {
      title: "Робота",
      items: [
        "Проходження випробувального терміну",
        "Баланс між життям та прокачкою кар'єри",
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
            {
              main: "Прямі контракти та офери вище 3 квартилю",
              subItems: [
                "Чи потрібно бути ТОП-спеціалістом?",
                "Розбори моїх оферів на 7000$ + 12 000$ бонус, на 7500$ та 7000 євро та чому я не прийняв жоден з них",
              ],
            },
          ],
        },
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
  ];

  const renderSubItems = (
    subItems: (string | SubItem)[],
    categoryIndex: number,
    itemIndex: number,
    level = 0
  ) => {
    return subItems.map((subItem, subIndex) => {
      if (typeof subItem === "object" && "main" in subItem) {
        const dropdownKey = `${categoryIndex}-${itemIndex}-${subIndex}`;
        const isOpen = openDropdowns[dropdownKey];

        return (
          <div key={subIndex} className="mb-2 last:mb-0">
            <div
              className="flex items-center cursor-pointer group py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 min-h-[50px]"
              onClick={() => toggleDropdown(categoryIndex, itemIndex, subIndex)}
            >
              <div className="flex items-center justify-center w-5 h-5 mr-3 flex-shrink-0 rounded bg-white/15 group-hover:bg-white/20 transition-colors">
                {isOpen ? (
                  <ChevronDown className="w-3 h-3 text-white" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-white" />
                )}
              </div>
              <span className="text-white/90 font-medium text-sm leading-relaxed group-hover:text-white transition-colors">
                {subItem.main}
              </span>
            </div>
            {isOpen && (
              <div className="ml-8 mt-2 space-y-2 animate-in slide-in-from-top-1 duration-200">
                {renderSubItems(
                  subItem.subItems,
                  categoryIndex,
                  itemIndex,
                  level + 1
                )}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div
            key={subIndex}
            className="flex items-center py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 mb-2 last:mb-0 group min-h-[45px]"
          >
            <div className="flex items-center justify-center w-5 h-5 mr-3 flex-shrink-0 rounded bg-white/15 group-hover:bg-white/20 transition-colors">
              <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
            </div>
            <span className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
              {subItem}
            </span>
          </div>
        );
      }
    });
  };

  const renderItems = (items: CategoryItem[], categoryIndex: number) => {
    return items.map((item, itemIndex) => {
      if (typeof item === "object" && "main" in item) {
        const dropdownKey = `${categoryIndex}-${itemIndex}`;
        const isOpen = openDropdowns[dropdownKey];

        return (
          <div key={itemIndex} className="mb-3 last:mb-0">
            <div
              className="flex items-center cursor-pointer group py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-sm min-h-[60px]"
              onClick={() => toggleDropdown(categoryIndex, itemIndex)}
            >
              <div className="flex items-center justify-center w-6 h-6 mr-3 flex-shrink-0 rounded-lg bg-white/20 group-hover:bg-white/25 transition-colors">
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-white" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="text-white font-semibold text-sm sm:text-base leading-relaxed group-hover:text-white/95 transition-colors">
                {item.main}
              </span>
            </div>
            {isOpen && (
              <div className="ml-4 mt-3 space-y-2 animate-in slide-in-from-top-2 duration-300">
                {renderSubItems(item.subItems, categoryIndex, itemIndex)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div
            key={itemIndex}
            className="flex items-center py-3 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-300 mb-3 last:mb-0 group border border-white/20 hover:border-white/30 shadow-sm min-h-[60px]"
          >
            <div className="flex items-center justify-center w-6 h-6 mr-3 flex-shrink-0 rounded-lg bg-white/20 group-hover:bg-white/25 transition-colors">
              <Target className="w-3 h-3 text-white/80" />
            </div>
            <span className="text-white text-sm sm:text-base leading-relaxed group-hover:text-white/95 transition-colors">
              {item}
            </span>
          </div>
        );
      }
    });
  };

  const gradientClass = [
    "bg-gradient-to-br from-[var(--main-two-color)] to-[var(--main-color)]",
    "bg-gradient-to-bl from-[var(--main-two-color)] to-[var(--main-color)]",
    "bg-gradient-to-br from-[var(--main-two-color)] to-[var(--secondary-color)]",
    "bg-gradient-to-tr from-[var(--main-two-color)] to-[var(--main-color)]",
    "bg-gradient-to-tl from-[var(--main-two-color)] to-[var(--main-color)]",
    "bg-gradient-to-tr from-[var(--main-two-color)] to-[var(--secondary-color)]",
  ];

  return (
    <section
      id="program"
      className="py-8 sm:py-12 md:py-24 bg-[var(--secondary-color)]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              14-денна програма марафону
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={` ${gradientClass[categoryIndex]} relative rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl  transition-all border border-gray-200 hover:-translate-y-1 duration-300 min-h-[300px] flex flex-col`}
              >
                <div className="flex flex-col h-full">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-white/15 backdrop-blur-sm">
                      {categoryIndex === 0 && (
                        <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                      {categoryIndex === 1 && (
                        <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                      {categoryIndex === 2 && (
                        <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                      {categoryIndex === 3 && (
                        <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                      {categoryIndex === 4 && (
                        <Search className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                      {categoryIndex === 5 && (
                        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {category.title}
                    </h3>
                    <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 mx-auto" />
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <div className="space-y-2 max-h-[400px] sm:max-h-none overflow-y-auto pr-2">
                      {renderItems(category.items, categoryIndex)}
                    </div>
                  </div>
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
