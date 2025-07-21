"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      number: "1",
      question:
        "Чи підійде мені, якщо я взагалі не розробник? (QA, DevOps, PM)",
      answer:
        "Я сам розробник, тому технічні приклади дійсно заточені під Dev-стек. Але 70% програми універсальні, відмінність лише в нюансах проходження співбесід.",
    },
    {
      number: "2",
      question: "Я новачок у ІТ – чи підійде мені?",
      answer:
        "Так. Марафон закриває кар’єрну частину та пошук роботи: CV, LinkedIn, стратегія вакансій, інтерв’ю. Але ми не викладаємо програмування «з нуля». Для комфортної участі потрібна базова навичка писати код у своєму стеку. Усе інше – як продавати себе й проходити співбесіди – отримаєте на марафоні.",
    },
    {
      number: "3",
      question: "Гарантія повернення коштів: як це працює?",
      answer:
        "7 днів від старту. Напишіть у Telegram-підтримку «Хочу повернення» – протягом 24 год повертаємо 100%, якщо відчуваєте, що марафон не дає результату.",
    },
    {
      number: "4",
      question:
        "У яких локаціях ви розглядаєте пошук роботи, для яких країн це підійде?",
      answer:
        "Ми розглядаємо пошук роботи в Україні та ЄС + мій досвід з прямими контрактами з США. Додатково ми піднімемо оподаткування на B2B контрактах у різних країнах.",
    },
    {
      number: "5",
      question: "Чи буде доступ до матеріалів після марафону?",
      answer:
        "Так. Записи й чек-листи залишаються у каналі марафону назавжди, щоб можна було повертатись під час нового пошуку роботи.",
    },
    {
      number: "6",
      question: "Скільки часу потрібно виділяти на марафон?",
      answer:
        "Уроки будуть доволі об’ємними, але не перевантаженими, тому буде комфортно виділяти від 2-4 годин на тиждень.",
    },
  ];

  return (
    <section
      id="faqs"
      className="py-8 md:py-12 bg-[var(--secondary-color)] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-12 text-white tracking-wide">
          ВІДПОВІДІ НА ПИТАННЯ
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.number}
              className="bg-radial-[at_50%_50%] to-[var(--secondary-color)] from-gray-300/20 border border-gray-200 text-white rounded-lg p-6 shadow-lg"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start md:items-center space-x-2">
                  <span className="text-lg font-semibold text-white custom-text">
                    {faq.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#8447e9]">
                    {faq.question}
                  </h3>
                </div>
                <span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-4 text-gray-200 pointer-events-none">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
