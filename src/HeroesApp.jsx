import React from "react";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const HeroesApp = () => {
  const { data, isLoading } = useFetch("comics");
  useEffect(() => {
    console.log(data);
  }, [isLoading]);

  return (
    <>
      <h1>HeroesApp</h1>;
    </>
  );
};
