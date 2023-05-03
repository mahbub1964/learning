import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: {
    id: string;
    src: StaticImageData;
    alt: string;
  }[];
}

const ImageViewer = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  useEffect(()=>{
    setSelectedImage(images[0])
  },[images])
  return (
    <div className="flex-1 flex flex-col items-center md:items-start md:flex-row gap-2">
      <div className="flex md:flex-col gap-2 order-last md:order-none">
        {images.map((image) => {
          return (
            <button
              className={`w-10 h-10 rounded-lg overflow-hidden border border-neutral-500 ${
                selectedImage.id === image.id
                  ? "border-skyAccent border-2"
                  : "hover:border-black "
              }`}
              key={image.id}
              onClick={() => setSelectedImage(image)}
            >
              <Image src={image.src} alt={image.alt} />
            </button>
          );
        })}
      </div>
      <div className="flex-1">
        <Image src={selectedImage.src} alt={selectedImage.alt} />
      </div>
    </div>
  );
};

export default ImageViewer;
