"use client";

import CommonSection from "../../custom/common-section";
import Services from "./services";

export default function ServiceSection() {
  return (
    <CommonSection
      title="our services"
      subtitle="treatments tailored to your needs"
      description="From routine checkups to advanced procedures, we offer comprehensive solutions for every smile."
      id="services"
      // className="relative"
      // imageSource="/images/backgrounds/background-3.jpg"
    >
      <Services />
    </CommonSection>
  );
}
