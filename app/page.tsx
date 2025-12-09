import AboutSection from "@/components/AboutSection";
import GoogleReviews from "@/components/GoogleReviews";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import PortofolioPage from "@/components/Portofolio";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center">
      <HeroSection />
      <AboutSection />
      <WhatWeDo />
      <OurClients />
      <PortofolioPage />
      <GoogleReviews />
      <WhatsAppButton />
    </main>
  );
}
