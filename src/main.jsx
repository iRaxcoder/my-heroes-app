import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { HeroesApp } from "./HeroesApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp></HeroesApp>
    </BrowserRouter>
  </React.StrictMode>
);
