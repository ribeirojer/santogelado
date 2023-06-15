import React from "react";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg border">
        <img src={imageSrc} alt="image" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {title}
          </h3>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {description}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5547999554798&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link quero saber mais"
            className="text-black bg-white hover:text-white hover:border-primary hover:bg-black inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
          >
            Quero saber mais!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
