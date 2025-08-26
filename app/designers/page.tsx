'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { DesignerCard, SlideArrows } from '../components/ui';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Custom Swiper pagination styles
const swiperStyles = `
  .swiper-pagination-bullet-custom {
    width: 8px !important;
    height: 8px !important;
    background: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
    border-radius: 50% !important;
    margin: 0 4px !important;
  }
  
  .swiper-pagination-bullet-custom-active {
    background: #26d07c !important;
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = swiperStyles;
  document.head.appendChild(style);
}

// Mock designer data
const designersData = {
  sinsa: [
    {
      id: 1,
      name: '태원빠',
      position: '대표 원장',
      image: 'http://localhost:3845/assets/6b84f1147337a824876f9c32393b7248aab2a857.png',
      social: {
        wonbar: '@WonBar',
        instagram: '@atlanc_wonbar'
      },
      description: '항상 저희 아뜰랑 맨즈헤어를 빛나게 해주셔서 감사합니다!!',
      slideImage: 'http://localhost:3845/assets/6b84f1147337a824876f9c32393b7248aab2a857.png',
      slideQuote: '항상 저희 아뜰랑 맨즈헤어를\n빛나게 해주셔서 감사합니다!!'
    }
  ],
  konkuk: [
    {
      id: 2,
      name: '민종',
      position: '원장',
      image: 'http://localhost:3845/assets/5ef41fd958b7dcf08fc76ede1e2ae29bbd67b121.png',
      social: {
        wonbar: '@WonBar',
        instagram: 'atlanc_minjong'
      },
      description: '대화와 디테일로 당신만의 분위기를 디자인해, 더 나은 하루를 만들어드립니다.'
    },
    {
      id: 3,
      name: '영재',
      position: '팀장',
      image: 'http://localhost:3845/assets/41e9be2438e2b6142bfc1c452a58ef72d08b8f90.png',
      social: {
        wonbar: '@WonBar',
        instagram: 'atlanc_genius.0'
      },
      description: '헤어스타일 하나로 당신의 인생이 달라지게 만들어 드리겠습니다!'
    },
    {
      id: 4,
      name: '새로',
      position: '디자이너',
      image: 'http://localhost:3845/assets/344d975c7c0b45f701111e57e916ad9bdcc9abda.png',
      social: {
        wonbar: '@WonBar',
        instagram: 'atlanc_saero'
      },
      description: '[당신만을 위한 1:1 맞춤 컨설팅] 실패 없는 맞춤 컨설팅으로 디테일한 디자인을 선물해드립니다.'
    },
    {
      id: 5,
      name: '승원',
      position: '디자이너',
      image: 'http://localhost:3845/assets/bf00ccadcd336f6bd88adb137327322c86334656.png',
      social: {
        wonbar: '@WonBar',
        instagram: 'atlanc_sw'
      },
      description: '스타일은 바뀌어도, 인생머리는 진심에서 시작됩니다.'
    }
  ]
};

// Hero slide data - 더 많은 슬라이드 추가하여 loop 효과 개선
const heroSlides = [
  {
    id: 1,
    image: 'http://localhost:3845/assets/8f7a91377549aecf41ca303643e5fb29998ff472.png'
  },
  {
    id: 2,
    image: 'http://localhost:3845/assets/e61c213d537d50b07afbd9bb03c2da8dbef076c9.png'
  },
  {
    id: 3,
    image: 'http://localhost:3845/assets/6b84f1147337a824876f9c32393b7248aab2a857.png',
    quote: '항상 저희 아뜰랑 맨즈헤어를\n빛나게 해주셔서 감사합니다!!',
    author: '태원 대표원장'
  },
  {
    id: 4,
    image: 'http://localhost:3845/assets/bf00ccadcd336f6bd88adb137327322c86334656.png'
  },
  {
    id: 5,
    image: 'http://localhost:3845/assets/9742294614e47cc67f856c7b100d73e3fbe52711.png'
  },
  {
    id: 6,
    image: 'http://localhost:3845/assets/5ef41fd958b7dcf08fc76ede1e2ae29bbd67b121.png'
  },
  {
    id: 7,
    image: 'http://localhost:3845/assets/41e9be2438e2b6142bfc1c452a58ef72d08b8f90.png'
  },
  {
    id: 8,
    image: 'http://localhost:3845/assets/344d975c7c0b45f701111e57e916ad9bdcc9abda.png'
  }
];


export default function DesignersPage() {
  const [activeTab, setActiveTab] = useState<'sinsa' | 'konkuk'>('konkuk');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="bg-white">
      {/* Hero Section with Slides */}
      <section className="relative h-[890px] bg-black/80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("http://localhost:3845/assets/d1035ca66fb5744495ec1ff238cc3b99e41caec1.png")' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        
        {/* Section Title */}
        <div className="absolute top-44 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col gap-1 items-center text-center text-white">
            <div className="font-semibold text-lg tracking-tight uppercase text-green-400">
              <p className="leading-relaxed">Atlanc Consultant</p>
            </div>
            <div className="font-bold text-4xl leading-tight tracking-tight text-white">
              <p className="mb-0">전문 맨즈 헤어 컨설턴트가</p>
              <p>여러분의 이미지를 완성해드립니다.</p>
            </div>
          </div>
        </div>

        {/* Hero Slider */}
        <div className="absolute top-[342px] left-1/2 transform -translate-x-1/2 w-[1440px] h-[405px] z-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-custom-active',
            }}
            className="h-full pb-12"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setActiveSlideIndex(swiper.realIndex);
              // 모든 슬라이드의 투명도 업데이트
              swiper.slides.forEach((slideElement, index) => {
                const slideContent = slideElement.querySelector('.slide-content') as HTMLElement;
                if (slideContent) {
                  const distance = Math.abs(index - swiper.activeIndex);
                  let opacity = '0.5'; // 기본값 (가장 외곽)
                  
                  if (distance === 0) {
                    opacity = '1'; // 정중앙
                  } else if (distance === 1) {
                    opacity = '0.8'; // 양쪽
                  }
                  
                  slideContent.style.opacity = opacity;
                }
              });
            }}
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {({ isActive }) => (
                  <div className="relative h-[380px] w-full">
                    <div 
                      className="slide-content w-full h-full bg-cover bg-center rounded-lg overflow-hidden transition-opacity duration-300"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    />
                    {slide.quote && isActive && (
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800/90 rounded-lg">
                        <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3" />
                          <p className="text-white text-base leading-relaxed font-semibold mb-2">
                            {slide.quote.split('\n').map((line, lineIndex) => (
                              <span key={lineIndex}>
                                {line}
                                {lineIndex < slide.quote!.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                          <p className="text-green-200 text-sm">{slide.author}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Arrows */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
            <SlideArrows 
              type="01"
              direction="left"
              onClick={() => swiperInstance?.slidePrev()}
            />
          </div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
            <SlideArrows 
              type="01"
              direction="right"
              onClick={() => swiperInstance?.slideNext()}
            />
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-16">
            <div className="bg-white border border-gray-200 rounded-full p-[5px]">
              <button
                onClick={() => setActiveTab('sinsa')}
                className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                  activeTab === 'sinsa' 
                    ? 'bg-gray-800 text-green-400' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                아뜰랑 신사점
              </button>
              <button
                onClick={() => setActiveTab('konkuk')}
                className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                  activeTab === 'konkuk' 
                    ? 'bg-gray-800 text-green-400' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                아뜰랑 건대점
              </button>
            </div>
          </div>

          {/* Designer Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {designersData[activeTab].map((designer) => (
              <DesignerCard 
                key={designer.id} 
                name={designer.name}
                position={designer.position}
                image={designer.image}
                social={designer.social}
                description={designer.description}
                onDetailClick={() => console.log(`Detail for ${designer.name}`)}
                onBookingClick={() => console.log(`Booking for ${designer.name}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}