"use client";

import React, { useState, useEffect } from "react";

const EnquireSection = () => {
  const [isPageShort, setIsPageShort] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const shouldBeTransparent = scrollPosition < 10;
      setIsPageShort(shouldBeTransparent);
    };

    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const backgroundClasses = !isPageShort
    ? "bg-black/30 border-gray-200 shadow-lg"
    : "bg-transparent";

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 ${backgroundClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 my-2">
        <div className="flex justify-center">
          <button
            className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquireSection;
