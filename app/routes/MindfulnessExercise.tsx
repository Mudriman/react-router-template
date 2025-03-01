import { NavLink } from "react-router";
import BackLink from "~/shared/UI/BackLink";

export default function MindfulnessExercisePage() {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-white">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Упражнение на осознанность</h1>
            <BackLink to="/prototype"/>
          </header>

          <main className="space-y-8">
            <section>
              <p className="text-lg leading-relaxed">
                Это быстрое 1-минутное упражнение поможет вам сосредоточиться на настоящем моменте:
              </p>
            </section>

            <section>
              <ol className="list-decimal list-inside space-y-4 text-lg">
                <li>Сядьте удобно и закройте глаза</li>
                <li>Сделайте 5 глубоких вдохов через нос и выдохов через рот</li>
                <li>Обратите внимание на ощущения в теле</li>
                <li>Послушайте звуки вокруг вас</li>
                <li>Медленно откройте глаза</li>
              </ol>
            </section>

            <section>
              <p className="text-lg italic">
                Повторяйте это упражнение, когда чувствуете тревогу или стресс
              </p>
            </section>

            <section>
              <NavLink
                to="/prototype"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition-colors"
              >
                Завершить
              </NavLink>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}