interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  lightBgColor?: string;
  darkBgColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  lightBgColor = "bg-sky-200",
  darkBgColor = "dark:bg-gray-800",
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${lightBgColor} ${darkBgColor} dark:text-white`}>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={buttonLink}
        className="mt-2 inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-4 py-2 rounded-md"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
