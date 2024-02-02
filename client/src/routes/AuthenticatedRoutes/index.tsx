import AuthService from "@/services/AuthService";
import { Navigate, Outlet } from "react-router-dom";
import { MenuLateral } from "@/components/MenuLateral/MenuLateral";


export function AuthenticatedRoutes() {
  const isAuthenticated = AuthService.isAuthenticated();

  return isAuthenticated ? (
    <>
      <>
        <MenuLateral />
        <div style={{ display: "flex", marginLeft: "200px" }}>
          <Outlet />
        </div>
      </>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}