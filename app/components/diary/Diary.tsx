import React, { useCallback } from 'react';
import DiaryInput from './DiaryInput';

interface DiaryProps {
  notes: string[]; // Current notes from parent (formatted as "date: text")
  onAddNote: (text: string) => void; // Add new note
  onUpdateNote: (id: string, text: string) => void; // Update existing note
}

const Diary: React.FC<DiaryProps> = ({ notes, onAddNote, onUpdateNote }) => {
  // Memoized handler for saving a new note
  const handleSaveNote = useCallback(
    (text: string) => {
      onAddNote(text); // Pass the text to parent, date will be added there
    },
    [onAddNote]
  );

  // Memoized handler for updating a note (for editing in DiaryInput, if needed)
  const handleNoteUpdate = useCallback(
    (text: string) => {
      // This could be used if we want to allow editing directly in DiaryInput, but we'll disable it for now
      // For now, we'll rely on NotesList for editing
    },
    [onUpdateNote]
  );

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Дневник</h2>
      <DiaryInput
        notes={notes}
        onNoteChange={() => {}} // Disable automatic updates to notes from DiaryInput
        onSaveNote={handleSaveNote}
      />
    </div>
  );
};

export default Diary;