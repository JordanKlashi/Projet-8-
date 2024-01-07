import { useState } from "react";

import ArrowLeft from "../../img/ArrowLeft.png";
import ArrowRight from "../../img/ArrowRight.png";

const Carrousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carrousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
        >
          {index === currentSlide && (
            <img
              className="carrousel-Img"
              src={slide}
              alt={`Slide  ${index}`}
            />
          )}
        </div>
      ))}
      <div className="arrow">
        <img
          className="arrow-Left"
          src={ArrowLeft}
          onClick={prevSlide}
          alt={"précèdent"}
        ></img>

        <img
          className="arrow-Right"
          src={ArrowRight}
          alt={"Suivant"}
          onClick={nextSlide}
        ></img>
      </div>
    </div>
  );
};

export default Carrousel;
