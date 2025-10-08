"use client";

import Header from "@/components/Header";
import LocationSection from "@/components/LocationSection";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import ServicesSection from "@/components/ServicesSection";
import ContactFormSection from "@/components/ContactFormSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import EnquireSection from "@/components/EnquireSection";
import MapModal from "@/components/MapModal";
import { MapModalProvider, useMapModal } from "@/contexts/MapModalContext";

function HomeContent() {
  const { isMapModalOpen, closeMapModal } = useMapModal();
  
  return (
    <>
      <main className="pb-24 bg-gray-100">
        <Header />
        <div id="content-start" />
        <LocationSection />
        <ServicesSection />
        <ProjectDetailsSection />
        <FloorPlansSection />
        <ContactFormSection />
        <DisclaimerSection />
        <EnquireSection />
      </main>
      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} />
    </>
  );
}

export default function Home() {
  return (
    <MapModalProvider>
      <HomeContent />
    </MapModalProvider>
  );
}
