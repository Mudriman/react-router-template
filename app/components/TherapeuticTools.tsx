import React from "react";
import Card from "~/components/Card";
import Section from "~/components/Section";

const TherapeuticTools: React.FC = () => {
  return (
    <Section title="Терапевтические инструменты">
      <Card
        title="Тестирование"
        description="Пройдите тестирование чтобы получить представление о своей ситуации."
        buttonText="Пройти тест"
        buttonLink="/test"
        lightBgColor="bg-gray-300"
        darkBgColor="dark:bg-gray-700"
      />
      <Card
        title="Инструменты для отслеживания настроения"
        description="Отслеживайте свое настроение с течением времени, чтобы выявлять закономерности и триггеры."
        buttonText="Начать отслеживание"
        buttonLink="#"
        lightBgColor="bg-gray-300"
        darkBgColor="dark:bg-blue-950"
      />
      <Card
        title="Трекер прогресса"
        description="Следите за ходом вашей терапии с помощью персонализированных трекеров."
        buttonText="Следить за прогрессом"
        buttonLink="#"
        lightBgColor="bg-gray-300"
        darkBgColor="dark:bg-gray-700"
      />
    </Section>
  );
};

export default TherapeuticTools;