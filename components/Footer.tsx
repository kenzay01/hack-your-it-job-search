"use client";
// import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--secondary-color)] via-[var(--secondary-color)] to-[var(--main-two-color)] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-center md:justify-start">
          <p className="text-sm">
            © 2025 How to hack your IT job search?{" "}
            <br className="block md:hidden" /> All rights reserved.
          </p>
          {/* <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Приєднатися до марафону
          </ScrollLink> */}
        </div>
      </div>
    </footer>
  );
}
