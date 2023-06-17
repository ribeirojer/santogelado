import React from "react";

type Props = {
  children?: React.ReactNode;
  secondary?: boolean;
};

const ButtonLink = ({ children, secondary }: Props) => {
  const color = secondary
    ? "bg-white hover:bg-black text-black hover:text-white border border-white text-base font-medium py-3 px-6"
    : "bg-[#d8c417] hover:bg-black text-black hover:text-[#d8c417] border border-[#d8c417] font-bold py-4 px-8";
  const number = "5547999554798";
  const message =
    "Olá, tudo bem? Eu tenho interesse em um serviço da Santo Gelado";
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${number}&amp;text=${message}`}
      target="_blank"
      aria-label={`link ${children}`}
      title={`link ${children}`}
      data-testid="button-link"
      data-cy="button-link"
      rel="noopener noreferrer"
      className={`${color} rounded-full`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
