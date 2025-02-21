// UI/NavLinks.tsx
import React from "react";
import { NavLink, useLocation } from "react-router";

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

const menuItems = [
  { path: "/", label: "Главная" },
  { path: "/comand", label: "Команда" },
  { path: "/prototype", label: "Прототип" },
];

const NavLinks: React.FC<NavLinksProps> = ({ onClick, className }) => {
  const location = useLocation();

  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      {menuItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          onClick={onClick}
          className={({ isActive }) =>
            `relative px-4 py-2 text-base font-medium transition-colors duration-200
            ${isActive ? "text-blue-500 bg-gray-100 dark:bg-gray-800" : "text-gray-600 dark:text-gray-300"}
            hover:text-blue-500 dark:hover:text-blue-400 md:bg-transparent md:dark:bg-transparent`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;