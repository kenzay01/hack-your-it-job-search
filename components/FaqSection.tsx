"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
        "Так. Марафон закриває кар'єрну частину та пошук роботи: CV, LinkedIn, стратегія вакансій, інтерв'ю. Але ми не викладаємо програмування «з нуля». Для комфортної участі потрібна базова навичка писати код у своєму стеку. Усе інше – як продавати себе й проходити співбесіди – отримаєте на марафоні.",
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
        "Уроки будуть доволі об'ємними, але не перевантаженими, тому буде комфортно виділяти від 2-4 годин на тиждень.",
    },
  ];

  return (
    <section
      id="faqs"
      className="py-6 md:py-12 bg-transparent relative overflow-hidden"
    >
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-[#8447e9]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8447e9]/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div> */}

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 uppercase text-white">
            <span className="text-[#8447e9]">Відповіді</span> на поширені
            питання:
          </h2>
        </div>

        <div className="border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <React.Fragment key={faq.number}>
              <div
                className={`group border overflow-hidden backdrop-blur-sm transition-all duration-200 ${
                  openIndex === index
                    ? "bg-[#8447e9] border-[#8447e9]/40 shadow-lg shadow-[#8447e9]/10 rounded-2xl"
                    : ""
                }`}
              >
                <div
                  className="flex items-center justify-between p-6 cursor-pointer transition-all duration-100"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-lg text-2xl font-bold transition-all duration-300 ${
                        openIndex === index ? " text-white" : " text-gray-300 "
                      }`}
                    >
                      {faq.number}
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-semibold transition-colors duration-300 leading-relaxed uppercase ${
                        openIndex === index
                          ? "text-white"
                          : "text-white group-hover:text-gray-200"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`ml-4 transition-all duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-white"
                        : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="ml-12 pt-4 border-t border-gray-200/30">
                      <p className="text-white leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {index < faqs.length - 1 && (
                <div
                  className={`border-t ${
                    openIndex === index
                      ? "border-transparent"
                      : "border-gray-200/30"
                  } my-1 mx-2 rounded-full transition-all duration-300`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
