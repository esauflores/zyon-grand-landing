import Header from "@/components/Header";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import ProjectDetailsSection from "@/components/ProjectDetailsSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import ServicesSection from "@/components/ServicesSection";
import ContactFormSection from "@/components/ContactFormSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import EnquireSection from "@/components/EnquireSection";

export default function Home() {
  return (
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
  );
}
