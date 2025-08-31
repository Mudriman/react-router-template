// features/routes/ProtectedLayout.tsx
import { Outlet } from "react-router";

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuthStore } from "../admin/store/authStore";
import { useStoreRehydrated } from "~/shared/hooks/useStoreRehydrated";
import ProfileBar from "../exercises/ProfileBar";

export default function ProtectedLayout() {
  const { token } = useAuthStore();
  const isRehydrated = useStoreRehydrated();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isRehydrated && !token && location.pathname !== '/login') {
      navigate("/login", { replace: true });
    }
  }, [isRehydrated, token, navigate, location.pathname]);

  if (!isRehydrated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!token) {
    // Уже на login или редирект в процессе
    return null;
  }

  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}