import React, { useState } from "react";
import Card from "./Card";
import MindfulnessExercise from "./MindfulnessExercise";

const MindfulnessCard: React.FC = () => {
    const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  
    return (
      <>
        <Card
          title="Быстрая осознанность"
          description="Выполните короткое упражнение для снятия напряжения и фокусировки."
          buttonText="Начать"
          buttonLink="#"
          lightBgColor="bg-gray-300"
          darkBgColor="dark:bg-gray-500"
          onButtonClick={() => setIsExerciseOpen(true)}
        />
        <MindfulnessExercise
          isOpen={isExerciseOpen} 
          onClose={() => setIsExerciseOpen(false)} 
        />
      </>
    );
  };