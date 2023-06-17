import Image from "next/image";
import React from "react";

type Props = {};

const Whatsapp = (props: Props) => {
  return (
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
  );
};

export default Whatsapp;
