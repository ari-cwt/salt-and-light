"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// --- CUSTOM MODAL COMPONENT ---
const Modal = ({
  isOpen,
  onClose,
  title,
  description,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md border-gray-800 text-gray-800 hover:bg-gray-100 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
// --------------------------------------------------------

export default function WhatWeDo() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: "corporate",
      title: "Event Organizer",
      description:
        "Kami menangani setiap detail acara Anda dari awal hingga akhir — perencanaan, koordinasi, dan eksekusi yang mulus. Baik itu pertemuan korporat, pernikahan, atau perayaan pribadi, tim kami memastikan semuanya berjalan lancar, membebaskan Anda untuk menikmati momen tersebut.",
    },
    {
      id: "weddings",
      title: "Decoration",
      description:
        "Tim dekorasi kreatif kami mengubah ruang biasa menjadi pengalaman luar biasa. Dari tema elegan hingga konsep modern, kami merancang suasana visual yang mencerminkan visi Anda dan memikat setiap tamu.",
    },
    {
      id: "concerts",
      title: "Craft",
      description:
        "Kami berspesialisasi dalam membuat tampilan produk khusus yang menonjolkan kisah dan estetika merek Anda. Setiap elemen — mulai dari bahan hingga tata letak — dirancang untuk meningkatkan visibilitas, keterlibatan, dan presentasi keseluruhan produk Anda.",
    },
    {
      id: "private",
      title: "Workshop",
      description:
        "Kami merancang dan mengelola lokakarya (workshop) yang menarik dan menghidupkan ide melalui pengalaman langsung. Mulai dari sesi kreatif hingga pelatihan profesional, lokakarya kami dibangun untuk menginspirasi, mendidik, dan menghubungkan peserta dengan cara yang bermakna.",
    },
  ];

  return (
    <section
      className={`${roboto.className} bg-primary text-gray-900 w-full md:py-24 px-6 md:px-12 md:min-h-[480px] mb-12 relative overflow-hidden`}
    >
      {/* CSS DECORATIONS REMOVED per request */}

      <div className="max-w-6xl px-2 mx-auto relative z-10">
        <div className="mb-10">
          {/* UPDATED HEADER: mb-4 for mobile spacing, md:mb-0 removes spacing on desktop */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:-mb-8 flex items-center gap-20">
            APA YANG KAMI LAKUKAN
            {/* DOODLE IMAGE */}
            <Image
              src="/arrow.svg" // Best Practice: Use absolute path for public assets
              alt="Decoration arrow"
              width={100}
              height={80}
              // FIX: Hidden on mobile (default) and displayed as flex on medium screens and up
              className="object-contain hidden md:flex md:translate-y-16"
            />
          </h2>
          <p className={`${roboto.className} italic max-w-2xl text-gray-600`}>
            Kami menawarkan layanan manajemen acara dan produksi kreatif lengkap
            untuk menjadikan setiap momen tak terlupakan — dari konsep hingga
            eksekusi.
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-between gap-4 md:gap-24 md:mt-32">
          {services.map((service) => (
            <div key={service.id}>
              <button
                onClick={() => setActiveModal(service.id)}
                className="
                  text-sm px-4 py-2 
                  md:text-base md:py-3 md:px-5 rounded-full border border-gray-800 text-gray-800 bg-transparent 
                  transition-all duration-300 ease-in-out
                  hover:bg-primary hover:text-black hover:border-black 
                  hover:shadow-md hover:shadow-gray-400/50 
                  cursor-pointer
                "
              >
                {service.title}
              </button>

              <Modal
                isOpen={activeModal === service.id}
                onClose={() => setActiveModal(null)}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
