import fs from "fs/promises";
import path from "path";
import DecorPricelistSection from "@/components/DecorPriceList";
import ImageGallery from "@/components/ImageGallery";
import { ArrowLeft, ArrowDown } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

export type GalleryMedia = {
  id: string;
  src: string;
  alt: string;
  eventName: string;
  type: "image" | "video";
};

async function fetchDecorMedia(): Promise<GalleryMedia[]> {
  const mediaList: GalleryMedia[] = [];
  const baseDir = path.join(process.cwd(), "public", "dekorasi");

  try {
    const items = await fs.readdir(baseDir, { withFileTypes: true });

    for (const item of items) {
      if (item.isDirectory()) {
        const eventName = item.name;
        const folderPath = path.join(baseDir, eventName);
        const files = await fs.readdir(folderPath);

        for (const file of files) {
          if (file.startsWith(".")) continue;
          const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(file);

          mediaList.push({
            id: `${eventName}-${file}`,
            src: `/dekorasi/${eventName}/${file}`,
            alt: `Dekorasi ${eventName} - ${file}`,
            eventName: eventName,
            type: isVideo ? "video" : "image",
          });
        }
      } else {
        if (item.name.startsWith(".")) continue;
        const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(item.name);

        mediaList.push({
          id: `umum-${item.name}`,
          src: `/dekorasi/${item.name}`,
          alt: `Dekorasi Umum - ${item.name}`,
          eventName: "Koleksi Umum",
          type: isVideo ? "video" : "image",
        });
      }
    }
  } catch (error) {
    console.error("Error reading local public directory:", error);
    return [];
  }

  return mediaList;
}

export default async function Decoration() {
  const media = await fetchDecorMedia();

  return (
    <div className="flex min-h-screen flex-col w-full relative">
      {/* BACK BUTTON */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/home"
          className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full shadow-md text-gray-800 text-sm font-medium hover:bg-amber-200 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <ImageGallery items={media} isShowHeader={true} />

      <DecorPricelistSection />

      {/* UPGRADED FLOATING ACTION TAB
        Fixed to the exact middle right (top-1/2 -translate-y-1/2).
        Docked flush against the right edge (right-0) with a flat side and rounded left corners (rounded-l-xl).
      */}
      <a
        href="#pricelist"
        className="
          fixed top-1/8 md:top-1/2 right-0 -translate-y-1/2 z-50 
          flex flex-col items-center gap-3 
          bg-[#f5f3e6] text-gray-900
          py-6 px-3 
          rounded-l-2xl 
          shadow-[-5px_0_20px_rgba(0,0,0,0.15)]
          border-y border-l border-gray-300
          transition-transform duration-300 
          hover:-translate-x-2
          group
        "
        aria-label="Scroll to Price List"
      >
        <span
          className="font-bold text-sm tracking-[0.2em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Lihat Harga
        </span>
        <ArrowDown className="w-5 h-5 text-amber-500 group-hover:translate-y-2 transition-transform duration-300" />
      </a>
    </div>
  );
}
