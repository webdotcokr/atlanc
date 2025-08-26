import React from 'react';

// Social media icons
const wonbarIcon = "http://localhost:3845/assets/84fc62e02e12b6576673ca5c343846e29faeddfc.svg";
const instagramIcon = "http://localhost:3845/assets/626cc703f5429ea0a9d106d075c6b61e9ff258ff.png";
const arrowIcon = "http://localhost:3845/assets/647e0579922543c74e7d5f62fa9292d0a197fc64.svg";

export interface DesignerCardProps {
  name: string;
  position: string;
  image: string;
  social: {
    wonbar?: string;
    instagram?: string;
  };
  description: string;
  onDetailClick?: () => void;
  onBookingClick?: () => void;
  className?: string;
}

export default function DesignerCard({
  name,
  position,
  image,
  social,
  description,
  onDetailClick,
  onBookingClick,
  className = ""
}: DesignerCardProps) {
  return (
    <div className={`flex gap-8 items-end p-3 border border-gray-100 ${className}`}>
      {/* Designer Image */}
      <div className="w-[284px] h-[360px] bg-cover bg-center rounded-lg overflow-hidden" 
           style={{ backgroundImage: `url('${image}')` }} 
      />
      
      {/* Designer Info */}
      <div className="flex flex-col gap-6 w-[324px] pb-8">
        <div className="flex flex-col gap-4 pb-8 border-b border-gray-200">
          {/* Name and Position */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-end text-gray-800">
              <h3 className="text-3xl font-bold tracking-tight leading-tight">{name}</h3>
              <span className="text-lg font-semibold tracking-tight leading-relaxed">{position}</span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {social.wonbar && (
                <div className="flex items-center gap-3 px-2 py-2 border border-gray-100 rounded-full">
                  <div className="flex items-center gap-1">
                    <img src={wonbarIcon} alt="WonBar" className="w-5 h-5" />
                    <span className="text-sm font-semibold text-gray-800 tracking-tight">
                      {social.wonbar}
                    </span>
                  </div>
                  <div className="w-1 h-2">
                    <img src={arrowIcon} alt="Arrow" className="w-full h-full opacity-50" />
                  </div>
                </div>
              )}
              
              {social.instagram && (
                <div className="flex items-center gap-3 px-2 py-2 border border-gray-100 rounded-full">
                  <div className="flex items-center gap-1">
                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5 rounded-full" />
                    <span className="text-sm font-semibold text-gray-800 tracking-tight">
                      {social.instagram}
                    </span>
                  </div>
                  <div className="w-1 h-2">
                    <img src={arrowIcon} alt="Arrow" className="w-full h-full opacity-50" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="text-gray-800 leading-relaxed text-base tracking-tight h-[60px] overflow-hidden">
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < description.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2.5">
          <button 
            onClick={onDetailClick}
            className="bg-green-400 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-green-500 transition-colors tracking-tight"
          >
            자세히 알아보기
          </button>
          <button 
            onClick={onBookingClick}
            className="bg-gray-800 text-green-400 px-5 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2 tracking-tight"
          >
            지금 바로 예약하기
            <div className="w-1 h-2">
              <img src={arrowIcon} alt="Arrow" className="w-full h-full" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}