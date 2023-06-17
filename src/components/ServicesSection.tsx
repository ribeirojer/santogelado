import { cards } from "@/utils/data";
import React from "react";
import Card from "./Card";
import Image from "next/image";
import Whatsapp from "./Whatsapp";
import CallToAction from "./CallToAction";

type Props = {};

const ServicesSection = (props: Props) => {
  return (
    <div id="main" data-aos="fade" data-aos-delay="1500">
      <div className="container text-center px-4 mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Nossos Serviços</h1>
        <p className="italic text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
          Nossa equipe de bartenders experientes está pronta para fornecer
          drinks deliciosos e personalizados para sua festa ou evento especial.
        </p>
      </div>
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="container mx-auto text-center">
          <p className="italic text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
            Estamos sempre prontos para atender às solicitações individuais,
            recomendando drinks de acordo com as preferências de cada pessoa e
            garantindo que todos se sintam bem acolhidos e satisfeitos durante o
            evento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
