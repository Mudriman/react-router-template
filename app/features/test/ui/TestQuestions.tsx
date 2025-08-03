import React from "react";

interface TestQuestionsProps {
  test: any; // Используем any для упрощения, можно заменить на TestConfig
  answers: number[];
  onAnswer: (questionId: number, value: number) => void;
}

const TestQuestions: React.FC<TestQuestionsProps> = ({ test, answers, onAnswer }) => {
  // Определяем количество колонок на основе количества вариантов ответов
  const numOptions = test.options.length;
  const gridCols = numOptions === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-5";

  return (
    <div className="space-y-4 md:space-y-6">
      {test.questions.map((question: { id: number; text: string }) => (
        <div
          key={question.id}
          className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-gray-900 dark:text-white transition-all duration-200 hover:shadow-lg"
        >
          <p className="text-base md:text-lg font-medium mb-4 line-clamp-2 text-gray-900 dark:text-gray-100">
            {question.text}
          </p>
          <div className={`grid ${gridCols} gap-2 md:gap-3`}>
            {test.options.map((value: number) => (
              <button
                key={value}
                type="button"
                onClick={() => onAnswer(question.id, value)}
                className={`w-full py-2 md:py-3 px-3 md:px-4 rounded-lg font-medium transition-all duration-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  answers[question.id] === value
                    ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {value === 0
                  ? "Никогда"
                  : value === 1
                  ? "Редко"
                  : value === 2
                  ? "Иногда"
                  : value === 3
                  ? "Часто"
                  : "Очень часто"}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestQuestions;