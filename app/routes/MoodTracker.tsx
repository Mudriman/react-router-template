import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Diary from '../components/diary/Diary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { MoodData } from '~/types/mood';
import Header from '~/components/UI/Header';
import MoodSelector from '~/components/mood/MoodSelector';
import MoodStats from '~/components/stats/MoodStats';
import RelaxTechniques from '~/components/relaxation/RelaxTechniques';
import Recommendation from '~/components/reccomendation/Recommendation';
import NotesList from '~/components/diary/NoteList';

interface Note {
  id: string; // Уникальный идентификатор для заметки
  date: string;
  text: string;
}

const MoodTracker: React.FC = () => {
  // Simple state for current mood, display period, and notes
  const [mood, setMood] = useState<number>(() => 5);
  const [period, setPeriod] = useState<'7' | '14' | '30'>('7'); // Display period (7, 14, or 30 days)
  const [notes, setNotes] = useState<Note[]>([]); // State for notes diary, with structured format

  // Memoize demo data to prevent regeneration on every render
  const allDemoData: MoodData[] = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date('2025-02-01T00:00:00Z');
      date.setDate(date.getDate() + i);
      const moodValue = [3, 6, 4, 7, 5, 8, 6, 2, 9, 1, 5, 7, 4, 8, 3, 6, 9, 2, 5, 7, 4, 8, 3, 6, 9, 2, 5, 7, 4, 8][i] || 5;
      const moodColor = moodValue < 4 ? '#ff4d4d' : moodValue < 7 ? '#ffa500' : '#90ee90';
      return { date: date.toISOString().split('T')[0], mood: moodValue, moodColor };
    });
  }, []); // Empty dependency array ensures data is generated only once

  // Filter data based on the selected period
  const demoData = useMemo(() => allDemoData.slice(-parseInt(period, 10)), [period, allDemoData]);

  // Memoized handlers for SSR compatibility
  const handleMoodChange = useCallback((newMood: number) => {
    setMood(newMood);
    if (newMood < 4 && typeof window !== 'undefined') {
      toast.warn('Ваше настроение низкое! Рекомендуем дыхательные упражнения или прослушивание музыки.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  const handlePeriodChange = useCallback((newPeriod: '7' | '14' | '30') => {
    setPeriod(newPeriod);
  }, []);

  const handleAddNote = useCallback((text: string) => {
    const newNote: Note = {
      id: Date.now().toString(), // Уникальный ID на основе timestamp
      date: new Date().toLocaleDateString(),
      text,
    };
    setNotes((prev) => [...prev, newNote].slice(-10)); // Keep up to 10 notes
  }, [notes]);

  const handleUpdateNote = useCallback((id: string, text: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text } : note))
    );
  }, [notes]);

  const handleDeleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }, [notes]);

  // Load notes from localStorage on mount (client-side)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }
  }, []);

  // Save notes to localStorage on change (client-side)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  // Ensure initial state is consistent on client hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Any client-specific initialization can go here, but ensure it doesn't conflict with SSR
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <Header name="Александр(демо)" />
        <MoodSelector mood={mood} onMoodChange={handleMoodChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
          <MoodStats data={demoData} />
          <RelaxTechniques />
        </div>
        <Diary notes={notes.map((n) => `${n.date}: ${n.text}`)} onAddNote={handleAddNote} onUpdateNote={handleUpdateNote} />
        <NotesList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
        <Recommendation mood={mood} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default MoodTracker;