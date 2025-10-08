"use client";

import React from "react";
import { Icon } from "@iconify/react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We're with you every step of the way
          </h2>
          <p className="text-xl text-gray-600">
            From initial inquiries to the final move-in, we're here to support
            you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              <img
                src="/img/zyon/support.jpg"
                alt="Informed Support"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Stay Informed, Stay Ahead
              </h3>
              <p className="text-gray-600 leading-relaxed text-md">
                <Icon icon="mdi:check" className="w-6 h-6 mr-2 inline-block" />
                Get Exclusive Project Insights
              </p>
              <p className="text-gray-600 leading-relaxed text-md">
                <Icon icon="mdi:check" className="w-6 h-6 mr-2 inline-block" />
                Connect with Our Sales Team Instantly
              </p>
              <p className="text-gray-600 leading-relaxed text-md">
                <Icon icon="mdi:check" className="w-6 h-6 mr-2 inline-block" />
                Be the First to Know When the Showflat Opens
              </p>
              <button
                className="bg-gray-600 text-white px-4 py-3 mt-4 rounded-full text-md font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Keep Me Informed
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              <img
                src="/img/zyon/building-evening.png"
                alt="Showflat Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Join Us for the Exclusive Showflat Preview
              </h3>
              <p className="text-gray-600 leading-relaxed text-md">
                <Icon icon="mdi:check" className="w-6 h-6 mr-2 inline-block" />
                Tour the Exquisite Sales Gallery
              </p>
              <p className="text-gray-600 leading-relaxed text-md">
                <Icon icon="mdi:check" className="w-6 h-6 mr-2 inline-block" />
                Discover Refined Layouts and Unit Selections
              </p>
              <p className="text-gray-600 leading-relaxed text-md">
                <Icon icon="mdi:check" className="w-6 h-6 mr-2 inline-block" />
                Be Part of the Official Opening Experience
              </p>

              <button
                className="bg-gray-600 text-white px-4 py-3 mt-4 rounded-full text-md font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book a Showflat Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
