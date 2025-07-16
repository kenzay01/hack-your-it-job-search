import React from "react";
import {
  Crosshair,
  CheckCircle,
  Bolt,
  RefreshCw,
  Award,
  DollarSign,
} from "lucide-react";

const WhyItWorksSection = () => {
  const features = [
    {
      icon: Crosshair,
      title: "20% зусиль → 80% результату",
      description:
        "Лишаємо лише теми, які реально питають на UA/EU-співбесідах – без академічної «води».",
    },
    {
      icon: CheckCircle,
      title: "Лише реальні підходи",
      description:
        "Ми даємо лише реальні теми та підходи які працюють у мене та моїх студентів – я не буду вам наливати воду у форматі кар'єрних консультацій.",
    },
    {
      icon: Bolt,
      title: "14-денний жорсткий спринт",
      description:
        "Менше прокрастинації, більше дій, максимум результату у вигляді інформації.",
    },
    {
      icon: RefreshCw,
      title: "Метод «покажи → зроби → отримай фідбек»",
      description: "Спершу демо, далі ваша практика, потім детальний фідбек.",
    },
    {
      icon: Award,
      title: "Фокус на результат",
      description:
        "Моя задача довести тебе до жирного оферу, а не видати черговий диплом.",
    },
    {
      icon: DollarSign,
      title: "Гарантія без ризику",
      description:
        "Не створили або не покращили свою систему пошуку роботи – повернемо гроші протягом 7 днів, без зайвих запитань.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Чому цей марафон працює:
          </h2>
          <p className="text-xl text-blue-100">
            Наш підхід – «20% зусиль → 80% результату»
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border-2 border-blue-500 hover:shadow-lg transition-all duration-300 hover:border-blue-400 h-full group"
            >
              <div className="text-4xl mb-4 text-white group-hover:scale-105 transition-transform duration-300">
                <feature.icon color="white" size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:scale-102 transition-transform duration-300">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <div className="mt-12 bg-white/10 rounded-2xl p-8 text-center border-2 border-blue-500 hover:scale-102 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Що гарантує результат:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-left">
                <strong>Live-сесії з Дмитром</strong> + взаємодія з куратором →
                ставите питання в реальному часі, отримуєте відповіді «на
                місці».
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
                <strong>Весь мій 7-річний бекграунд</strong> у форматі
                14-денного спринту – 100+ власних співбесід і 150+ студентів.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white"
        >
          <path d="M0,120 C150,40 350,120 600,80 C850,40 1050,120 1200,80 L1200,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
