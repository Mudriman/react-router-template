// components/AppInitializer.tsx
import { useEffect, useState } from 'react';
import { useStoreRehydrated } from '../hooks/useStoreRehydrated';

interface AppInitializerProps {
  children: React.ReactNode;
}

export default function AppInitializer({ children }: AppInitializerProps) {
  const isRehydrated = useStoreRehydrated();
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    // Даем время React Router полностью инициализироваться
    const timer = setTimeout(() => {
      setIsRouterReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isRehydrated || !isRouterReady) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}