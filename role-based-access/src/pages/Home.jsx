import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const auths = useAuth();
  console.log(auths);

  return <div>Home</div>;
};

export default Home;
