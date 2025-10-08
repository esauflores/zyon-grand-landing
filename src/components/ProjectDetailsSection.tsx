import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ProjectDetailsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/img/zyon/building-towers.jpg"
                alt="Zyon Grand Project Details"
                className="w-full h-150 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Details
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Zyon Grand is set to be the only integrated development with direct access to Havelock MRT Station, 
                redefining city living in the heart of District 3. Developed by industry leaders City Developments 
                Limited (CDL) and Mitsui Fudosan, this prestigious 99-year leasehold mixed-use development introduces 
                a new icon to Singapore's skyline.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Comprising two soaring 62-storey towers, Zyon Grand offers 706 premium residences — from practical 
                1+ study units to expansive 5-bedroom layouts, along with two exclusive penthouses. Residents will 
                enjoy the ultimate blend of luxury and convenience, with a vibrant commercial podium at their doorstep.
              </p>
              <Link href="/project-details">
                <button className="inline-flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                  <span>Project Details</span>
                  <Icon icon="mdi:arrow-right" className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;