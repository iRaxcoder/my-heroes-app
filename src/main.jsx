import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { HeroesApp } from "./HeroesApp";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp></HeroesApp>
    </BrowserRouter>
  </React.StrictMode>
);
