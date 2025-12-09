import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/6281287696679?text=Halo%20Salt%20%26%20Light!%20Saya%20datang%20dari%20website%20dan%20tertarik%20untuk%20mengorganisir%20sebuah%20acara.";

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer" // Best practice for external links
      // Fixed positioning for the bottom right corner
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Contact us via WhatsApp"
    >
      {/* Using a simple SVG icon for the WhatsApp logo */}
      <FaWhatsapp size={50} />
    </Link>
  );
};
