import Image from "next/image";
import React from "react";
import ButtonLink from "./ButtonLink";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg border">
        <Image
          src={imageSrc}
          alt="image"
          className="w-full"
          width={500}
          height={500}
        />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {title}
          </h3>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {description}
          </p>
          <ButtonLink secondary>Quero saber mais!</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
