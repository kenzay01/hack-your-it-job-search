"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Check, X } from "lucide-react";

const PricingSection = () => {
  const tariffs = [
    {
      name: "Basic",
      price: "$119",
      discountPrice: "$99",
      features: [
        { text: "Твоє позиціювання та упаковка", included: true },
        { text: "Пошук роботи", included: true },
        { text: "Співбесіди", included: true },
        { text: "1 QnA", included: true },
        { text: "Конспекти матеріалів в Notion", included: true },
        { text: "Спільний чат з учасниками тарифу", included: true },
        { text: "Підтримка куратора в чаті", included: true },
      ],
    },
    {
      name: "Pro",
      price: "$179",
      discountPrice: "$154",
      features: [
        { text: "Твоє позиціювання та упаковка", included: true },
        { text: "Пошук роботи", included: true },
        { text: "Співбесіди", included: true },
        { text: "1 QnA", included: true },
        { text: "Конспекти матеріалів в Notion", included: true },
        { text: "Прокачка себе як спеціаліста", included: true },
        { text: "Спільний чат з учасниками тарифу та Дмитром", included: true },
        {
          text: "Гроші: Як вибивати кращі офери? (без прямих контрактів???)",
          included: true,
        },
        {
          text: "1 live практикум - Soft skills + HR interview",
          included: true,
        },
        { text: "Підтримка куратора 1:1", included: true },
      ],
    },
    {
      name: "VIP",
      price: "$299",
      discountPrice: "$269",
      features: [
        { text: "Твоє позиціювання та упаковка", included: true },
        { text: "Пошук роботи", included: true },
        { text: "Співбесіди", included: true },
        { text: "1 QnA", included: true },
        { text: "Конспекти матеріалів в Notion", included: true },
        { text: "Прокачка себе як спеціаліста", included: true },
        {
          text: "Гроші: Як вибивати кращі офери + ефір про прямі контракти",
          included: true,
        },
        { text: "Підтримка куратора в чаті", included: true },
        {
          text: "1 live практикум - Soft skills + HR interview",
          included: true,
        },
        { text: "Робота (бонус)", included: true },
        { text: "1 QnA для ВІП", included: true },
        { text: "Live розбори оферів + прямі контракти", included: true },
        {
          text: "Спільний чат з учасниками тарифу + 1 на 1 чат з Дмитром",
          included: true,
        },
      ],
    },
  ];

  const radialYPositions = [
    "bg-radial-[at_200%_80%]",
    "bg-radial-[at_50%_50%]",
    "bg-radial-[at_-200%_40%]",
  ];

  return (
    <section
      id="pricing"
      className="py-8 md:py-12 bg-[var(--secondary-color)] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-12 text-white tracking-wide">
          ОБЕРИ СВІЙ ТАРИФ
        </h2>
        <p className="text-center md:text-lg text-blue-100 mb-8">
          Для перших 48 год даємо{" "}
          <span className="text-yellow-400">-20 $ / -25 $ / -30 $ </span> –
          стимул швидкої оплати без знецінення базової ціни.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {tariffs.map((tariff, index) => (
            <div
              key={tariff.name}
              className={`${radialYPositions[index]} to-[var(--secondary-color)] from-[var(--main-two-color)] border border-gray-200 text-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-102`}
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {tariff.name}
              </h3>
              <p className="text-3xl font-semibold text-center mb-4">
                <span className="text-yellow-400">{tariff.price}</span>
              </p>
              <ul className="space-y-2 md:space-y-4 mb-6">
                {tariff.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center space-x-2 p-1 rounded-xl ${
                      feature.included ? "" : "text-gray-300 line-through"
                    }`}
                  >
                    <span className="bg-[var(--main-two-color)] p-1 rounded-full">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <X className="w-4 h-4 text-white" />
                      )}
                    </span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <ScrollLink
                to="questions"
                smooth={true}
                duration={500}
                className="w-full bg-white text-[var(--main-two-color)] px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Обрати</span>
                <ArrowRight className="w-5 h-5" />
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
