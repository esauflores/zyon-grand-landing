"use client";

import React from "react";

const LocationVideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the strategic location and connectivity advantages of Zyon Grand
          </p>
        </div>

        {/* YouTube Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-0 pb-[56.25%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/q6KqVQh7RJo?rel=0&modestbranding=1&showinfo=0"
              title="Zyon Grand Location Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationVideoSection;
