import React, { useState } from "react";
import Card from "~/components/Card";
import Section from "~/components/Section";
import BreathingExerciseModal from "~/components/BreathingExerciseModal";
import MindfulnessExercise from "~/components/MindfulnessExercise";

const InteractiveExercises: React.FC = () => {
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  const [isBreathingOpen, setIsBreathingOpen] = useState(false);

  return (
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
          buttonLink="/meditation"
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
      <MindfulnessExercise 
        isOpen={isExerciseOpen} 
        onClose={() => setIsExerciseOpen(false)} 
      />
      <BreathingExerciseModal
        isOpen={isBreathingOpen}
        onClose={() => setIsBreathingOpen(false)}
      />
    </Section>
  );
};

export default InteractiveExercises;