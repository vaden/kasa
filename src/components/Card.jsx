import { Link } from "react-router";

const Card = () => {
  return (
    <Link to={"/fiche-logement/id"}>
      <div className="card">
        <img src="" alt="visuel de la location" />
        <h2 className="title">Titre de la location</h2>
      </div>
    </Link>
  );
};

export default Card;
