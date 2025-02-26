import React from 'react';

interface Note {
  id: string;
  date: string;
  text: string;
}

interface NotesListProps {
  notes: Note[];
  onUpdateNote: (id: string, text: string) => void;
  onDeleteNote: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onUpdateNote, onDeleteNote }) => {
  const [editingNoteId, setEditingNoteId] = React.useState<string | null>(null);
  const [editText, setEditText] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleEdit = (note: Note) => {
    setEditingNoteId(note.id);
    setEditText(note.text);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSaveEdit = (id: string) => {
    if (editText.trim()) {
      onUpdateNote(id, editText.trim());
      setEditingNoteId(null);
      setEditText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') handleSaveEdit(id);
    if (e.key === 'Escape') setEditingNoteId(null);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Список заметок</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">Нет заметок. Добавьте первую заметку в дневнике!</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <li key={note.id} className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg">
              {editingNoteId === note.id ? (
                <>
                  <input
                    ref={inputRef}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, note.id)}
                    className="p-2 border border-gray-300 rounded-lg w-full bg-white text-gray-900"
                  />
                  <button onClick={() => handleSaveEdit(note.id)} className="text-green-500 hover:text-green-700">
                    ✅
                  </button>
                  <button onClick={() => setEditingNoteId(null)} className="text-gray-500 hover:text-gray-700">
                    ❌
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-500 text-sm">{note.date}</span>
                  <span
                    onClick={() => handleEdit(note)}
                    className="flex-1 cursor-pointer hover:bg-gray-200 p-1 rounded"
                  >
                    {note.text}
                  </span>
                  <button onClick={() => handleEdit(note)} className="text-blue-500 hover:text-blue-700">
                    ✏️
                  </button>
                  <button onClick={() => onDeleteNote(note.id)} className="text-red-500 hover:text-red-700">
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
