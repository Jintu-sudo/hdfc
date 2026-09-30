import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Any route nested inside this one is only visible when logged in.
export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
