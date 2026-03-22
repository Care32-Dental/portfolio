"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { HERO_LIST } from "@/lib/constant";

gsap.registerPlugin(SplitText);

export default function AlternateHero() {
  useGSAP(() => {
    const heroSplit = new SplitText("#hero-title", {
      type: "chars, words",
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.02,
    });

    gsap.fromTo(
      ".hero-pop",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.8,
        ease: "expo.inOut",
        delay: 0.2,
      },
    );
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          // background 4 or 8
          src="/images/backgrounds/background-8.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="z-10 flex flex-col xl:flex-row h-full w-full px-4 xl:px-28 py-20">
        {/* Mobile: natural stacked flow. Desktop: unchanged split layout */}
        <div className="flex flex-col xl:justify-between xl:flex-1">
          {/* Title */}
          <div className="text-5xl xl:text-6xl 2xl:text-[84px] font-bold xl:h-full xl:flex-1 flex items-center pt-8 xl:pt-0">
            <h1 id="hero-title" className="text-center xl:text-left w-full">
              Brighten Your <span className="text-primary">Smile</span> Today
            </h1>
          </div>

          {/* List items — on mobile sit directly below title */}
          <div className="xl:flex gap-3 xl:flex-1 xl:justify-end hero-pop hidden mt-8 xl:mt-0">
            <div className="2xl:flex-4 flex flex-col gap-4 xl:justify-end lg:gap-3 2xl:gap-6 w-full xl:w-auto">
              {HERO_LIST.map((list) => (
                <div key={list.id} className="flex gap-3 items-start">
                  <div className="bg-neutral-200 h-fit p-2 rounded-lg shrink-0">
                    {list.icon && list.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-extrabold">{list.title}</h3>
                    <span className="text-base text-neutral-300">
                      {list.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-2 hidden xl:block"></div>
          </div>

          {/* Tagline + CTA — mobile only, follows list items naturally */}
          <div className="xl:hidden hero-pop mt-10 flex flex-col gap-5 pb-4">
            <p className="text-lg text-center leading-relaxed">
              Get Ready for treatments that won&nbsp;t hurt and a smile
              you&nbsp;ll totally adore!
            </p>
            <div className="flex w-full justify-center">
              <Button
                size={"lg"}
                className="bg-primary rounded-full text-md relative cursor-pointer px-10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop-only right column — hidden on mobile to avoid duplication */}
        <div className="hidden xl:flex flex-1 flex-col gap-3 justify-end h-full px-0 xl:pl-32 hero-pop">
          <p className="text-lg lg:text-[20px] xl:text-[28px] 2xl:text-[42px] xl:leading-9 2xl:leading-12 text-center xl:text-left">
            Get Ready for treatments that won&nbsp;t hurt and a smile
            you&nbsp;ll totally adore!
          </p>
          <div className="flex w-full justify-center xl:justify-start">
            <Button
              size={"lg"}
              className="bg-primary rounded-full text-md relative cursor-pointer"
            >
              Contact Us
              <div className="bg-primary rounded-full w-10 xl:flex justify-center items-center absolute -right-7 h-full hidden">
                <ArrowUpRight stroke="#ffffff" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
