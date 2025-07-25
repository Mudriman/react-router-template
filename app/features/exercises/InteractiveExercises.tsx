import React from "react";
import Card from "~/shared/UI/Card";
import Section from "~/shared/UI/Section";
import { useAuth } from "~/shared/hooks/useAuth";

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
];

const literatureLinks = [
  {
    text: "Понимание когнитивно-поведенческой терапии",
    href: "https://alter.ru/guide/kbt",
  },
  {
    text: "Преимущества осознанности в терапии",
    href: "https://vc.ru/id2741259/997162-primenenie-osoznannosti-v-praktike-psihoterapevtov-i-psihologov",
  },
  {
    text: "Эффективные методы управления стрессом",
    href: "https://vc.ru/id1920739/710086-10-effektivnyh-sposobov-upravleniya-stressom-i-trevogoi",
  },
];

const InteractiveExercises: React.FC = () => {

  const { logout } = useAuth();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
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
      <button
        onClick={logout}
        className="bottom-4 left-16 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl shadow-md transition-colors duration-200"
      >
        Выйти
      </button>
    </div>
  );
};

export default InteractiveExercises;