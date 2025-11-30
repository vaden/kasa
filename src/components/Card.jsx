import { Link } from "react-router";

const Card = () => {
  return (
    <Link to={"/fiche-logement"}>
      <div className="card">
        <img
          className="card-image"
          src="/images/banner-desktop.png"
          alt="visuel de la location"
        />
        <h2 className="card-title">Titre de la location</h2>
      </div>
    </Link>
  );
};

export default Card;
