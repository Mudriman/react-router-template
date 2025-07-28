// hooks/useUserManagement.ts
import { useState, useEffect, useCallback } from "react";
import { adminAPI } from "../../../api/api";
import type { User, ApiError } from "../../../shared/types";

export function useUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0
  });

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await adminAPI.getAllUsers(pagination.page, pagination.limit);

      if (!data) throw new Error("Не получили данные от сервера");

      const usersArray = Array.isArray(data.users) ? data.users : [];
      setUsers(usersArray);
      setPagination((prev) => ({
        ...prev,
        total: typeof data.total === "number" ? data.total : 0,
      }));
      setError(null);
      setInitialLoad(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : (err as ApiError).details || "Ошибка загрузки пользователей";
      setError(errorMessage);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit]);
  const handleDelete = async (id: string) => {
  if (!window.confirm("Вы уверены, что хотите удалить этого пользователя?")) return;

  try {
    await adminAPI.deleteUser(id);

    // Локальное обновление списка
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);

    setPagination((prev) => {
      const newTotal = prev.total - 1;
      const maxPage = Math.ceil(newTotal / prev.limit); // Максимально возможная страница

      // Если текущая страница стала пустой и это не первая страница — переключаемся на предыдущую
      const shouldDecreasePage = newUsers.length === 0 && prev.page > 1;
      const newPage = shouldDecreasePage ? prev.page - 1 : Math.min(prev.page, maxPage);

      return {
        ...prev,
        page: newPage,
        total: newTotal,
      };
    });

    // Если страница изменилась — перезагружаем данные
    if (users.length === 1 && pagination.page > 1) {
      await fetchUsers();
    }
  } catch (err) {
    alert("Ошибка при удалении пользователя");
  }
};

  const handleMakeAdmin = async (email: string) => {
    try {
      await adminAPI.makeAdmin(email);
      await fetchUsers();
    } catch (err) {
      alert("Ошибка при назначении админом");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    error,
    loading,
    initialLoad,
    pagination,
    setPagination,
    handleDelete,
    handleMakeAdmin,
    fetchUsers
  };
}