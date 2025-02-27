import React from 'react';

interface RecommendationProps {
  mood: number;
}

const Recommendation: React.FC<RecommendationProps> = ({ mood }) => {
  const getMoodRecommendation = (mood: number): string => {
    if (mood < 4) {
      return 'Рекомендуем: попробуйте дыхательные упражнения или прослушивание музыки.';
    } else if (mood < 7) {
      return 'Совет: сделайте небольшую прогулку или выпейте чашку чая для улучшения настроения.';
    } else {
      return 'Отлично! Продолжайте поддерживать хорошее настроение!';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Рекомендация</h2>
      <p className="text-gray-700 dark:text-gray-300">{getMoodRecommendation(mood)}</p>
    </div>
  );
};

export default Recommendation;