import Header from "@/components/Header";
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
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-1.jpg"
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-2.jpg"
                      title="Gallery 2"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-3.jpg"
                      title="Gallery 3"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-4.jpg"
                      title="Gallery 4"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-5.jpg"
                      title="Gallery 5"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-6.jpg"
                      title="Gallery 6"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-7.jpg"
                      title="Gallery 7"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-8.jpg"
                      title="Gallery 8"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-9.jpg"
                      title="Gallery 9"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-10.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-10.jpg"
                      title="Gallery 10"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-11.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-11.jpg"
                      title="Gallery 11"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-12.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-12.jpg"
                      title="Gallery 12"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-13.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-13.jpg"
                      title="Gallery 13"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-14.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-14.jpg"
                      title="Gallery 14"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-15.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-15.jpg"
                      title="Gallery 15"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="assets/img/gallery/gallery-16.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-16.jpg"
                      title="Gallery 16"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
