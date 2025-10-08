"use client";

import AmenitiesSection from "@/components/AmenitiesSection";
import { useMapModal } from "@/contexts/MapModalContext";

import { Icon } from "@iconify/react";

export default function LocationSection() {
  const { openMapModal } = useMapModal();
  const highlights = [
    {
      icon: "mdi:train",
      title: "Direct MRT Access",
      description: "Havelock MRT Station (Thomson-East Coast Line)"
    },
    {
      icon: "mdi:map-marker-multiple",
      title: "Key Destinations",
      description: "Orchard, Outram Park, Shenton Way, Woodlands"
    },
    {
      icon: "mdi:walk",
      title: "Additional Access",
      description: "Great World MRT Station nearby"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Perfect Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
        </div>

        <AmenitiesSection />

        {/* Google Map with Enhanced Styling */}
        <div className="mb-16">
          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1937.6261108312199!2d103.83260714984242!3d1.2909749052260697!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x31da1982c1dcd869%3A0x224bc31a14048920!2sZion%20Rd%20Singapore!3m2!1d1.2911232!2d103.832707!5e0!3m2!1sen!2ssv!4v1759506831643!5m2!1sen!2ssv"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zyon Grand Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Content with Professional Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Connectivity</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Zyon Grand sets a new benchmark for luxury living with unrivaled connectivity and convenience. 
                Offering direct underground access to Havelock MRT Station (Thomson-East Coast Line), residents 
                can enjoy seamless travel to key destinations including Orchard, Outram Park, Shenton Way, and Woodlands. 
                For added accessibility, Great World MRT Station is also just a short walk away.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Elevated Living Experience</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                From its soaring heights, Zyon Grand presents panoramic city and sea views, 
                elevating everyday life with a touch of grandeur. On Level 1, a dedicated 
                commercial podium brings convenience right to your doorstep, featuring retail 
                shops, dining options, a supermarket, and a childcare center—ensuring that 
                every need is met within the community itself.
              </p>
            </div>
          </div>

          {/* Highlights Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Location Highlights</h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon icon={highlight.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                      <p className="text-gray-100 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <button 
                  className="w-full bg-white text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center gap-2"
                  onClick={openMapModal}
                >
                  View Full Map <Icon icon="mdi:map-marker" className="w-4 h-4 inline-block" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
