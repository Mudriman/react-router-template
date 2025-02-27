import React from "react";
import { useLocation } from "react-router";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-300 dark:bg-gray-800 shadow-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Логотип */}
          <div className="flex items-center">
            <img
              className="h-10 w-auto transition-transform duration-200 hover:scale-105"
              src="/Logo.png"
              alt="Логотип"
            />
            <span className="ml-3 text-2xl font-bold text-gray-800 dark:text-gray-300 hidden sm:block">
              Шаг к жизни
            </span>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks />
          </div>

          {/* Бургер-меню */}
          <BurgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;