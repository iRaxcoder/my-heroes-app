import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spidy from "../../assets/spidy.jpg";
import MarvelLogo from "../../assets/marvel-logo2.png";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { name, onInputChange } = useForm({ name: "" });
  const [isRequired, setIsRequired] = useState(false);
  const navigate = useNavigate();
  const onLogin = () => {
    if (name.trim() === "") {
      setIsRequired(true);
      return;
    }
    const lastPath = localStorage.getItem("lastPath") || "/heroes";
    login(name);
    navigate(lastPath, { replace: true });
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
        className="card mb-3 text-white"
        style={{
          maxWidth: "540px",
          width: "100%",
          margin: "auto 1px",
          height: "300px",
          position: "relative",
          left: "50%",
          transform: "translate(-50%,15vh)",
        }}
      >
        <img
          src={Spidy}
          className="card-img"
          style={{ height: "300px" }}
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">Marvel Superheroes HUB</h5>
          <p className="card-text">
            List, filter and search for your favorite Marvel superhero
          </p>
          <p className="card-text">2022</p>
          <form onSubmit={onLogin}>
            <input
              placeholder="Your name"
              onChange={onInputChange}
              name="name"
              className="form-control w-50"
            ></input>
            {isRequired && <p className="card-text">*type your name</p>}
            <button
              type="submit"
              className="btn btn-dark w-50 mt-3"
              style={{ color: "red" }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
