import React, { useState, useEffect } from 'react';

interface DiaryInputProps {
  notes: string[]; // Current notes from parent (formatted as "date: text")
  onNoteChange: (value: string) => void; // Update text in parent (now disabled)
  onSaveNote: (text: string) => void; // Save note text in parent
}

const DiaryInput: React.FC<DiaryInputProps> = ({ notes, onNoteChange, onSaveNote }) => {
  const [inputValue, setInputValue] = useState<string>(''); // Start with empty input, not synced with notes
  const maxCharacters = 500;

  // No longer sync with notes automatically to prevent auto-editing
  useEffect(() => {
    // Do nothing here to prevent syncing with notes after save
  }, [notes]);

  // Handle text change (no longer updates notes automatically)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setInputValue(value);
      // Do not call onNoteChange here to prevent auto-updates
    }
  };

  // Save note with date when user clicks the save button
  const handleSave = () => {
    if (inputValue.trim() && typeof window !== 'undefined') {
      onSaveNote(inputValue.trim());
      setInputValue(''); // Clear input after saving
    }
  };

  return (
    <div className="relative">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 resize-none transition-all duration-200 shadow-md hover:shadow-lg"
        rows={4}
        placeholder="Напишите свои мысли и чувства — это поможет вам лучше понять себя..."
        value={inputValue}
        onChange={handleChange}
      />
      <div className="flex justify-between items-center">
        <button
          onClick={handleSave}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-blue-600 transition-all duration-200"
          disabled={!inputValue.trim()}
        >
          Сохранить
        </button>
        <div className="text-right text-sm text-gray-500 mt-1">
          {inputValue.length}/{maxCharacters} символов
        </div>
      </div>
    </div>
  );
};

export default DiaryInput;