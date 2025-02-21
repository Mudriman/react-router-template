import React, { useState } from "react";
import { NavLink } from "react-router";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-4 text-center text-black dark:text-white">
      <p>© 2025 Шаг к жизни. Все права защищены.</p>
      <div className="text-blue-500 dark:text-blue-300">
        <button
          onClick={() => setIsPrivacyOpen(true)}
          className="hover:underline focus:outline-none"
        >
          Политика безопасности
        </button>{" "}
        |{" "}
        <NavLink to="/feedback" className="hover:underline">
          Обратная связь
        </NavLink>
      </div>
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </footer>
  );
};

export default Footer;
