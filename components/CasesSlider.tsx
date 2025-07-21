"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
// import case1 from "@/public/cases/case1.JPG"; // Replace with actual image paths
import case1 from "@/public/cases/case1.jpg";
import case2 from "@/public/cases/case2.jpg";
import case3 from "@/public/cases/case3.jpg";
import case4 from "@/public/cases/case4.jpg";
import case5 from "@/public/cases/case5.jpg";
import case6 from "@/public/cases/case6.jpg";
import case7 from "@/public/cases/case7.jpg";
import case8 from "@/public/cases/case8.jpg";
import case9 from "@/public/cases/case9.jpg";
import case10 from "@/public/cases/case10.jpg";
import case11 from "@/public/cases/case11.jpg";

const CasesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cases = [
    {
      name: "Артур",
      position: "Middle .NET Developer",
      salary: "2500$ + 1000$ part-time",
      image: case1,
      pointA:
        "Рік тому прийшов без досвіду на групове наставництво. Завдяки навчанню отримав перший офер на позицію Trainee .NET Developer із зарплатою 300$.",
      pointB:
        "Через рік досвіду повернувся на індивідуальне менторство. Через 4 місяці отримав офер на Middle .NET Developer із зарплатою $2500 та додатковий part-time на 1000$.",
      highlights: [
        "Пройшов шлях від Trainee до Middle всього за рік!",
        "Підвищив дохід у 11 разів завдяки системній роботі та наставництву",
        "Отримав два офери та сам обрав, куди рухатися далі",
        "Уже планує навчання на наступний рік – з ціллю підготуватись до Senior-позиції",
      ],
    },
    {
      name: "Денис",
      position: "Middle .NET Developer",
      salary: "2200$+",
      image: case2,
      pointA:
        "Працював 1 рік в аутсорс-компанії, куди потрапив після стажування. Технічний розвиток зупинився, проект себе вичерпав, а нового не давали. Високий темп, проблемні процеси та нервове середовище. Прийшов з запитом систематизувати знання та отримати офер на Middle-позицію.",
      pointB:
        "Отримав офер у відому українську продуктову компанію на сучасний проект зі стеком, який йому цікавий. Позиція .NET Developer зі ставкою $2200 net. Всі етапи співбесіди пройшов впевнено, оскільки знання були систематизовані, а не просто завчені модні терміни.",
      additional:
        "Денис пройшов навчання вдруге, щоб прокачати себе на рівень Middle. Наполеглива робота, чітка структура та правильний фокус допомогли досягти результату та отримати бажаний офер.",
    },
    {
      name: "Віктор",
      position: "Trainee .NET Developer",
      salary: "Оплачуване стажування",
      image: case3,
      pointA:
        "Студент, мав непоганий багаж знань, але недостатній для першої роботи, плюс невпевненість у своїх силах.",
      pointB:
        "У квітні 2024 року отримав офер на Trainee .NET Developer, зараз проходить оплачуваний випробувальний період.",
      additional:
        "Навчання почали у січні 2024 року. Завдяки щоденній плідній праці за 3 місяці Віктор отримав свій перший офер на оплачуване стажування. До цього пройшов кілька технічних співбесід і виконав тестове завдання. Впевненість у собі – ключ до успіху.",
    },
    {
      name: "Маша",
      position: "Junior .NET Developer",
      salary: "500€",
      image: case4,
      pointA:
        "Самостійне навчання без структури, багато прогалин у знаннях. Не мала реального комерційного досвіду роботи. Брак впевненості в собі через відсутність практики. Основний запит – зрозуміти, які навички потрібні для отримання оферу та як вибудувати кар’єрний розвиток.",
      pointB:
        "Виконала проєкт з інтеграцією ChatGPT у Discord, розробила backend-частину платформи. Отримала перший дохід – 1,000$ за реалізацію проєкту. Закрила прогалини у знаннях, побудувала сильну базу. Прокачала навички backend-розробки та навчилася вирішувати реальні завдання. Оформила LinkedIn і отримує запрошення на співбесіди. Стала впевненішою та зрозуміла, як досягати цілей. У травні 2025 року отримала офер на Junior .NET позицію з зарплатою 500€.",
      additional:
        "Під час навчання Маша отримала свій перший комерційний досвід, заробивши 1000$, та значно прокачала свої навички. Хоча спочатку не шукала повноцінний офер, зараз активно отримує запрошення на співбесіди.",
    },
    {
      name: "Влад",
      position: "Junior Full-Stack .NET Developer",
      salary: "$800 → $900",
      image: case5,
      pointA:
        "Прийшов на навчання школярем з гарним рівнем англійської та базовими знаннями в C#/.NET і ASP.NET Core. Запит: набити практику, підтягнути Advanced-теми та підготуватись до першого працевлаштування в IT.",
      pointB:
        "Ще під час наставництва у липні 2024 отримав пропозицію на стажування Trainee .NET Developer. Продовжив навчання, вступив до університету. У травні 2025 року отримав офер на позицію Junior Full-Stack .NET Developer: $800 gross на випробувальний період, $900 після його проходження.",
      highlights: [
        "Наймолодший студент: отримав перший офер у 17 років (зараз 18)",
        "Другий офер – на першому курсі ВНЗ, на позицію Junior Full-Stack",
        "Збільшив дохід та отримав два офери протягом року з переходом у комерційну розробку",
      ],
    },
    {
      name: "Рома",
      position: "Junior .NET Developer",
      salary: "450$",
      image: case6,
      pointA:
        "Прийшов на навчання з мінімальними знаннями в програмуванні: трохи знайомий із Java і C#, але без поглибленого розуміння та практичного досвіду.",
      pointB:
        "Через декілька місяців навчання отримав офер у стартапі із зарплатою 450$. Почав активно отримувати запрошення на співбесіди в інші компанії. Зрозумів важливість побудови фундаменту знань і продовжує розвивати навички. Навчився працювати із вимогами та втілювати їх у коді.",
    },
    {
      name: "Нікіта",
      position: "Middle .NET Developer",
      salary: "4000$",
      image: case7,
      pointA:
        "Зарплата джуна при 3 роках досвіду – 1200$. Робота на проекті без розвитку, нерозуміння, куди рухатися далі. Відсутність необхідних hard skills для Middle-позицій. Хотів покращити навички, отримати нові знання та крутіший офер.",
      pointB:
        "Через місяць навчання отримав офер на 2800$. Згодом змінив роботу ще раз – отримав контракт на 4000$. Вийшов на рівень Middle .NET Developer. Прокачав хард скіли, змінив підхід до роботи, став упевненішим у собі.",
      additional:
        "На особистому менторстві глибоко пропрацювали hard skills, перепакували досвід і дали чітке розуміння вимог для Middle-позиції. Завдяки структурованому підходу та наполегливій роботі Нікіта суттєво збільшив дохід і отримав цікавіший проєкт.",
    },
    {
      name: "Антон",
      position: "Middle .NET Developer",
      salary: "2000$",
      image: case8,
      pointA:
        "Працював на позиції Junior .NET Developer протягом 2 років із зарплатою 500$. Застряг на проекті, який не давав розвитку. Чіткий запит – знайти нову роботу для професійного зростання та покращення зарплати.",
      pointB:
        "Через 3 місяці навчання отримав офер на позицію Middle .NET Developer із зарплатою 2000$ чистими. Опанував мікросервіси, роботу з клаудом, Kafka, Kubernetes, писав якісніший код. Допомогли з підготовкою резюме та LinkedIn.",
      additional:
        "На кожному етапі навчання Антон отримував підтримку, відповіді на запитання від вибору технологій до оформлення проектів. Завдяки наполегливій роботі та співпраці збільшив ЗП у 4 рази за три місяці.",
    },
    {
      name: "Антон",
      position: "Senior .NET Developer",
      salary: "4000$+",
      image: case9,
      pointA:
        "Мав багатий досвід роботи на C#/.NET, але засидівся на проєкті з CRM Creatio, нішевою технологією.",
      pointB:
        "Почали роботу у квітні 2024 року, а у лютому отримав офер у 'Дію'. Підтягнули теорію та підготувалися до співбесід на класичні Backend-позиції на ASP.NET Core, що дозволило знайти роботу на кращий стек і більші гроші.",
      additional: "Інвестиція в курс окупилася в перший місяць нової роботи.",
    },
    {
      name: "Олександр",
      position: "FullStack JS Developer",
      salary: "5700$",
      image: case10,
      pointA:
        "Застряг на проєкті без перспективи розвитку, де вигорав від обов'язків, ЗП ~3500$. Проблеми: проєкт без нормальних процесів і досвідчених розробників, потреба в швидкому вивченні Backend, нерозуміння пошуку кращих умов.",
      pointB:
        "Офер на 5700$ на проєкт з клаудом/мікросервісами у великій компанії з кращими процесами. За 4 місяці навчання перепакував досвід з Frontend у FullStack, підтягнув Backend: архітектури, SQL/NoSQL, клауд, System Design.",
      additional:
        "Це дозволило вийти на 5700$, втягнутися у BE та знайти офер у топову польську компанію з досвідченими розробниками, меншими напругами через процеси та більшим простором для розвитку.",
    },
    {
      name: "Олександр",
      position: "Junior FullStack Developer",
      salary: "400+$",
      image: case11,
      pointA:
        "Студент, дуже базові знання по C#. Міг створювати лише базові консольні додатки.",
      pointB:
        "У липні 2023 року отримав перший офер у невеличку компанію. Згодом отримав офер на 700$+ на проєкт із замовником із США.",
      additional:
        "Почали роботу у січні 2023 року. Пройшли широкий роадмап, який дозволив Олександру отримати два офери та перейти у комерційну розробку.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const currentCase = cases[currentSlide];

  return (
    <>
      <section
        id="cases"
        className="py-8 md:py-16 bg-[var(--secondary-color)] min-h-screen"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-5xl font-bold text-white">Кейси</h1>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-lg items-center justify-center hover:bg-gray-100 transition-colors hidden md:flex"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-lg  items-center justify-center hover:bg-gray-100 transition-colors hidden md:flex"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex justify-end mb-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-2 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <div className="bg-transparent rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mb-4">
              <div className="relative w-full h-64">
                <Image
                  src={currentCase.image}
                  alt={currentCase.name}
                  fill
                  quality={75}
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-gradient-to-bl from-[var(--main-color)] via-[var(--main-two-color)] via-20% to-[var(--secondary-color)] text-white">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {currentCase.name}
                </h2>
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    Точка А
                  </h3>
                  <p className="text-gray-300 text-sm">{currentCase.pointA}</p>
                  <h3 className="text-base font-semibold text-white mb-1 mt-2">
                    Точка Б
                  </h3>
                  <p className="text-gray-300 text-sm">{currentCase.pointB}</p>
                </div>
                <button
                  onClick={openModal}
                  className="bg-[var(--main-two-color)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--main-two-color)]/80 transition-colors w-full"
                >
                  Детальніше
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-6">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-white"
                      : "bg-[var(--main-two-color)] opacity-50"
                  }`}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-white text-sm">
                Всі інші кейси студентів можливо переглянути по{" "}
                <a
                  href="https://troubled-glove-959.notion.site/dpuchkov-it-5e802642bfe74e98a9ab51464332caf1?pvs=25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--main-two-color)] transition-colors"
                >
                  цьому посиланню
                </a>
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="bg-transparent rounded-2xl overflow-hidden shadow-2xl h-[500px] flex border border-gray-200">
              {/* Left side - Photo */}
              <div className="w-1/3 relative">
                <Image
                  src={currentCase.image}
                  alt={currentCase.name}
                  width={400}
                  height={500}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Content */}
              <div className="w-2/3 p-12 flex flex-col justify-between bg-gradient-to-bl from-[var(--main-color)] via-[var(--main-two-color)] via-20% to-[var(--secondary-color)] text-white">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {currentCase.name}
                  </h2>
                  <div className="mb-8 flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Точка А
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                      {currentCase.pointA}
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Точка Б
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                      {currentCase.pointB}
                    </p>
                  </div>
                </div>
                <button
                  onClick={openModal}
                  className="bg-[var(--main-two-color)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--main-two-color)]/80 transition-colors self-start"
                >
                  Детальніше
                </button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-start mt-6 gap-2 px-4">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-white"
                      : "bg-[var(--main-two-color)] opacity-50"
                  }`}
                />
              ))}
            </div>

            {/* Link to more cases */}
            <div className="text-center mt-6">
              <p className="text-white text-lg">
                Всі інші кейси студентів можливо переглянути по{" "}
                <a
                  href="https://troubled-glove-959.notion.site/dpuchkov-it-5e802642bfe74e98a9ab51464332caf1?pvs=25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--main-two-color)] transition-colors"
                >
                  цьому посиланню
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--secondary-color)] mb-2">
                    {currentCase.name}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {currentCase.position}
                  </p>
                  <p className="text-lg font-semibold text-[var(--main-two-color)] mt-2">
                    ЗП: {currentCase.salary}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {currentCase.additional && (
                  <div className="bg-[var(--main-two-color)]/10 p-4 rounded-lg border-l-4 border-[var(--main-two-color)]">
                    <p className="text-gray-700 leading-relaxed">
                      {currentCase.additional}
                    </p>
                  </div>
                )}

                {currentCase.highlights && (
                  <ul className="space-y-2">
                    {currentCase.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[var(--main-two-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CasesSlider;
