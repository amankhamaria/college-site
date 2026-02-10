import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setIsLogin, setUser } = useAuth();

  return (
    <div>
      <button
        onClick={() => {
          setIsLogin(true);
          setUser({ name: "Atul", role: "user", email: "a@a.com" });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
