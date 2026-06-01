"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Synchronized Font Pairing
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export type GalleryMedia = {
  src: string;
  alt: string;
  id: number | string;
  eventName?: string;
  type: "image" | "video";
};

// [Embla Carousel ScrollRow component remains exactly the same]
function ScrollRow({
  items,
  onMediaClick,
}: {
  items: GalleryMedia[];
  onMediaClick: (media: GalleryMedia) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group">
      <button
        onClick={scrollPrev}
        aria-label="Scroll left"
        className="absolute left-2 top-[45%] md:top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur shadow-md rounded-full p-3 md:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-7 h-7 md:w-6 md:h-6 text-gray-800" />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Scroll right"
        className="absolute right-2 top-[45%] md:top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur shadow-md rounded-full p-3 md:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-7 h-7 md:w-6 md:h-6 text-gray-800" />
      </button>

      <div className="overflow-hidden px-4 md:px-0" ref={emblaRef}>
        <div className="flex pb-6 select-none cursor-grab active:cursor-grabbing">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_60vw] md:flex-[0_0_300px] min-w-0 mr-4 h-[85vw] md:h-[450px] relative"
            >
              <div
                onClick={() => onMediaClick(item)}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] hover:brightness-110 cursor-pointer"
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      className="object-cover w-full h-full pointer-events-none"
                      muted
                      playsInline
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-transparent transition duration-300">
                      <div className="bg-white/80 backdrop-blur rounded-full p-4 shadow-lg">
                        <Play
                          className="w-8 h-8 text-gray-900 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 60vw, 300px"
                    className="object-cover pointer-events-none"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DynamicGallery({
  items = [],
  isShowHeader = true,
}: {
  items?: GalleryMedia[];
  isShowHeader?: boolean;
}) {
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  const groupedItems = items.reduce(
    (groups, item) => {
      const eventName = item.eventName || "Koleksi Umum";
      if (!groups[eventName]) {
        groups[eventName] = [];
      }
      groups[eventName].push(item);
      return groups;
    },
    {} as Record<string, GalleryMedia[]>,
  );

  const portfolioSections = Object.entries(groupedItems);

  return (
    <section
      id="dekorasi"
      // Applied the global Inter font
      className={`${inter.className} w-full self-stretch min-h-screen bg-primary/50 py-20 scroll-mt-24`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SYNCHRONIZED HEADER */}
        {isShowHeader && (
          <div className="mb-20 text-center md:text-left flex flex-col md:items-start items-center">
            {/* Matches the H2 from DecorPriceList (Cormorant, 5xl to 7xl, shine-text) */}
            <h2
              className={`${cormorant.className} text-5xl md:text-7xl font-bold mb-6 tracking-tight shine-text`}
            >
              PORTFOLIO DEKORASI
            </h2>
            {/* Matches the P from DecorPriceList (text-gray-700, italic) */}
            <p className="text-gray-700 max-w-2xl text-lg leading-relaxed border-l-4 border-amber-400 pl-4 text-left italic">
              Lihat berbagai momen berharga yang telah kami percantik. Scroll
              gallery ke kanan atau kiri untuk melihat lebih banyak gambar.
            </p>
          </div>
        )}

        <div className="space-y-20">
          {portfolioSections.map(([eventName, eventItems], index) => (
            <div key={eventName} className="relative pt-6 first:pt-0">
              {index !== 0 && (
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gray-300 to-transparent overflow-hidden mb-12">
                  <div className="w-2/3 h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-border-slide"></div>
                </div>
              )}

              {/* Applied Cormorant to section titles to match the premium feel */}
              <h3
                className={`${cormorant.className} text-3xl md:text-4xl font-bold text-gray-900 mb-8 px-4 md:px-0 flex items-center gap-4`}
              >
                <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
                {eventName}
              </h3>

              <ScrollRow items={eventItems} onMediaClick={setSelectedMedia} />
            </div>
          ))}

          {portfolioSections.length === 0 && (
            <p className="text-center text-gray-500 italic py-10">
              Belum ada foto/video dekorasi yang diunggah.
            </p>
          )}
        </div>
      </div>

      {/* FULL-SCREEN MODAL */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white z-50 p-2 hover:bg-white/20 rounded-full transition"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <div
            className="relative w-full h-full max-h-[90vh] flex items-center justify-center cursor-pointer"
            onClick={() => setSelectedMedia(null)}
          >
            {selectedMedia.type === "video" ? (
              <div
                className="relative w-full h-full flex justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                />
              </div>
            ) : (
              <Image
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            )}
          </div>
        </div>
      )}

      {/* CUSTOM ANIMATIONS */}
      <style jsx global>{`
        /* Hide Scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }

        /* 1. Header Text Reflection Animation (Synchronized with DecorPriceList) */
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

        /* 2. Animated Border Slide (Between gallery sections) */
        @keyframes border-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        .animate-border-slide {
          animation: border-slide 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
