"use client";

import React, { useState } from "react";
import Link from "next/link";
// Only keeping the necessary imports (Zap, Users, Camera, Mail for navItems)
import { Zap, Users, Camera, Mail } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about", icon: Users },
  { name: "Portfolio", href: "#portfolio", icon: Camera },
  { name: "Reviews", href: "#reviews", icon: Zap },
  {
    name: "Contact",
    href: "https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20datang%20dari%20website%20dan%20tertarik%20untuk%20mengorganisir%20sebuah%20acara.",
    icon: Mail,
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2, 4);

  // This function is only attached to the mobile <button> (which is the logo)
  const handleLogoClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const LogoContent = (
    <div
      className={`flex h-20 w-20 items-center justify-center transition-transform duration-300 hover:scale-105 p-1`}
    >
      <Image
        src="/logo.webp"
        alt="SALT & LIGHT Logo"
        width={72}
        height={72}
        priority
      />
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md bg-primary bg-opacity-95 backdrop-blur-sm py-2">
      <div className="mx-auto flex h-20 items-center justify-between px-4 lg:px-8 max-w-7xl">
        {/* --- 1. Center Logo/Button (Always Centered) --- */}
        <div className="absolute left-1/2 -translate-x-1/2">
          {/* A. Desktop Link (Logo is Link to Home) */}
          <Link href="/" aria-label="Home" className="hidden md:block">
            {LogoContent}
          </Link>

          {/* B. Mobile Button (Logo is Menu Toggle) */}
          <button
            onClick={handleLogoClick}
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation"
          >
            {LogoContent}
          </button>
        </div>

        {/* --- 2. Left Navigation Links (Desktop Only) --- */}
        <div className="hidden md:flex flex-1 justify-end space-x-20 pr-40 text-gray-700">
          {leftItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-black transition duration-200 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* --- 3. Right Navigation Links (Desktop Only & Mobile Filler) --- */}
        <div className="flex flex-1 justify-start space-x-8 pl-12 text-gray-700">
          {/* Desktop Right Links */}
          <div className="hidden md:flex space-x-20">
            {rightItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-black transition duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Placeholder: This div is empty on purpose to push the items to the edge. */}
          <div className="md:hidden w-12" aria-hidden="true">
            {/* Empty space filler */}
          </div>
        </div>
      </div>

      {/* Off-canvas menu (Dropdown) */}
      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden absolute w-full bg-primary shadow-xl"
        >
          <div className="flex flex-col items-center py-4">
            {/* Explicit Home Link in Dropdown (as requested) */}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-gray-700 font-medium hover:text-black"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-gray-700 font-medium hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
