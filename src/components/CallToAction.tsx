import React from "react";
import ButtonLink from "./ButtonLink";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className="flex flex-col gap-4  items-center justify-center  pb-24 container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Gostou?</h2>
      <ButtonLink>ENTRE EM CONTATO</ButtonLink>
    </div>
  );
};

export default CallToAction;
