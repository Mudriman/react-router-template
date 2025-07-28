import { useState } from "react";
import BackLink from "~/shared/UI/BackLink";
import { useNavigate } from "react-router";


export interface FeedbackForm {
  name: string;
  email: string;
  message: string;
}

export interface ApiFeedbackRequest {
  email: string;
  message: string;
}

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          message: `${form.name} пишет: ${form.message}` // Добавляем имя в сообщение
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      navigate("/prototype/feedback-success"); // Перенаправляем на страницу успеха
    } catch (err: any) {
      setError(err.message || "Произошла ошибка");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-gray-100">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-100">Обратная связь</h1>
            <BackLink to="/" />
          </header>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-lg">
              {error}
            </div>
          )}

          <main>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}