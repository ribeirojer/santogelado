import CallToAction from "@/components/CallToAction";
import Card from "@/components/Card";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Whatsapp from "@/components/Whatsapp";
import { cards } from "@/utils/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <Header></Header>
      <main className="mt-[112px]">
        <ServicesSection></ServicesSection>
      </main>
      <CallToAction></CallToAction>
      <Whatsapp></Whatsapp>
    </>
  );
};

export default Services;
