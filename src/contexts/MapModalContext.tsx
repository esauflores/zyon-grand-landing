"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface MapModalContextType {
  isMapModalOpen: boolean;
  openMapModal: () => void;
  closeMapModal: () => void;
}

const MapModalContext = createContext<MapModalContextType | undefined>(undefined);

export function MapModalProvider({ children }: { children: ReactNode }) {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const openMapModal = () => setIsMapModalOpen(true);
  const closeMapModal = () => setIsMapModalOpen(false);

  return (
    <MapModalContext.Provider value={{ isMapModalOpen, openMapModal, closeMapModal }}>
      {children}
    </MapModalContext.Provider>
  );
}

export function useMapModal() {
  const context = useContext(MapModalContext);
  if (context === undefined) {
    throw new Error('useMapModal must be used within a MapModalProvider');
  }
  return context;
}
