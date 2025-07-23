import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authAPI } from '../../api/api';
import { useToken } from './useToken';

export const useAuth = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { setToken } = useToken();

  const login = async (email: string, password: string) => {
    setStatus('loading');
    try {
      const token = await authAPI.login(email, password);
      setToken(token);
      setStatus('success');
      navigate('/prototype');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Ошибка авторизации');
    }
  };

  return { status, message, login };
};
