"use client";

import React, { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

const QuestionsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    interest: "", // Нове поле для питання
  });
  const [phoneError, setPhoneError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "telegram") {
      // Prevent removing '@' and ensure it stays at the start
      if (!value.startsWith("@") || value === "") {
        newValue = "@" + value.replace(/^@+/, "");
      }
    }

    setFormData({ ...formData, [name]: newValue });

    if (name === "phone") {
      const phoneRegex = /^\+380\d{9}$/;
      if (!phoneRegex.test(value) && value !== "") {
        setPhoneError("Введіть номер у форматі +380123456789");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleTelegramFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formData.telegram.startsWith("@")) {
      setFormData({ ...formData, telegram: "@" + formData.telegram });
    }
  };

  const sendToTelegram = async (data: {
    name: string;
    phone: string;
    telegram: string;
    interest: string;
  }) => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `
Нова заявка з форми:
Ім'я: ${data.name}
Телефон: ${data.phone}
Telegram: ${data.telegram}
Цікавість у марафоні по пошуку роботи: ${data.interest || "Не вказано"}
    `.trim();

    try {
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }
      return { success: true };
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return { success: false, error: "Не вдалося відправити повідомлення" };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError("Введіть коректний номер у форматі +380123456789");
      return;
    }

    setSubmitStatus("Відправка...");
    const result = await sendToTelegram(formData);

    if (result.success) {
      setSubmitStatus("Повідомлення успішно відправлено!");
      setFormData({ name: "", phone: "", telegram: "", interest: "" });
      setPhoneError("");
      setTimeout(() => setSubmitStatus(""), 3000);
    } else {
      setSubmitStatus(result.error || "Помилка при відправці");
    }
  };

  return (
    <section
      id="questions"
      className="py-8 bg-[var(--secondary-color)] text-white relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2">Залишилися запитання?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-4">
            Залиш свої контакти і наша команда зв`яжеться з тобою
          </p>
          <a
            href="https://t.me/dpuchkov_support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--main-two-color)] hover:text-[var(--main-two-color)]/70 font-semibold flex flex-col md:flex-row items-center justify-center space-y-1 space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Або одразу пиши в підтримку Telegram</span>
          </a>
        </div>
        <div className="max-w-md mx-auto bg-radial-[at_-20%_-20%] to-[var(--secondary-color)] to-75% from-[var(--main-color)] via-[var(--main-two-color)] rounded-2xl p-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-100"
              >
                Твоє ім`я
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-lg bg-[var(--secondary-color)] text-white placeholder-gray-600 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--main-two-color)]"
                placeholder="Введіть ваше ім'я"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-blue-100"
              >
                Твій номер телефону
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 w-full p-3 rounded-lg bg-[var(--secondary-color)] text-white placeholder-gray-600 border ${
                  phoneError ? "border-red-500" : "border-white/30"
                } focus:outline-none focus:ring-2 focus:ring-[var(--main-two-color)]`}
                placeholder="+380123456789"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="telegram"
                className="block text-sm font-medium text-blue-100"
              >
                Твій нікнейм в Telegram
              </label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                onFocus={handleTelegramFocus}
                className="mt-1 w-full p-3 rounded-lg bg-[var(--secondary-color)] text-white placeholder-gray-600 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--main-two-color)]"
                placeholder="@nickname"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-100">
                Наскільки тобі цікавий марафон по пошуку роботи?
              </label>
              <div className="mt-2 pl-2 space-y-2">
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="interest"
                    value="Вже обрав тариф, та готовий оплатити"
                    checked={
                      formData.interest ===
                      "Вже обрав тариф, та готовий оплатити"
                    }
                    onChange={handleChange}
                    className="mr-2 bg-[var(--main-two-color)]"
                  />
                  Вже обрав тариф, та готовий оплатити
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="radio"
                    name="interest"
                    value="Цікаво поспілкуватись та отримати відповіді на додаткові запитання"
                    checked={
                      formData.interest ===
                      "Цікаво поспілкуватись та отримати відповіді на додаткові запитання"
                    }
                    onChange={handleChange}
                    className="mr-2 focus:ring-[var(--main-two-color)]"
                  />
                  Цікаво поспілкуватись та отримати відповіді на додаткові
                  запитання
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Відправити</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            {submitStatus && (
              <p
                className={`text-sm mt-2 text-center ${
                  submitStatus.includes("успішно")
                    ? "text-green-400"
                    : "text-red-500"
                }`}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
