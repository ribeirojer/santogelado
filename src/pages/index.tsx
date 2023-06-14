import GalleryItem from "@/components/GalleryItem";
import { galleryItems } from "@/utils/data";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <section
          id="hero"
          className="hero flex flex-col justify-center items-center"
          data-aos="fade"
          data-aos-delay="1500"
        >
          <div className="container">
            <div className="row justify-center">
              <div className="col-lg-6 text-center">
                <h2 className="mb-4">
                  Somos a <span>Santo Gelado</span> Drinks
                </h2>
                <p className="mb-6">
                  uma empresa de bartenders profissionais que fornece serviços
                  de drinks personalizados e deliciosos para festas e eventos
                  especiais.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=554796059604&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
                  className="btn-get-started"
                >
                  tenho interesse
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="container mx-auto pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryItems.map((item) => (
                <GalleryItem
                  key={item.imageUrl}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  galleryTitle={item.galleryTitle}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <a
        target="_blank"
        rel="external"
        className="whats"
        href="https://api.whatsapp.com/send?phone=554796059604&amp;text=Olá,%20tudo%20bem?%20eu%20tenho%20interesse%20em%20um%20serviço%20da%20Santo%20Gelado"
      >
        <Image
          src={"/WhatsApp.png"}
          className="logo"
          alt="WhatsApp-logo"
          width={50}
          height={50}
        />
      </a>
    </>
  );
}
