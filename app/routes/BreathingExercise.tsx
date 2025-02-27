import { useState, useEffect } from "react";
import BackLink from "~/components/UI/BackLink";

export default function BreathingExercisePage() {
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

  return (
    <div className="p-4 md:p-6 bg-gray-200 dark:bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-gray-900 dark:text-white">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Дыхательные упражнения
            </h1>
            <BackLink to="/prototype" />
          </header>

          <main className="space-y-8">
            <section>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                Выполните простое дыхательное упражнение, чтобы успокоить свой ум и тело. Сделайте глубокий вдох на 4 секунды, задержите дыхание на 4 секунды, затем медленно выдохните на 6 секунд. Повторяйте в течение 2–5 минут.
              </p>
            </section>

            <section className="text-center">
              {isExercising ? (
                <>
                  <div className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Осталось: {formatTime(timeLeft)}
                  </div>
                  <button
                    onClick={handleStopExercise}
                    className="w-full max-w-xs bg-red-500 dark:bg-red-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-red-600 dark:hover:bg-red-700 transition-all duration-200"
                  >
                    Остановить упражнение
                  </button>
                </>
              ) : (
                <button
                  onClick={handleStartExercise}
                  className="w-full max-w-xs bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-200"
                >
                  Начать упражнение
                </button>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}