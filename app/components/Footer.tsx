import React from "react";
// import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-4 text-center text-black dark:text-white">
      <p>© 2025 Будем жить. Все права защищены.</p>
      <div className="text-blue-500 dark:text-blue-300">
        {/* <Link to="#">Политика безопасности</Link> | 
        <Link to="/feedback">Обратная связь</Link> */}
      </div>
    </footer>
  );
};

export default Footer;
