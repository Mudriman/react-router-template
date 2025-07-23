import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000"; // Замените на ваш production URL при необходимости

// Создаем экземпляр axios с базовыми настройками
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Добавляем интерсептор для обработки ошибок
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Обрабатываем стандартные ошибки HTTP
      const message = error.response.data?.error || "Произошла ошибка";
      return Promise.reject(new Error(message));
    } else if (error.request) {
      // Ошибка соединения
      return Promise.reject(new Error("Нет ответа от сервера"));
    } else {
      // Другие ошибки
      return Promise.reject(error);
    }
  }
);

export const authAPI = {
  register: async (email: string, password: string): Promise<string> => {
    const response = await apiClient.post<{ token: string }>("/auth/register", {
      email,
      password,
    });
    return response.data.token;
  },

  login: async (email: string, password: string): Promise<string> => {
    const response = await apiClient.post<{ token: string }>("/auth/login", {
      email,
      password,
    });
    return response.data.token;
  },

  requestPasswordReset: async (email: string): Promise<void> => {
    await apiClient.post("/auth/request-reset", { email });
  },

  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    await apiClient.post("/auth/reset-password", { token, newPassword });
  },

};