import Card from "@/components/Card";
import Header from "@/components/Header";
import { cards } from "@/utils/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <Header></Header>
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <div className="container text-justify pt-28 mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Nossos Serviços
          </h1>
          <p className="italic py-3 mb-8 text-center">
            Nossa equipe de bartenders experientes está pronta para fornecer
            drinks deliciosos e personalizados para sua festa ou evento
            especial.
          </p>
        </div>
        <section className="p-8">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
          <div className="container mx-auto">
            <h2 className="text-xl font-bold mb-4 text-justify ">
              Estamos sempre prontos para atender às solicitações individuais,
              recomendando drinks de acordo com as preferências de cada pessoa e
              garantindo que todos se sintam bem acolhidos e satisfeitos durante
              o evento.
            </h2>
          </div>
        </section>
        <div className="flex flex-col gap-4  items-center justify-center  pb-24 container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Gostou?</h2>
          <a
            href="https://api.whatsapp.com/send?phone=5547999554798&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-md"
          >
            Entre em contato
          </a>
        </div>
        <a
          target="_blank"
          rel="external"
          className="whats"
          href="https://api.whatsapp.com/send?phone=5547999554798&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
        >
          <Image
            src={"/WhatsApp.png"}
            className="logo"
            alt="WhatsApp-logo"
            width={50}
            height={50}
          />
        </a>
      </main>
    </>
  );
};

export default Services;
