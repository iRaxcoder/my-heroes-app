import React from "react";
import { useEffect } from "react";
import { Navbar } from "./components/";
import { useFetch } from "./hooks/useFetch";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
