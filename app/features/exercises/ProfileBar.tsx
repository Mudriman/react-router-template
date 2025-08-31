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
  <div className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/prototype/profile" 
          className="block py-2 text-center text-gray-600 hover:text-gray-800 transition-colors text-sm"
        >
          👋 Привет, {user.email}! Нажми чтобы перейти в профиль
        </Link>
      </div>
    </div>
  );
};

export default ProfileBar;