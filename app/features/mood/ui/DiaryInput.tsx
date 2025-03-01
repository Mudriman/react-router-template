import React, { useState } from 'react';

interface DiaryInputProps {
  notes: string[];
  onNoteChange: (value: string) => void;
  onSaveNote: (text: string) => void;
}

const DiaryInput: React.FC<DiaryInputProps> = ({ notes, onNoteChange, onSaveNote }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const maxCharacters = 500;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setInputValue(value);
    }
  };

  const handleSave = () => {
    if (inputValue.trim() && typeof window !== 'undefined') {
      onSaveNote(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="relative">
      <textarea
        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none transition-all duration-200 shadow-md hover:shadow-lg"
        rows={4}
        placeholder="Напишите свои мысли и чувства — это поможет вам лучше понять себя..."
        value={inputValue}
        onChange={handleChange}
      />
      <div className="flex justify-between items-center">
        <button
          onClick={handleSave}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-blue-600 transition-all duration-200 disabled:bg-gray-400 dark:disabled:bg-gray-600"
          disabled={!inputValue.trim()}
        >
          Сохранить
        </button>
        <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
          {inputValue.length}/{maxCharacters} символов
        </div>
      </div>
    </div>
  );
};

export default DiaryInput;