"use client";

import CommonSection from "@/components/custom/common-section";
import { CONTACT_INFORMATION } from "@/lib/constant";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import whatsapp from "@/public/images/social-media/whatsapp-icon.svg";
import Image from "next/image";

export default function ContactUsSection() {
  return (
    <CommonSection
      id="contact"
      title="contact information"
      className="relative"
      // imageSource="/images/backgrounds/background-5.jpg"
      // objectPosition="top"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-10 px-4">
        {/* LEFT SIDE INFO */}
        <div className="flex flex-col gap-6">
          {/* Address */}
          <div className="contact-animate flex gap-4 items-start">
            <MapPin className="text-primary mt-1" />
            <div>
              <p className="font-semibold">Visit Our Clinic</p>
              <p className="text-muted-foreground text-sm">
                {CONTACT_INFORMATION.address}
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="contact-animate flex gap-4 items-start">
            <Clock className="text-primary mt-1" />
            <div>
              <p className="font-semibold">Opening Hours</p>
              <p className="text-muted-foreground text-sm">
                {CONTACT_INFORMATION.openingHours}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-animate flex gap-4 items-start">
            <Phone className="text-primary mt-1" />
            <div>
              <p className="font-semibold flex">Call Us</p>
              <div className="flex gap-2">
                {CONTACT_INFORMATION.contact.map((phone) => (
                  <p key={phone} className="text-muted-foreground text-sm">
                    {phone}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="contact-animate flex gap-4 items-start">
            <Image src={whatsapp} alt="fb" height={25} width={25} />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-muted-foreground text-sm">
                {CONTACT_INFORMATION.whatsapp}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-animate flex gap-4 items-start">
            <Mail className="text-primary mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground text-sm">
                {CONTACT_INFORMATION.email}
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
            {CONTACT_INFORMATION.socialMediaLinks.map((media) => (
              <a
                key={media.id}
                href={`https://${media.link}`}
                target="_blank"
                className="contact-animate flex flex-col items-center text-center gap-1 p-3 rounded-xl border border-primary/10 bg-white/70 backdrop-blur hover:-translate-y-1 hover:shadow-md transition"
              >
                <Image
                  src={media.imageSrc}
                  alt={media.name}
                  height={26}
                  width={26}
                />

                <span className="text-xs font-semibold">{media.name}</span>

                <span className="text-[10px] text-muted-foreground">
                  {media.description}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="contact-animate w-full">
          <iframe
            src={CONTACT_INFORMATION.locationSrc}
            className="w-full h-100 lg:h-125 rounded-2xl shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </CommonSection>
  );
}
