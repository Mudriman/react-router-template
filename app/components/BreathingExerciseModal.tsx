import React, { useState, useEffect } from "react";

interface BreathingExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BreathingExerciseModal: React.FC<BreathingExerciseModalProps> = ({ isOpen, onClose }) => {
  const [isExercising, setIsExercising] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 минуты в секундах

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isExercising && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsExercising(false);
      alert("Дыхательное упражнение завершено!");
    }
    return () => clearInterval(timer);
  }, [isExercising, timeLeft]);

  const handleStartExercise = () => {
    setIsExercising(true);
  };

  const handleStopExercise = () => {
    setIsExercising(false);
    setTimeLeft(120); // Сброс таймера на 2 минуты
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри модального окна
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Дыхательные упражнения
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Закрыть"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-6">
          Выполните простое дыхательное упражнение, чтобы успокоить свой ум и тело. Сделайте глубокий вдох на 4 секунды, задержите дыхание на 4 секунды, затем медленно выдохните на 6 секунд. Повторяйте в течение 2–5 минут.
        </p>
        {isExercising ? (
          <>
            <div className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Осталось: {formatTime(timeLeft)}
            </div>
            <button
              onClick={handleStopExercise}
              className="w-full bg-red-500 dark:bg-red-600 text-white dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-red-600 dark:hover:bg-red-700 hover:shadow-lg transition-all duration-200"
            >
              Остановить упражнение
            </button>
          </>
        ) : (
          <button
            onClick={handleStartExercise}
            className="w-full bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
          >
            Начать упражнение
          </button>
        )}
      </div>
    </div>
  );
};

export default BreathingExerciseModal;