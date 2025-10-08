"use client";

import { useEffect } from "react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <div className="absolute top-4 right-4">
        <button
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow focus:outline-none hover:bg-white transition-colors"
          aria-label="Close full screen map"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div className="w-[92vw] h-[88vh] max-w-7xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1937.6261108312199!2d103.83260714984242!3d1.2909749052260697!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x31da1982c1dcd869%3A0x224bc31a14048920!2sZion%20Rd%20Singapore!3m2!1d1.2911232!2d103.832707!5e0!3m2!1sen!2ssv!4v1759506831643!5m2!1sen!2ssv"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zyon Grand Fullscreen Map"
        ></iframe>
      </div>
    </div>
  );
}
