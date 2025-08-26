import React from 'react';

// Asset imports - these would need to be replaced with actual asset paths
const backgroundImage = "http://localhost:3845/assets/d4d1cfbb02db05873953fd9021567a3e73bf6e8f.png";
const arrowDark = "http://localhost:3845/assets/5c236db82a5315fcb43f47b67f52456b8324384b.svg";
const arrowLight = "http://localhost:3845/assets/c86ff43f308a99a3ab36dcb1cd1c7195b7028d79.svg";

export interface BtBannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImage?: string;
  className?: string;
}

export default function BtBanner({
  title = "ATLANC Men's Hair",
  subtitle = "당신의 인상에 특별함을 더해줄\n섬세한 디테일의 차이,\n아뜰랑이 찾아드리겠습니다.",
  primaryButtonText = "가맹 문의",
  secondaryButtonText = "지점 예약 바로가기",
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage: bgImage = backgroundImage,
  className = ""
}: BtBannerProps) {
  return (
    <div className={`relative w-full h-64 md:h-96 ${className}`}>
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(179.678deg, rgba(0, 0, 0, 0) 71.289%, rgb(0, 0, 0) 97.115%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%),
            url('${bgImage}')
          `
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
        {/* Text content */}
        <div className="flex flex-col items-center gap-2 text-center text-white">
          <h2 className="font-semibold text-xl text-white">
            {title}
          </h2>
          <h1 className="font-bold text-2xl md:text-4xl leading-tight tracking-tight text-white max-w-2xl">
            {subtitle.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < subtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>
        
        {/* Button area */}
        <div className="flex gap-2 pt-4">
          {/* Primary button (white) */}
          <button
            onClick={onPrimaryClick}
            className="bg-white text-primary hover:bg-gray-100 transition-colors duration-200 px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-sm"
          >
            {primaryButtonText}
            <div className="w-1 h-2">
              <img src={arrowDark} alt="" className="w-full h-full" />
            </div>
          </button>
          
          {/* Secondary button (green) */}
          <button
            onClick={onSecondaryClick}
            className="bg-[#26d07c] text-white hover:bg-[#20b569] transition-colors duration-200 px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-sm"
          >
            {secondaryButtonText}
            <div className="w-1 h-2">
              <img src={arrowLight} alt="" className="w-full h-full" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}