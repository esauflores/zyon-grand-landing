"use client";

import React from "react";
import { Icon } from "@iconify/react";

const DeveloperSection = () => {
  const developers = [
    {
      name: "City Developments Limited",
      shortName: "CDL",
      country: "Singapore",
      description: "A leading Singapore-listed property and hotel conglomerate with a proven track record in developing iconic mixed-use developments across Asia-Pacific.",
      achievements: [
        "50+ years of development excellence",
        "Award-winning mixed-use projects",
        "Strong presence in Singapore market"
      ],
      logo: "mdi:city-variant"
    },
    {
      name: "Mitsui Fudosan",
      shortName: "MFA", 
      country: "Japan",
      description: "One of Japan's largest real estate companies with extensive experience in creating world-class urban developments and mixed-use projects globally.",
      achievements: [
        "Century-old real estate expertise",
        "Global mixed-use development leader",
        "Innovation in urban planning"
      ],
      logo: "mdi:home-city"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-6">
            <Icon icon="mdi:handshake" className="w-4 h-4 mr-2" />
            International Partnership
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            World-Class Developers
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-12"></div>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            A collaboration between Singapore's City Developments Limited (CDL) and Japan's Mitsui Fudosan (MFA), 
            Zyon Grand represents the pinnacle of modern mixed-use living. Developed by CDL-MFA Altair Property Pte Ltd 
            and CDL-MFA Vega Property Pte Ltd, the project seamlessly integrates luxurious residences, serviced apartments, 
            and retail conveniences within one iconic address.
          </p>
        </div>

        {/* Developers Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {developers.map((developer, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Company Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={developer.logo} className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{developer.name}</h3>
                    <div className="flex items-center text-gray-500">
                      <Icon icon="mdi:map-marker" className="w-4 h-4 mr-2" />
                      <span className="font-medium">{developer.country}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {developer.description}
                </p>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                  {developer.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Excellence */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-8">
              <Icon icon="mdi:star" className="w-4 h-4 mr-2" />
              Strategic Partnership
            </div>
            <h3 className="text-4xl font-bold mb-6">International Excellence</h3>
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
              This strategic collaboration combines CDL's deep understanding of Singapore's property market 
              with Mitsui Fudosan's global expertise in mixed-use developments, creating a truly exceptional 
              residential experience that sets new standards for luxury living in Singapore.
            </p>
            
            {/* Development Companies */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4">Development Companies</h4>
                <div className="space-y-2 text-gray-200">
                  <div className="flex items-center">
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 mr-3" />
                    <span>CDL-MFA Altair Property Pte Ltd</span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 mr-3" />
                    <span>CDL-MFA Vega Property Pte Ltd</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4">Project Features</h4>
                <div className="space-y-2 text-gray-200">
                  <div className="flex items-center">
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 mr-3" />
                    <span>Luxurious Residences</span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 mr-3" />
                    <span>Serviced Apartments</span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400 mr-3" />
                    <span>Retail Conveniences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
