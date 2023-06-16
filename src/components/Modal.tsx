import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  closeModal: () => void;
};

const Modal = ({ imageUrl, closeModal }: Props) => {
  return (
    <section
      onClick={closeModal}
      className="fixed z-20 top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 px-4 py-5"
    >
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt=""
        className="w-full h-full object-contain"
      />
    </section>
  );
};

export default Modal;
