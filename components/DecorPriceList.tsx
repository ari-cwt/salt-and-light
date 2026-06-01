"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const packages = [
  {
    name: "Basic",
    price: "Rp 3.000.000",
    tagline: "Cocok untuk acara sederhana & intimate",
    items: [
      "Backdrop sederhana (±2–3 meter) dari kain & bunga artificial",
      "1 meja dekorasi (meja tamu / cake table)",
      "2 area ruangan dengan dekor standar",
      "Instalasi & bongkar",
    ],
  },
  {
    name: "Silver",
    price: "Rp 5.000.000",
    tagline: "Untuk acara yang lebih rapi & estetik",
    items: [
      "Backdrop (±2–3 meter) dari kain & bunga artificial",
      "1 meja dekorasi (meja tamu / cake table)",
      "3 area ruangan dengan dekor standar",
      "Standing signage / welcome sign",
      "Properti dekor pendukung",
      "Instalasi & bongkar",
    ],
  },
  {
    name: "Gold",
    price: "Rp 8.000.000",
    tagline: "Tampilan lebih megah & eye-catching",
    items: [
      "Backdrop (±2–3 meter)",
      "Centerpieces long table (30–50 orang)",
      "Maks. 50 print table matt & coaster / menu card",
      "Welcome sign custom 70×40 cm",
      "Properti dekor lengkap",
      "3 titik dekorasi ruangan (standing)",
      "Instalasi & bongkar",
    ],
  },
  {
    name: "Platinum",
    price: "Rp 12.000.000",
    tagline: "Dekorasi full concept & eksklusif",
    items: [
      "Backdrop besar (±4 meter)",
      "Dekor balon / kain / artificial flowers premium",
      "Area dekor lengkap (stage, photospot, meja tamu)",
      "Welcome sign & detail dekor custom (70×40 cm)",
      "Centerpieces long table (30–50 orang)",
      "Maks. 50 print table matt & coaster / menu card",
      "Properti dekor premium",
      "Instalasi & bongkar",
    ],
  },
];

export default function DecorPricelistSection() {
  return (
    <section
      id="pricelist"
      className={`${inter.className} w-full bg-[#f5f3e6] py-20 scroll-mt-24`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col items-center md:items-start">
          <h2
            className={`${cormorant.className} text-5xl md:text-7xl font-bold mb-6 tracking-tight shine-text`}
          >
            DEKORASI PRICELIST
          </h2>
          <p className="text-gray-700 max-w-2xl text-lg leading-relaxed border-l-4 border-amber-400 pl-4 text-left italic">
            Sssttt… harga mulai dari{" "}
            <strong className="font-semibold">3 jutaan</strong>, kamu sudah bisa
            mendapatkan dekorasi cantik untuk event-mu.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              // p-[4px] determines the thickness of the always-on border
              className="relative overflow-hidden rounded-2xl p-[4px] group shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Static Background Color for the border */}
              <div className="absolute inset-0 bg-gray-300"></div>

              {/* BEST PRACTICE: Continuous Rotating Border
                This uses a conic gradient that spins from the absolute center of the card.
                It features two beams of amber light chasing each other. 
              */}
              <div className="absolute top-1/2 left-1/2 w-[250%] h-[250%] bg-[conic-gradient(transparent_0%,rgba(251,191,36,1)_25%,transparent_50%,rgba(251,191,36,1)_75%,transparent_100%)] animate-border-spin opacity-90"></div>

              <div className="relative z-10 flex flex-col h-full bg-[#f5f3e6] rounded-[12px] p-8 min-h-[520px]">
                {/* Top Section */}
                <div className="mb-8 border-b border-gray-300/60 pb-6">
                  <h3
                    className={`${cormorant.className} text-4xl font-bold mb-2 text-gray-900 tracking-wide`}
                  >
                    Paket {pkg.name}
                  </h3>
                  <p className="text-gray-600 italic mb-4">{pkg.tagline}</p>
                  <p className="text-3xl font-bold text-amber-600 tracking-tight">
                    {pkg.price}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 text-gray-800 flex-grow text-base">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* WHATSAPP CTA BUTTON */}
                <Link
                  href={`https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20tertarik%20dengan%20Paket%20Dekorasi%20${pkg.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-10 w-full md:w-5/6 mx-auto
                    inline-flex justify-center items-center gap-3
                    rounded-full px-6 py-4
                    font-semibold text-white text-[16px] tracking-wide
                    bg-[#25D366] 
                    transition-all duration-300
                    hover:scale-[1.03] hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40
                  "
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Konsultasi via WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* 1. H2 Title Shine Fix */
        .shine-text {
          color: transparent;
          background: linear-gradient(
            110deg,
            #111827 30%,
            #c9c9c9 45%,
            #c9c9c9 55%,
            #111827 70%
          );
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          /* Overall loop duration */
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 250% center;
          }
          /* Completes the sweep at 85% of the total time (3.4 seconds), 
             leaving only a tiny 15% (0.6 seconds) to rest before looping 
          */
          85%,
          100% {
            background-position: -50% center;
          }
        }

        /* 2. Continuous Conic Border Spin */
        .animate-border-spin {
          /* A slow 6-second rotation creates a luxurious glowing edge */
          animation: border-spin 6s linear infinite;
        }

        @keyframes border-spin {
          from {
            /* Keeps the gradient perfectly centered while rotating */
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
