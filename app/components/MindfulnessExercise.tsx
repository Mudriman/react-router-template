import React from "react";

const MindfulnessExercise: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4 dark:text-white">Упражнение на осознанность</h3>
        <div className="space-y-4">
          <p className="text-sm dark:text-white">
            Это быстрое 1-минутное упражнение поможет вам сосредоточиться на настоящем моменте:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm dark:text-white">
            <li>Сядьте удобно и закройте глаза</li>
            <li>Сделайте 5 глубоких вдохов через нос и выдохов через рот</li>
            <li>Обратите внимание на ощущения в теле</li>
            <li>Послушайте звуки вокруг вас</li>
            <li>Медленно откройте глаза</li>
          </ol>
          <p className="text-sm italic dark:text-white">
            Повторяйте это упражнение, когда чувствуете тревогу или стресс
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          Завершить
        </button>
      </div>
    </div>
  );
};

export default MindfulnessExercise;