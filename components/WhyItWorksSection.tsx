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
      bgColor:
        "bg-radial to-[var(--secondary-color)] from-gray-500/20 text-white",
      textColor:
        "text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]",
    },
    {
      icon: CheckCircle,
      title: "Лише реальні підходи",
      description:
        "Ми даємо лише реальні теми та підходи які працюють у мене та моїх студентів – я не буду вам наливати воду у форматі кар'єрних консультацій.",
      bgColor:
        "bg-radial to-[var(--secondary-color)] from-gray-500/20 text-white",
      textColor:
        "text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]",
    },
    {
      icon: Bolt,
      title: "14-денний жорсткий спринт",
      description:
        "Менше прокрастинації, більше дій, максимум результату у вигляді інформації.",
      bgColor:
        "bg-radial to-[var(--secondary-color)] from-gray-500/20 text-white",
      textColor:
        "text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]",
    },
    {
      icon: RefreshCw,
      title: "Метод «покажи → зроби → отримай фідбек»",
      description: "Спершу демо, далі ваша практика, потім детальний фідбек.",
      bgColor:
        "bg-radial to-[var(--secondary-color)] from-gray-500/20 text-white",
      textColor:
        "text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]",
    },
    {
      icon: Award,
      title: "Фокус на результат",
      description:
        "Моя задача довести тебе до жирного оферу, а не видати черговий диплом.",
      bgColor:
        "bg-radial to-[var(--secondary-color)] from-gray-500/20 text-white",
      textColor:
        "text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]",
    },
    {
      icon: DollarSign,
      title: "Гарантія без ризику",
      description:
        "Не створили або не покращили свою систему пошуку роботи – повернемо гроші протягом 7 днів, без зайвих запитань.",
      bgColor:
        "bg-radial to-[var(--secondary-color)] from-gray-500/20 text-white",
      textColor:
        "text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]",
    },
  ];

  return (
    <section className="relative py-16 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Чому цей марафон працює:
          </h2>
          <p className="text-lg md:text-xl text-white">
            Наш підхід –{" "}
            <span className="text-[#8447e9]">
              «20% зусиль → 80% результату»
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full group`}
            >
              <div className="text-4xl mb-4  group-hover:scale-105 transition-transform duration-300">
                <feature.icon className={`text-white`} size={48} />
              </div>
              <h3
                className={`text-xl font-bold ${feature.textColor}  mb-3 group-hover:scale-102 transition-transform duration-300`}
              >
                {feature.title}
              </h3>
              <p className={`text-gray-300 leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white"
        >
          <path d="M0,120 C150,40 350,120 600,80 C850,40 1050,120 1200,80 L1200,120 Z" />
        </svg>
      </div> */}
    </section>
  );
};

export default WhyItWorksSection;
