import { Outlet, Navigate } from "react-router";
import { useToken } from "../../shared/hooks/useToken";

export default function ProtectedLayout() {
  const { getToken, removeToken } = useToken();

  const token = getToken();


  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}
