'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SliderContextType {
  sliderPosition: number;
  setSliderPosition: (position: number) => void;
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
  hasInteracted: boolean;
  setHasInteracted: (interacted: boolean) => void;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export function SynchronizedSliderProvider({ children }: { children: ReactNode }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <SliderContext.Provider value={{ sliderPosition, setSliderPosition, isDragging, setIsDragging, hasInteracted, setHasInteracted }}>
      {children}
    </SliderContext.Provider>
  );
}

export function useSliderContext() {
  const context = useContext(SliderContext);
  if (context === undefined) {
    throw new Error('useSliderContext must be used within a SynchronizedSliderProvider');
  }
  return context;
}