import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "Запуск проекта \"Шаг к жизни\"",
    text: "Наш сервис официально запущен! Мы начинаем поддержку участников боевых действий, страдающих ПТСР, через персонализированные программы помощи и онлайн-консультации.",
    image: "/test.jpg",
    date: "20.02.2025",
  }
];

export default function NewsSlider() {
  const news = newsData[0]; // Пока одна новость

  return (
    <section className="px-4 bg-gradient-to-br from-gray-50 to-gray-100sm:px-6 lg:px-8 text-gray-900 mb-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Новости проекта
          </motion.h2>
        </header>

        {/* Карточка новости */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
            {/* Изображение */}
            <div className="md:col-span-1">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 sm:h-48 md:h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Контент */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                  {news.text}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-xs sm:text-sm text-gray-500">{news.date}</p>
                <a
                  href={process.env.VITE_TG_CHANNEL}
                  className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">Подписаться</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}