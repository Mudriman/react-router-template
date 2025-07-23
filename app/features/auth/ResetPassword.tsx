import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { authAPI } from '../../api/api';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const token = searchParams.get('token');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (formData.newPassword !== formData.confirmPassword) {
      setStatus('error');
      setMessage('Пароли не совпадают');
      return;
    }

    if (formData.newPassword.length < 6) {
      setStatus('error');
      setMessage('Пароль должен содержать минимум 6 символов');
      return;
    }

    if (!token) {
      setStatus('error');
      setMessage('Недействительная ссылка для сброса пароля');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await authAPI.resetPassword(token, formData.newPassword);
      
      setStatus('success');
      setMessage('Пароль успешно изменен! Вы будете перенаправлены...');
      
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error 
          ? err.message 
          : 'Произошла ошибка при изменении пароля. Попробуйте снова'
      );
    }
  };

  return (
    <main className="container mx-auto max-w-md p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Сброс пароля</h1>
        
        {!token && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Недействительная ссылка для сброса пароля
          </div>
        )}

        {status !== 'idle' && (
          <div className={`mb-4 p-3 rounded ${
            status === 'success' 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {token && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Новый пароль (минимум 6 символов)
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Введите новый пароль"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                  disabled={status === 'loading'}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setPasswordShown(!passwordShown)}
                  disabled={status === 'loading'}
                  aria-label={passwordShown ? "Скрыть пароль" : "Показать пароль"}
                >
                  {passwordShown ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Подтвердите пароль
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={passwordShown ? 'text' : 'password'}
                placeholder="Повторите новый пароль"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
                disabled={status === 'loading'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || !token}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              aria-busy={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Сохранение...
                </>
              ) : 'Сохранить новый пароль'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}