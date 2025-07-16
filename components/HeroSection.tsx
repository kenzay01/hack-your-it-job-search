import React from "react";
import { ArrowRight, Star, Zap } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/heroSection.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pb-4">
      <Image
        src={heroImage}
        alt="Hero Image"
        className="absolute top-52 right-38 object-cover w-102 h-auto opacity-95 rounded-3xl border-3 border-white/20 hover:scale-101 transition-transform duration-300"
        quality={85}
        // placeholder="blur"
        // priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
      <div className="pt-22 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden  ">
        <div className="px-4 mr-64">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 hover:scale-103 transition-transform duration-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">
                Перевірено 150+ студентами
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-4 uppercase">
              Як хакнути пошук роботи в{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                ІТ?
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-4 text-blue-100">
              <p className="font-semibold">14-денний практичний марафон</p>
              <p className="text-lg mt-2">
                із Senior-розробником Дмитром Пучковим
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                «Хакни пошук роботи в ІТ за 14 днів»
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                За 14 днів створи свою систему пошуку роботи яка дозволить тобі
                вирости в доході від 0 до $5000+
              </p>

              <div className="flex justify-center space-x-6 mb-6">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">Система пошуку</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">Ефективні CV</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">Підготовка до співбесід</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto hover:translate-x-2">
                <span>Почати за 14 днів</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">150+</div>
                <div className="text-sm text-blue-100">Студентів</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">7</div>
                <div className="text-sm text-blue-100">Років досвіду</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">$5K+</div>
                <div className="text-sm text-blue-100">Середній оффер</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">14</div>
                <div className="text-sm text-blue-100">Днів до результату</div>
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

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
