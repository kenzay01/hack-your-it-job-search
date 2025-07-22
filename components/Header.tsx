"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo1 from "@/public/Csharp.png";
import logo2 from "@/public/JS.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "who", label: "Для кого" },
    { id: "program", label: "Програма" },
    { id: "cases", label: "Кейси" },
    { id: "author", label: "Автор" },
    { id: "pricing", label: "Тарифи" },
    { id: "faqs", label: "Питання" },
    { id: "support", label: "Підтримка", isLink: true },
    { id: "questions", label: "Забронювати місце", isButton: true },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");
    if (element && header) {
      const isMobile = window.innerWidth < 768;
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
          <div className="flex-shrink-0 flex items-center ">
            <div className="text-2xl font-bold text-white pr-4 relative">
              JobHack <span className="text-[var(--main-two-color)]">IT</span>
              {/* <Image
                src={logo1}
                alt="Logo 1"
                className="absolute top-1/2 transform -translate-y-1/2 -right-10 w-14 h-auto drop-shadow-2xl"
              />
              <Image
                src={logo2}
                alt="Logo 2"
                className="absolute top-1/2 transform -translate-y-1/2 -right-21 w-15 h-auto drop-shadow-2xl"
              /> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {navLinks
                .filter((link) => !link.isButton && !link.isLink)
                .map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-2 py-1 text-[15px] custom-text overflow-hidden group rounded-full cursor-pointer border-2 border-gray-200"
                  >
                    <span className="absolute inset-0 bg-[var(--main-two-color)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative z-10 text-white transition-colors duration-300">
                      {link.label}
                    </span>
                  </button>
                ))}
              {navLinks.find((link) => link.isLink) && (
                <a
                  href="https://t.me/dpuchkov_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-2 py-1 text-[15px] custom-text overflow-hidden group rounded-full cursor-pointer border-2 border-gray-200"
                >
                  <span className="absolute inset-0 bg-[var(--main-two-color)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative z-10 text-white transition-colors duration-300">
                    {navLinks.find((link) => link.isLink)!.label}
                  </span>
                </a>
              )}
            </div>
            <div>
              {navLinks
                .filter((link) => link.isButton)
                .map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-2 py-1 text-[15px] custom-text overflow-hidden group rounded-full cursor-pointer border-2 border-gray-200 ml-4"
                  >
                    <span className="absolute inset-0 bg-[var(--main-two-color)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative z-10  text-white transition-colors duration-300">
                      {link.label}
                    </span>
                  </button>
                ))}
            </div>
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
              {navLinks.map((link) =>
                link.isLink ? (
                  <a
                    key={link.id}
                    href="#support"
                    className="text-left text-white/90 hover:text-[var(--main-two-color)] hover:bg-white/10 transition-all duration-200 py-2 px-4 rounded-lg"
                  >
                    {link.label}
                  </a>
                ) : !link.isButton ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-white/90 hover:text-[var(--main-two-color)] hover:bg-white/10 transition-all duration-200 py-2 px-4 rounded-lg"
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="bg-gradient-to-r from-[var(--main-two-color)] to-[var(--main-two-color)]/80 text-white px-6 py-3 rounded-full hover:from-[var(--main-two-color)]/90 hover:to-[var(--main-two-color)]/70 transition-all duration-200 font-medium text-center mt-2 shadow-lg"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
