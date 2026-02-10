import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ allowedRole = [] }) => {
  const { isLogin, user } = useAuth();

  if (!isLogin) {
    return <Navigate to={"/login"} replace />;
  }

  if (allowedRole && !allowedRole.includes(user.role)) {
    return <Navigate to={"/unathorized"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
