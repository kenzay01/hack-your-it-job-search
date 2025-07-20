"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");
    if (element && header) {
      // Use 64px for mobile devices (md:hidden), otherwise use dynamic offsetHeight
      const isMobile = window.innerWidth < 768; // md breakpoint
      const headerHeight = isMobile ? 64 : header.offsetHeight;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--secondary-color)] rounded-b-4xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-400">
              <span className="text-[var(--main-two-color)]">IT</span>Career
            </div>
          </div>

          {/* Desktop Navigation */}
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
              onClick={() => scrollToSection("questions")}
              className="bg-[var(--main-two-color)] text-white px-6 py-2 rounded-full hover:bg-[var(--main-two-color)]/80 transition-colors font-medium"
            >
              Записатися
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:text-[var(--main-two-color)] hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-gradient-to-b from-[var(--secondary-color)] to-[var(--secondary-color)]/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("program")}
                className="text-left text-white/90 hover:text-[var(--main-two-color)] hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Програма
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="text-left text-white/90 hover:text-[var(--main-two-color)] hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Кейси
              </button>
              <button
                onClick={() => scrollToSection("author")}
                className="text-left text-white/90 hover:text-[var(--main-two-color)] hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Автор
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-white/90 hover:text-[var(--main-two-color)] hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Тарифи
              </button>
              <button
                onClick={() => scrollToSection("questions")}
                className="bg-gradient-to-r from-[var(--main-two-color)] to-[var(--main-two-color)]/80 text-white px-6 py-3 rounded-full hover:from-[var(--main-two-color)]/90 hover:to-[var(--main-two-color)]/70 transition-all duration-200 font-medium text-center mt-2 shadow-lg"
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
