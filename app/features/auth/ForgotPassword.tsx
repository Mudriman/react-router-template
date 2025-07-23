import { useState } from 'react';
import { Link } from 'react-router';
import { authAPI } from '../../api/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      await authAPI.requestPasswordReset(email);
      setStatus('success');
      setMessage('Если email зарегистрирован, вы получите письмо со ссылкой для сброса пароля');
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error 
          ? err.message 
          : 'Произошла ошибка при отправке запроса. Попробуйте позже'
      );
    }
  };

  return (
    <main className="container mx-auto max-w-md p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Восстановление пароля</h1>
        
        {status !== 'idle' && (
          <div className={`mb-4 p-3 rounded ${
            status === 'success' 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Введите ваш email"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {status === 'loading' ? 'Отправка...' : 'Отправить ссылку'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Вспомнили пароль?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Войдите
          </Link>
        </div>
      </div>
    </main>
  );
}