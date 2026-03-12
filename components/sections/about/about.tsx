"use client";

import CommonSection from "../../custom/common-section";
// import AboutCarousel from "./about-carousel";
import AboutUs from "./about-content";
import AboutGallery from "./about-gallery";

export default function About() {
  return (
    <CommonSection title="why choose us" id="about" className="px-4" imageSource="/images/backgrounds/background-1.jpg">
      <div className="grid lg:py-12 grid-cols-1 lg:grid-cols-2 place-items-center gap-16">
        <div className="w-full h-full">
          <AboutUs />
        </div>
        <div className="w-full">
          {/* <AboutCarousel /> */}
          <AboutGallery />
        </div>
      </div>
    </CommonSection>
  );
}
