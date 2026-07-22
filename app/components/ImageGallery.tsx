"use client";

import { useState } from "react";

type ImageGalleryProps = {
  images: string[];
  name: string;
};

export default function ImageGallery({
  images,
  name,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <img
        src={selectedImage}
        alt={name}
        className="h-[500px] w-full rounded-2xl object-cover"
      />

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 ${
              selectedImage === image
                ? "border-white"
                : "border-gray-700"
            }`}
          >
            <img
              src={image}
              alt={`${name} view ${index + 1}`}
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}