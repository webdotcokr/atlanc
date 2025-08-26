import React from 'react';
import Image from 'next/image';

// Default asset
const defaultImage = "http://localhost:3845/assets/3f4644bfb8291d6f4617ec7b2dd4214a894833ad.png";

export interface ItemCardProps {
  date?: string;
  day?: string | number;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
}

export default function ItemCard({
  date = "25.07",
  day = "26",
  title = "신사미용실 아뜰랑 맨즈헤어 신사역점 남자 크롭컷 새로 디자이너",
  imageSrc = defaultImage,
  imageAlt = "Item image",
  onClick,
  className = ""
}: ItemCardProps) {
  const cardContent = (
    <>
      {/* Date Section */}
      <div className="flex flex-col items-start w-fit">
        <div className="text-gray-500 text-sm tracking-tight leading-relaxed">
          {date}
        </div>
        <div className="font-semibold text-primary text-3xl tracking-tight leading-tight">
          {day}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 w-full">
        {/* Title */}
        <div className="font-medium text-primary text-lg leading-relaxed tracking-tight line-clamp-2">
          {title}
        </div>

        {/* Image */}
        <div className="w-full h-48 md:h-52 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`
          bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
          flex flex-col gap-3 items-start p-5 md:p-8 pt-8 md:pt-12 pb-5 md:pb-8
          hover:transform hover:-translate-y-1 w-full text-left
          ${className}
        `}
      >
        {cardContent}
      </button>
    );
  }

  return (
    <div className={`
      bg-white rounded-lg shadow-lg
      flex flex-col gap-3 items-start p-5 md:p-8 pt-8 md:pt-12 pb-5 md:pb-8
      ${className}
    `}>
      {cardContent}
    </div>
  );
}