"use client";
import { Roboto } from "next/font/google";
import Image from "next/image"; // ADDED Next.js Image component

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// Helper component to handle a single row of the scrolling marquee
const LogoMarqueeRow = ({
  logos,
  animationClass,
}: {
  logos: string[];
  animationClass: string;
}) => {
  // duplicate for seamless scroll (best practice for this effect)
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* NOTE: The actual animation logic (keyframes) for 
        'animate-scroll' and 'animate-scroll-reverse' must be 
        defined in your global CSS (e.g., globals.css or tailwind.config.js). 
      */}
      <div className={`flex flex-nowrap ${animationClass}`}>
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${animationClass}-${index}`}
            // Container size: w-40 (160px), h-24 (96px). mx-6 for spacing.
            className="shrink-0 w-40 h-24 mx-6 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`} // Better alt text for accessibility
              // Fixed dimensions based on container (w-40, h-24) to eliminate CLS
              width={160}
              height={96}
              // max-h-16 (64px) ensures the logo scales down cleanly within the 96px height
              className="max-h-16 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OurClients() {
  const logos = [
    "/clients/biore.webp",
    "/clients/femaledaily.webp",
    "/clients/guardian.webp",
    "/clients/lumeo.webp",
    "/clients/ponds.webp",
    "/clients/revlon.webp",
    "/clients/skintific.webp",
  ];

  return (
    <section
      // ALIGNMENT FIX: Added md:px-12 for consistent section padding
      className={`${roboto.className} bg-primary text-gray-900 w-full md:py-24 px-6 md:px-12 md:min-h-[480px] relative overflow-hidden`}
    >
      <div className="max-w-6xl px-2 mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-semibold mb-4">
          PELANGGAN KAMI
        </h2>

        <div className="space-y-8">
          {/* Row 1: Forward Scroll */}
          <LogoMarqueeRow logos={logos} animationClass="animate-scroll" />

          {/* Row 2: Reverse Scroll */}
          <LogoMarqueeRow
            logos={logos}
            animationClass="animate-scroll-reverse"
          />
        </div>
      </div>
    </section>
  );
}
