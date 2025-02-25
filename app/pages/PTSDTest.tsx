import React, { useState } from "react";
import { Link } from "react-router";
import TestQuestions from "~/components/UI/TestQuestions";
import TestResults from "~/components/UI/TestResults";
import TestSelector from "~/components/UI/TestSelector";
import { tests } from "~/tests/testConfig";

const PTSDTest: React.FC = () => {
  const [activeTest, setActiveTest] = useState("ptsd");
  const [answers, setAnswers] = useState<{ [key: string]: number[] }>({
    ptsd: Array(tests.ptsd.questions.length).fill(-1),
    taylor: Array(tests.taylor.questions.length).fill(-1),
    beck: Array(tests.beck.questions.length).fill(-1),
    bassDarki: Array(tests.bassDarki.questions.length).fill(-1),
  });
  const [submitted, setSubmitted] = useState<{ [key: string]: boolean }>({
    ptsd: false,
    taylor: false,
    beck: false,
    bassDarki: false,
  });

  const currentTest = tests[activeTest as keyof typeof tests];

  const handleAnswer = (questionId: number, value: number) => {
    const newAnswers = { ...answers, [activeTest]: [...answers[activeTest]] };
    newAnswers[activeTest][questionId] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return currentTest.calculateScore(answers[activeTest]);
  };

  const handleSubmit = () => {
    if (answers[activeTest].every((a) => a >= 0 || (activeTest === "bassDarki" && a >= 1))) {
      setSubmitted({ ...submitted, [activeTest]: true });
    } else {
      alert("Пожалуйста, ответьте на все вопросы!");
    }
  };

  const handleRetry = () => {
    setSubmitted({ ...submitted, [activeTest]: false });
    setAnswers({ ...answers, [activeTest]: Array(answers[activeTest].length).fill(-1) });
  };

  // Прогресс в процентах
  const progress = ((answers[activeTest].filter((a) => a >= 0 || (activeTest === "bassDarki" && a >= 1)).length / currentTest.questions.length) * 100).toFixed(0);

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-white">
          <Link
            to="/prototype"
            className="mb-6 flex items-center text-gray-400 hover:text-gray-200 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
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
          <h1 className="text-3xl font-semibold mb-6 animate-fadeIn">{currentTest.title}</h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Ответьте на вопросы, чтобы получить предварительную оценку. Это пробная версия.
          </p>

          <TestSelector activeTest={activeTest} onTestChange={setActiveTest} submitted={submitted} />

          <div className="mb-8">
            <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden mb-2">
              <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Прогресс: {progress}%
            </p>
          </div>

          {!submitted[activeTest] ? (
            <div>
              <TestQuestions test={currentTest} answers={answers[activeTest]} onAnswer={handleAnswer} />
              <div className="mt-10">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Завершить тест
                </button>
              </div>
            </div>
          ) : (
            <TestResults test={currentTest} score={calculateScore()} onRetry={handleRetry} />
          )}
        </div>
      </div>
    </div>
  );
};

// Простая анимация для заголовка
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;

export default PTSDTest;