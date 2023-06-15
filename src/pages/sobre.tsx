import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Header></Header>
      <main id="main" className="fade delay-1500">
        <div className="container text-justify pt-28 mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Quem Somos</h2>
          <p className="mb-8">
            A Santo Gelado Drinks é uma empresa de bartenders profissionais que
            fornece serviços de drinks personalizados e deliciosos para festas e
            eventos especiais. Nossa equipe experiente é apaixonada por
            proporcionar aos nossos clientes uma experiência única e
            inesquecível com nossos serviços exclusivos.
          </p>
          <p className="mb-8">
            Fundada em 2015, a Santo Gelado Drinks começou como um pequeno
            negócio local em Joinville e desde então expandiu-se para atender
            clientes em toda a região. Nossa filosofia é simples: oferecer
            serviços de alta qualidade com um toque pessoal.
          </p>
        </div>
        <section className="flex flex-col lg:flex-row gap-4  items-center justify-center  py-16 container mx-auto">
          <Image
            src="/assets/337517281_765356411781760_6443080553769560433_n.jpg"
            className="img-fluid"
            width={500}
            height={500}
            alt="foto do proprietário"
          />
        </section>
        <div className="container text-justify mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Nossa Equipe</h2>
          <p className="italic py-3 mb-8">
            Nossa equipe é composta por bartenders experientes e talentosos que
            são especializados em criar drinks personalizados para cada evento.
          </p>

          <p className="mb-8">
            Estamos sempre atualizados com as últimas tendências em coquetelaria
            e nos esforçamos para garantir que cada drink seja perfeito em
            sabor, aparência e apresentação.
          </p>
          <p className="mb-8">
            Acreditamos que nossa equipe é a chave para o sucesso da Santo
            Gelado Drinks.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ul>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-yellow-500"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
                <strong>Telefone:</strong>
                <span className="ml-2">(47) 99955-4798</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-yellow-500"
                >
                  <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                </svg>
                <strong>Endereço:</strong>
                <span className="ml-2">
                  Rua XV de Novembro, 2000, Joinville
                </span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-yellow-500"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
                <strong>E-mail:</strong>
                <span className="ml-2">contato@santogeladodrinks.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-yellow-500"
                >
                  <path d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zM12 14.197 8.535 9h6.93L12 14.197zM18.132 5l-1.333 2H7.201L5.868 5h12.264z"></path>
                </svg>
                <strong>Disponíveis:</strong>
                <span className="ml-2">Sim</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-4  items-center justify-center  py-16 container mx-auto">
          <Image
            src="/assets/330998051_1597833774054542_6406062385927904103_n.jpg"
            className="img-fluid"
            width={500}
            height={500}
            alt="foto da equipe 1"
          />
          <Image
            src="/assets/347379795_234178869231485_5614191031193606236_n.jpg"
            className="img-fluid"
            width={500}
            height={500}
            alt="foto da equipe 2"
          />
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

export default About;
