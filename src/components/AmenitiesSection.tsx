"use client";

import { Icon } from "@iconify/react";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: "mdi:map-marker",
      title: "Prime Location",
      description: "Strategically positioned in Singapore's most prestigious district with unparalleled urban convenience."
    },
    {
      icon: "mdi:train",
      title: "Near MRT",
      description: "Seamless connectivity with major MRT lines, offering effortless access across Singapore."
    },
    {
      icon: "mdi:home-variant",
      title: "Premium Residential",
      description: "Luxurious living spaces designed with meticulous attention to detail and world-class amenities."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-50 to-transparent rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-gray-600/20 hover:backdrop-blur-sm shadow-none hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon 
                  icon={amenity.icon} 
                  className="w-10 h-10 text-white" 
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                {amenity.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {amenity.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
}
