import React from "react";
import { useNavigate } from "react-router-dom";
import Spidy from "../../assets/spidy.jpg";
import MarvelLogo from "../../assets/marvel-logo2.png";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/heroes", { replace: true });
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 animate__animated animate__fadeInDown">
        <img
          className="navbar-brand"
          src={MarvelLogo}
          width="150px"
          height={"60px"}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </nav>

      <div
        class="card mb-3 text-white"
        style={{
          maxWidth: "540px",
          position: "relative",
          left: "50%",
          transform: "translate(-50%,25vh)",
        }}
      >
        <img src={Spidy} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Marvel Superheroes HUB</h5>
          <p class="card-text">
            List, filter and search for your favorite Marvel superhero
          </p>
          <p class="card-text">2022</p>
          <button
            onClick={onLogin}
            className="btn btn-dark"
            style={{ color: "red", width: "10em" }}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
};
