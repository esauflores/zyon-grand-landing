"use client";

import LocationSection from "@/components/LocationSection";
import ServicesSection from "@/components/ServicesSection";
import ContactFormSection from "@/components/ContactFormSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import DeveloperSection from "@/components/DeveloperSection";
import { MapModalProvider, useMapModal } from "@/contexts/MapModalContext";
import MapModal from "@/components/MapModal";
import Header from "@/components/Header";
import EnquireSection from "@/components/EnquireSection";

function DeveloperContent() {
  const { isMapModalOpen, closeMapModal } = useMapModal();
  
  return (
    <>
      <main className="pb-24 bg-gray-100">
        <Header />
        <div id="content-start" />
        <DeveloperSection />
        <LocationSection />
        <ServicesSection />
        <ContactFormSection />
        <DisclaimerSection />
        <EnquireSection />
      </main>
      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} />
    </>
  );
}

export default function Developer() {
  return (
    <MapModalProvider>
      <DeveloperContent />
    </MapModalProvider>
  );
}
