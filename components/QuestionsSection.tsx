"use client";

import React, { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

const QuestionsSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Placeholder for form submission
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section
      id="questions"
      className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative"
    >
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white rotate-180"
        >
          <path d="M0,120 C150,40 350,120 600,80 C850,40 1050,120 1200,80 L1200,120 Z" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2">Залишилися запитання?</h2>
          <p className="text-xl text-blue-100 mb-4">
            Залиш свої контакти і наша команда зв`яжеться з тобою
          </p>
          <a
            href="https://t.me/support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center justify-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Або одразу пиши в підтримку Telegram</span>
          </a>
        </div>
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-100"
              >
                Ім`я
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Введіть ваше ім'я"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-100"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Введіть ваш email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-blue-100"
              >
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Введіть ваш номер телефону"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Відправити</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
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
    </section>
  );
};

export default QuestionsSection;
