import React from 'react';

export default function BtBanner() {
  return (
    <div className="relative w-full h-64 md:h-96">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/bt-banner.webp')`
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
        {/* Text content */}
        <div className="flex flex-col items-center gap-2 text-center text-white">
          <h2 className="en font-semibold text-lg text-[var(--color-primary-500)]">
            ATLANC Men&apos;s Hair
          </h2>
          <p className="font-bold text-2xl md:text-4xl leading-tight tracking-tight text-white max-w-2xl">
            당신의 인상에 특별함을 더해줄
            <br />
            섬세한 디테일의 차이,
            <br />
            아뜰랑이 찾아드리겠습니다.
          </p>
        </div>
        
        {/* Button area */}
        <div className="flex gap-3 pt-4">
          {/* Primary button (green) */}
          <a
            href="https://map.naver.com/p/search/%EC%95%84%EB%9C%B0%EB%9E%91%20%EB%A7%A8%EC%A6%88%ED%97%A4%EC%96%B4?c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#26d07c] text-white hover:bg-[#20b569] transition-colors duration-200 px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-sm tracking-tight"
          >
            지점 예약 바로가기
            <div className="w-2 h-2">
              <img src="/arrowLight.svg" alt="" className="w-full h-full" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}