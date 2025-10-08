"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Location", href: "/location" },
    { name: "Project Details", href: "/project-details" },
    { name: "Floor Plans", href: "/floor-plans" },
    { name: "Developer", href: "/developer" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
      {/* Left Navigation */}
      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`relative text-white text-lg font-medium transition-all duration-300 hover:text-gray-300 group ${
              isActive(item.href) ? "text-white" : ""
            }`}
          >
            <span className="px-5">{item.name}</span>
            {/* Active indicator */}
            <span
              className={`absolute -top-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive(item.href)
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Right Side - Enquiry Button */}
      <div className="hidden md:block">
        <button
          className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("contact-form")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Enquire Now
          <Icon icon="mdi:arrow-right" className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/95 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu Content */}
          <div className="md:hidden fixed inset-0 z-30 flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-white text-xl hover:text-gray-300 transition-colors ${
                  isActive(item.href) ? "text-white font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="block w-full h-0.5 bg-white mt-1" />
                )}
              </a>
            ))}
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium flex items-center gap-2">
              Enquire Now
              <Icon icon="mdi:arrow-right" className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
