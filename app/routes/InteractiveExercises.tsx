import React, { useState } from "react";
import Card from "~/components/Card";
import Section from "~/components/Section";
import BreathingExerciseModal from "~/components/BreathingExerciseModal";
import MindfulnessExercise from "~/components/MindfulnessExercise";

const InteractiveExercises: React.FC = () => {
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <Section title="Интерактивные упражнения">
        <Card
          title="Быстрая осознанность"
          description="Выполните короткое упражнение для снятия напряжения и фокусировки."
          buttonText="Начать"
          buttonLink="#"
          lightBgColor="bg-gray-50"
          darkBgColor="dark:bg-gray-900"
          onButtonClick={() => setIsExerciseOpen(true)}
        />
        <Card
          title="Медитации"
          description="Практикуйте расслабление, чтобы уменьшить стресс и улучшить самочувствие."
          buttonText="Попробовать"
          buttonLink="/prototype/meditation"
          lightBgColor="bg-blue-50"
          darkBgColor="dark:bg-blue-950"
        />
        <Card
          title="Дыхательные упражнения"
          description="Изучите дыхательные упражнения, чтобы успокоить свой ум и тело."
          buttonText="Начать упражнение"
          buttonLink="#"
          lightBgColor="bg-gray-100"
          darkBgColor="dark:bg-gray-900"
          onButtonClick={() => setIsBreathingOpen(true)}
        />
        <Card
          title="Тестирование"
          description="Пройдите тестирование чтобы получить представление о своей ситуации."
          buttonText="Пройти тест"
          buttonLink="/prototype/test"
          lightBgColor="bg-gray-300"
          darkBgColor="dark:bg-gray-700"
        />
        <Card
          title="Инструменты для отслеживания настроения"
          description="Отслеживайте свое настроение с течением времени, чтобы выявлять закономерности и триггеры."
          buttonText="Начать отслеживание"
          buttonLink="/prototype/psinstrument"
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
        <MindfulnessExercise
          isOpen={isExerciseOpen}
          onClose={() => setIsExerciseOpen(false)}
        />
        <BreathingExerciseModal
          isOpen={isBreathingOpen}
          onClose={() => setIsBreathingOpen(false)}
        />
      </Section>
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

export default InteractiveExercises;