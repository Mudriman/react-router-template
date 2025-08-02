import { authAPI } from '~/api/api';
import { useAuthForm } from './hooks/useAuthForm';
import { FormInput } from './ui/FormInput';
import { SubmitButton } from './ui/SubmitButton';
import { Link } from 'react-router';
import { AuthFormContainer } from './ui/AuthFormContainer';
import { useState } from 'react';


export default function RegisterForm() {
 const {
    formData,
    error,
    fieldErrors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useAuthForm(authAPI.register, true);

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
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Введите ваш email"
          label="Email"
          disabled={isLoading}
          error={fieldErrors["email"]}
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
          error={fieldErrors["password"]}
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
          error={fieldErrors["confirmPassword"]}
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
