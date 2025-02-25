import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";

const MeditationPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 минут в секундах (300 секунд)
  const [isMeditating, setIsMeditating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMeditating && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsMeditating(false);
      alert("Медитация завершена! Вы можете вернуться к основному экрану.");
    }
    return () => clearInterval(timer);
  }, [isMeditating, timeLeft]);

  const handleStartMeditation = () => {
    setIsMeditating(true);
  };

  const handleStopMeditation = () => {
    setIsMeditating(false);
    setTimeLeft(300); // Сброс таймера на 5 минут
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <Link
            to="/prototype"
            className="mb-6 flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Вернуться назад"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Вернуться назад
          </Link>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Медитация
          </h1>
          <div className="border-t border-gray-200 dark:border-gray-700 mb-6"></div>
          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-7">
            Следуйте инструкциям, чтобы расслабиться и улучшить самочувствие. Займите удобное положение, закройте глаза и сосредоточьтесь на дыхании.
          </p>
          <div className="mb-7">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              Пошаговые инструкции
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              <li>Сядьте или лягте в удобное положение.</li>
              <li>Закройте глаза и сделайте несколько глубоких вдохов.</li>
              <li>Сосредоточьтесь на своём дыхании, замечая вдохи и выдохи.</li>
              <li>Если мысли отвлекают, мягко возвращайте внимание к дыханию.</li>
            </ul>
          </div>
          {isMeditating ? (
            <>
              <div className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Осталось: {formatTime(timeLeft)}
              </div>
              <button
                onClick={handleStopMeditation}
                className="w-full bg-red-500 dark:bg-red-600 text-white dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-red-600 dark:hover:bg-red-700 hover:shadow-lg transition-all duration-200"
              >
                Завершить медитацию
              </button>
            </>
          ) : (
            <button
              onClick={handleStartMeditation}
              className="w-full bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
            >
              Начать медитацию
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeditationPage;