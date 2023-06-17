import GalleryItem from "@/components/GalleryItem";
import Header from "@/components/Header";
import { galleryItems } from "@/utils/data";
import { useEffect, useState } from "react";
import ServicesSection from "@/components/ServicesSection";
import Whatsapp from "@/components/Whatsapp";
import ButtonLink from "@/components/ButtonLink";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 4000;
  const items = galleryItems;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === items.length - 4) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [items]);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const getItemByIndex = (index: number) => {
    const itemIndex = (currentIndex + index) % items.length;
    return items[itemIndex];
  };

  return (
    <>
      <Header></Header>
      <main className="pt-[112px] w-full">
        <section className="container mx-auto text-center px-4 my-4 md:my-12">
          <h1 className="text-4xl font-bold mb-4">
            Somos a Santo Gelado Drinks
          </h1>
          <p className="italic text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
            uma empresa de bartenders profissionais que fornece serviços de
            drinks personalizados para festas e eventos especiais.
          </p>
          <ButtonLink>TENHO INTERESSE</ButtonLink>
        </section>
        {/* <button
            onClick={goToPrevSlide}
            className="absolute z-10 top-[50%] left-[10px]"
          >
            &lt;
          </button> */}
        <section className="container flex flex-col gap-4 md:flex-row w-full h-full items-center justify-center mx-auto my-16 px-4">
          {[0, 1, 2, 3].map((index) => (
            <GalleryItem
              key={index}
              currentIndex={currentIndex + index}
              imageUrl={getItemByIndex(index).imageUrl}
              imageAlt={getItemByIndex(index).imageAlt}
            />
          ))}
        </section>
        {/* <button
            onClick={goToNextSlide}
            className="absolute z-10 top-[50%] right-[10px]"
          >
            &gt;
          </button> */}
      </main>
      <ServicesSection></ServicesSection>
      <CallToAction></CallToAction>
      <Whatsapp></Whatsapp>
    </>
  );
}
