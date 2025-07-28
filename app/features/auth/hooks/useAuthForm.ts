import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "~/features/admin/store/authStore";
import type { AuthResponse } from "~/shared/types";

export const useAuthForm = (authFn: (email: string, password: string) => Promise<AuthResponse>) => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!formData.email.trim() || !formData.password.trim()) {
        throw new Error("Все поля обязательны для заполнения");
      }

      const res = await authFn(formData.email, formData.password);
      
      setToken(res.token);
      setUser(res.user);

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", res.token);
      storage.setItem("user", JSON.stringify(res.user));

      navigate(res.user.role === "ADMIN" ? "/admin" : "/prototype");
    } catch (err: unknown) {
      let errorMessage = "Произошла ошибка при авторизации";
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "object" && err !== null && "message" in err) {
        errorMessage = String(err.message);
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    error,
    isLoading,
    rememberMe,
    setRememberMe,
    handleChange,
    handleSubmit
  };
};