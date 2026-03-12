import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ABOUT_CAROUSEL_IMAGES } from "@/lib/constant";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function AboutCarousel() {  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {ABOUT_CAROUSEL_IMAGES.map((img, idx) => (
            <CarouselItem key={idx}>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={img}
                  alt=""
                  className="rounded-md object-cover"
                  fill
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="text-muted-foreground pt-4 text-center text-sm flex gap-2 justify-center items-center">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-1.5 bg-muted-foreground rounded-full transition-all duration-300 ${current - 1 === idx ? "scale-125 bg-primary" : ""}`}
          ></div>
        ))}
      </div>
    </>
  );
}
