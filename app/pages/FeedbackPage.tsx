import { useState } from "react";

const FeedbackPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isDarkMode, setIsDarkMode] = useState(false); // Состояние для темы

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    // Здесь можно добавить отправку данных на сервер
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); // Добавляем/убираем класс "dark"
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg bg-opacity-90 bg-gray-100 dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Обратная связь</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;