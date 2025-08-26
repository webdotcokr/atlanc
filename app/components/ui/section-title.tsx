import React from 'react';

export interface SectionTitleProps {
  subtitle?: string;
  title?: string;
  className?: string;
}

export default function SectionTitle({
  subtitle = "Who We Are",
  title = "맨즈 헤어컨설팅 분야에서\n끊임없이 실력을 증명해 왔습니다.",
  className = ""
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-1 items-center text-center ${className}`}>
      <div className="font-semibold text-lg tracking-tight uppercase text-black">
        <p className="leading-relaxed">{subtitle}</p>
      </div>
      <div className="font-bold text-4xl md:text-5xl leading-tight tracking-tight text-black">
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}