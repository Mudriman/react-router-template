// features/routes/NotFound.tsx
import { useRouteError, isRouteErrorResponse } from "react-router";
import { useEffect, useState } from "react";

export default function NotFound() {
  const error = useRouteError();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // На сервере ничего не рендерим или рендерим минимальную версию
  if (!isClient) {
    return null;
  }

  // Игнорируем ошибки от служебных запросов (только на клиенте)
  if (isRouteErrorResponse(error) && 
      error.data?.message?.includes('.well-known') ||
      window.location.pathname.includes('.well-known')) {
    return null;
  }

  // Для нормальных маршрутов показываем стандартную 404
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl">Страница не найдена</p>
      </div>
    </div>
  );
}