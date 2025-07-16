"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowBigRightDash } from "lucide-react";

const CasesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      name: "Денис",
      position: "Middle .NET Developer",
      salary: "2200$+",
      pointA:
        "Працював 1 рік в аутсорс-компанії, куди потрапив після стажування. Технічний розвиток зупинився, проект себе вичерпав, а нового не давали. Високий темп, проблемні процеси та нервове середовище. Прийшов з запитом систематизувати знання та отримати офер на Middle-позицію.",
      pointB:
        "Отримав офер у відому українську продуктову компанію на сучасний проект зі стеком, який йому цікавий. Позиція .NET Developer зі ставкою $2200 net. Всі етапи співбесіди пройшов впевнено, оскільки знання були систематизовані, а не просто завчені модні терміни.",
      additional:
        "Денис пройшов навчання вдруге, щоб прокачати себе на рівень Middle. Наполеглива робота, чітка структура та правильний фокус допомогли досягти результату та отримати бажаний офер.",
    },
    {
      name: "Артур",
      position: "Middle .NET Developer",
      salary: "2500$ + 1000$ part-time",
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
      name: "Євген",
      position: "Senior .NET Developer",
      salary: "5600€",
      pointA:
        "Євген звернувся з досвідом, але без актуальної практики – 2,5 роки не проходив співбесіди, а ринок за цей час суттєво змінився. Живе в Польщі, попередня ЗП – 23 000 злотих (~5300€), але не був упевнений, що зможе претендувати на аналогічну або вищу суму. Запит: підготуватися до співбесід на синьйорські позиції, закрити технічні прогалини, повернути впевненість.",
      pointB:
        "За 1,5 місяці індивідуального менторства Євген отримав мініпроєкт для прокачки технологій, які активно питають на співбесідах; пройшов серію мок-інтерв'ю з розбором теорії; попрацював над архітектурними задачами; отримав доступ до навчальних матеріалів і каналів, які допомогли підтягнути слабкі місця.",
      additional:
        "Євген отримав сильний офер на позицію Senior Developer – 5600€ (і сам зізнається, що міг просити ще більше, але обрав стабільність і впевненість у пропозиції).",
    },
    {
      name: "Олександр",
      position: "FullStack JS Developer",
      salary: "5700$",
      pointA:
        "Застряг на проєкті без перспективи розвитку, де він вигорав від обов'язків, ЗП ~3500$. Головними проблемами були: проєкт з відсутністю нормальних процесів та досвідчених розробників; потреба в швидкому вивченні Backend для роботи; нерозуміння як шукати роботу на кращі умови.",
      pointB:
        "Офер на 5700$ на проєкт з клаудом/мікросервісами, у великій компанії та краще поставленими процесами. За 4 місяці навчання перепакував досвід з Frontend у FullStack розробника, підтягнув фундаментальні речі по Backend: різні виду архітектур, SQL/NoSQL, трішки клауду, System Design.",
      additional:
        "Це дозволило Олександру вийти на 5700$, швидко втягнутися у BE, та знайти офер в топову польську компанію з купою інших досвідчених розробників, де у нього буде менше напрягів через процеси + більше простору для розвитку.",
    },
    {
      name: "Єгор",
      position: "Senior Frontend Developer",
      salary: "4500$",
      pointA:
        "Єгор прийшов на індивідуальне менторство до Олександра та Дмитра вже сильним мідлом, з досвідом. Запит: докачати скіли до рівня Senior та вивчити бекенд, щоб згодом працювати як Full-Stack.",
      pointB:
        "У процесі менторства Єгор підтягнув архітектурне мислення та розширив технічний кругозір; отримав офер на позицію Senior Frontend Developer з зарплатою $4500; продовжує навчання, щоб упевнено перейти у Full-Stack з акцентом на бекенд (C# / .NET).",
      highlights: [
        "Прийшов «доганяти» бекенд, а вже на фоні навчання вийшов на рівень Senior",
        "Не зупинився на офері – продовжує навчання, бо бачить перспективу в Full-Stack",
        "Кейс, коли досвід + точковий апгрейд = швидкий кар'єрний прорив",
      ],
    },
    {
      name: "Марина",
      position: "Junior Full Stack Developer",
      salary: "500$",
      pointA:
        "Під час навчання в університеті Марина здобула базові знання з C#/.NET та інших мов, а також пройшла курс від SoftServe. Попри це, відчувалась нестача системності – знання були фрагментарі, а це гальмувало старт кар'єри в IT. Запит: систематизувати знання, заповнити прогалини та почати пошук першої комерційної роботи.",
      pointB:
        "Під час наставництва Марина якісно прокачала технічні скіли, розклала все по поличках і додатково здобула нові знання. Оформила профіль на LinkedIn – і майже одразу почала отримувати запити від рекрутерів. Після завершення навчання вийшла на активний пошук і вже після першої технічної співбесіди отримала офер у продуктовій українській компанії на позицію Junior Full Stack Developer з компенсацією $500.",
    },
    {
      name: "Давид",
      position: "Junior .NET Developer",
      salary: "800$",
      pointA:
        "Давид прийшов на навчання з базовими знаннями .NET, які здобув в університеті та на курсах EPAM. Однак, йому бракувало розуміння реальних робочих процесів, практичного досвіду та чіткої структури знань для впевненого виходу на ринок праці.",
      pointB:
        "На третьому місяці навчання Давид отримав офер на позицію Junior .NET Developer із зарплатою 800$. Він суттєво прокачав технічні навички та набув впевненості у своїх силах, що допомогло йому успішно стартувати кар'єру в IT.",
      additional:
        "На наставництві Давид отримав не лише технічні знання, а й необхідні скіли для успішного проходження співбесід. Завдяки індивідуальному підходу ментора Олександра, навчання стало набагато ефективнішим за звичайні курси, оскільки дозволяло одразу закривати пробіли та отримувати практичні поради.",
    },
    {
      name: "Рома",
      position: "Junior .NET Developer",
      salary: "450$",
      pointA:
        "Рома прийшов на навчання з мінімальними знаннями в програмуванні: трохи знайомий із Java і C#, але без поглибленого розуміння та практичного досвіду.",
      pointB:
        "Через декілька місяців навчання Рома отримав офер у стартапі із зарплатою 450$; почав активно отримувати запрошення на співбесіди в інші компанії; зрозумів важливість побудови фундаменту знань (базових принципів) і тепер продовжує розвивати навички; навчився працювати із вимогами, розуміти, що потрібно від нього як розробника, і як це втілити в коді.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentSlide];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Кейси</h2>
          <p className="text-xl text-gray-600">
            Реальні історії успіху наших студентів
          </p>
        </div>

        <div className="relative">
          {/* Основний контент слайду */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Заголовок кейсу */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 flex items-end justify-between gap-4">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold">{currentCase.name}</h3>
                <p className="text-xl opacity-90">{currentCase.position}</p>
              </div>
              <p className="text-2xl font-semibold">ЗП: {currentCase.salary}</p>
            </div>

            {/* Контент з точками А і Б */}
            <div className="p-8">
              <div className="flex gap-8 items-center">
                {/* Точка А */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">А</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Точка А
                    </h4>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-gray-700 leading-relaxed">
                      {currentCase.pointA}
                    </p>
                  </div>
                </div>

                {/* Стрілочка */}
                <div className="flex justify-center lg:justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <ArrowBigRightDash className="w-12 h-12 text-blue-600" />
                  </div>
                </div>

                {/* Точка Б */}
                <div className="space-y-4 lg:order-3 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">
                        Б
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Точка Б
                    </h4>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <p className="text-gray-700 leading-relaxed">
                      {currentCase.pointB}
                    </p>
                  </div>
                </div>
              </div>

              {/* Додаткова інформація */}
              {currentCase.additional && (
                <div className="mt-8 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {currentCase.additional}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {currentCase.highlights && (
                <div className="mt-8">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">
                    З цікавого:
                  </h5>
                  <ul className="space-y-2">
                    {currentCase.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>{highlight}</strong>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Навігація */}
          <div className="flex justify-center items-center mt-8">
            {/* Індикатори */}
            <div className="flex space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Лічильник */}
          <div className="text-center mt-4">
            <span className="text-gray-500">
              {currentSlide + 1} з {cases.length}
            </span>
          </div>
        </div>
        {/* Кнопки навігації */}
        <div className="absolute top-100 left-0 right-0 flex justify-between transform px-4 w-full">
          <button
            onClick={prevSlide}
            className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 p-1 rounded-xl border-2 border-blue-500 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-102"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 p-1 rounded-xl border-2 border-blue-500 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-102"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSlider;
