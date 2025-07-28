import React from "react";
import { Link } from "react-router"; // Исправлен импорт на react-router-dom

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  lightBgColor?: string;
  darkBgColor?: string;
  icon?: React.ReactNode; // Добавлен проп для иконки
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  lightBgColor = "bg-gray-100",
  darkBgColor = "dark:bg-gray-800",
  icon,
  onButtonClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div
      className={`
        w-full p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 
        border border-gray-200 dark:border-gray-700 h-full flex flex-col
        ${lightBgColor} ${darkBgColor} dark:text-gray-200
      `}
    >
      <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
        {icon && (
          <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
            {icon}
          </div>
        )}
        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-200 mb-3 sm:mb-4 flex-grow line-clamp-3">
        {description}
      </p>
      <div className="mt-auto">
        <Link
          to={buttonLink}
          onClick={handleClick}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full 
            bg-blue-600 dark:bg-blue-700 text-white 
            hover:bg-blue-700 dark:hover:bg-blue-600 
            shadow-sm border border-blue-600 dark:border-blue-700 
            transition-colors whitespace-nowrap"
        >
          {buttonText}
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;