import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const contato = (props: Props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    emailRegex: "",
    message: "",
    general: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!data.name) {
      setError((prevState) => ({
        ...prevState,
        name: "Por favor digite seu nome.",
      }));
      return;
    }
    if (!data.email) {
      setError((prevState) => ({
        ...prevState,
        email: "Por favor digite seu e-mail.",
      }));
      return;
    }
    if (!data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setError((prevState) => ({
        ...prevState,
        emailRegex: "Por favor digite um e-mail válido.",
      }));
      return;
    }
    if (!data.message) {
      setError((prevState) => ({
        ...prevState,
        message: "Por favor digite sua mensagem.",
      }));
      return;
    }

    setLoading(true);
    sendFormToServer()
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        setError((prevState) => ({
          ...prevState,
          general:
            "Ocorreu um erro ao enviar o formulário, tente novamente mais tarde.",
        }));
        setLoading(false);
      });
  };

  return (
    <>
      <Header></Header>
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <div className="container text-justify pt-28 mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Contato</h1>
          <p className="italic py-3 mb-8 text-center">
            Você está prestes a dar um passo importante para tornar o seu evento
            verdadeiramente memorável. Nós, da Santo Gelado Drinks, estamos aqui
            para ajudá-lo a transformar sua festa ou evento especial em uma
            experiência única e inesquecível.
          </p>
          <p>
            Entre em contato através do formulário ou envie um e-mail ou ainda
            você pode entrar em contato através do nosso{" "}
            <a
              href="https://api.whatsapp.com/send?phone=5547999554798&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-green-600"
            >
              WhatsApp
            </a>
          </p>
        </div>
        <section className="container py-16 mx-auto flex flex-col items-center justify-between gap-8 md:flex-row pb-16">
          <div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-yellow-500 mr-2"
              >
                <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
              </svg>
              <div>
                <h3 className="font-bold">Localização:</h3>
                <span>Rua XV de Novembro, 2000, Joinville</span>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-yellow-500 mr-2"
              >
                <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
              </svg>
              <div>
                <h3 className="font-bold">E-mail:</h3>
                <span>contato@santogeladodrinks.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-yellow-500 mr-2"
              >
                <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
              </svg>
              <div>
                <h3 className="font-bold">Telefone:</h3>
                <span>(47)99955-4798</span>
              </div>
            </div>
          </div>
          <form className="flex flex-col items-center w-1/2" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full form-control mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              placeholder="Digite seu nome"
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full form-control mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
            <textarea
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="w-full form-control mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              rows={5}
              placeholder="Digite sua mensagem"
            ></textarea>
            {error.message && <p className="text-red-500">{error.message}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Enviar Mensagem
              </button>
            </div>
            {loading && <div className="text-center">Loading</div>}
            {error.general && <p className="text-red-500">{error.general}</p>}
            {success && <p className="text-green-500">Mensagem enviada</p>}
          </form>
        </section>
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

export default contato;

function sendFormToServer(): Promise<void> {
  throw new Error("Function not implemented.");
}
