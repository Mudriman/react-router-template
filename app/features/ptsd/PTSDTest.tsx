import React, { useState } from "react";
import { testAPI } from "~/api/api";
import { tests } from "~/features/test/model/testConfig";
import TestQuestions from "~/features/test/ui/TestQuestions";
import TestResults from "~/features/test/ui/TestResults";
import TestSelector from "~/features/test/ui/TestSelector";
import BackLink from "~/shared/UI/BackLink";

const PTSDTest: React.FC = () => {
  const [activeTest, setActiveTest] = useState("ptsd");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (answers[activeTest].every(a => a >= 0)) {
      const score = calculateScore();

      try {
        await testAPI.saveTestResult(activeTest, score);
        setSubmitted({ ...submitted, [activeTest]: true });
      } catch (err) {
        alert("Не удалось сохранить результаты");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleRetry = () => {
    setSubmitted({ ...submitted, [activeTest]: false });
    setAnswers({ ...answers, [activeTest]: Array(answers[activeTest].length).fill(-1) });
  };

  // Прогресс в процентах
  const progress = ((answers[activeTest].filter((a) => a >= 0 || (activeTest === "bassDarki" && a >= 1)).length / currentTest.questions.length) * 100).toFixed(0);

  return (
    <div className="p-4 md:p-6 bg-gray-100 dark:bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-gray-900 dark:text-white">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100 animate-fadeIn">
            {currentTest.title}
          </h1>
          <BackLink to="/prototype" />
          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-8">
            Ответьте на вопросы, чтобы получить предварительную оценку. Это пробная версия.
          </p>

          <TestSelector activeTest={activeTest} onTestChange={setActiveTest} submitted={submitted} />

          <div className="mb-8">
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden mb-2">
              <div
                className="bg-blue-500 dark:bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Прогресс: {progress}%
            </p>
          </div>

          {!submitted[activeTest] ? (
            <div>
              <TestQuestions test={currentTest} answers={answers[activeTest]} onAnswer={handleAnswer} />
              <div className="mt-10">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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