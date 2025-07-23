const TOKEN_KEY = 'token';

export const useToken = () => {
  const getToken = () => localStorage.getItem(TOKEN_KEY);

  const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
  };

  return { getToken, setToken, removeToken };
};
