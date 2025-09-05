'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useSliderContext } from './SynchronizedSliderContext';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'BEFORE', 
  afterLabel = 'AFTER',
  className = ''
}: BeforeAfterSliderProps) {
  const { sliderPosition, setSliderPosition, isDragging, setIsDragging, hasInteracted, setHasInteracted } = useSliderContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const sliderHandleRef = useRef<HTMLDivElement>(null);
  const autoAnimationRef = useRef<NodeJS.Timeout | null>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  }, [setSliderPosition]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    
    // Capture pointer for stable dragging
    if (sliderHandleRef.current) {
      sliderHandleRef.current.setPointerCapture(e.pointerId);
    }
    
    // Update position immediately on click
    updatePosition(e.clientX);
    
    // Prevent text selection
    e.preventDefault();
  }, [setIsDragging, setHasInteracted, updatePosition]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    setIsDragging(false);
    
    // Release pointer capture
    if (sliderHandleRef.current) {
      sliderHandleRef.current.releasePointerCapture(e.pointerId);
    }
    
    // Cancel any pending animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, [setIsDragging]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    
    // Update immediately without RAF for better responsiveness
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);


  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (autoAnimationRef.current) {
        clearInterval(autoAnimationRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`relative w-full aspect-square overflow-hidden select-none ${className}`} 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* After Image (Right side) */}
      <img 
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      
      {/* Before Image (Left side) */}
      <div 
        className={`absolute inset-0 overflow-hidden ${!hasInteracted && !isDragging ? 'animate-clip-oscillate' : ''}`}
        style={{ 
          clipPath: hasInteracted || isDragging ? `inset(0 ${100 - sliderPosition}% 0 0)` : 'inset(0 50% 0 0)'
        }}
      >
        <img 
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 text-sm font-medium pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 text-sm font-medium pointer-events-none">
        {afterLabel}
      </div>

      {/* Slider Line */}
      <div 
        className={`absolute top-0 bottom-0 w-1 bg-[var(--color-primary-500)] cursor-ew-resize shadow-lg ${!hasInteracted && !isDragging ? 'animate-slider-oscillate' : ''}`}
        style={{ 
          left: hasInteracted || isDragging ? `${sliderPosition}%` : '50%',
          transform: 'translateX(-2px)',
          willChange: isDragging ? 'left' : 'auto'
        }}
      >
        {/* Slider Handle */}
        <div 
          ref={sliderHandleRef}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--color-primary-500)] rounded-full cursor-ew-resize flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-150 ${!hasInteracted && !isDragging ? 'animate-ripple' : ''}`}
          onPointerDown={handlePointerDown}
          style={{ touchAction: 'none' }}
        >
          {/* Left Arrow */}
          <svg 
            className="w-3 h-3 text-black mr-0.5 pointer-events-none" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {/* Right Arrow */}
          <svg 
            className="w-3 h-3 text-black ml-0.5 pointer-events-none" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}