import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-text">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to={"/"}>
        <span className="notfound-btn">Retourner sur la page d'accueil</span>
      </Link>
    </div>
  );
};

export default NotFound;
