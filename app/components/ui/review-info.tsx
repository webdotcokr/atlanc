import React from 'react';
import TagLabel from './tag-label';

export interface ReviewInfoProps {
  reviewText?: string;
  tags?: string[];
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ReviewInfo({
  reviewText = "머리가 너무 길어져서 고민이 많았는데\n이번에도 대성공! 항상 어울리는 스타일로\n추천 잘해주셔서 감사해요! 또또오겠습니다!!",
  tags = [
    "💚 원하는 스타일로 잘 해줘요",
    "😎 트렌디해요", 
    "💗친절해요",
    "🔍 꼼꼼해요",
    "👦 남자 머리를 잘해요"
  ],
  className = "",
  imageUrl = "/dashboard-report.webp",
  imageAlt = "리뷰 이미지"
}: ReviewInfoProps) {
  return (
    <div className={`relative flex flex-col w-full max-w-sm bg-white overflow-hidden ${className}`}>
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content Section with Gradient */}
      <div className="relative px-4 py-4 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="font-semibold text-lg text-black tracking-tight leading-relaxed w-full mb-4">
          {reviewText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < reviewText.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 items-center justify-start w-full">
          {tags.map((tag, index) => (
            <TagLabel key={index}>
              {tag}
            </TagLabel>
          ))}
        </div>
      </div>
    </div>
  );
}