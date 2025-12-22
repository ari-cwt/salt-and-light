import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
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
      className={`${roboto.className} w-full bg-primary/50 py-20 scroll-mt-24`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            DEKORASI PRICELIST
          </h2>
          <p className="italic text-gray-700 max-w-3xl">
            Sssttt… harga mulai dari <strong>3 jutaan</strong>, kamu sudah bisa
            mendapatkan dekorasi cantik untuk event-mu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="
                bg-primary/50
                rounded-2xl
                border-2 border-gray-400
                p-8
                flex flex-col
                min-h-[520px]
              "
            >
              {/* Top */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">Paket {pkg.name}</h3>
                <p className="text-gray-600 italic mb-2">{pkg.tagline}</p>
                <p className="text-xl font-semibold">Mulai {pkg.price}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 text-gray-700 flex-grow">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20tertarik%20dengan%20Paket%20Dekorasi."
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 mx-auto
                  mt-8
                  inline-flex justify-center items-center
                  rounded-full
                  px-6 py-3
                  font-medium
                  bg-[#e8e4cf]
                  text-gray-900
                  transition-all duration-300
                  hover:scale-[1.05]
                  hover:bg-[#ded9bd]
                  hover:shadow-lg hover:shadow-gray-400/50
                "
              >
                Konsultasi via WhatsApp
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
