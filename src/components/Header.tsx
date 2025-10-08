"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-[120%]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="/img/zyon/waterfall-cove.png"
            alt="Luxury Waterfall Resort"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content with Parallax */}
      <div className="relative z-0 flex items-center justify-center h-full transform translate-y-[-10%]">
        <div
          className="text-center text-white px-6 max-w-4xl"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        >
            <div className="flex justify-center mb-6">
              <Image 
                src="/img/logo-white.png" 
                alt="Zyon Grand" 
                width={400} 
                height={200} 
                className="object-contain"
              />
            </div>
          <p
            className="text-xl md:text-2xl mb-8 opacity-90"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            Experience the elegance of ZyonGrand,<br className="md:hidden" />
            <span className="md:inline"> </span>the lifestyle Singaporeans aspire to.
          </p>
          {/* <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
            }}
          >
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Explore Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator with Parallax */}
      <div
        className="absolute bottom-50 left-1/2 z-10 cursor-pointer"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.3}px)`,
        }}
        onClick={() => {
          document.getElementById('content-start')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
        role="button"
        aria-label="Scroll to content"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.getElementById('content-start')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }
        }}
      >
        <div className="animate-bounce">
          <Icon icon="mdi:chevron-double-down" className="w-16 h-16 text-white" />
        </div>
      </div>
    </header>
  );
}
