"use client";

import CommonSection from "../../custom/common-section";
import Services from "./services";

export default function ServiceSection() {
  return (
    <CommonSection
      title="what we offer"      
      id="services"
      // className="relative"
      // imageSource="/images/backgrounds/background-3.jpg"      
    >
      <Services />
    </CommonSection>
  );
}
