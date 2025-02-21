import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-800 dark:text-white focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 flex flex-col items-center space-y-4 z-50">
          <NavLinks onClick={() => setIsOpen(false)} className="flex flex-col items-center" />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
