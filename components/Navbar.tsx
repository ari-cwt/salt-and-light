"use client";

import React, { useState } from "react";
import Link from "next/link";
// Added Gift icon for the new Decor Pricelist item
import { Zap, Users, Camera, Mail, Menu, X, Gift } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "About", href: "/home/#about", icon: Users },
  { name: "Portfolio", href: "/home/#portfolio", icon: Camera },
  // BEST PRACTICE: Use absolute path + hash to guarantee it works from any page
  { name: "Katalog Sewa", href: "/dekorasi#pricelist", icon: Gift },
  { name: "Pricing", href: "#pricelist", icon: Zap },
  {
    name: "Contact",
    href: "https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20datang%20dari%20website%20dan%20tertarik%20untuk%20mengorganisir%20sebuah%20acara.",
    icon: Mail,
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Safely split the 5 items: 2 on the left, 3 on the right
  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2, 5);

  const handleLogoClick = () => {
    setIsMenuOpen((s) => !s);
  };

  const handleBurgerClick = () => {
    setIsMenuOpen((s) => !s);
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
      <div className="relative mx-auto flex h-20 items-center justify-between px-4 lg:px-8 max-w-7xl">
        {/* --- 1. Center Logo/Button (Always Centered) --- */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/home" aria-label="Home" className="hidden md:block">
            {LogoContent}
          </Link>

          <button
            onClick={handleLogoClick}
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation"
            type="button"
          >
            {LogoContent}
          </button>
        </div>

        {/* --- 2. Left Navigation Links (Desktop Only) --- */}
        {/* Adjusted spacing to safely fit more items without overlapping the center logo */}
        <div className="hidden md:flex flex-1 justify-end space-x-10 lg:space-x-16 pr-24 lg:pr-32 text-gray-700">
          {leftItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-amber-600 transition duration-200 text-sm font-medium whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* --- 3. Right Navigation Links (Desktop Only & Mobile Filler) --- */}
        {/* Adjusted padding to balance the left side */}
        <div className="flex flex-1 justify-start pl-24 lg:pl-32 text-gray-700 items-center">
          <div className="hidden md:flex space-x-10 lg:space-x-16">
            {rightItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-amber-600 transition duration-200 text-sm font-medium whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden w-12" aria-hidden="true">
            {/* Empty space filler */}
          </div>

          <button
            onClick={handleBurgerClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Off-canvas menu (Dropdown) */}
      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden absolute w-full bg-primary shadow-xl"
        >
          <div className="flex flex-col items-center py-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-gray-700 font-medium hover:text-amber-600"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-gray-700 font-medium hover:text-amber-600"
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
