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
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-700'
            : moodValue >= 4
            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700'
            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 border border-red-300 dark:border-red-700'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
      }`}
    >
      {label}
    </button>
  );
};

export default MoodButton;