import Navbar from "@/navbar/Navbar";

import BiographySection from "@/sections/BiographySection";
import PoliticalJourney from "@/sections/PoliticalJourney";
import EngagementsSection from "@/sections/engagements/EngagementsSection";
import ImpactSection from "@/sections/ImpactSection/ImpactSection";
import AwardsSection from "@/sections/AwardsSection/AwardsSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import ContactSection from "@/sections/contact/ContactSection";
import Footer from "@/layout/Footer";
import Hero from "@/Hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#030303] text-white">
      <Navbar />
      <Hero />

      <BiographySection />

      <PoliticalJourney />

      <EngagementsSection />

      <ImpactSection />

      <AwardsSection />

      <GallerySection />

      <ContactSection />
      <Footer />
    </main>
  );
}
