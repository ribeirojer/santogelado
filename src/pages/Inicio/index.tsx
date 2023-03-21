import React from "react";
import ImageCarousel from "../../components/ImageCarrousel";

type Props = {};

const Inicio = (props: Props) => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <main>
      <ImageCarousel images={images} />;
    </main>
  );
};

export default Inicio;
