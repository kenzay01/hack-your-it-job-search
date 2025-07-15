import React from "react";
import {
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const MainOfferSection = () => {
  const targetGroups = [
    {
      icon: Target,
      title: "Ти Junior",
      description: "і тебе лякає сам факт проходження технічних співбесід?",
      color: "from-green-400 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Ти Middle",
      description: "який вже має досвід але застряг на маленькій ЗП?",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Award,
      title: "Ти досвідчений Senior",
      description:
        "і хочеш витиснути з ринку ще +$1-2k, але не знаєш як шукати жирні офери?",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const results = [
    "Запакуєш себе як спеціаліста – створиш ефективні CV та LinkedIn, які проходять ATS-фільтри і чіпляють рекрутера",
    "Дізнаєшся про структури типічних співбесід – HR, тех, live-coding, System Design – і будеш готовий до будь якого формату",
    "Дізнаєшся як ефективно шукати роботу, яка дозволяє робити +50-100% до зарплати кожного разу, коли змінюєш компанію",
    "Отримаєш перевірені часом матеріали та підтримку від кураторів які вже пройшли цей шлях",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Думаєш що Український IT-ринок{" "}
              <span className="text-red-600">помер</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:-translate-y-1 duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-12 border-4 border-blue-700 hover:border-white/55 transition-all duration-300 hover:shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                За 14 днів ти побудуєш власну систему, яка приводить до першого
                офера
              </h3>
              <p className="text-xl text-blue-100">
                або дає +$6000 на рік до нинішньої зарплати
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 justify-start"
                >
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-gray-900" />
                  </div>
                  <p className="text-blue-100 leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:scale-102 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Результат: Одна чітка система
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Для першого оферу
                  </h4>
                  <p className="text-gray-600">
                    Чіткий план дій від CV до підписання контракту
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Для росту зарплати
                  </h4>
                  <p className="text-gray-600">
                    Стратегії переговорів та пошуку кращих умов
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Для побудови кар'єри
                  </h4>
                  <p className="text-gray-600">
                    Довгострокова стратегія професійного розвитку
                  </p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
                <span>Хочу систему за 14 днів</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainOfferSection;
