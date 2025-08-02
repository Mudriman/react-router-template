import axios from "axios";
import type { User, ApiError, AuthResponse } from '../shared/types';
import { useAuthStore } from "~/features/admin/store/authStore";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const API_BASE = "http://localhost:5000";

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
    const apiError: ApiError = {
      error: "Произошла ошибка",
      errors: [],
    };

    if (error.response) {
      // Ошибка HTTP
      const { data, status } = error.response;
      apiError.error = data?.error || `Ошибка сервера (${status})`;
      apiError.errors = data?.errors || [];
      apiError.code = status.toString();
    } else if (error.request) {
      // Ошибка соединения
      apiError.error = "Нет ответа от сервера";
    } else {
      // Другие ошибки
      apiError.error = error.message || "Неизвестная ошибка";
    }

    return Promise.reject(apiError);
  }
);

export const authAPI = {
  register: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/auth/register", { email, password });
      return response.data;
    } catch (err: any) {
      throw err as ApiError; // Ошибка уже в формате ApiError
    }
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post("/auth/login", { email, password });
      return response.data;
    } catch (err: any) {
      throw err as ApiError; // Бросаем ошибку в формате сервера
    }
  },

  requestPasswordReset: async (email: string): Promise<void> => {
    await apiClient.post("/auth/request-reset", { email });
  },

  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    await apiClient.post("/auth/reset-password", { token, newPassword });
  },

  feedback: async (email: string, message: string): Promise<void> => {
  try {
    await apiClient.post("/feedback", { email, message });
  } catch (err: any) {
    throw err as ApiError;
  }
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