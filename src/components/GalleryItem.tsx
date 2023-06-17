import Image from "next/image";
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Props = {
  imageUrl: string;
  imageAlt: string;
  currentIndex: number;
};

const GalleryItem = ({ imageUrl, imageAlt, currentIndex }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="slider"
      className="w-full h-[288px] md:h-[244px] lg:h-[300px] xl:h-[320px] 2xl:h-[360px] "
    >
      <TransitionGroup>
        <CSSTransition key={currentIndex} timeout={500} classNames="slide">
          <Image
            src={imageUrl}
            className="object-cover rounded-lg"
            alt={imageAlt}
            width={500}
            height={500}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default GalleryItem;
