import { useState } from "react";
import BackLink from "~/shared/UI/BackLink";
import { useNavigate } from "react-router";
import type { ApiError } from "~/shared/types";
import { authAPI } from "~/api/api";

export interface FeedbackForm {
  name: string;
  email: string;
  message: string;
}

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setFieldErrors({});

    try {
      // Проверяем обязательные поля
      if (!form.email.trim() || !form.message.trim()) {
        setFieldErrors({
          email: !form.email.trim() ? "Email обязателен" : "",
          message: !form.message.trim() ? "Сообщение обязательно" : "",
        });
        return;
      }

      // Используем apiClient вместо fetch
      await authAPI.feedback(form.email, `${form.name ? `${form.name} пишет: ` : ""}${form.message}`);

      navigate("/prototype/feedback-success");
    } catch (err: unknown) {
      const apiErr = err as ApiError;
      let errorMessage = apiErr.error || "Произошла ошибка";

      if (apiErr.errors && apiErr.errors.length > 0) {
        const formatted = Object.fromEntries(apiErr.errors.map(e => [e.field, e.message]));
        setFieldErrors(formatted);
      } else {
        if (apiErr.code === "401") {
          errorMessage = "Не авторизован. Пожалуйста, войдите в систему.";
          navigate("/login"); // Перенаправляем на логин
        } else if (apiErr.code === "429") {
          errorMessage = apiErr.error || "Превышен лимит запросов. Попробуйте позже.";
        } else if (apiErr.code === "500") {
          errorMessage = "Ошибка сервера, попробуйте позже.";
        }
        setError(errorMessage);
      }
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
                  disabled={isLoading}
                />
                {fieldErrors.name && (
                  <div className="mt-1 text-red-300 text-sm">{fieldErrors.name}</div>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  disabled={isLoading}
                />
                {fieldErrors.email && (
                  <div className="mt-1 text-red-300 text-sm">{fieldErrors.email}</div>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                  disabled={isLoading}
                />
                {fieldErrors.message && (
                  <div className="mt-1 text-red-300 text-sm">{fieldErrors.message}</div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
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