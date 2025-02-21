import React from "react";
import { useLocation } from "react-router";
import BurgerMenu from "./UI/BurgerMenu";
import NavLinks from "./UI/NavLinks";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Логотип */}
          <div className="flex items-center">
            <img className="h-8 w-auto" src="/Logo.png" alt="Логотип" />
            <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-white hidden sm:block">
              Шаг к жизни
            </span>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex md:items-center md:space-x-6">
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
