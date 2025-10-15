"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FloorPlanImage {
  id: string;
  src: string;
  alt: string;
}

const ITEMS_PER_PAGE = 6;

export default function FloorPlansTable() {
  const [images, setImages] = useState<FloorPlanImage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<FloorPlanImage | null>(null);

  useEffect(() => {
    // Generate image data from the project-details folder
    const imageFiles = [
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-1.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-15.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-16.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-17.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-18.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-19.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-20.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-21.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-22-scaled.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-23-scaled.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-24.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-25.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-26.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-27.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-28.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-29.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-30.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-31.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-32.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-33-scaled.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-34-scaled.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-35.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-36.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-37.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-38.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-39.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-40.jpg",
      "Zyon-Grand-Preliminary-Brochure-Plans_page-0001-41.jpg",
    ];

    const imageData: FloorPlanImage[] = imageFiles.map((filename, index) => ({
      id: `floor-plan-${index + 1}`,
      src: `/img/project-details/${filename}`,
      alt: `Floor Plan ${index + 1}`,
    }));

    setImages(imageData);
    setLoading(false);
  }, []);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the section when page changes
    const element = document.getElementById('floor-plans-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (image: FloorPlanImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  if (loading) {
    return (
      <section id="floor-plans-table" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading floor plans...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="floor-plans-table" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Floor Plans
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* <div className="p-4">
                <h3 className="font-semibold text-gray-900">{image.alt}</h3>
              </div> */}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Page Info */}
        <div className="text-center mt-8 text-gray-600">
          <p>
            Showing {startIndex + 1} to {Math.min(endIndex, images.length)} of {images.length} floor plans
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
