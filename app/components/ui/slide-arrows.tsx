import React from 'react';

// Arrow component assets
const ellipseGray = "/Ellipse.svg";
const vectorGrayLight = "/slide-arrows-left.svg";
const vectorGrayDark = "/slide-arrows-left.svg";
const ellipseDark = "/EllipseDark.svg";
const vectorDark = "/slide-arrows-left.svg";
const ellipseDefault = "http://localhost:3845/assets/a3b552a84b629768e226d1d0e90dac66e096075a.svg";

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
          <div className="absolute inset-0">
            <img alt="Background" className="block max-w-none size-full" src={ellipseGray} />
          </div>
          <div className="absolute inset-[32.2%_42.37%_30.51%_38.98%]">
            <div 
              className="absolute inset-[-2.41%_-4.82%_-2.41%_-9.64%]"
              style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
            >
              <img alt="Arrow" className="block max-w-none size-full" src={vectorGrayLight} />
            </div>
          </div>
        </div>
      );
    }

    if (type === "02" && state === "hover") {
      return (
        <div className="relative size-full">
          <div className="absolute inset-0">
            <img alt="Background" className="block max-w-none size-full" src={ellipseGray} />
          </div>
          <div className="absolute inset-[32.2%_42.37%_30.51%_38.98%]">
            <div 
              className="absolute inset-[-2.41%_-4.82%_-2.41%_-9.64%]"
              style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
            >
              <img alt="Arrow" className="block max-w-none size-full" src={vectorGrayDark} />
            </div>
          </div>
        </div>
      );
    }

    // Type 01 (Dark arrows)
    if (type === "01" && state === "hover") {
      return (
        <div className="relative size-full">
          <div className="absolute inset-0">
            <img alt="Background" className="block max-w-none size-full" src={ellipseDark} />
          </div>
          <div className="absolute inset-[32.2%_42.37%_30.51%_38.98%]">
            <div 
              className="absolute inset-[-2.41%_-4.82%_-2.41%_-9.64%]"
              style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
            >
              <img alt="Arrow" className="block max-w-none size-full" src={vectorDark} />
            </div>
          </div>
        </div>
      );
    }

    // Type 01 default
    return (
      <div className="relative size-full">
        <div className="absolute inset-0">
          <img alt="Background" className="block max-w-none size-full" src={ellipseDefault} />
        </div>
        <div className="absolute inset-[32.2%_42.37%_30.51%_38.98%]">
          <div 
            className="absolute inset-[-2.41%_-4.82%_-2.41%_-9.64%]"
            style={{ transform: direction === "right" ? "rotate(180deg)" : "none" }}
          >
            <img alt="Arrow" className="block max-w-none size-full" src={vectorDark} />
          </div>
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