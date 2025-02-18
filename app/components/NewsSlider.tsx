import React from "react";

const newsData = [
  {
    id: 1,
    title: "Запуск проекта \"Шаг к жизни\"",
    text: "Наш сервис официально запущен! Мы начинаем поддержку ветеранов, страдающих ПТСР, через персонализированные программы помощи и онлайн-консультации.",
    image: "/test.jpg",
    date: "20.02.2025"
  }
];

const NewsSlider: React.FC = () => {
  const news = newsData[0]; // Берем только одну новость

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 mb-5">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Новости проекта
      </h2>

      {/* Основной контент */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <p className="text-sm text-gray-500 mt-2">{news.date}</p>
        </div>

        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{news.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{news.text}</p>
        </div>
      </div>

      {/* Telegram ссылка */}
      <div className="mt-6 text-center">
        <a
          href="https://t.me/cyclone2022"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Подписаться в Telegram
        </a>
      </div>
    </div>
  );
};

export default NewsSlider;
