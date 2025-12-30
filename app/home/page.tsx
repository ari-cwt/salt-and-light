import AboutSection from "@/components/AboutSection";
// import GoogleReviews from "@/components/GoogleReviews";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import PortofolioPage from "@/components/Portofolio";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import ImageGallery from "@/components/ImageGallery";
import WhatWeDo from "@/components/WhatWeDo";
import DecorPricelistSection from "@/components/DecorPriceList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center">
      <HeroSection />
      <AboutSection />
      <WhatWeDo />
      <OurClients />
      <PortofolioPage />
      {/* <GoogleReviews /> */}
      <DecorPricelistSection />
      <ImageGallery isShowHeader={true} />
      <WhatsAppButton />
    </main>
  );
}
