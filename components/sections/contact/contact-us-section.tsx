"use client";

import CommonSection from "@/components/custom/common-section";
import { CONTACT_INFORMATION } from "@/lib/constant";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";
import whatsapp from "@/public/images/social-media/whatsapp-icon.svg";
import Image from "next/image";

// ─── individual contact row card ───────────────────────────────────────────
function ContactCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex items-start gap-3 py-3">
      {/* Icon */}
      <div className="mt-0.5 text-primary/70 group-hover:text-primary transition-colors">
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70 mb-0.5">
          {label}
        </p>
        <div className="text-sm text-slate-700 leading-snug">{children}</div>
      </div>
    </div>
  );
}

// ─── main section ───────────────────────────────────────────────────────────
export default function ContactUsSection() {
  return (
    <CommonSection
      id="contact"
      title="contact info"
      subtitle="get in touch with us"
      description="Reach out for appointments, inquiries, or support—we're here to help you every step of the way."
      className="relative"
      imageSource="/images/backgrounds/background-3.jpg"
      objectPosition="top"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-stretch p-4">
        {/* ── LEFT: contact info ─────────────────────────────────────── */}
        <div className="flex flex-col">
          <ContactCard
            icon={<MapPin size={17} strokeWidth={2} />}
            label="Visit Our Clinic"
          >
            {CONTACT_INFORMATION.address}
          </ContactCard>

          <ContactCard
            icon={<Clock size={17} strokeWidth={2} />}
            label="Opening Hours"
          >
            {CONTACT_INFORMATION.openingHours}
          </ContactCard>

          <ContactCard
            icon={<Phone size={17} strokeWidth={2} />}
            label="Call Us"
          >
            <div className="flex flex-wrap gap-x-3 gap-y-0.5">
              {CONTACT_INFORMATION.contact.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </ContactCard>

          <ContactCard
            icon={
              <Image src={whatsapp} alt="WhatsApp" height={17} width={17} />
            }
            label="WhatsApp"
          >
            <a
              href={`https://wa.me/${CONTACT_INFORMATION.whatsapp}`}
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              {CONTACT_INFORMATION.whatsapp}
            </a>
          </ContactCard>

          <ContactCard icon={<Mail size={17} strokeWidth={2} />} label="Email">
            <a
              href={`mailto:${CONTACT_INFORMATION.email}`}
              className="hover:text-primary transition-colors break-all"
            >
              {CONTACT_INFORMATION.email}
            </a>
          </ContactCard>

          {/* ── Social links ─────────────────────────────────────────── */}
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-3 px-1">
              Follow Us
            </p>
            <div className="grid grid-cols-3 gap-3">
              {CONTACT_INFORMATION.socialMediaLinks.map((media) => (
                <a
                  key={media.id}
                  href={`https://${media.link}`}
                  target="_blank"
                  className="contact-animate group flex flex-col items-center text-center gap-2 p-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm shadow-[0_2px_12px_0_rgba(20,100,80,0.06)] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_4px_20px_0_rgba(20,100,80,0.12)] hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-100 transition-colors group-hover:bg-teal-100">
                    <Image
                      src={media.imageSrc}
                      alt={media.name}
                      height={22}
                      width={22}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800 leading-tight">
                      {media.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                      {media.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: map ────────────────────────────────────────────── */}
        <div className="contact-animate flex flex-col gap-3">
          {/* Clinic name badge above map */}
          <div className="flex gap-2 items-center justify-between rounded-xl border border-white/60 bg-white/60 backdrop-blur-sm px-5 py-3 shadow-[0_2px_12px_0_rgba(20,100,80,0.07)]">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <MapPin size={15} className="text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-tight">
                  Care 32 Dental Clinic
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {CONTACT_INFORMATION.address}
                </p>
              </div>
            </div>
            {/* <div className="flex"> */}
              <a
                href={`https://maps.app.goo.gl/PhArMqF3k7ebXddA7`}
                target="_blank"
                className="flex h-fit w-fit items-center gap-1 rounded-md bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary ring-1 ring-primary/40 transition"
              >
                <ExternalLink size={11} />
                Directions
              </a>
            {/* </div> */}
          </div>

          {/* Map iframe */}
          <div className="relative overflow-hidden rounded-xl shadow-[0_8px_32px_0_rgba(20,100,80,0.13)] ring-1 ring-white/60 flex-1 min-h-80 lg:min-h-0">
            <iframe
              src={CONTACT_INFORMATION.locationSrc}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
            {/* subtle inner shadow overlay for depth */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]" />
          </div>
        </div>
      </div>
    </CommonSection>
  );
}
