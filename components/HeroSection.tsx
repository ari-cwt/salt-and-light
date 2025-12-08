import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const notoSerifDisplay = Noto_Serif_Display({
  // Renamed variable for clarity
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  // PENTING: Untuk performa terbaik, ganti URL ini dengan path ke gambar lokal di folder /public
  const images = [
    "/event-organizer.webp",
    "/dekorasi.webp",
    "/craft.webp",
    "/workshop.webp",
  ];

  const hover_texts = ["EVENT ORGANIZER", "DECORATION", "CRAFT", "WORKSHOP"];

  return (
    <section className="w-full text-center px-4 py-10 flex flex-col items-center mb-4">
      {/* Title */}
      <h1 className={`${notoSerifDisplay.className} text-6xl md:text-8xl mb-2`}>
        Salt & Light
      </h1>
      <h2
        className={`${roboto.className} italic text-lg md:text-xl text-gray-600 mb-9 mt-2`}
      >
        From vision to celebration, <br className="md:hidden" />{" "}
        <span className="hidden md:inline"> </span>
        we help you make it happen.
      </h2>

      {/* 2x2 Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mb-12">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden w-full aspect-4/3 min-h-40] group cursor-pointer"
          >
            <Link href="#portfolio" className="block w-full h-full">
              <Image
                src={src}
                // --- OPTIMIZATION 1 & 2: Priority and SEO-friendly Alt Text ---
                alt={`Salt & Light Jasa ${hover_texts[i]} di Jakarta`}
                fill
                priority={i === 0} // Set priority on the first image for LCP
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/50 text-white text-lg font-medium px-3 py-1 md:text-4xl tracking-wide lg:font-semibold lg:px-0 lg:py-0 w-full h-1/4 flex flex-col justify-center">
                  {hover_texts[i]}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Buttons - OPTIMIZED */}
      <div className="flex gap-12 md:gap-60 text-sm md:text-lg">
        {/* Our Work Button */}
        <Link
          href="#portfolio"
          className="px-6 py-2 border rounded-full border-gray-800 text-gray-800 bg-transparent transition-all duration-300 ease-in-out hover:bg-primary hover:text-black hover:border-black hover:shadow-md hover:shadow-gray-400/50 cursor-pointer"
        >
          Our Work
        </Link>

        {/* Contact Us Button (WhatsApp) */}
        <Link
          // Best Practice: Ensure number is clean (without spaces) for the URL
          href="https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20datang%20dari%20website%20dan%20tertarik%20untuk%20mengorganisir%20sebuah%20acara."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border rounded-full border-gray-800 text-gray-800 bg-transparent transition-all duration-300 ease-in-out hover:bg-primary hover:text-black hover:border-black hover:shadow-md hover:shadow-gray-400/50 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
