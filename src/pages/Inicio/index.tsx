import img1 from "../../assets/dmitriy-frantsev-rjSnhPy3bxI-unsplash.jpg";
import img2 from "../../assets/helena-lopes-a4z8GRkVSUM-unsplash.jpg";
import img3 from "../../assets/louis-hansel-2nPS_9TV0VA-unsplash.jpg";
import ImageCarousel from "../../components/ImageCarrousel";

type Props = {};

const Inicio = (props: Props) => {
  const images = [img1, img2, img3];
  //https://unsplash.com/pt-br/fotografias/rjSnhPy3bxI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
  //https://unsplash.com/pt-br/fotografias/a4z8GRkVSUM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
  //https://unsplash.com/pt-br/fotografias/a4z8GRkVSUM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

  return (
    <main>
      <ImageCarousel images={images} />
    </main>
  );
};

export default Inicio;
