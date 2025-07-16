"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const tariffs = [
    {
      name: "Стандарт",
      price: "$119",
      discountPrice: "$109",
      features: [
        { text: "Уроки у записі", included: true },
        { text: "Доступ до 1 тижня", included: true },
        { text: "Доступ до чату учасників", included: false },
        { text: "1 QnA з куратором", included: false },
        { text: "Конспекти матеріалів", included: true },
        { text: "Позиціювання та упаковка", included: true },
        { text: "Підтримка Zoom", included: false },
        { text: "VIP доступ", included: false },
        { text: "Індивідуальні консультації", included: false },
      ],
    },
    {
      name: "Преміум",
      price: "$179",
      discountPrice: "$159",
      features: [
        { text: "Уроки у записі", included: true },
        { text: "Доступ до 1 тижня", included: true },
        { text: "Доступ до чату учасників", included: true },
        { text: "1 QnA з куратором", included: true },
        { text: "Конспекти матеріалів", included: true },
        { text: "Позиціювання та упаковка", included: true },
        { text: "Підтримка Zoom", included: true },
        { text: "VIP доступ", included: false },
        { text: "Індивідуальні консультації", included: false },
      ],
    },
    {
      name: "ВІП",
      price: "$299",
      discountPrice: "$269",
      features: [
        { text: "Уроки у записі", included: true },
        { text: "Доступ до 1 тижня", included: true },
        { text: "Доступ до чату учасників", included: true },
        { text: "1 QnA з куратором", included: true },
        { text: "Конспекти матеріалів", included: true },
        { text: "Позиціювання та упаковка", included: true },
        { text: "Підтримка Zoom", included: true },
        { text: "VIP доступ", included: true },
        { text: "Індивідуальні консультації", included: false },
      ],
    },
    {
      name: "Менторство",
      price: "$399",
      discountPrice: "$369",
      features: [
        { text: "Уроки у записі", included: true },
        { text: "Доступ до 1 тижня", included: true },
        { text: "Доступ до чату учасників", included: true },
        { text: "1 QnA з куратором", included: true },
        { text: "Конспекти матеріалів", included: true },
        { text: "Позиціювання та упаковка", included: true },
        { text: "Підтримка Zoom", included: true },
        { text: "VIP доступ", included: true },
        { text: "Індивідуальні консультації", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white text-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-700 tracking-wide">
          ОБЕРІ СВІЙ ТАРІФ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tariffs.map((tariff) => (
            <div
              key={tariff.name}
              className={`bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-102 `}
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {tariff.name}
              </h3>
              <p className="text-3xl font-semibold text-center mb-6">
                <span className="text-green-400">{tariff.discountPrice}</span>{" "}
                <span className="text-white line-through">{tariff.price}</span>
              </p>
              <ul className="space-y-4 mb-6">
                {tariff.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center space-x-2 p-1 rounded-xl ${
                      feature.included ? "" : "text-gray-300 line-through"
                    }`}
                  >
                    <span className="bg-green-500 p-1 rounded-full">
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
                className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
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
