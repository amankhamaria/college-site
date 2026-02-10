import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLogin } = useAuth();

  return (
    <header style={{ display: "flex", gap: "20px" }}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/protectedonly"}>protectedonly</NavLink>
      {!isLogin && <NavLink to={"/login"}>Login</NavLink>}
      <NavLink to={"/finance"}>Finance</NavLink>
      <NavLink to={"/admin"}>admin</NavLink>
    </header>
  );
};

export default Navbar;
