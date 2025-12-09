import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20datang%20dari%20website%20dan%20tertarik%20untuk%20mengorganisir%20sebuah%20acara.";

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us via WhatsApp"
      className="group fixed bottom-6 right-6 z-50
             flex items-center
             bg-green-500 hover:bg-green-600 text-white
             rounded-full shadow-lg
             transition-colors duration-200
             pl-[68px] md:pl-[82px]
             pr-5 md:pr-6 py-3 md:py-3"
    >
      {/* Floating circle — follows parent hover via group-hover */}
      <div
        className="
      absolute left-0 top-1/2 -translate-y-1/2
      rounded-full bg-green-500 group-hover:bg-green-600
      border-4 border-white
      w-14 h-14 md:w-[70px] md:h-[70px]
      z-50 flex items-center justify-center
      shadow-md
      transition-colors duration-200
    "
      >
        {/* Icon scales inside fixed-size container so it won't push text */}
        <FaWhatsapp className="w-[65%] h-[65%] transform transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Text — no scaling so no shift on hover */}
      <span className="text-white text-[13px] md:text-lg font-semibold">
        Hubungi Kami
      </span>
    </Link>
  );
};
