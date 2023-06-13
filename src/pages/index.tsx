import { Inter } from "next/font/google";
import GalleryItem from "@/components/GalleryItem";
import { galleryItems } from "@/utils/data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
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
                I'm <span>Jenny Wilson</span> a Professional Photographer from
                New York City
              </h2>
              <p className="mb-6">
                Blanditiis praesentium aliquam illum tempore incidunt debitis
                dolorem magni est deserunt sed qui libero. Qui voluptas amet.
              </p>
              <Link href="/contato" className="btn-get-started">
                Available for hire
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
}
