import React from "react";
import { useReducer } from "react";
import { types } from "../../types/auth/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const init = () => {
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      logged: !!user,
      user: user,
    };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = {
      id: "abc123",
      name,
    };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);

    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
