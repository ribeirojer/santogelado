import { useState, useEffect } from "react";
//import "./ImageCarousel.css"; // Importa um arquivo CSS com as animações

type Props = {
  images: string[];
};

const ImageCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>{"<"}</button>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt={`slide ${index}`}
            className={index === currentIndex ? "active" : "inactive"}
          />
        ))}
      </div>
      <button onClick={goToNextSlide}>{">"}</button>
    </div>
  );
};

export default ImageCarousel;
