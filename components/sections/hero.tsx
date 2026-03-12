"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { HERO_LIST } from "@/lib/constant";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { ScrollSmoother } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: "767px" });
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
          src="/images/backgrounds/background-8.jpg"
          alt="bhaktapur-dental-clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/50 backdrop-blur-sm" />
      </div>

      <div className="z-10 flex flex-col xl:flex-row h-full w-full px-4 xl:px-28 py-20">
        <div className="flex flex-col justify-between flex-1">
          <div className="text-5xl xl:text-6xl 2xl:text-[84px] font-bold h-full xl:flex-1 flex items-center">
            <h1
              id="hero-title"
              className="text-center xl:text-left w-full leading-15 lg:leading-20 2xl:leading-25"
            >
              Brighten Your <span className="text-primary">Smile</span> Today
            </h1>
          </div>
          <div className="flex flex-1 justify-center mx-auto xl:mx-0 hero-pop">
            <div className="2xl:flex-4 flex flex-col justify-end gap-6 lg:gap-3 2xl:gap-6">
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col gap-5">
                {HERO_LIST.map((list) => (
                  <div key={list.id} className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {list.icon}
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-white font-semibold text-sm xl:text-md">
                        {list.title}
                      </h3>

                      <p className="text-neutral-300 text-xs lg:text-sm leading-relaxed">
                        {list.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-2"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 justify-end h-full px-0 xl:pl-32 hero-pop">
          <p className="text-md lg:text-[20px] xl:text-[28px] 2xl:text-[42px] xl:leading-9 2xl:leading-12 text-center xl:text-left">
            {isMobile
              ? "Comfortanble dental care for a healthier, brighter smile"
              : "Get Ready for treatments that won't hurt and a smile you'll totally adore!"}
          </p>
          <div className="flex w-full justify-center xl:justify-start">
            <Link href={'#contact'}
              onClick={(e) => {
                e.preventDefault();

                const smoother = ScrollSmoother.get();
                smoother?.scrollTo('#contact', true, "top top");
              }}>
              <Button
                size={"lg"}
                className="bg-primary rounded-full text-md relative cursor-pointer"
              >
                Contact Us
                <div className="bg-primary rounded-full w-10 xl:flex justify-center items-center absolute -right-7 h-full hidden">
                  <ArrowUpRight stroke="#ffffff" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
