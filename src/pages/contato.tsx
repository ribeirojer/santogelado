import Header from "@/components/Header";
import Image from "next/image";
import React, { useRef, useState } from "react";

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
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError((prevState) => ({
      ...prevState,
      name: "",
      email: "",
      emailRegex: "",
      message: "",
      general: "",
    }));

    if (!data.name) {
      setError((prevState) => ({
        ...prevState,
        name: "Por favor digite seu nome.",
      }));
      nameRef.current?.focus();
      return;
    }
    if (!data.email) {
      setError((prevState) => ({
        ...prevState,
        email: "Por favor digite seu e-mail.",
      }));
      emailRef.current?.focus();
      return;
    }
    if (data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError((prevState) => ({
        ...prevState,
        emailRegex: "Por favor digite um e-mail válido.",
      }));
      emailRef.current?.focus();
      return;
    }
    if (!data.message) {
      setError((prevState) => ({
        ...prevState,
        message: "Por favor digite sua mensagem.",
      }));
      messageRef.current?.focus();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setData({
        name: "",
        email: "",
        message: "",
      });
      setSuccess(true);
      setLoading(false);
    }, 1000);

    // sendFormToServer()
    //   .then(() => {
    //   })
    //   .catch((error) => {
    //     // setError((prevState) => ({
    //     //   ...prevState,
    //     //   general:
    //     //     "Ocorreu um erro ao enviar o formulário, tente novamente mais tarde.",
    //     // }));
    //     setSuccess(true);
    //     setLoading(false);
    //   });
  };

  return (
    <>
      <Header></Header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="container text-center pt-28 mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Contato</h1>
          <p className="italic text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
            Você está prestes a dar um passo importante para tornar o seu evento
            verdadeiramente memorável.
          </p>
          <p className="italic text-xl md:text-2xl leading-relaxed mb-12">
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
          <div className="flex flex-col items-start gap-4 text-xl">
            <div className="flex items-center gap-4">
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
                <a href="https://goo.gl/maps/Qn8Xz8VtQkxbh6t7A">
                  Rua XV de Novembro, 2000, Joinville
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-yellow-500"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
              <div>
                <h3 className="font-bold">E-mail:</h3>
                <a href="mailto:contato@santogeladodrinks.com">
                  contato@santogeladodrinks.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-yellow-500"
              >
                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
              </svg>
              <div>
                <h3 className="font-bold">Telefone:</h3>
                <a
                  href="https://api.whatsapp.com/send?phone=5547999554798&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  (47)99955-4798
                </a>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col items-start w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="mb-2">
              Nome:
            </label>
            <input
              type="text"
              name="name"
              ref={nameRef}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full form-control text-black placeholder:text-gray-700 mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              id="name"
              placeholder="Digite seu nome"
            />
            {error.name && (
              <p className="text-red-500 -mt-4 mb-4">{error.name}</p>
            )}
            <label htmlFor="emal" className="mb-2">
              E-mail:
            </label>
            <input
              type="text"
              value={data.email}
              ref={emailRef}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full form-control text-black placeholder:text-gray-700 mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
            {error.email && (
              <p className="text-red-500 -mt-4 mb-4">{error.email}</p>
            )}
            {error.emailRegex && (
              <p className="text-red-500 -mt-4 mb-4">{error.emailRegex}</p>
            )}
            <label htmlFor="message" className="mb-2">
              Mensagem:
            </label>
            <textarea
              value={data.message}
              ref={messageRef}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="w-full form-control text-black placeholder:text-gray-700 mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              name="message"
              rows={5}
              placeholder="Digite sua mensagem"
            ></textarea>
            {error.message && (
              <p className="text-red-500 -mt-4 mb-4">{error.message}</p>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Enviar Mensagem
              </button>
            </div>
            {loading && <div className="text-center">Carregando...</div>}
            {error.general && (
              <p className="text-red-500 -mt-4 mb-4">{error.general}</p>
            )}
            {success && <p className="text-green-500">Mensagem enviada!</p>}
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
