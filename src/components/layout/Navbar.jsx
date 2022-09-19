import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MarvelLogo from "../../assets/marvel-logo2.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        <img
          src={MarvelLogo}
          width="150px"
          height={"60px"}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={(props) =>
              `nav-item nav-link fs-4 ${props.isActive ? "active" : ""}`
            }
            to="/heroes"
          >
            Heroes
          </NavLink>

          <NavLink className="nav-item nav-link fs-4" to="/search">
            Search
          </NavLink>
          <NavLink className="nav-item nav-link fs-4" to="/soon">
            soon...
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <button onClick={onLogout} className="nav-item nav-link btn fs-5">
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
