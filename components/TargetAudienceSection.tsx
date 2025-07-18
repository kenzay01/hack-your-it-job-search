import React from "react";
import {
  User,
  Briefcase,
  Crown,
  Clock,
  Users,
  CheckCircle,
  ArrowDown,
} from "lucide-react";

const TargetAudienceSection = () => {
  const targetCategories = [
    {
      icon: User,
      title: "Маєш проблеми з пошуком першої роботи",
      problems: [
        "Твоє CV ніхто не розглядає, отримуєш лише автоматичні відмови",
        "Боїшся технічних співбесід: навіть знаючи відповідь, стресуєш або провалюєш їх",
        "Немає друзів, які можуть допомогти з працевлаштуванням, і ти думаєш, що роботу «роздають по блату»",
      ],
      bgColor:
        "bg-radial-[at_90%_90%] to-[var(--secondary-color)] from-[var(--main-two-color)] to-70%",
    },
    {
      icon: Briefcase,
      title: "Уже Middle, але застряг на $800 - 1 500 і хочете стрибок ×2-×3",
      problems: [
        "3+ роки програмуєш, а заробляєш, як Junior",
        "Хочеш працювати на крутих проектах, але не розумієш які скіли потрібно для цього мати",
        "Важко зрозуміти, скільки ти реально коштуєш, і як правильно називати бажану зарплату на співбесіді",
      ],
      bgColor:
        "bg-radial-[at_90%_10%] to-[var(--secondary-color)] from-[var(--main-two-color)] to-70%",
    },
    {
      icon: Crown,
      title: "Хочеш залетіти на Senior і заробляти в 3-му квартилі",
      problems: [
        "Класно знаєш технічну базу, але не маєш класних оферів",
        "Не розумієш як саме тобі перескочити на $4-5k+",
        "Потрібен план «20% теорії → 80% результату», а не 50-годинна енциклопедія",
      ],
      bgColor:
        "bg-gradient-to-bl from-[var(--secondary-color)] via-[var(--secondary-color)] to-[var(--main-two-color)]",
    },
    {
      icon: Clock,
      title: "Бракує часу та дисципліни",
      problems: [
        "Довгі курси не заходять – потрібен короткий спринт із дедлайном",
        "Кар'єрні консультації не допомагають, а чекати «поки знайдеш роботу» не варіант",
        "Шукаєш чіткий план перевірений досвідом і часом, щоб закривати конкретні цілі щодня",
      ],
      bgColor:
        "bg-gradient-to-tl from-[var(--secondary-color)] via-[var(--secondary-color)] to-[var(--main-two-color)]",
    },
    {
      icon: Users,
      title: "Цінуєш live-фідбек і спільноту однодумців",
      problems: [
        "Потрібно швидко ставити питання й одержувати відповідь, а не чекати тижнями",
        "Потрібен «сейф»-чат, де можна кинути чернетку CV без хейту",
        "Розумієте, що нетворк == майбутні офери",
      ],
      bgColor:
        "bg-gradient-to-br from-[var(--secondary-color)] via-[var(--secondary-color)] to-[var(--main-two-color)]",
    },
  ];

  // Function to get margin class based on index
  const getMarginClass = (index: number) => {
    const marginClasses = ["ml-0", "ml-8", "ml-16", "ml-24", "ml-32"];
    return marginClasses[index] || "ml-0";
  };

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 bg-[var(--secondary-color)] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 uppercase px-2">
              Цей марафон для тебе, якщо:
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-2">
              Перевір себе за цими 5 категоріями.{" "}
              <span className="text-[var(--main-two-color)]">
                Якщо хоч 2 пункти про тебе – зустрінемось на марафоні
              </span>
            </p>
          </div>

          {/* Target Categories */}
          <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
            {targetCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`${
                    category.bgColor
                  } rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 
                  md:w-242 md:${getMarginClass(index)} md:hover:translate-x-2 
                  border border-gray-200`}
                >
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--main-two-color)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                        {index + 1}. {category.title}
                      </h3>
                      <ul className="space-y-2 md:space-y-0">
                        {category.problems.map((problem, problemIndex) => (
                          <li
                            key={problemIndex}
                            className="flex items-start space-x-2 md:space-x-3"
                          >
                            <div className="w-2 h-2 bg-[var(--main-two-color)] rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                            <p className="text-sm sm:text-base text-gray-300 pt-1 md:pt-3">
                              {problem}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-tl from-[var(--main-color)]/60 via-[var(--main-two-color)] to-[var(--secondary-color)] border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center transition-all duration-300 hover:scale-101">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Якщо хоч 2 пункти про вас
              </h3>
              <ArrowDown className="w-6 h-6 mx-auto mb-2" />
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8 md:px-2">
                зустрінемось на марафоні й закриємо ваші потреби за 14 днів
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Приєднатися до марафону
                </button>
                <div className="flex items-center space-x-2 text-blue-100 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5" />
                  <span>Гарантія результату</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
