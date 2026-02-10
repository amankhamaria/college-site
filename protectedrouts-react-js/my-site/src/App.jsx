import React from "react";
import { Route, Routes } from "react-router";
import ProtectedPage from "./pages/ProtectedPage";
import AuthorizedPage from "./pages/AuthorizedPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import Finance from "./pages/Finance";
import UnathorizedPage from "./pages/Unathorized";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* All Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/unathorized" element={<UnathorizedPage />} />
        </Route>

        {/* All Protected Routes */}
        <Route
          element={
            <ProtectedRoutes
              allowedRole={["user", "finance_manager", "admin"]}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/protectedonly" element={<ProtectedPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoutes allowedRole={["finance_manager", "admin"]} />
          }
        >
          <Route path="/finance" element={<Finance />} />
        </Route>

        {/* Only Admin */}
        <Route element={<ProtectedRoutes allowedRole={["admin"]} />}>
          <Route path="/admin" element={<AuthorizedPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
