import axios from "axios";
import type { User } from '../shared/types';
import { useAuthStore } from "~/features/admin/store/authStore";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const API_BASE = "http://localhost:5000";// Замените на ваш production URL при необходимости

// Создаем экземпляр axios с базовыми настройками
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Добавляем интерсептор для авторизации
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // <<< вместо localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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
  register: async (email: string, password: string): Promise<{ token: string; user: { email: string; role: 'USER' | 'ADMIN' } }> => {
    const response = await apiClient.post("/auth/register", {
      email,
      password,
    });
    return response.data; // Теперь возвращаем и токен, и данные пользователя
  },

  login: async (email: string, password: string): Promise<{ token: string; user: { email: string; role: 'USER' | 'ADMIN' } }> => {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  },

  requestPasswordReset: async (email: string): Promise<void> => {
    await apiClient.post("/auth/request-reset", { email });
  },

  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    await apiClient.post("/auth/reset-password", { token, newPassword });
  },
};

export const adminAPI = {

  getAllUsers: async (page = 1, limit = 10): Promise<{ users: User[]; total: number }> => {
    const response = await apiClient.get(`/admin/users?page=${page}&limit=${limit}`);
    return response.data;
  },

  makeAdmin: async (email: string): Promise<{ success: boolean }> => {
    const response = await apiClient.post("/admin/make-admin", { email });
    return response.data;
  },
  
  getStats: async () => { // Новый метод
    const response = await apiClient.get('/admin/stats');
    return response.data;
  },

  deleteUser: async (id: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await apiClient.delete(`/admin/user/${id}`);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.response?.data?.error || "Ошибка при удалении" };
    }
  },

};

export const testAPI = {
  saveTestResult: async (testType: string, score: number) => {
    const response = await apiClient.post("/profile/tests", { 
      type: testType, 
      score 
    });
    return response.data;
  },

  getMyTests: async () => {
    const response = await apiClient.get("/profile/tests");
    return response.data;
  }
};