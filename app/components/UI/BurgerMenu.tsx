// app/components/BurgerMenu.tsx
import React, { useState } from "react";
import NavLinks from "./NavLinks";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-800 dark:text-white focus:outline-none"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {isOpen ? (
          // SVG для крестика (X)
          <svg
            className="w-6 h-6"
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
          // SVG для гамбургера (Menu)
          <svg
            className="w-6 h-6"
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
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 flex flex-col items-center space-y-4 z-50">
          <NavLinks onClick={() => setIsOpen(false)} className="flex flex-col items-center" />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;