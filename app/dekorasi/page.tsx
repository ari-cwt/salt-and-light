import DecorPricelistSection from "@/components/DecorPriceList";
import ImageGallery from "@/components/ImageGallery";

export default function Decoration() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <ImageGallery isShowHeader={true} />
      <DecorPricelistSection />
    </div>
  );
}
