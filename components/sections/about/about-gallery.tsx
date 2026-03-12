import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ABOUT_CAROUSEL_IMAGES } from "@/lib/constant";
import Image from "next/image";
import { useState } from "react";

export default function AboutGallery() {
  const images = ABOUT_CAROUSEL_IMAGES.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2 rounded-2xl overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden cursor-pointer transition-all duration-300 ${
            activeIndex === idx ? "brightness-110 scale-[1.02]" : "hover:brightness-105"
          }`}
          onMouseEnter={() => setActiveIndex(idx)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <AspectRatio ratio={4 / 3}>
            <Image
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="object-cover transition-transform duration-500 hover:scale-105"
              fill
            />
            <div
              className={`absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300`}
            />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}