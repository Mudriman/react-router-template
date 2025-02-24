import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; // Исправил импорты

const PTSDTest: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(5).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Добавил для возможного использования

  const questions = [
    { id: 0, text: "Часто ли вы испытываете навязчивые воспоминания о травмирующем событии?" },
    { id: 1, text: "Избегаете ли вы мест или людей, связанных с прошлым событием?" },
    { id: 2, text: "Чувствуете ли вы постоянную тревогу или раздражительность?" },
    { id: 3, text: "Бывают ли у вас проблемы со сном (бессонница, кошмары)?" },
    { id: 4, text: "Чувствуете ли вы себя отстранённым от окружающих?" },
  ];

  const handleAnswer = (questionId: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionId] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0);
  };

  const handleSubmit = () => {
    if (answers.every((a) => a >= 0)) {
      setSubmitted(true);
    } else {
      alert("Пожалуйста, ответьте на все вопросы!");
    }
  };

  const getResultMessage = (score: number) => {
    if (score <= 5) return "Похоже, у вас нет явных признаков ПТСР. Это демо, обратитесь к специалисту.";
    if (score <= 10) return "У вас могут быть признаки ПТСР. Рекомендуем проконсультироваться с психологом.";
    return "Ваши ответы указывают на возможное ПТСР. Обратитесь за профессиональной помощью.";
  };

  return (
    <div className=" p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
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
            Тест на признаки ПТСР (Демо)
          </h1>
          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-8">
            Ответьте на вопросы, чтобы получить предварительную оценку. Это пробная версия.
          </p>

          {!submitted ? (
            <div className="space-y-6">
              {questions.map((question) => (
                <div key={question.id} className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                  <p className="font-medium text-gray-900 dark:text-gray-100 mb-4">{question.text}</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[0, 1, 2, 3].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(question.id, value)}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                          answers[question.id] === value
                            ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-gray-100 dark:hover:bg-blue-700"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                        }`}
                      >
                        {value === 0 ? "Никогда" : value === 1 ? "Редко" : value === 2 ? "Иногда" : "Часто"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
              >
                Завершить тест
              </button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Ваш результат
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                Вы набрали {calculateScore()} из 15 баллов.
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-100 mb-6">
                {getResultMessage(calculateScore())}
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
              >
                Вернуться на главную
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PTSDTest;