"use client";

import CommonSection from "@/components/custom/common-section";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OUR_TEAM } from "@/lib/constant";
import TeamCard from "./team-card";

export default function OurTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".team-card");

      gsap.set(cards, { opacity: 0, y: 40 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "80% bottom",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <CommonSection id="team" title="get to know us" imageSource="/images/backgrounds/background-3.jpg">
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 py-10"
      >
        {OUR_TEAM.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </CommonSection>
  );
}
