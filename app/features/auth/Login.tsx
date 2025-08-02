
import { authAPI } from '../../api/api';
import { useAuthForm } from './hooks/useAuthForm';
import { AuthFormContainer } from './ui/AuthFormContainer';
import { FormInput } from './ui/FormInput';
import { SubmitButton } from './ui/SubmitButton';

export default function Login() {
  const {
    formData,
    error,
    isLoading,
    fieldErrors,
    rememberMe,
    setRememberMe,
    handleChange,
    handleSubmit
  } = useAuthForm(authAPI.login);

  return (
    <AuthFormContainer
      title="Вход в систему"
      footer={
        <>
          Нет аккаунта?{" "}
          <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Зарегистрируйтесь
          </a>
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
          placeholder="Введите ваш пароль"
          label="Пароль"
          disabled={isLoading}
          showPasswordToggle
          error={fieldErrors["password"]}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Запомнить меня
            </label>
          </div>

          <a href="/forgot_password" className="text-sm text-blue-600 hover:text-blue-500">
            Забыли пароль?
          </a>
        </div>

        <SubmitButton isLoading={isLoading} label="Войти" />
      </form>
    </AuthFormContainer>
  );
}