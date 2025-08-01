// features/auth/hooks/useAuth.ts
import { useNavigate } from 'react-router';
import { useAuthStore } from '../../features/admin/store/authStore';
import { authAPI } from '../../api/api';

export const useAuth = () => {
  const navigate = useNavigate();

  const {
    user,
    token,
    isLoading,
    error,
    setUser,
    setToken,
    setLoading,
    setError,
    clearError,
  } = useAuthStore();

  const login = async (email: string, password: string) => {
    setLoading(true);
    clearError();

    try {
      const { token, user } = await authAPI.login(email, password);
      setToken(token);
      setUser(user);
      navigate(user.role === 'ADMIN' ? '/admin' : '/prototype');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("auth-storage");
    navigate('/login');
  };

  return {
    user,
    token,
    isLoading,
    error,
    login,
    logout,
  };
};
