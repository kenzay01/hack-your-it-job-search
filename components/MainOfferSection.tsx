import React from "react";
import {
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import offerImg1 from "@/public/offers/sticker3.png";
import offerImg2 from "@/public/offers/sticker.png";
import offerImg3 from "@/public/offers/sticker-1.png";
import checkImg from "@/public/check.png";

const MainOfferSection = () => {
  const targetGroups = [
    {
      icon: offerImg2,
      title: "Ти Junior",
      description: "і тебе лякає сам факт проходження технічних співбесід?",
      color:
        "bg-gradient-to-br from-[var(--main-two-color)] to-[var(--main-color)]",
    },
    {
      icon: offerImg1,
      title: "Ти Middle",
      description: "який вже має досвід але застряг на маленькій ЗП?",
      color: "bg-radial to-[var(--secondary-color)] from-gray-500/30",
    },
    {
      icon: offerImg3,
      title: "Ти досвідчений Senior",
      description:
        "і хочеш витиснути з ринку ще +$1-2k, але не знаєш як шукати жирні офери?",
      color: "bg-white",
      colorText: "text-[var(--secondary-color)]",
    },
  ];

  const results = [
    "Запакуєш себе як спеціаліста – створиш ефективні CV та LinkedIn, які проходять ATS-фільтри і чіпляють рекрутера",
    "Дізнаєшся про структури типічних співбесід – HR, тех, live-coding, System Design – і будеш готовий до будь якого формату",
    "Дізнаєшся як ефективно шукати роботу, яка дозволяє робити +50-100% до зарплати кожного разу, коли змінюєш компанію",
    "Отримаєш перевірені часом матеріали та підтримку від кураторів які вже пройшли цей шлях",
  ];

  return (
    <section className="py-6 md:py-24 bg-[var(--secondary-color)] z-100">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Думаєш що Український IT-ринок{" "}
              <span className="text-[var(--main-two-color)]">помер</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 mb-12 px-4 md:p-0">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className={`${group.color} relative text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:-translate-y-1 duration-300`}
                >
                  <div
                    className={`absolute -top-14 left-1/2 transform -translate-x-1/2 w-46 h-auto rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <Image
                      src={IconComponent}
                      alt={group.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      group.colorText ? group.colorText : "text-white"
                    }  mb-2 mt-22`}
                  >
                    {group.title}
                  </h3>
                  <p
                    className={`${
                      group.colorText ? group.colorText : "text-white"
                    } leading-relaxed`}
                  >
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-[var(--main-color)] via-[var(--main-two-color)] to-[var(--secondary-color)] border border-gray-200 rounded-3xl py-6 px-4 md:p-12 text-white mb-12 hover:scale-101  hover:border-white/55 transition-all duration-300 hover:shadow-2xl mx-4 md:mx-0">
            <div className="text-center mb-4 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                За 14 днів ти побудуєш власну систему, яка приводить до першого
                офера
              </h3>
              <p className="text-lg md:text-xl text-blue-100">
                або дає +$6000 на рік до нинішньої зарплати
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 justify-start"
                >
                  <div className="md:w-8 md:h-8 w-6 h-6  rounded-full flex items-center justify-center flex-shrink-0 drop-shadow-[0px_0px_4px_white]">
                    <Image
                      src={checkImg}
                      alt="Check"
                      className="w-full h-full text-gray-900"
                    />
                  </div>
                  <p className="md:text-md text-sm text-blue-100 md:leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-tr from-[var(--main-color)] via-[var(--main-two-color)] to-[var(--secondary-color)] border border-gray-200 rounded-3xl p-8 shadow-lg hover:scale-101 transition-all duration-300 mx-4 md:mx-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Результат: Одна чітка система
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <Target className="w-8 h-8 text-[var(--main-two-color)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Для першого оферу
                  </h4>
                  <p className="text-gray-300">
                    Чіткий план дій від CV до підписання контракту
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <TrendingUp className="w-8 h-8 text-[var(--main-two-color)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Для росту зарплати
                  </h4>
                  <p className="text-gray-300">
                    Стратегії переговорів та пошуку кращих умов
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <Award className="w-8 h-8 text-[var(--main-two-color)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Для побудови кар`єри
                  </h4>
                  <p className="text-gray-300">
                    Довгострокова стратегія професійного розвитку
                  </p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-bold  hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 mx-auto">
                <span>Почати за 14 днів</span>
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
