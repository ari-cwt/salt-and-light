"use client";

import React from "react";
import Link from "next/link";

// Import social icons from the Font Awesome set in react-icons
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

// 1. Define the Interface for Props
// React.ElementType is the standard way to type a prop that receives a component (like an icon)
interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
  label: string;
}

// 2. Define the SocialIcon component with the explicit type
const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, label }) => (
  // Best practice: target="_blank" must include rel="noopener noreferrer" for security
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-700 hover:text-gray-400 transition-colors duration-200"
  >
    <Icon className="h-6 w-6" />
  </Link>
);

const Footer: React.FC = () => {
  const contact = {
    address:
      "Puri Harvest South Jakarta Blok A no 9, jakarta selatan, Jakarta Raya, 12630, Indonesia",
    email: "info@saltandlightevent.com",
    phone: "+62 812 8769 6679",
    whatsapp: "+62 812 8769 6679",
  };

  return (
    // Use a dark background (bg-gray-700) for contrast
    <footer className="w-full bg-primary text-gray-700 pt-16 mt-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-600">
        {/* --- 1. FOLLOW US --- */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6">FOLLOW US</h3>
          <div className="flex space-x-4">
            {/* Using the new Fa (Font Awesome) icons */}
            <SocialIcon
              Icon={FaInstagram}
              href="https://instagram.com/saltandlight"
              label="Instagram"
            />
            <SocialIcon
              Icon={FaYoutube}
              href="https://youtube.com/saltandlight"
              label="YouTube"
            />
            <SocialIcon
              Icon={FaFacebook}
              href="https://facebook.com/saltandlight"
              label="Facebook"
            />
            <SocialIcon
              Icon={FaTwitter}
              href="https://twitter.com/saltandlight"
              label="Twitter"
            />
          </div>
        </div>

        {/* --- 2. CONTACT US --- */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6">CONTACT US</h3>
          <div className="space-y-2 text-sm">
            <p>Salt & Light Event Organizer</p>
            <p>{contact.address}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${contact.phone}`} className="hover:underline">
                {contact.phone}
              </a>
            </p>
            {/* Best practice: link WhatsApp using the wa.me protocol */}
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20datang%20dari%20website%20dan%20tertarik%20untuk%20mengorganisir%20sebuah%20acara."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contact.whatsapp}
              </a>
            </p>
          </div>
        </div>

        {/* --- 3. FIND US (Map Embed) --- */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-6">FIND US</h3>

          <div className="w-full h-48 bg-primary rounded-lg overflow-hidden shadow-lg">
            {/* NOTE: Replace the src attribute with your actual Google Maps embed URL. */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5390.395601897905!2d106.80533947618825!3d-6.3489041936409265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe601200f5f%3A0x5333bc7243d2d87d!2sPuri%20Harvest%20South%20Jakarta!5e1!3m2!1sen!2sid!4v1765178834017!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map showing company location in Jakarta"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full py-6 text-center text-gray-400 text-sm">
        © 2025 Salt & Light Event Organizer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
