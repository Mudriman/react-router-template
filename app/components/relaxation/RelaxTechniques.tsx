import React from 'react';
import TechniqueCard from './TechniqueCard';

const RelaxTechniques: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Техники успокоения</h2>
      <div className="space-y-4">
        <TechniqueCard
          title="Дыхательное упражнение 4-7-8"
          description="5 минут — Снятие тревожности"
          bgColor="bg-blue-50"
          borderColor="border-blue-200"
          textColor="text-blue-700"
        />
        <TechniqueCard
          title="Прогрессирующая мышечная релаксация"
          description="10 минут — Снятие напряжения"
          bgColor="bg-green-50"
          borderColor="border-green-200"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
};

export default RelaxTechniques;