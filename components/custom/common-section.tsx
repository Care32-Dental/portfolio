"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function CommonSection({
  children,
  id,
  className,
  title,
  description,
  imageSource,
  objectPosition,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  description?: string;
  imageSource?: string;
  objectPosition?: string;
  screenHeight?: boolean;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); 
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  useGSAP(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
        xPercent: isMobile ? -50 : -20,
        opacity: 0,
        duration: 2,
      });
    }
  }, [imageSource]);

  return (
    <div
      id={id}
      className={cn(
        "relative lg:px-16 xl:px-30 py-8 md:py-12 xl:py-16 scroll-mt-40 overflow-hidden",
        className,
      )}
    >
      {imageSource && (
        <div ref={imageRef} className="absolute inset-0 -z-50">
          <Image
            src={imageSource}
            alt=""
            fill
            priority
            className={`object-cover ${objectPosition ? objectPosition : ""}`}
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
        </div>
      )}
      <div ref={titleRef}>
        {title && (
          <h1 className="uppercase text-primary font-extrabold text-3xl lg:text-5xl text-center lg:text-left tracking-tighter">
            {title}
          </h1>
        )}
        {description && (
          <span className="text-muted-foreground">{description}</span>
        )}
      </div>
      {children}
    </div>
  );
}