import Card from "./Card";
import apartments from "../data.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {apartments.map((apartment) => (
        <Card key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default Gallery;
