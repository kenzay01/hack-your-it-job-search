"use client";

import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-color)] py-8 md:py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Section - ФОП Details */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
              ФОП
            </h3>
            <p className="text-gray-300">Пучков Дмитро Володимирович</p>
            <p className="text-gray-300">ЄДРПОУ: 3678908999</p>
          </div>

          {/* Middle Section - Legal Documents */}
          <div className="text-center md:text-start">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
              Правові документи
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--main-color)] transition-colors duration-300"
                >
                  Договір оферти
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--main-color)] transition-colors duration-300"
                >
                  Політика конфіденційності
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Links and Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-color)] to-[var(--main-two-color)]">
              Контакти
            </h3>
            <ul className="space-y-2">
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <li className="flex items-center justify-center md:justify-end space-x-2">
                  {/* <Linkedin className="w-5 h-5 text-[var(--main-two-color)]" /> */}
                  <a
                    href="https://www.linkedin.com/in/dmytro-puchkov-228a17175/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--main-color)] transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6 text-[var(--main-two-color)]" />
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-end space-x-2">
                  {/* <Instagram className="w-5 h-5 text-[var(--main-two-color)]" /> */}
                  <a
                    href="https://www.instagram.com/dpuchkov.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--main-color)] transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6 text-[var(--main-two-color)]" />
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-end space-x-2">
                  <a
                    href="https://t.me/dpuchkov_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--main-color)] transition-colors duration-300"
                  >
                    <FaTelegram className="w-6 h-6 text-[var(--main-two-color)]" />
                  </a>
                </li>
              </div>
              <li className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="w-6 h-6 text-[var(--main-two-color)]" />
                <a
                  href="mailto:dpuchkovv@gmail.com"
                  className="text-gray-300 hover:text-[var(--main-color)] transition-colors duration-300"
                >
                  dpuchkovv@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
