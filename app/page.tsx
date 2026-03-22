"use client";

import About from "@/components/sections/about/about";
import ContactUsSection from "@/components/sections/contact/contact-us-section";
import RequestCallback from "@/components/sections/contact/request-callback";
import Footer from "@/components/sections/footer";
// import AlternateHero from "@/components/sections/hero/alternate-hero";
import Hero from "@/components/sections/hero/hero";
import Navbar from "@/components/sections/navbar";
import ServiceSection from "@/components/sections/services/service-section";
import OurTeamSection from "@/components/sections/team/our-team-section";
import Testimonials from "@/components/sections/testimonial/testimonials";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
    });
  });
  return (
    <div className="relative">
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* <AlternateHero /> */}
          <Hero />
          <About />
          <ServiceSection />
          <OurTeamSection />
          <Testimonials />
          <ContactUsSection />
          <RequestCallback />
          <Footer />
        </div>
      </div>
    </div>
  );
}
