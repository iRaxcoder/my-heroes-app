import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/auth/";
import { HeroesRoutes } from "../routes/heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
