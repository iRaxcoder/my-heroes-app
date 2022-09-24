import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  localStorage.setItem("lastPath", lastPath);

  return logged === true ? children : <Navigate to={"/"} />;
};
