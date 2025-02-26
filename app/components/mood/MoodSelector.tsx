import React from 'react';
import MoodButton from './MoodButton';

interface MoodSelectorProps {
  mood: number;
  onMoodChange: (newMood: number) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ mood, onMoodChange }) => {
  return (
    <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Как вы себя чувствуете сегодня?</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <MoodButton
          label="Хорошо 😊"
          moodValue={9}
          isActive={mood >= 8}
          onClick={onMoodChange}
        />
        <MoodButton
          label="Нормально 🙂"
          moodValue={5}
          isActive={mood >= 4 && mood < 8}
          onClick={onMoodChange}
        />
        <MoodButton
          label="Плохо 😢"
          moodValue={2}
          isActive={mood < 4}
          onClick={onMoodChange}
        />
      </div>
    </div>
  );
};

export default MoodSelector;