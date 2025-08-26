import React from 'react';
import TagLabel from './tag-label';

export interface ReviewInfoProps {
  reviewText?: string;
  tags?: string[];
  className?: string;
}

export default function ReviewInfo({
  reviewText = "원하는 스타일을 완벽하게 이해하시고\n따로 말 안해도 맞춤형으로\n매번 예쁘게 머리해주셔서 감사합니다!!",
  tags = [
    "💚 원하는 스타일로 잘 해줘요",
    "😎 트렌디해요", 
    "💗친절해요",
    "🔍 꼼꼼해요",
    "👦 남자 머리를 잘해요"
  ],
  className = ""
}: ReviewInfoProps) {
  return (
    <div className={`flex flex-col gap-3 items-start w-full max-w-sm ${className}`}>
      <div className="font-semibold text-lg text-black tracking-tight leading-relaxed w-full">
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
  );
}