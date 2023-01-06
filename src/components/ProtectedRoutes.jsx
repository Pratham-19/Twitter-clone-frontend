import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("bearer-token");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
