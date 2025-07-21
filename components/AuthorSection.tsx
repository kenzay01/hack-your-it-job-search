import React from "react";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  Handshake,
  Smartphone,
  DollarSign,
} from "lucide-react";
import authorImg from "@/public/authorSection.jpg";

const AUTHOR_DATA = [
  {
    icon: Building2,
    text: (
      <>
        В ІТ з 2017 року, маю досвід в роботі з великими компаніями з США та ЄС.
      </>
    ),
  },
  {
    icon: GraduationCap,
    text: (
      <>
        З 2022 року займаюсь менторською діяльністю. <br /> Постійно навчаю і
        довожу їх до оферів, як і з повного 0, так і рівня Junior/Middle/Senior.
      </>
    ),
  },
  {
    icon: Handshake,
    text: (
      <>
        Я такий самий IT-шник як і ти. <br /> Постійно ходжу на співбесіди і
        шукаю максимально ефективний шлях, для того, щоб качати свою експертизу
        і знаходити класні офери. <br /> Я вірю не в обман компаній і
        рекрутерів, а у win-win взаємостосунки.
      </>
    ),
  },
  {
    icon: Smartphone,
    text: (
      <>
        Блогер та інфлюенсер: <br /> Я засновник телеграм-каналу «ІТ-Садок» (2k+
        підписників), Tik-Tok (14k+), Instagram (3.5k+), Спільноти по C# та JS
        (2k+ аудиторії).
      </>
    ),
  },
  {
    icon: DollarSign,
    text: (
      <>
        З початку 2025 року я отримав 5 оферів на суму від $5k до $7.5k – і на
        марафоні детально покажу, як повторити цей результат.
      </>
    ),
  },
];

const AuthorSection = () => {
  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Єдиний Glassmorphism блок */}
        <div className="backdrop-blur-md bg-white/5 border-2 border-gray-200 rounded-2xl p-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
            {/* Ліва частина - фото */}
            <div id="author" className="flex justify-center items-center">
              <div className="relative w-60 h-80 sm:w-72 sm:h-96 lg:w-92 lg:h-[550px]">
                <Image
                  src={authorImg}
                  alt="Фото Дмитра Пучкова"
                  layout="fill"
                  className="rounded-xl object-cover w-full h-full"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Права частина - інформація */}
            <div className="space-y-6 pt-4 lg:pt-8 text-center lg:text-left">
              {/* Заголовок */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-3 custom-text">
                  Дмитро Пучков
                </h3>
                <p className="text-lg lg:text-xl text-gray-200 font-semibold mb-4">
                  Senior .NET розробник з{" "}
                  <span className="underline decoration-[var(--secondary-color)]">
                    7+ роками
                  </span>{" "}
                  комерційного досвіду
                </p>
              </div>

              {/* Список досягнень */}
              <div className="space-y-5">
                {AUTHOR_DATA.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 justify-center lg:justify-start group"
                    >
                      <div className="flex-shrink-0 mt-1 text-[var(--secondary-color)] group-hover:scale-110 transition-transform duration-200 p-2 rounded-lg bg-white">
                        <IconComponent
                          size={20}
                          className="text-[var(--main-two-color)]"
                        />
                      </div>
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-start">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--main-color)]/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-[var(--main-color)]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[var(--main-color)]/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
    </section>
  );
};

export default AuthorSection;
