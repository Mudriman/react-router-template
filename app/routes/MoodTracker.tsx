import React, { useState } from "react";
import BackLink from "~/components/UI/BackLink";
import Header from "~/components/UI/Header";
import MoodSelector from "~/components/mood/MoodSelector";
import MoodStats from "~/components/mood/stats/MoodStats";
import RelaxTechniques from "~/components/mood/relaxation/RelaxTechniques";
import Recommendation from "~/components/mood/reccomendation/Recommendation";
import NotesList from "~/components/mood/diary/NoteList";

// Типы для данных
interface MoodData {
  date: string;
  mood: number;
  moodColor: string;
}

interface Note {
  id: string;
  text: string; // Убираем date
}

export default function MoodTrackerPage() {
  const [mood, setMood] = useState(5);
  const [period, setPeriod] = useState("7");
  const [notes, setNotes] = useState<Note[]>([]);

  const allDemoData: MoodData[] = Array.from({ length: 30 }, (_, i) => {
    const date = new Date("2025-02-01T00:00:00Z");
    date.setDate(date.getDate() + i);
    const moodValue = [3, 6, 4, 7, 5, 8, 6, 2, 9, 1, 5, 7, 4, 8, 3, 6, 9, 2, 5, 7, 4, 8, 3, 6, 9, 2, 5, 7, 4, 8][i] || 5;
    const moodColor = moodValue < 4 ? "#ff4d4d" : moodValue < 7 ? "#ffa500" : "#90ee90";
    return { date: date.toISOString().split("T")[0], mood: moodValue, moodColor };
  });

  const demoData = allDemoData.slice(-parseInt(period, 10));

  const handleMoodChange = (newMood: number) => {
    setMood(newMood);
  };

  const handlePeriodChange = (newPeriod: "7" | "14" | "30") => {
    setPeriod(newPeriod);
  };

  const handleAddNote = (text: string) => {
    const newNote: Note = {
      id: `${Math.random().toString(36).slice(2)}`, // Безопасный ID
      text,
    };
    setNotes((prev: Note[]) => [...prev, newNote].slice(-10));
  };

  const handleUpdateNote = (id: string, text: string) => {
    setNotes((prev: Note[]) => prev.map((note) => (note.id === id ? { ...note, text } : note)));
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev: Note[]) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-gray-900 dark:text-gray-100">
          <header className="mb-8 space-y-4">
            <Header name="Александр(демо)" />
            <BackLink to="/prototype" />
          </header>

          <main className="space-y-8">
            <MoodSelector mood={mood} onMoodChange={handleMoodChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <MoodStats data={demoData} period={period} onPeriodChange={handlePeriodChange} />
              <RelaxTechniques />
            </div>
            <NotesList
              notes={notes}
              onAddNote={handleAddNote}
              onUpdateNote={handleUpdateNote}
              onDeleteNote={handleDeleteNote}
            />
            <Recommendation mood={mood} />
          </main>
        </div>
      </div>
    </div>
  );
}