import React from 'react';

// Arrow component assets
const ellipseGray = "/Ellipse.svg";
const vectorGrayLight = "/slide-arrows-left.svg";
const vectorGrayDark = "/slide-arrows-left.svg";
const ellipseDark = "/EllipseDark.svg";
const vectorDark = "/slide-arrows-left.svg";
const ellipseDefault = "/Ellipse.svg";

export interface SlideArrowsProps {
  type?: "01" | "02";
  state?: "hover" | "default";
  direction?: "left" | "right";
  onClick?: () => void;
  className?: string;
}

export default function SlideArrows({ 
  type = "01", 
  state = "default", 
  direction = "left",
  onClick,
  className = "" 
}: SlideArrowsProps) {
  const getArrowContent = () => {
    // Type 02 (Gray arrows)
    if (type === "02" && state === "default") {
      return (
        <div className="relative size-full">
          <img alt="Background" className="absolute inset-0 size-full" src={ellipseGray} />
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              alt="Arrow" 
              className="w-4 h-4" 
              src={vectorGrayLight}
              style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
            />
          </div>
        </div>
      );
    }

    if (type === "02" && state === "hover") {
      return (
        <div className="relative size-full">
          <img alt="Background" className="absolute inset-0 size-full" src={ellipseGray} />
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              alt="Arrow" 
              className="w-4 h-4" 
              src={vectorGrayDark}
              style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
            />
          </div>
        </div>
      );
    }

    // Type 01 (Dark arrows)
    if (type === "01" && state === "hover") {
      return (
        <div className="relative size-full">
          <img alt="Background" className="absolute inset-0 size-full" src={ellipseDark} />
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              alt="Arrow" 
              className="w-4 h-4" 
              src={vectorDark}
              style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
            />
          </div>
        </div>
      );
    }

    // Type 01 default
    return (
      <div className="relative size-full">
        <img alt="Background" className="absolute inset-0 size-full" src={ellipseDefault} />
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            alt="Arrow" 
            className="w-4 h-4" 
            src={vectorDark}
            style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
          />
        </div>
      </div>
    );
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative size-[59px] cursor-pointer transition-all duration-200 
        hover:scale-105 active:scale-95
        ${className}
      `}
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    >
      {getArrowContent()}
    </button>
  );
}