import React from "react";
import { NavLink } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 p-4 text-center text-black dark:text-white">
      <p>© 2025 Шаг к жизни. Все права защищены.</p>
      <div className="text-blue-500 dark:text-blue-300">
        <NavLink
          to="/privacy"
          className="hover:underline focus:outline-none"
          aria-label="Политика безопасности"
        >
          Политика безопасности
        </NavLink>{" "}
        |{" "}
        <NavLink 
          to="/feedback" 
          className="hover:underline"
        >
          Обратная связь
        </NavLink>
      </div>
      
    </footer>
  );
};

export default Footer;
