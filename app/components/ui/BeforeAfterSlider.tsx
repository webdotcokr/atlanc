"use client";

import { useRef, useEffect, useCallback } from "react";
import { useSliderContext } from "./SynchronizedSliderContext";

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
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}: BeforeAfterSliderProps) {
  const {
    sliderPosition,
    setSliderPosition,
    isDragging,
    setIsDragging,
    hasInteracted,
    setHasInteracted,
  } = useSliderContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const sliderHandleRef = useRef<HTMLDivElement>(null);
  const autoAnimationRef = useRef<NodeJS.Timeout | null>(null);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;

      setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    },
    [setSliderPosition]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
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
    },
    [setIsDragging, setHasInteracted, updatePosition]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(false);

      // Release pointer capture
      if (sliderHandleRef.current) {
        sliderHandleRef.current.releasePointerCapture(e.pointerId);
      }

      // Cancel any pending animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    },
    [setIsDragging]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;

      // Update immediately without RAF for better responsiveness
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

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
        className={`absolute inset-0 overflow-hidden ${
          !hasInteracted && !isDragging ? "animate-clip-oscillate" : ""
        }`}
        style={{
          clipPath:
            hasInteracted || isDragging
              ? `inset(0 ${100 - sliderPosition}% 0 0)`
              : "inset(0 50% 0 0)",
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
      <div className="absolute top-[10px] left-[8px] max-md:top-3 max-md:left-3 bg-black bg-opacity-50 text-white px-2 py-[6px] rounded-sm max-md:py-1 text-base max-md:text-[11px] font-extrabold pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-[10px] right-[8px] max-md:top-3 max-md:right-3 bg-black bg-opacity-50 text-white px-2 py-[6px] rounded-sm text-base max-md:text-[11px] max-md:py-1 font-extrabold pointer-events-none">
        {afterLabel}
      </div>

      {/* Slider Line */}
      <div
        className={`absolute top-0 bottom-0 w-0.5 bg-[#26E45C] cursor-ew-resize shadow-lg ${
          !hasInteracted && !isDragging ? "animate-slider-oscillate" : ""
        }`}
        style={{
          left: hasInteracted || isDragging ? `${sliderPosition}%` : "50%",
          transform: "translateX(-2px)",
          willChange: isDragging ? "left" : "auto",
        }}
      >
        {/* Slider Handle */}
        <div
          ref={sliderHandleRef}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] max-md:w-[44px] aspect-square bg-[#26E45C] rounded-full cursor-ew-resize flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-150 ${
            !hasInteracted && !isDragging ? "animate-ripple" : ""
          }`}
          onPointerDown={handlePointerDown}
          style={{ touchAction: "none" }}
        >
          {/* Left Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="9"
            viewBox="0 0 7 9"
            fill="none"
            className="max-md:w-[6px]"
          >
            <path
              d="M0.386067 3.43746L4.53267 0.212318C5.18953 -0.298571 6.14661 0.169524 6.14661 1.00167V7.45195C6.14661 8.2841 5.18953 8.75219 4.53267 8.2413L0.386067 5.01616C-0.128679 4.6158 -0.128679 3.83782 0.386067 3.43746Z"
              fill="black"
            />
          </svg>

          {/* line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="44"
            viewBox="0 0 1 44"
            fill="none"
            className="mx-[14px] max-md:mx-[9px]"
          >
            <path d="M0.5 0L0.499998 43.6639" stroke="#60F0A8" />
          </svg>

          {/* Right Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="9"
            viewBox="0 0 7 9"
            fill="none"
            className="max-md:w-[6px]"
          >
            <path
              d="M5.76054 3.43746L1.61393 0.212318C0.957075 -0.298571 -7.62939e-06 0.169524 -7.62939e-06 1.00167V7.45195C-7.62939e-06 8.2841 0.957076 8.75219 1.61393 8.2413L5.76054 5.01616C6.27529 4.6158 6.27529 3.83782 5.76054 3.43746Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
