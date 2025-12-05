import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const showControls = pictures.length > 1;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="carousel-image"
      />

      {showControls && (
        <>
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevImage}
            aria-label="Image précédente"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextImage}
            aria-label="Image suivante"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="carousel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
