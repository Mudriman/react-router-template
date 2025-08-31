// hooks/useStoreRehydrated.ts
import { useEffect, useState } from 'react';
import { useAuthStore } from '~/features/admin/store/authStore';

export const useStoreRehydrated = () => {
  const [isRehydrated, setIsRehydrated] = useState(false);

  useEffect(() => {
    // Подписываемся на событие завершения гидратации
    const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
      setIsRehydrated(true);
    });

    // Если хранилище уже гидратировано, устанавливаем флаг
    if (useAuthStore.persist.hasHydrated()) {
      setIsRehydrated(true);
    }

    return unsubscribe;
  }, []);

  return isRehydrated;
};