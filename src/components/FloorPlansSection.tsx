import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const FloorPlansSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="order-1 lg:order-1">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Discover Floor Plans
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Choose from 706 premium residences thoughtfully designed to meet every lifestyle need. 
                From efficient 1+ study units to spacious 5-bedroom layouts and two ultra-luxurious 
                penthouses, Zyon Grand offers versatile options for both homeowners and investors. 
                Each floor plan is meticulously crafted to maximize space, comfort, and breathtaking 
                city or sea views.
              </p>
              <Link href="/floor-plans">
                <button className="inline-flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                  <span>View Floor Plans</span>
                  <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              <Image
                src="/img/zyon/lap-pool.png"
                alt="Zyon Grand Floor Plans"
                width={800}
                height={600}
                className="w-full h-100 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
