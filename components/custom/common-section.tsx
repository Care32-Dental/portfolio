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
  subtitle,
  description,
  imageSource,
  objectPosition,
  align = "left",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  /** Small eyebrow label rendered above the title */
  subtitle?: string;
  description?: string;
  imageSource?: string;
  objectPosition?: string;
  screenHeight?: boolean;
  /** Text alignment for the header block. Defaults to "left". */
  align?: "left" | "center";
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const isCenter = align === "center";

  useGSAP(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Subtitle eyebrow fades + slides up
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // 2. Title: clip-path wipe + lift, word by word
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll<HTMLSpanElement>(".word");
      if (words.length > 0) {
        tl.from(
          words,
          {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            y: isMobile ? 16 : 24,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.1,
          },
          subtitleRef.current ? "-=0.25" : "0"
        );
      }
    }

    // 3. Accent bar scales in from left
    if (accentRef.current) {
      tl.from(
        accentRef.current,
        {
          scaleX: 0,
          transformOrigin: isCenter ? "center" : "left",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // 4. Description fades up
    if (descRef.current) {
      tl.from(
        descRef.current,
        {
          opacity: 0,
          y: 10,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [isMobile, imageSource]);

  // Split title into individually-animatable word spans
  const renderTitle = (text: string) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="word inline-block"
        // preserve spacing between words
        style={{ marginRight: "0.25em" }}
      >
        {word}
      </span>
    ));

  return (
    <div
      id={id}
      className={cn(
        "relative lg:px-16 xl:px-30 py-8 md:py-12 xl:py-16 scroll-mt-40 overflow-hidden",
        className
      )}
    >
      {/* Background image */}
      {imageSource && (
        <div className="absolute inset-0 -z-50">
          <Image
            src={imageSource}
            alt=""
            fill
            priority
            className={`object-cover ${objectPosition ?? ""}`}
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
        </div>
      )}

      {/* Header block */}
      {(title || subtitle || description) && (
        <div
          ref={headerRef}
          className={cn(
            "md:mb-12 text-center px-4 lg:px-0",
            isCenter ? "text-center" : "text-left"
            
          )}
        >
          {/* Eyebrow subtitle */}
          {subtitle && (
            <p
              ref={subtitleRef}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3",
                isCenter && "mx-auto"
              )}
              // style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {subtitle}
            </p>
          )}

          {/* Main title with ghost echo behind */}
          {title && (
            <div className="relative inline-block">
              {/* Ghost / outlined echo layer */}
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-0 select-none",
                  "uppercase font-extrabold tracking-tighter",
                  "text-3xl lg:text-5xl",
                  "text-transparent leading-none",
                  // // outlined stroke via webkit
                  // "[--ghost-color:theme(colors.teal.100)]",
                  // "[-webkit-text-stroke:1.5px_var(--ghost-color)]",
                  // // offset slightly for depth
                  // "translate-x-[3px] translate-y-[3px]"
                )}
              >
                {title}
              </span>

              {/* Real title */}
              <h1
                ref={titleRef}
                className={cn(
                  "relative uppercase font-extrabold tracking-tighter",
                  "text-3xl lg:text-5xl",
                  "text-primary leading-none"
                )}
              >
                {renderTitle(title)}
              </h1>
            </div>
          )}

          {/* Accent bar */}
          {title && (
            <div
              ref={accentRef}
              className={cn(
                "mt-4 flex items-center gap-2",
                isCenter && "justify-center"
              )}
            >
              <span className="h-1 w-14 rounded-full bg-primary block" />
              <span className="h-1 w-6 rounded-full bg-primary/70 block" />
              <span className="h-1 w-4 rounded-full bg-primary/40 block" />
            </div>
          )}

          {/* Description */}
          {description && (
            <p
              ref={descRef}
              className={cn(
                "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl",
                isCenter && "mx-auto"
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}