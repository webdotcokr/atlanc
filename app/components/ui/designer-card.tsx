import React from 'react';

// Social media icons
const wonbarIcon = "/card-youtube.svg";
const instagramIcon = "/card-insta.svg";
const arrowIcon = "/designers-card-arrows.svg";

export interface DesignerCardProps {
  name: string;
  position: string;
  image: string;
  social: {
    wonbar?: string;
    instagram?: string;
  };
  description: string;
  urls: {
    instagram: string;
    booking: string;
  };
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
  urls,
  onDetailClick,
  onBookingClick,
  className = ""
}: DesignerCardProps) {
  return (
    <div className={`flex gap-8 items-end p-3 border border-gray-100 ${className}`}>
      {/* Designer Image */}
      <div className="w-[284px] h-[360px] bg-cover bg-center overflow-hidden" 
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
            {(social.wonbar || social.instagram) && (
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
            )}
          </div>
          
          {/* Description */}
          <div className="text-gray-800 leading-relaxed text-base tracking-tight overflow-hidden">
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
            onClick={() => window.open(urls.instagram, '_blank')}
            className="bg-[var(--color-primary-500)] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-green-500 transition-colors tracking-tight"
          >
            자세히 알아보기
          </button>
          <button 
            onClick={() => window.open(urls.booking, '_blank')}
            className="bg-gray-800 text-[var(--color-primary-500)] px-5 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2 tracking-tight"
          >
            지금 바로 예약하기
            <div className="w-1 h-2">
              <img src={arrowIcon} alt="Arrow" className="w-[4px] h-full" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}