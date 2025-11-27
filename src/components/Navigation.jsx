import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <Link to={"/about"}>A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
