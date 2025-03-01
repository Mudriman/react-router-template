import React from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Как я могу получить помощь?",
    answer: "Заполните анкету на сайте, и наш специалист свяжется с вами.",
  },
  {
    question: "Могу ли я помочь проекту?",
    answer: "Да! Вы можете стать волонтером или поддержать нас финансово.",
  },
  {
    question: "Кто может участвовать?",
    answer: "Все участники боевых действий, испытывающие психологические трудности, могут обратиться к нам.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-5xl w-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg p-6 sm:px-6 lg:px-8 text-gray-900 rounded-2xl my-6">
      <div className="mx-auto">
        <div className="rounded-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-8"
          >
            Частые вопросы
          </motion.h2>
          <div className="space-y-6 sm:space-y-8">
            {faqData.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-500"
              >
                <summary className="font-semibold text-lg sm:text-xl text-gray-900 cursor-pointer mb-2">
                  {faq.question}
                </summary>
                <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}