import React, { useState } from "react";
import Card from "~/components/Card";
import MindfulnessExercise from "~/components/MindfulnessExercise";
import Section from "~/components/Section";

const Home: React.FC = () => {
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      {/* Терапевтические инструменты */}
      <Section title="Терапевтические инструменты">
        <Card
          title="Тестирование"
          description="Пройдите тестирование чтобы получить представление о своей ситуации."
          buttonText="Пройти тест"
          buttonLink="prototype/test"
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

      {/* Интерактивные упражнения */}
      <Section title="Интерактивные упражнения">
      <Card
          title="Быстрая осознанность"
          description="Выполните короткое упражнение для снятия напряжения и фокусировки."
          buttonText="Начать"
          buttonLink="#"
          lightBgColor="bg-gray-300"
          darkBgColor="dark:bg-blue-950"
          onButtonClick={() => setIsExerciseOpen(true)}
        />
        <Card
          title="Медитации"
          description="Практикуйте расслабление, чтобы уменьшить стресс и улучшить самочувствие."
          buttonText="Попробовать"
          buttonLink="prototype/meditation"
          lightBgColor="bg-gray-300"
          darkBgColor="dark:bg-gray-700"
        />
        <Card
          title="Дыхательные упражнения"
          description="Изучите дыхательные упражнения, чтобы успокоить свой ум и тело."
          buttonText="Начать упражнение"
          buttonLink="#"
          lightBgColor="bg-gray-300"
          darkBgColor="dark:bg-blue-950"
        />
        <MindfulnessExercise 
          isOpen={isExerciseOpen} 
          onClose={() => setIsExerciseOpen(false)} 
        />
      </Section>

      {/* Связанный контент */}
      <Section title="Вспомогательная литература">
        <ul className="text-blue-500">
          <li><a href="#">Понимание когнитивно-поведенческой терапии</a></li>
          <li><a href="#">Преимущества осознанности в терапии</a></li>
          <li><a href="#">Эффективные методы управления стрессом</a></li>
        </ul>
      </Section>
    </div>
  );
};

export default Home;
