import React from 'react';

interface MoodButtonProps {
  label: string;
  moodValue: number;
  isActive: boolean;
  onClick: (mood: number) => void;
}

const MoodButton: React.FC<MoodButtonProps> = ({ label, moodValue, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(moodValue)}
      className={`p-4 rounded-lg text-center w-full transition-all duration-200 ${
        isActive
          ? moodValue >= 8
            ? 'bg-green-100 text-green-700 border border-green-300' // Хорошо
            : moodValue >= 4
            ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' // Нормально
            : 'bg-red-100 text-red-700 border border-red-300' // Плохо
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default MoodButton;