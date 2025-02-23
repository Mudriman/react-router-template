interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  lightBgColor?: string;
  darkBgColor?: string;
  onButtonClick?: () => void; // Опциональный обработчик
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  lightBgColor = "bg-blue-50",
  darkBgColor = "dark:bg-blue-900",
  onButtonClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault(); // Предотвращаем переход по ссылке, если есть onButtonClick
      onButtonClick();
    }
  };

  return (
    <div
      className={`max-w-sm w-full p-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl ${lightBgColor} ${darkBgColor} dark:text-gray-200`}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">{description}</p>
      <a
        href={buttonLink}
        onClick={handleClick}
        className="inline-block bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:shadow-lg transition-all duration-200"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;