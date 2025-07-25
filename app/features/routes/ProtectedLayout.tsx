// features/routes/ProtectedLayout.tsx
import { Outlet, Navigate } from "react-router";
import { useAuthStore } from "../admin/store/authStore";

export default function ProtectedLayout() {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}