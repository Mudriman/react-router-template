import React from "react";
import { Link } from "react-router"; // Исправил импорт

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  lightBgColor?: string;
  darkBgColor?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  lightBgColor = "bg-gray-100",
  darkBgColor = "dark:bg-gray-800",
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
      className={`w-full p-4 sm:p-6 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg ${lightBgColor} ${darkBgColor} dark:text-gray-200`}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{description}</p>
      <Link
        to={buttonLink}
        onClick={handleClick}
        className="inline-block bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium shadow-sm hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-md transition-all duration-200 text-sm sm:text-base"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default Card;