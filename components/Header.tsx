"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--secondary-color)] rounded-b-4xl drop-shadow-[0px_-10px_50px_rgb(107,14,232,0.7)]">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-slate-800">
              <span className="text-[var(--main-two-color)]">IT</span>Career
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("program")}
              className="text-slate-400 hover:text-[var(--main-two-color)] transition-colors"
            >
              Програма
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-slate-400 hover:text-[var(--main-two-color)] transition-colors"
            >
              Кейси
            </button>
            <button
              onClick={() => scrollToSection("author")}
              className="text-slate-400 hover:text-[var(--main-two-color)] transition-colors"
            >
              Автор
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-400 hover:text-[var(--main-two-color)] transition-colors"
            >
              Тарифи
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="bg-[var(--main-two-color)] text-white px-6 py-2 rounded-full hover:bg-[var(--main-two-color)]/80 transition-colors font-medium"
            >
              Записатися
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("program")}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors py-2"
              >
                Програма
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors py-2"
              >
                Кейси
              </button>
              <button
                onClick={() => scrollToSection("author")}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors py-2"
              >
                Автор
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-slate-600 hover:text-blue-600 transition-colors py-2"
              >
                Тарифи
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Записатися
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
