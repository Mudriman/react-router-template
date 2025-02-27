import React, { useState, useRef } from "react";
import DiaryInput from "./DiaryInput";

interface Note {
  id: string;
  text: string;
}

interface NotesListProps {
  notes: Note[];
  onAddNote: (text: string) => void;
  onUpdateNote: (id: string, text: string) => void;
  onDeleteNote: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onAddNote, onUpdateNote, onDeleteNote }) => {
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [isAdding, setIsAdding] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (note: Note) => {
    setEditingNoteId(note.id);
    setEditText(note.text);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSaveEdit = (id: string) => {
    if (editText.trim()) {
      onUpdateNote(id, editText.trim());
      setEditingNoteId(null);
      setEditText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter") handleSaveEdit(id);
    if (e.key === "Escape") setEditingNoteId(null);
  };

  const handleAddNote = (text: string) => {
    if (text.trim()) {
      onAddNote(text.trim());
      setIsAdding(false);
    }
  };

  const toggleAddMode = () => {
    setIsAdding((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md mb-8 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Список заметок</h2>
        <button
          onClick={toggleAddMode}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isAdding ? "Отмена" : "Добавить заметку"}
        </button>
      </div>

      {isAdding && (
        <div className="mb-6">
          <DiaryInput
            notes={notes.map((n) => n.text)}
            onNoteChange={() => {}}
            onSaveNote={handleAddNote}
          />
        </div>
      )}

      {notes.length === 0 && !isAdding ? (
        <p className="text-gray-500 dark:text-gray-400">Нет заметок. Добавьте первую заметку!</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex items-center gap-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
            >
              {editingNoteId === note.id ? (
                <>
                  <input
                    ref={inputRef}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, note.id)}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleSaveEdit(note.id)}
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                    aria-label="Сохранить изменения"
                  >
                    ✅
                  </button>
                  <button
                    onClick={() => setEditingNoteId(null)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                    aria-label="Отменить редактирование"
                  >
                    ❌
                  </button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => handleEdit(note)}
                    className="flex-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 p-1 rounded"
                  >
                    {note.text}
                  </span>
                  <button
                    onClick={() => handleEdit(note)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    aria-label="Редактировать заметку"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                    aria-label="Удалить заметку"
                  >
                    🗑️
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;