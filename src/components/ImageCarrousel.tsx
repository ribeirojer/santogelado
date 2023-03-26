import { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  images: string[];
};

export const Container = styled.main`
  position: relative;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }

  button:first-child {
    left: 0;
  }

  button:last-child {
    right: 0;
  }
  .image-container {
    position: relative;
    height: 80vh;
    overflow: hidden;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .image-container img.active {
    opacity: 1;
  }

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  button:first-child {
    left: 1rem;
  }

  button:last-child {
    right: 1rem;
  }
`;

const ImageCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 4000);

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
    <Container>
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
    </Container>
  );
};

export default ImageCarousel;
