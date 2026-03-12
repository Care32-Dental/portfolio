"use client";

import { ABOUT_CONTENT } from "@/lib/constant";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>(".about-animate");

        gsap.set(elements, { opacity: 0, y: 40 });

        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-6 lg:gap-8 pt-6">

      {/* Experience Badge */}
      <div className="about-animate">
        <Badge className="bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
          <Stethoscope className="mr-2 h-4 w-4" />
          {ABOUT_CONTENT.years_of_experience}
        </Badge>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="about-animate rounded-2xl border border-primary/10 bg-white/60 backdrop-blur-md p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
            <HeartHandshake size={18} />
            Our Mission
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {ABOUT_CONTENT.mission}
          </p>
        </div>

        <div className="about-animate rounded-2xl border border-primary/10 bg-white/60 backdrop-blur-md p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
            <Sparkles size={18} />
            Our Vision
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {ABOUT_CONTENT.vision}
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ABOUT_CONTENT.highlights.map((item) => (
          <div
            key={item}
            className="about-animate flex items-start gap-3 rounded-xl bg-white/60 backdrop-blur-md border border-primary/10 p-3 shadow-sm"
          >
            <div className="bg-primary/10 text-primary p-2 rounded-lg">
              <ShieldCheck size={16} />
            </div>
            <span className="text-sm 2xl:text-base text-neutral-700">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Info Strip */}
      <div className="about-animate flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-neutral-700">
        <div className="flex items-center gap-2">
          <MapPin className="text-primary" size={16} />
          {ABOUT_CONTENT.address}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="text-primary" size={16} />
          {ABOUT_CONTENT.timings}
        </div>
      </div>

      {/* CTA */}
      <div className="about-animate flex justify-center lg:justify-start">
        <Button className="rounded-full px-6 py-5 text-base font-medium cursor-pointer uppercase">
          {ABOUT_CONTENT.cta_text}
        </Button>
      </div>
    </div>
  );
}
