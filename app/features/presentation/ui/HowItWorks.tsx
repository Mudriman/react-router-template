import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Свяжитесь с нами",
    description: "Позвоните или оставьте заявку на сайте",
    icon: "📞",
  },
  {
    title: "Консультация",
    description: "Встреча с нашими специалистами",
    icon: "🧑‍⚕️",
  },
  {
    title: "План поддержки",
    description: "Разработка индивидуального плана",
    icon: "📅",
  },
  {
    title: "Восстановление",
    description: "Регулярные сессии и поддержка",
    icon: "❤️",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 text-gray-900 mb-6">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-lg overflow-hidden">
        <header className="text-center mb-10 px-4 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Как это работает
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Простые шаги к восстановлению и поддержке
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 pb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-500 flex flex-col items-center text-center"
            >
              <div className="text-4xl sm:text-5xl text-blue-600 mb-4">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}