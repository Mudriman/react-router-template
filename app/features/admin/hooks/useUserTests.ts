// hooks/useUserTests.ts
import { useState, useCallback } from "react";
import { adminAPI } from "~/api/api";


export function useUserTests() {
  const [tests, setTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserTests = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      setError(null);
      const userTests = await adminAPI.getUserTests(userId);
      setTests(Array.isArray(userTests) ? userTests : []);
    } catch (err: any) {
      setError(err.message || "Ошибка загрузки тестов");
      setTests([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteTest = useCallback(async (testId: string) => {
    try {
      const result = await adminAPI.deleteUserTest(testId);
      if (result.success) {
        setTests(prev => prev.filter(test => test.id !== testId));
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err: any) {
      return { 
        success: false, 
        error: err.message || "Ошибка при удалении теста" 
      };
    }
  }, []);

  return {
    tests,
    loading,
    error,
    fetchUserTests,
    deleteTest,
    setTests
  };
}