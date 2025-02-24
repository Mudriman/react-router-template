import React from "react";
import InteractiveExercises from "~/components/InteractiveExercises";
import Section from "~/components/Section";
import TherapeuticTools from "~/components/TherapeuticTools";

const Home: React.FC = () => {

  return (
    <div className="container mx-auto p-6">
      <TherapeuticTools/>
      <InteractiveExercises/>

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
