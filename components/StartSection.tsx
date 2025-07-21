"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const MarathonPromoBlock = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div className="bg-[var(--secondary-color)] border border-gray-200 shadow-lg rounded-2xl overflow-hidden max-w-7xl md:mx-auto mx-6">
      <div className="flex flex-col gap-2 w-full">
        <div className="grid grid-cols-1 md:flex md:justify-between gap-6 p-6 lg:p-8">
          {/* Таймер */}
          <div className="text-center lg:text-left mb-4 md:mb-0">
            <h3 className="text-xl md:text-lg font-semibold text-white text-center custom-text flex items-center justify-center lg:justify-start gap-2">
              До підвищення ціни залишилось:
            </h3>
            <div className="flex justify-center lg:justify-start gap-2 md:gap-4 mb-4 items-center h-full">
              <div className="text-center md:text-start">
                <div className="text-4xl lg:text-5xl font-bold text-[#8447e9] rounded-lg min-w-[60px] custom-text">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-sm text-gray-300 mt-1">Дн.</div>
              </div>
              <div className="text-center md:text-start">
                <div className="text-4xl lg:text-5xl font-bold text-[#8447e9] rounded-lg min-w-[60px] custom-text">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-sm text-gray-300 mt-1">Год.</div>
              </div>
              <div className="text-center md:text-start">
                <div className="text-4xl lg:text-5xl font-bold text-[#8447e9] rounded-lg min-w-[60px] custom-text">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-sm text-gray-300 mt-1">Хв.</div>
              </div>
              <div className="text-center md:text-start">
                <div className="text-4xl lg:text-5xl font-bold text-[#8447e9] rounded-lg min-w-[60px] custom-text">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-sm text-gray-300 mt-1">Сек.</div>
              </div>
            </div>
          </div>

          <div className="h-auto w-[1px] rounded-full bg-gray-200/30 mt-6"></div>

          {/* Спеціальні умови */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl md:text-lg font-semibold text-white custom-text mb-4 flex items-center justify-center lg:justify-start gap-2">
              Спеціальні умови:
            </h3>
            <div className="space-y-3">
              <div className="bg-transparent p-2 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <span className="text-lg">🔥</span>
                  <span className="font-bold text-white custom-text">
                    Знижка на кожен тариф:
                  </span>
                </div>
                <div className="font-bold text-[#8447e9] text-sm custom-text text-center">
                  -20$ / -25$ / -30$
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Тривалість знижки: 48 год
                </p>
              </div>
              <div className="bg-transparent rounded-lg p-2 border border-gray-200">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-lg">🎁</span>
                  <div className="font-bold text-white text-sm custom-text">
                    <span className="text-[#8447e9]">‑15%</span> на наступний
                    продукт
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto w-[1px] rounded-full bg-gray-200/30 mt-6"></div>

          {/* Старт потоку */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl md:text-lg font-semibold text-white mb-4 flex items-center justify-center lg:justify-start gap-2 custom-text">
              Старт марафону:
            </h3>
            <div className="bg-transparent rounded-lg md:mt-15">
              <div className="text-3xl lg:text-4xl font-bold text-[#8447e9] mb-2 custom-text uppercase">
                Субота, 2 серпня
              </div>
              <div className="text-sm text-white font-medium custom-text">
                Перша загальна Q&A сесія
              </div>
            </div>
          </div>

          <div className="h-auto w-[1px] rounded-full bg-gray-200/30 mt-6"></div>

          {/* Тривалість */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl md:text-lg font-semibold text-white mb-4 flex items-center justify-center lg:justify-start gap-2 custom-text">
              Тривалість:
            </h3>
            <div className="bg-transparent rounded-lg md:mt-14">
              <div className="text-3xl lg:text-4xl font-bold text-[#8447e9] mb-2 custom-text uppercase">
                14 днів
              </div>
              <div className="text-sm text-white font-medium custom-text">
                + 7 днів бонус‑підтримки
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0 w-full flex items-center justify-center cursor-pointer">
        <ScrollLink
          to="questions"
          smooth={true}
          duration={500}
          className="bg-gradient-to-br cursor-pointer from-[var(--main-color)] to-[var(--main-two-color)] text-white px-6 py-3 rounded-lg font-bold  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 mx-auto"
        >
          <span>Зареєструватись на марафон</span>
          <HiOutlineCursorClick className="w-8 h-8" />
        </ScrollLink>
      </div>
    </div>
  );
};

export default MarathonPromoBlock;
