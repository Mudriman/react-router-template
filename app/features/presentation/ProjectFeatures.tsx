// app/features/presentation/ProjectFeatures.tsx
import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "✅ Поддержка 24/7",
    text: "Наш сервис всегда доступен для тех, кто нуждается в помощи.",
  },
  {
    title: "🤝 Сообщество",
    text: "Мы создаем безопасное пространство для общения и взаимопомощи.",
  },
  {
    title: "📈 Личный прогресс",
    text: "Интерактивные тесты и дневники помогут видеть изменения в состоянии.",
  },
];

export default function ProjectFeatures() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-6 sm:p-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-8"
          >
            Особенности проекта
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}