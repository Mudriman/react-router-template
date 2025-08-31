// components/ProfileBar.tsx
import React from 'react';
import { Link } from 'react-router';
import { useAuthStore } from '../admin/store/authStore';


const ProfileBar = () => {
  const { user } = useAuthStore();

  if (!user) {
    return null; // Не показываем бар если пользователь не авторизован
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/prototype/profile"
          className="group block py-3 text-center transition-all duration-200 hover:scale-105"
        >
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
            {/* Анимированная иконка */}
            <div className="relative">
              <div className="w-6 h-6 text-yellow-400 group-hover:animate-bounce">
                👋
              </div>
            </div>

            {/* Текст */}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Привет, <span className="font-semibold text-blue-600 dark:text-blue-400 truncate max-w-[120px] sm:max-w-[200px]">{user.email}</span>!
            </span>

            {/* Стрелка */}
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>

            {/* Бейдж "Профиль" */}
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full">
              Профиль
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileBar;