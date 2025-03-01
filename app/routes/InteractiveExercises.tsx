import React from "react";
import Card from "~/shared/UI/Card";
import Section from "~/shared/UI/Section";

// Данные для карточек в виде массива
const exerciseCards = [
  {
    title: "Быстрая осознанность",
    description: "Короткое упражнение для снятия напряжения и фокусировки.",
    buttonText: "Начать",
    buttonLink: "/prototype/mindfulex",
    lightBgColor: "bg-gray-50",
    darkBgColor: "dark:bg-gray-900",
  },
  {
    title: "Медитации",
    description: "Практикуйте расслабление для снижения стресса и улучшения самочувствия.",
    buttonText: "Попробовать",
    buttonLink: "/prototype/meditation",
    lightBgColor: "bg-blue-50",
    darkBgColor: "dark:bg-blue-950",
  },
  {
    title: "Дыхательные упражнения",
    description: "Успокойте ум и тело с помощью дыхательных техник.",
    buttonText: "Начать упражнение",
    buttonLink: "/prototype/breathing",
    lightBgColor: "bg-gray-100",
    darkBgColor: "dark:bg-gray-900",
  },
  {
    title: "Тестирование",
    description: "Пройдите тест, чтобы оценить своё состояние.",
    buttonText: "Пройти тест",
    buttonLink: "/prototype/test",
    lightBgColor: "bg-gray-200",
    darkBgColor: "dark:bg-gray-700",
  },
  {
    title: "Отслеживание настроения",
    description: "Следите за настроением, чтобы выявлять закономерности.",
    buttonText: "Начать отслеживание",
    buttonLink: "/prototype/psinstrument",
    lightBgColor: "bg-gray-200",
    darkBgColor: "dark:bg-blue-950",
  },
  {
    title: "Трекер прогресса",
    description: "Отслеживайте прогресс терапии с персонализированными инструментами.",
    buttonText: "Следить за прогрессом",
    buttonLink: "#",
    lightBgColor: "bg-gray-200",
    darkBgColor: "dark:bg-gray-700",
  },
];

const literatureLinks = [
  {
    text: "Понимание когнитивно-поведенческой терапии",
    href: "https://mip-institute-ng8gxwz5x-ipe.vercel.app/journal/chto-takoe-kognitivno-povedencheskaya-terapiya-i-kak-ona-rabotaet",
  },
  {
    text: "Преимущества осознанности в терапии",
    href: "https://translated.turbopages.org/proxy_u/en-ru.ru.a7c7d067-67bf675f-9b081d08-74722d776562/https/www.verywellmind.com/mindfulness-based-cognitive-therapy-1067396",
  },
  {
    text: "Эффективные методы управления стрессом",
    href: "https://psy.su/pubs/10830/?ysclid=m7majwcieh469255703",
  },
];

const InteractiveExercises: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Section title="Интерактивные упражнения">
        {exerciseCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
            lightBgColor={card.lightBgColor}
            darkBgColor={card.darkBgColor}
          />
        ))}
      </Section>
      <Section title="Вспомогательная литература">
        <ul className="space-y-2 col-span-full">
          {literatureLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 no-underline hover:text-blue-600 dark:hover:text-blue-300 underline hover:underline-offset-4 transition-colors duration-200"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default InteractiveExercises;