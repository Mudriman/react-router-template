import {  Outlet, Navigate } from "react-router";
import { useAuthStore } from "../admin/store/authStore";

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { token, user } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;
  if (user?.role !== "ADMIN") return <Navigate to="/" replace />;
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}