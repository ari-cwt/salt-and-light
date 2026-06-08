// app/dekorasi/page.tsx
import fs from "fs/promises";
import path from "path";
import DecorPricelistSection from "@/components/DecorPriceList";
import ImageGallery from "@/components/ImageGallery";
import FloatingPriceButton from "@/components/FloatingPriceButton"; // Import the new component
import { ArrowLeft } from "lucide-react";
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

      {/* The auto-hiding button is perfectly encapsulated here */}
      <FloatingPriceButton />
    </div>
  );
}
