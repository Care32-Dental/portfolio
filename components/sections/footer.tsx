"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFORMATION, NAV_MENUS } from "@/lib/constant";
import { ScrollSmoother } from "gsap/all";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Clinic Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Care 32 Dental
          </h3>

          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            Providing high quality dental care with modern technology and a
            patient-focused approach. We are committed to helping you maintain a
            healthy and confident smile.
          </p>

          <div className="flex gap-4 mt-4">
            {CONTACT_INFORMATION.socialMediaLinks.map((media) => (
              <a
                key={media.id}
                href={`https://${media.link}`}
                target="_blank"
                className="hover:scale-110 transition"
              >
                <Image
                  src={media.imageSrc}
                  alt={media.name}
                  width={22}
                  height={22}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="text-sm">
            {NAV_MENUS.map((nav) => (
              <Link
                href={nav.link}
                key={nav.id}
                onClick={(e) => {
                  e.preventDefault();

                  const smoother = ScrollSmoother.get();
                  smoother?.scrollTo(nav.link, true, "-8% top");
                }}
              >
                <li className="py-px hover:text-primary">{nav.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>

          <ul className="space-y-2 text-sm">
            <li>Dental Cleaning</li>
            <li>Teeth Whitening</li>
            <li>Root Canal Treatment</li>
            <li>Orthodontic Braces</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm">
            <div className="flex gap-2 items-start">
              <MapPin size={16} className="mt-1 text-primary" />
              <span>{CONTACT_INFORMATION.address}</span>
            </div>

            <div className="flex gap-2 items-center">
              <Phone size={16} className="text-primary" />
              <span>{CONTACT_INFORMATION.contact[0]}</span>
            </div>

            <div className="flex gap-2 items-center">
              <Mail size={16} className="text-primary" />
              <span>{CONTACT_INFORMATION.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 text-center text-sm py-6 text-neutral-500">
        © {new Date().getFullYear()} Care 32 Dental. All rights reserved.
      </div>
    </footer>
  );
}
