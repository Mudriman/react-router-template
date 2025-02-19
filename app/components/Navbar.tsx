import React, { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // Закрываем меню на мобильных после перехода
  };

  const menuItems = [
    { path: "/", label: "Главная" },
    { path: "/comand", label: "Команда" },
    { path: "/prototype", label: "Прототип" },
  ];

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

          {/* Меню для десктопа */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={`relative text-lg font-medium px-3 py-2 transition-colors duration-300
                  ${
                    location.pathname === path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }
                  hover:text-blue-500 dark:hover:text-blue-300`}
              >
                {label}
                {/* Подсветка активного пункта */}
                {location.pathname === path && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transition-transform scale-x-100" />
                )}
              </NavLink>
            ))}
          </div>

          {/* Бургер-меню */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-white focus:outline-none"
              aria-label="Открыть меню"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Выпадающее меню на мобильных */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2">
          {menuItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={`block w-full text-left px-3 py-2 text-lg font-medium rounded-md transition-colors
                ${
                  location.pathname === path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }
                hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
