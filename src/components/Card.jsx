import { Link } from "react-router";

const Card = ({ apartment }) => {
  return (
    <Link to={`/fiche-logement/${apartment.id}`}>
      <div className="card">
        <img
          className="card-image"
          src={apartment.cover}
          alt={apartment.title}
        />
        <h2 className="card-title">{apartment.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
