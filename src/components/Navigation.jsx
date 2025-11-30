import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./images/logo-nav.svg" alt="logo de Kasa" />
      </div>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => `link ${nav.isActive ? "nav-active" : ""}`}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={(nav) => `link ${nav.isActive ? "nav-active" : ""}`}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
