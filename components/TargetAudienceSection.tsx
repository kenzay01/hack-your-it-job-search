import React from "react";
import {
  User,
  Briefcase,
  Crown,
  Clock,
  Users,
  CheckCircle,
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
      color: "from-green-400 to-green-600",
    },
    {
      icon: Briefcase,
      title: "Уже Middle, але застряг на $800 - 1 500 і хочете стрибок ×2-×3",
      problems: [
        "3+ роки програмуєш, а заробляєш, як Junior",
        "Хочеш працювати на крутих проектах, але не розумієш які скіли потрібно для цього мати",
        "Важко зрозуміти, скільки ти реально коштуєш, і як правильно називати бажану зарплату на співбесіді",
      ],
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Crown,
      title: "Хочеш залетіти на Senior і заробляти в 3-му квартилі",
      problems: [
        "Класно знаєш технічну базу, але не маєш класних оферів",
        "Не розумієш як саме тобі перескочити на $4-5k+",
        "Потрібен план «20% теорії → 80% результату», а не 50-годинна енциклопедія",
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      title: "Бракує часу та дисципліни",
      problems: [
        "Довгі курси не заходять – потрібен короткий спринт із дедлайном",
        "Кар'єрні консультації не допомагають, а чекати «поки знайдеш роботу» не варіант",
        "Шукаєш чіткий план перевірений досвідом і часом, щоб закривати конкретні цілі щодня",
      ],
      color: "from-red-400 to-red-600",
    },
    {
      icon: Users,
      title: "Цінуєш live-фідбек і спільноту однодумців",
      problems: [
        "Потрібно швидко ставити питання й одержувати відповідь, а не чекати тижнями",
        "Потрібен «сейф»-чат, де можна кинути чернетку CV без хейту",
        "Розумієте, що нетворк == майбутні офери",
      ],
      color: "from-blue-400 to-blue-600",
    },
  ];

  // Function to get margin class based on index
  const getMarginClass = (index: number) => {
    const marginClasses = ["ml-0", "ml-8", "ml-16", "ml-24", "ml-32"];
    return marginClasses[index] || "ml-0";
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white rotate-180"
        >
          <path d="M0,120 C150,40 350,120 600,80 C850,40 1050,120 1200,80 L1200,120 Z" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              Цей марафон для тебе, якщо:
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Перевір себе за цими 5 категоріями. Якщо хоч 2 пункти про тебе –
              зустрінемось на марафоні
            </p>
          </div>

          {/* Target Categories */}
          <div className="space-y-6 mb-12">
            {targetCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-2xl p-3 hover:shadow-lg transition-all duration-300 w-242 ${getMarginClass(
                    index
                  )} hover:translate-x-2 hover:border-blue-900 border-4 border-transparent`}
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {index + 1}. {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.problems.map((problem, problemIndex) => (
                          <li
                            key={problemIndex}
                            className="flex items-center justify-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-gray-600 pt-3">{problem}</p>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center border-4 border-blue-700 hover:border-white/25 transition-all duration-300 hover:scale-102">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Якщо хоч 2 пункти про вас
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                зустрінемось на марафоні й закриємо ваші потреби за 14 днів
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Приєднатися до марафону
                </button>
                <div className="flex items-center space-x-2 text-blue-100">
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
