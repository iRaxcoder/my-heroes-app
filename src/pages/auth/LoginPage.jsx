import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <h1>Enter the hub!</h1>
      <hr />

      <button onClick={onLogin} className="btn btn-primary">
        Enter!
      </button>
    </>
  );
};
