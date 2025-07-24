"use client";

import { useState, useEffect } from "react";
// import { ArrowUp } from "lucide-react";
import { FaWpforms } from "react-icons/fa6";

export default function SideButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId: string) => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Fallback to scroll to top if no targetId or element not found
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={` z-[80] fixed md:hidden right-4 bottom-4 transform transition-all duration-300 flex flex-col space-y-4 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {/* <FaWpforms
        className="w-12 h-12 md:w-14 md:h-14 text-white p-2 rounded-lg bg-[var(--main-two-color)] border-2 border-white hover:bg-[var(--main-two-color)]/80 transition-colors cursor-pointer"
        onClick={() => handleScrollTo("questions")}
      /> */}
      <h1
        onClick={() => handleScrollTo("pricing")}
        className="text-white p-2 rounded-lg bg-[var(--main-two-color)] border-2 border-white hover:bg-[var(--main-two-color)]/80 transition-colors cursor-pointer "
      >
        Обрати тариф
      </h1>
    </div>
  );
}
