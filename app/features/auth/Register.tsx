import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { authAPI } from "../../api/api";
import type { AuthResponse } from "../../shared/types";
import { useAuthStore } from "../admin/store/authStore";
import { AuthFormContainer } from "./ui/AuthFormContainer";
import { FormInput } from "./ui/FormInput";
import { SubmitButton } from "./ui/SubmitButton";

export default function Register() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Валидация
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        throw new Error("Все поля обязательны для заполнения");
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("Введите корректный email");
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error("Пароли не совпадают");
      }

      if (formData.password.length < 6) {
        throw new Error("Пароль должен содержать минимум 6 символов");
      }

      const res = await authAPI.register(formData.email, formData.password);
      
      setToken(res.token);
      setUser(res.user);

      // Успешная регистрация
      setError("Регистрация прошла успешно! Вы будете перенаправлены...");

      setTimeout(() => {
        navigate(res.user.role === "ADMIN" ? "/admin" : "/prototype");
      }, 1500);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ошибка при регистрации. Возможно, пользователь уже существует"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormContainer
      title="Регистрация"
      footer={
        <>
          Уже есть аккаунт?{" "}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Войдите
          </Link>
        </>
      }
    >
      {error && (
        <div className={`mb-4 p-3 rounded ${
          error.includes("успешно") 
            ? "bg-green-100 border border-green-400 text-green-700" 
            : "bg-red-100 border border-red-400 text-red-700"
        }`}>
          {error}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-4">
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Введите ваш email"
          label="Email"
          disabled={isLoading}
        />

        <FormInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Придумайте пароль (минимум 6 символов)"
          label="Пароль"
          disabled={isLoading}
          showPasswordToggle
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Повторите пароль"
          label="Подтверждение пароля"
          disabled={isLoading}
          showPasswordToggle
        />

        <SubmitButton
          isLoading={isLoading} 
          label="Зарегистрироваться"
          loadingLabel="Регистрация..."
        />
      </form>
    </AuthFormContainer>
  );
}