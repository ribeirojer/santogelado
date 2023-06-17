import GalleryItem from "@/components/GalleryItem";
import Header from "@/components/Header";
import { galleryItems } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <>
      <Header></Header>
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Nature (16 images)</h2>
                <p>
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
                <Link className="cta-btn" href="/contato">
                  Available for hire
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section id="gallery" className="gallery">
          <div className="container mx-auto pb-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryItems.map((item, index) => (
                <GalleryItem
                  key={item.imageUrl}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  currentIndex={index}
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
    </>
  );
};

export default Gallery;
