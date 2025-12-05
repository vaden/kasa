import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import Pill from "../components/Pill";
import Markdown from "../components/Markdown";
import { useParams, Navigate } from "react-router";
import apartments from "../data.json";

const Fiche = () => {
  const { id } = useParams();

  const apartment = apartments.find((apt) => apt.id === id);

  if (!apartment) {
    return <Navigate to="*" replace />;
  }

  const rating = parseInt(apartment.rating);
  return (
    <>
      <Carousel pictures={apartment.pictures} title={apartment.title} />
      <section className="fiche-presentation">
        <article className="fiche-title-pills">
          <div className="fiche-title">
            <h1 className="title">{apartment.title}</h1>
            <span className="lieu">{apartment.location}</span>
          </div>
          <div className="fiche-pills">
            {apartment.tags.map((tag, index) => (
              <Pill key={index} tag={tag} />
            ))}
          </div>
        </article>
        <article className="fiche-profile">
          <div className="profile">
            <span className="profile-name">{apartment.host.name}</span>
            <img
              src={apartment.host.picture}
              alt={apartment.host.name}
              className="profile-picture"
            />
          </div>
          <div className="note">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < rating ? "star-filled" : "star-empty"}
              />
            ))}
          </div>
        </article>
      </section>
      <section className="desc-equip">
        <Markdown title={"Description"} content={apartment.description} />

        <Markdown
          title={"Équipements"}
          content={apartment.equipments}
          contentType="list"
        />
      </section>
    </>
  );
};

export default Fiche;
