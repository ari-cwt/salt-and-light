import DecorPricelistSection from "@/components/DecorPriceList";
import ImageGallery from "@/components/ImageGallery";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Decoration() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* PAGE CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/home"
          className="
            inline-flex items-center gap-2
            bg-primary
            px-4 py-2 rounded-full
            shadow-md
            text-gray-800 text-sm font-medium
            hover:bg-amber-200 transition
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <ImageGallery isShowHeader={true} />
      <DecorPricelistSection />
    </div>
  );
}
