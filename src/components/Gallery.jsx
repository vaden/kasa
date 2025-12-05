import Card from "./Card";
import { useFetchApartments } from "../hooks/useFetchApartments";

const Gallery = () => {
  const { apartments, loading, error } = useFetchApartments();

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  return (
    <div className="gallery">
      {apartments.map((apartment) => (
        <Card key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default Gallery;
