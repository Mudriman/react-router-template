export default function ProjectIntro() {
  return (
    <div className="max-w-4xl text-center mx-auto py-5 px-6 ">
      <h1 className="text-5xl font-extrabold mb-6 animate-fade-in text-gray-900 leading-tight">
        Проект "Шаг к жизни"
      </h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
        Мы создаем поддержку для участников боевых действий, помогая им преодолеть последствия ПТСР.
        Этот проект — больше, чем инициатива. Это шанс вернуть контроль над своей жизнью.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/present.pptx"
          download
          className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition shadow-lg"
        >
          📄 Скачать презентацию (PDF)
        </a>
        <a
          href="/feedback"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
        >
          💙 Поддержать проект
        </a>
      </div>
    </div>
  );
}
