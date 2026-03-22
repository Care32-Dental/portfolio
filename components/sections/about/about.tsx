"use client";

import CommonSection from "../../custom/common-section";
// import AboutCarousel from "./about-carousel";
import AboutUs from "./about-content";
import AboutGallery from "./about-gallery";

export default function About() {
  return (
    <CommonSection
      title="about us"
      id="about"
      imageSource="/images/backgrounds/background-1.jpg"
      subtitle="what we stand for"
      description="Dedicated to delivering compassionate, affordable and high-quality care with modern techniques and a patient-first approach."
    >
      <div className="grid px-4 grid-cols-1 lg:grid-cols-2 place-items-center gap-16">
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
