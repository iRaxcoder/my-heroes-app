import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../../components";
import { MarvelPage, Search, HeroPage } from "../../pages/heroes";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="heroes" element={<MarvelPage />} />
          <Route path="search" element={<Search />} />
          <Route path="hero/:characterId" element={<HeroPage />} />

          <Route path="/" element={<Navigate to={"marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
