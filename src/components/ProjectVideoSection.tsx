"use client";

import React from "react";

const ProjectVideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zyon Grand Launch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the vision and excellence behind Zyon Grand through our exclusive launch video
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative w-full h-0 pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/img/zyon/building-evening.png"
            >
              <source src="/videos/zyon/zyon-launch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video Overlay Elements */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">Zyon Grand</span>
          </div>
          
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">Launch Video</span>
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Discover the Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Watch our exclusive launch video to understand the vision, design philosophy, and 
              exceptional features that make Zyon Grand a landmark development in Singapore&apos;s 
              prime location. Experience the luxury, connectivity, and lifestyle that awaits you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideoSection;
