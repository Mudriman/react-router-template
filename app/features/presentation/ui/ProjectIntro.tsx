import { Link } from "react-router"; // Предполагается использование React Router

interface ProjectIntroProps {
  ptsdInfoPath: string; // Пропс для пути к странице о ПТСР
}

export default function ProjectIntro({ ptsdInfoPath }: ProjectIntroProps) {
  return (
    <section className="max-w-4xl text-center mx-auto py-8 px-4 sm:px-6 lg:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 animate-fade-in text-gray-900 leading-tight">
        Проект "Шаг к жизни"
      </h1>
      <div className="max-w-2xl mx-auto text-gray-700">
        <p className="text-base sm:text-lg mb-4">
          Мы создаем поддержку для участников боевых действий, помогая им преодолеть последствия{" "}
          <Link
            to={ptsdInfoPath}
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors no-underline"
            title="Узнайте больше о ПТСР"
          >
            ПТСР
          </Link>.
        </p>
        <p className="text-base sm:text-lg mb-8">
          Этот проект — больше, чем инициатива. Это шанс вернуть контроль над своей жизнью.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/present.pptx"
          download
          className="bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-700 transition shadow-lg w-full sm:w-auto"
        >
          📄 Скачать презентацию (PDF)
        </a>
        <a
          href="/prototype/feedback"
          className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition shadow-lg w-full sm:w-auto"
        >
          💙 Поддержать проект
        </a>
      </div>
    </section>
  );
}