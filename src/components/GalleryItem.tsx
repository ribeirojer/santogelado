import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageUrl: string;
  imageAlt: string;
  galleryTitle: string;
};

const GalleryItem = ({ imageUrl, imageAlt, galleryTitle }: Props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <Image
          src={imageUrl}
          className="img-fluid"
          alt={imageAlt}
          width={500}
          height={500}
        />
        <div className="gallery-links flex items-center justify-center">
          <Link
            href={imageUrl}
            title={galleryTitle}
            className="glightbox preview-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
              <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
            </svg>
          </Link>
          <Link href="/galeria-unico" className="details-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="m12 19.24-4.95-4.95-1.41 1.42L12 22.07l6.36-6.36-1.41-1.42L12 19.24zM5.64 8.29l1.41 1.42L12 4.76l4.95 4.95 1.41-1.42L12 1.93 5.64 8.29z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
