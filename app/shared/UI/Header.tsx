import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-0">
        Здравствуйте, {name}
      </h1>
      <span className="text-gray-600 dark:text-gray-400 text-sm">
        {new Date().toLocaleDateString()}
      </span>
    </div>
  );
};

export default Header;