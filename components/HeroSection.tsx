import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import logo1 from "@/public/Csharp.png";
import logo2 from "@/public/JS.png";
import heroImgPng from "@/public/heroSection-Photoroom.png";

const HeroSection = () => {
  return (
    <section className="relative bg-transparent text-white z-0">
      {/* Desktop layout - без змін */}
      <div className="hidden md:block">
        <Image
          src={logo1}
          alt="Logo 1"
          className="absolute top-62 right-126 w-28 h-auto z-20 -rotate-30 drop-shadow-2xl"
        />
        <Image
          src={logo2}
          alt="Logo 2"
          className="absolute top-64 right-53 w-28 h-auto z-20 rotate-18 drop-shadow-2xl"
        />
        <div className="absolute top-19 right-38 w-132 h-auto drop-shadow-[0px_20px_75px_rgb(107,14,232,0.5)] z-20">
          <Image
            src={heroImgPng}
            alt="Hero Image"
            className="object-cover w-full h-auto opacity-95 z-0"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Нижній бордер */}
          <div className="absolute bottom-0 left-0 w-128 h-1 bg-gradient-to-r from-transparent via-[var(--main-two-color)] to-transparent"></div>
        </div>
      </div>

      {/* Mobile layout - hero image як background */}
      <div className="md:hidden absolute -right-30 top-20 z-0 overflow-hidden">
        <Image
          src={heroImgPng}
          alt="Hero Image"
          className="object-cover w-200 h-auto opacity-40 drop-shadow-[0px_20px_75px_rgb(107,14,232,0.9)] max-w-[500px] max-h-[550px]"
          quality={85}
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // fill
          // sizes="100vw"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 w-128 h-1 bg-gradient-to-r from-transparent via-[var(--main-two-color)] to-transparent"></div>
        {/* Overlay для кращої читабельності тексту */}
        {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}
      </div>

      <div className="md:pt-42 pb-6 bg-transparent text-white overflow-hidden z-30 relative">
        {/* Desktop content */}
        <div className="hidden md:block px-4 mr-72 relative z-30">
          <div className="max-w-4xl mx-auto text-start">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 hover:scale-103 transition-transform duration-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">
                Перевірено 150+ студентами
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-16 uppercase">
              Як хакнути пошук роботи в{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                ІТ?
              </span>
            </h1>
            <div className="text-lg md:text-xl mb-4 text-blue-100">
              <p className="font-semibold">
                14-денний практичний марафон із Senior-розробником Дмитром
                Пучковим
              </p>
            </div>

            <div className="flex flex-col items-start justify-bottom">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                «Хакни пошук роботи в ІТ за 14 днів»
              </h2>
              <p className="text-blue-100 mb-6">
                За 14 днів створи свою систему пошуку роботи яка дозволить тобі
                вирости в доході від 0 до $5000+
              </p>

              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2">
                <span>Почати за 14 днів</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile content - розміщений поверх background image */}
        <div className="md:hidden px-4 relative z-40 min-h-screen flex flex-col justify-end pb-12">
          <div className="max-w-sm mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 hover:scale-103 transition-transform duration-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">
                Перевірено 150+ студентами
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4 uppercase leading-tight">
              Як хакнути пошук роботи в{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                ІТ?
              </span>
            </h1>

            <p className="text-white/95 mb-2 font-bold text-lg">
              «Хакни пошук роботи в ІТ за 14 днів»
            </p>
            <p className="text-white/90 mb-4 text-md leading-relaxed">
              14-денний практичний марафон із Senior-розробником Дмитром
              Пучковим
            </p>

            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-bold  hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:translate-x-2 mx-auto">
              <span>Почати за 14 днів</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Background animated elements - тільки для desktop */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
