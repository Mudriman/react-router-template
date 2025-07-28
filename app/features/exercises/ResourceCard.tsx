import React from "react";
import { AcademicCapIcon, ClipboardDocumentCheckIcon, HeartIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export interface Resource {
  title: string;
  description: string;
  url: string;
  source: string;
  icon: React.ReactNode;
  bgColor: string;
  darkBgColor: string;
}

export const resources: Resource[] = [
  {
    title: "ПТСР: как распознать и помочь",
    description: "Подробный гайд от Skillbox о природе посттравматического стрессового расстройства",
    url: "https://skillbox.ru/media/growth/post-traumatic-stress-disorder/",
    source: "Skillbox",
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />,
    bgColor: "bg-indigo-100",
    darkBgColor: "dark:bg-indigo-800",
  },
  {
    title: "ПТСР: научное объяснение",
    description: "Разбор механизмов травмы и современных методов терапии",
    url: "https://spid.center/ru/articles/5006",
    source: "SPID Center",
    icon: <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-300" />,
    bgColor: "bg-blue-100",
    darkBgColor: "dark:bg-blue-800",
  },
  {
    title: "Как помочь близкому с ПТСР",
    description: "Практические рекомендации от Агентства социальной информации",
    url: "https://asi.org.ru/2024/08/22/chto-takoe-ptsr-i-kak-pomoch-blizkomu-s-etim-diagnozom/",
    source: "АСИ",
    icon: <UserGroupIcon className="w-6 h-6 text-green-600 dark:text-green-300" />,
    bgColor: "bg-green-100",
    darkBgColor: "dark:bg-green-800",
  },
  {
    title: "Научный взгляд на ПТСР",
    description: "Ответы на ключевые вопросы от ПостНауки",
    url: "https://postnauka.org/faq/68268",
    source: "ПостНаука",
    icon: <SparklesIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />,
    bgColor: "bg-yellow-100",
    darkBgColor: "dark:bg-yellow-800",
  },
  {
    title: "ПТСР и психологическое здоровье",
    description: "Как воспоминания о травме влияют на психику",
    url: "https://mip-institute-nhc6q7jpy-ipe.vercel.app/journal/ptsr-kak-vospominaniya-o-travme-vliyayut-na-psihologicheskoe-zdorove",
    source: "МИП Институт",
    icon: <HeartIcon className="w-6 h-6 text-pink-600 dark:text-pink-300" />,
    bgColor: "bg-pink-100",
    darkBgColor: "dark:bg-pink-800",
  },
];

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className = "" }) => {
  return (
    <div
      className={`
        ${resource.bgColor} ${resource.darkBgColor} 
        rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200 
        border border-gray-200 dark:border-gray-700
        h-full flex flex-col
        ${className}
      `}
    >
      <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
        <div className={`p-2 rounded-lg bg-gray-200 dark:bg-gray-700`}>
          {resource.icon}
        </div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white line-clamp-2">
          {resource.title}
        </h3>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-200 mb-3 sm:mb-4 flex-grow line-clamp-3">
        {resource.description}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {resource.source}
        </span>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full 
          bg-blue-600 dark:bg-blue-700 text-white 
          hover:bg-blue-700 dark:hover:bg-blue-600 
          shadow-sm border border-blue-600 dark:border-blue-700 
          transition-colors whitespace-nowrap"
        >
          Читать
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

interface ResourcesGridProps {
  resources?: Resource[];
  className?: string;
}

export const ResourcesGrid: React.FC<ResourcesGridProps> = ({
  resources: customResources,
  className = "",
}) => {
  const resourcesToDisplay = customResources || resources;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {resourcesToDisplay.map((resource, index) => (
        <ResourceCard key={index} resource={resource} />
      ))}
    </div>
  );
};