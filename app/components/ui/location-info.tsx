import React from 'react';

export interface LocationInfoProps {
  title?: string;
  address?: string;
  phone?: string;
  hours?: string;
  mapImage?: string;
  className?: string;
}

export default function LocationInfo({
  title = "매장 위치",
  address = "서울시 강남구 신사동 123-45",
  phone = "02-123-4567",
  hours = "매일 10:00 - 22:00",
  mapImage,
  className = ""
}: LocationInfoProps) {
  return (
    <section className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {title}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-gray-500 text-lg">📍</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">주소</h3>
                  <p className="text-gray-700 leading-relaxed">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-gray-500 text-lg">📞</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">전화</h3>
                  <p className="text-gray-700 leading-relaxed">{phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-gray-500 text-lg">🕒</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">영업시간</h3>
                  <p className="text-gray-700 leading-relaxed">{hours}</p>
                </div>
              </div>
            </div>
            
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              길찾기
            </button>
          </div>

          {/* Map */}
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-80">
            {mapImage ? (
              <img
                src={mapImage}
                alt="매장 위치"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                지도 이미지
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}