import { Home } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { CadastroUserPage } from "@/pages/CadastroUserPage";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroUserPage />} />

        {/* Protected Routes */}
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}