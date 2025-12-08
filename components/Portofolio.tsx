"use client";

import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";

// Define the fonts for use in the component
const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// --- Data Structure for Media Items (MUTED PROPERTY ADDED HERE) ---
type MediaType = "image" | "video" | "youtube";

interface MediaItem {
  type: MediaType;
  src: string; // src for image/video, video ID for youtube
  alt: string;
  // Video-specific props for optimization
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  poster?: string;
  muted?: boolean; // <-- CORRECTED: Muted property is now included
}

const portfolioData: MediaItem[] = [
  // Grid 1 (Big Item) - Local Image
  {
    type: "image",
    src: "/decoration-1.webp",
    alt: "Grand Event Setup",
  },

  // Grid 2: 2x2 nested grid (2 images, 2 videos) - Local Assets
  {
    type: "image",
    src: "/decoration-2.webp",
    alt: "Grand Event Setup",
  },
  {
    type: "image",
    src: "/decoration-3.webp",
    alt: "Grand Event Setup",
  },
  {
    type: "image",
    src: "/decoration-4.webp",
    alt: "Grand Event Setup",
  },
  {
    type: "image",
    src: "/decoration-5.webp",
    alt: "Grand Event Setup",
  },

  // Grid 3: Same as Grid 2 - Local Assets & YouTube
  {
    type: "image",
    src: "/decoration-6.webp",
    alt: "Grand Event Setup",
  },
  {
    type: "image",
    src: "/decoration-7.webp",
    alt: "Grand Event Setup",
  },
  {
    type: "image",
    src: "/decoration-8.webp",
    alt: "Grand Event Setup",
  },
  {
    type: "image",
    src: "/decoration-9.webp",
    alt: "Grand Event Setup",
  },

  // Grid 4 (Big Video) - Local Video
  {
    type: "video",
    src: "/salt.mp4",
    alt: "Event Montage",
    controls: false,
    autoplay: true,
    loop: true,
    muted: true,
  },
];

// --- Reusable Portofolio Item Component ---
const PortofolioItem = ({ item }: { item: MediaItem }) => {
  // Destructuring updated to include muted
  const {
    type,
    src,
    alt,
    controls = true,
    loop = false,
    autoplay = false,
    poster,
    muted,
  } = item;
  const commonClasses = "object-cover w-full h-full";
  const hoverClasses =
    "group-hover:scale-105 transition-transform duration-500";

  let content;

  if (type === "image") {
    content = (
      <Image
        src={src}
        alt={alt}
        fill
        className={`${commonClasses} ${hoverClasses}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={src === portfolioData[0].src}
      />
    );
  } else if (type === "video") {
    content = (
      <video
        src={src}
        controls={controls}
        loop={loop}
        // Use the muted prop if explicitly set, otherwise infer based on controls
        muted={muted ?? !controls}
        autoPlay={autoplay || !controls}
        playsInline
        poster={poster}
        className={`${commonClasses} ${hoverClasses}`}
      />
    );
  } else if (type === "youtube") {
    // For YouTube, use the embed URL and standard attributes
    content = (
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        title={alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={commonClasses}
      ></iframe>
    );
  }

  return (
    // Wrapper maintains aspect ratio and allows hover group
    <div className="relative w-full aspect-square overflow-hidden group cursor-pointer">
      {content}
    </div>
  );
};

export default function PortofolioPage() {
  return (
    <section
      className={`${roboto.className} min-h-screen bg-primary/50 py-20 px-6 md:px-12 scroll-mt-24`}
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto px-2">
        {/* Title */}
        <div className="mb-16 md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            PORTOFOLIO KAMI
          </h1>
          <p
            className={`${roboto.className} italic text-gray-700 max-w-2xl mx-auto md:mx-0`}
          >
            From grand celebrations to intimate gatherings — explore the
            artistry, creativity, and passion behind every Salt & Light event.
          </p>
        </div>

        {/* 2x2 Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Grid 1: One big item */}
          <PortofolioItem item={portfolioData[0]} />

          {/* Grid 2: 2x2 nested grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <PortofolioItem item={portfolioData[1]} />
            <PortofolioItem item={portfolioData[2]} />
            <PortofolioItem item={portfolioData[3]} />
            <PortofolioItem item={portfolioData[4]} />
          </div>

          {/* Grid 3: Same as Grid 2 */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <PortofolioItem item={portfolioData[5]} />
            <PortofolioItem item={portfolioData[6]} />
            <PortofolioItem item={portfolioData[7]} />
            <PortofolioItem item={portfolioData[8]} />
          </div>

          {/* Grid 4: One big item */}
          <PortofolioItem item={portfolioData[9]} />
        </div>
      </div>
    </section>
  );
}
