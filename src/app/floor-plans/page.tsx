"use client";

import Header from "@/components/Header";
import FloorPlansSection from "@/components/FloorPlansSection";
import FloorPlansTable from "@/components/FloorPlansTable";
import { MapModalProvider, useMapModal } from "@/contexts/MapModalContext";
import MapModal from "@/components/MapModal";
import EnquireSection from "@/components/EnquireSection";
import ContactFormSection from "@/components/ContactFormSection";
import DisclaimerSection from "@/components/DisclaimerSection";

function FloorPlansContent() {
  const { isMapModalOpen, closeMapModal } = useMapModal();
  
  return (
    <>
      <main className="pb-24 bg-gray-100">
        <Header />
        <div id="content-start" />
        <FloorPlansTable />
        <ContactFormSection />
        <DisclaimerSection />
        <EnquireSection />
      </main>
      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} />
    </>
  );
}

export default function FloorPlans() {
  return (
    <MapModalProvider>
      <FloorPlansContent />
    </MapModalProvider>
  );
}
