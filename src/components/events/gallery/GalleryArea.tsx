"use client";

import Image from "next/image";
import ImagePopup from "@/modals/ImagePopup";
import { useState } from "react";
import { galleryPhotos } from "@/data/GalleryData";

export default function GalleryArea() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const slides = galleryPhotos.map(photo => ({
    src: photo.image.src,
    alt: photo.alt,
    width: photo.image.width,
    height: photo.image.height,
  }));

  return (
    <>
      <div className="td-gallery-area pt-140 pb-125">
        <div className="container">
          <div className="row">
            {galleryPhotos.map((photo, index) => (
              <div key={photo.id} className="col-lg-4 col-md-6">
                <figure className="mb-30">
                  <button
                    type="button"
                    className="d-block w-100 p-0 border-0 bg-transparent"
                    aria-label={`Agrandir : ${photo.caption}`}
                    onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                      style={{ width: "100%", height: "auto", borderRadius: 16 }}
                    />
                  </button>
                  <figcaption className="pt-3">{photo.caption}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && <ImagePopup images={slides} isOpen={isOpen} setIsOpen={setIsOpen} photoIndex={photoIndex} />}
    </>
  );
}
