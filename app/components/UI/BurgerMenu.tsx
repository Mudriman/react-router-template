// app/components/BurgerMenu.tsx
import React, { useState } from "react";
import NavLinks from "./NavLinks";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-md transition-colors duration-200"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {isOpen ? (
          // SVG для крестика (X) с анимацией
          <svg
            className="w-6 h-6 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // SVG для гамбургера (Menu) с анимацией
          <svg
            className="w-6 h-6 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-xl py-6 flex flex-col items-center space-y-6 z-50 animate-fadeIn">
          <NavLinks onClick={() => setIsOpen(false)} className="flex flex-col items-center space-y-4" />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;