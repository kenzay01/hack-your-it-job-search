"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Clock, ArrowRight } from "lucide-react";

const StartSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-07-28T19:00:00+03:00");
    const updateTimer = () => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="start"
      className="py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative"
      style={{
        clipPath: "polygon(100% 10%, 100% 75%, 0 90%, 0 25%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Стартуємо 28 липня о 19:00 по Києву
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Clock className="w-6 h-6 text-yellow-400" />
          <p className="text-lg font-semibold text-white">
            До закриття продажу залишилося: {timeLeft.days} дн. {timeLeft.hours}{" "}
            год. {timeLeft.minutes} хв. {timeLeft.seconds} сек.
          </p>
        </div>
        <ScrollLink
          to="pricing"
          smooth={true}
          duration={500}
          className="inline-flex bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl items-center space-x-2 cursor-pointer"
        >
          <span>Хочу результат за 14 днів</span>
          <ArrowRight className="w-5 h-5" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default StartSection;
