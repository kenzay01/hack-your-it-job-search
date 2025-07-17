import React from "react";
import Image from "next/image";
import authorImg from "@/public/authorSection.jpg"; // Replace with actual image path

const AuthorSection = () => {
  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      {/* Білий паралелограм */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 w-full h-full bg-radial from-[var(--main-two-color)] from-10% to-[var(--secondary-color)]"
          style={{
            clipPath: "polygon(100% 10%, 100% 75%, 0 90%, 0 25%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Ліва частина - фото */}
          <div className="flex justify-center items-center hover:scale-101 transition-transform duration-300">
            <div className="relative mt-10">
              <div className="w-92 h-112 rounded-2xl flex items-center justify-center shadow-2xl">
                <Image
                  src={authorImg}
                  alt="Фото Дмитра Пучкова"
                  layout="fill"
                  className="rounded-2xl object-cover w-full h-full"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              {/* Декоративні елементи */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--main-two-color)] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--main-color)] rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Права частина - інформація */}
          <div className="space-y-6 pt-24">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Дмитро Пучков
              </h3>
              <p className="text-xl text-gray-200 font-semibold mb-4">
                Senior .NET розробник з 7+ роками комерційного досвіду
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[var(--main-color)]/60 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-200 ">
                  <strong>В ІТ з 2017 року</strong>, маю досвід в роботі з
                  великими компаніями з США та ЄС.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[var(--main-color)]/60 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-200 ">
                  <strong>З 2022 року займаюсь менторською діяльністю.</strong>{" "}
                  Постійно навчаю і довожу студентів до оферів, як з повного 0,
                  так і рівня Junior/Middle/Senior.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[var(--main-color)]/60 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-200 ">
                  <strong>Я такий самий IT-шник як і ти.</strong> Постійно хожу
                  на співбесіди і шукаю максимально ефективний шлях для прокачки
                  експертизи і знаходження класних оферів. Я вірю не в обман
                  компаній і рекрутерів, а у win-win взаємостосунки.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[var(--main-color)]/60 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-200">
                  <strong>Блогер та інфлюенсер:</strong> Засновник
                  телеграм-каналу «ІТ-Садок» (2k+ підписників), Tik-Tok (14k+),
                  Instagram (3.5k+), Спільноти по C# та JS (2k+ аудиторії).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[var(--main-two-color)] mt-4 hover:scale-102 transition-transform duration-300">
                <p className="text-gray-800 font-medium ">
                  <strong>З початку 2025 року я отримав 5 оферів</strong> на
                  суму від $5k до $7.5k – і на марафоні детально покажу, як
                  повторити цей результат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
