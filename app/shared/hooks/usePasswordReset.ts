import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authAPI } from '../../api/api';

export const usePasswordReset = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const requestReset = async (email: string) => {
    setStatus('loading');
    try {
      await authAPI.requestPasswordReset(email);
      setStatus('success');
      setMessage('Если email зарегистрирован, вы получите письмо со ссылкой');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Ошибка запроса сброса');
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    setStatus('loading');
    try {
      await authAPI.resetPassword(token, newPassword);
      setStatus('success');
      setMessage('Пароль успешно изменен! Перенаправляем...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Ошибка сброса пароля');
    }
  };

  return { status, message, requestReset, resetPassword };
};