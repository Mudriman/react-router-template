import React from "react";
import Card from "~/shared/UI/Card";
import Section from "~/shared/UI/Section";
import { useAuth } from "~/shared/hooks/useAuth";
import { ResourcesGrid } from "./ResourceCard";
import { AcademicCapIcon, BookOpenIcon, ClipboardDocumentCheckIcon, HeartIcon, LightBulbIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/solid";

const exerciseCards = [
  {
    title: "Быстрая осознанность",
    description: "Короткое упражнение для снятия напряжения и фокусировки.",
    buttonText: "Начать",
    buttonLink: "/prototype/mindfulex",
    lightBgColor: "bg-gray-100",
    darkBgColor: "dark:bg-gray-800",
    icon: <SparklesIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />,
  },
  {
    title: "Медитации",
    description: "Практикуйте расслабление для снижения стресса и улучшения самочувствия.",
    buttonText: "Попробовать",
    buttonLink: "/prototype/meditation",
    lightBgColor: "bg-blue-100",
    darkBgColor: "dark:bg-blue-800",
    icon: <HeartIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
  },
  {
    title: "Дыхательные упражнения",
    description: "Успокойте ум и тело с помощью дыхательных техник.",
    buttonText: "Начать упражнение",
    buttonLink: "/prototype/breathing",
    lightBgColor: "bg-indigo-100",
    darkBgColor: "dark:bg-indigo-800",
    icon: <AcademicCapIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />,
  },
  {
    title: "Тестирование",
    description: "Пройдите тест, чтобы оценить своё состояние.",
    buttonText: "Пройти тест",
    buttonLink: "/prototype/test",
    lightBgColor: "bg-gray-200",
    darkBgColor: "dark:bg-gray-700",
    icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />,
  },
];

const InteractiveExercises: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            icon={card.icon}
          />
        ))}
      </Section>
      
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-800">Ресурсы о ПТСР</h1>
        <ResourcesGrid />
      </div>

      <button
        onClick={logout}
        className="mt-6 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl shadow-md transition-colors duration-200"
      >
        Выйти
      </button>
    </div>
  );
};

export default InteractiveExercises;