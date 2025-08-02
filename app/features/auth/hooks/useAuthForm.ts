import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "~/features/admin/store/authStore";
import type { AuthResponse, ApiError } from "~/shared/types";

export const useAuthForm = (
  authFn: (email: string, password: string) => Promise<AuthResponse>,
  isRegister: boolean = false // Новый параметр для различения форм
) => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Добавляем confirmPassword в formData
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setIsLoading(true);

    try {
      // Валидация полей
      const errors: Record<string, string> = {};
      if (!formData.email.trim()) errors.email = "Email обязателен";
      if (!formData.password.trim()) errors.password = "Пароль обязателен";
      if (isRegister && formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Пароли не совпадают";
      }

      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setIsLoading(false);
        return;
      }

      // Вызов API только с email и password
      const res = await authFn(formData.email, formData.password);

      setToken(res.token);
      setUser(res.user);

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", res.token);
      storage.setItem("user", JSON.stringify(res.user));

      navigate(res.user.role === "ADMIN" ? "/admin" : "/prototype");
    } catch (err: unknown) {
      const apiErr = err as ApiError;
      let errorMessage = apiErr.error || "Произошла ошибка";

      setFieldErrors({});
      if (apiErr.errors && apiErr.errors.length > 0) {
        const formatted = Object.fromEntries(
          apiErr.errors.map((e) => [e.field, e.message])
        );
        setFieldErrors(formatted);
      } else {
        if (apiErr.code === "500") {
          errorMessage = "Ошибка сервера, попробуйте позже";
        } else if (apiErr.error === "Нет ответа от сервера") {
          errorMessage = "Не удалось подключиться к серверу";
        }
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    error,
    fieldErrors,
    isLoading,
    rememberMe,
    setRememberMe,
    handleChange,
    handleSubmit,
  };
};