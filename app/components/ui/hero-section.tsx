import React from 'react';

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export default function HeroSection({
  title = "ATLANTIC MEN",
  subtitle = "맨즈 헤어컨설팅의 전문가들이\n당신의 스타일을 완성합니다",
  backgroundImage,
  className = ""
}: HeroSectionProps) {
  const sectionStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section 
      className={`relative min-h-[80vh] bg-gray-900 bg-cover bg-center flex items-center justify-center ${className}`}
      style={sectionStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
          {subtitle.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}