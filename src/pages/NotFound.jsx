import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <h1>Erreur 404 Not Found</h1>
      <Link to={"/"}>
        <button>Retour à l'accueil</button>
      </Link>
    </>
  );
};

export default NotFound;
