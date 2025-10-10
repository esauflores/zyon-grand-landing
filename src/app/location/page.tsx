"use client";

import Header from "@/components/Header";
import LocationSection from "@/components/LocationSection";
import { MapModalProvider, useMapModal } from "@/contexts/MapModalContext";
import MapModal from "@/components/MapModal";
import EnquireSection from "@/components/EnquireSection";
import ContactFormSection from "@/components/ContactFormSection";
import DisclaimerSection from "@/components/DisclaimerSection";

function LocationContent() {
  const { isMapModalOpen, closeMapModal } = useMapModal();
  
  return (
    <>
      <main className="pb-24 bg-gray-100">
        <Header />
        <div id="content-start" />
        <LocationSection />
        <ContactFormSection />
        <DisclaimerSection />
        <EnquireSection />
      </main>
      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} />
    </>
  );
}

export default function Location() {
  return (
    <MapModalProvider>
      <LocationContent />
    </MapModalProvider>
  );
}
