"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

type GalleryImage = {
  src: string;
  alt: string;
  id: number;
};

function ScrollRow({ images }: { images: GalleryImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const scrollByAmount = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        dir === "left"
          ? -scrollRef.current.clientWidth * 0.8
          : scrollRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      const walk = (e.clientX - startX) * 1.5;
      scrollRef.current.scrollLeft = startScrollLeft - walk;
    };

    const onMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, startX, startScrollLeft]);

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      {canScrollLeft && (
        <button
          onClick={() => scrollByAmount("left")}
          aria-label="Scroll left"
          className="
            absolute left-2 top-[45%] md:top-1/2 -translate-y-1/2 z-10
            bg-white/60 backdrop-blur
            rounded-full p-3 md:p-2
          "
        >
          <ChevronLeft className="w-7 h-7 md:w-6 md:h-6 text-gray-800" />
        </button>
      )}

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
          onClick={() => scrollByAmount("right")}
          aria-label="Scroll right"
          className="
            absolute right-2 top-[45%] md:top-1/2 -translate-y-1/2 z-10
            bg-white/60 backdrop-blur
            rounded-full p-3 md:p-2
          "
        >
          <ChevronRight className="w-7 h-7 md:w-6 md:h-6 text-gray-800" />
        </button>
      )}

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        style={{ scrollSnapType: isDragging ? "none" : "x mandatory" }}
        className="
          flex gap-4 pb-6 overflow-x-auto
          px-4 md:px-0
          scroll-pl-4 md:scroll-pl-0
          snap-x no-scrollbar
          select-none
          cursor-grab active:cursor-grabbing
        "
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="
              flex-none relative
              w-[60vw] h-[85vw]
              md:w-[300px] md:h-[450px]
              rounded-2xl overflow-hidden
              snap-start md:snap-center
              shadow-lg
            "
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 60vw, 300px"
              className="object-cover select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DynamicGallery({
  isShowHeader = true,
}: {
  isShowHeader?: boolean;
}) {
  const images: GalleryImage[] = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    src: `/dekorasi/dekorasi-${i + 1}.webp`,
    alt: `Salt & Light Event ${i + 1}`,
  }));

  const rowSize = Math.ceil(images.length / 3);

  return (
    <section
      id="dekorasi"
      className={`
    ${roboto.className}
    w-full
    self-stretch
    min-h-screen
    bg-primary/50
    py-20
    scroll-mt-24
  `}
    >
      <div className="max-w-6xl mx-auto px-6">
        {isShowHeader && (
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              DEKORASI KAMI
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Tahan atau klik tombol panah untuk lihat lainnya.
              <em> Drag or tap arrows to explore each row.</em>
            </p>
          </div>
        )}

        <div className="space-y-6">
          <ScrollRow images={images.slice(0, rowSize)} />
          <ScrollRow images={images.slice(rowSize, rowSize * 2)} />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
