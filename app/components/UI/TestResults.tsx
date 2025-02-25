import React from "react";
import { Link } from "react-router"; // Исправлен импорт для react-router-dom

interface TestResultsProps {
  test: any; // Используем any для упрощения, можно заменить на TestConfig
  score: number;
  onRetry: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ test, score, onRetry }) => {
  return (
    <div className="text-center space-y-8 animate-fadeIn"> {/* Увеличен space-y-8 (32px) */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Ваш результат</h2>
      <p className="text-gray-700 dark:text-gray-400 mb-4">Вы набрали {score} баллов.</p>
      <p className="font-medium text-gray-900 dark:text-gray-100 mb-8">{test.getResultMessage(score)}</p>
      <div className="space-y-4"> {/* Контейнер для кнопок с большим пространством */}
        <Link
          to="/prototype"
          className="inline-block mr-2 w-full max-w-xs mx-auto bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Вернуться на прототип"
        >
          Вернуться на прототип
        </Link>
        <button
          onClick={onRetry}
          className="w-full mr-2 max-w-xs mx-auto bg-gray-500 text-white dark:bg-gray-600 dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-600 dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Пройти тест заново"
        >
          Пройти тест заново
        </button>
      </div>
    </div>
  );
};

// Простая анимация для плавного появления
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;

export default TestResults;