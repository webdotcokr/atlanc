'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { DesignerCard, SlideArrows } from '../components/ui';
import MotionWrapper, { StaggerContainer, StaggerItem } from '../components/ui/motion-wrapper';

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
      image: '/sinsa/태원빠.webp',
      social: {
        wonbar: '@WonBar',
        instagram: '@atlanc_wonbar'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_wonbar',
        booking: 'https://naver.me/GfCpS0ha',
        youtube: 'https://www.youtube.com/channel/UCgil4B6Ag7wC9j0nXLPEhpQ'
      },
      description: '항상 저희 아뜰랑 맨즈헤어를 빛나게 해주셔서 감사합니다!!',
    },
    {
      id: 2,
      name: '다애',
      position: '실장',
      image: '/sinsa/다애.webp',
      social: {
        wonbar: '',
        instagram: '@atlanc_daae'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_daae',
        booking: 'https://naver.me/GB0zpbjR'
      },
      description: '| 컨설팅 마스터 | 일상 속 완벽한 변화는 헤어스타일로부터 시작됩니다. 두상과 얼굴형에 가장 최적인 당신만의 이미지를 디자인합니다.',
    },
    {
      id: 3,
      name: '서한',
      position: '디자이너',
      image: '/sinsa/서한.webp',
      social: {
        wonbar: '',
        instagram: '@atlanc_s'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_s',
        booking: 'https://naver.me/5UT9DgW2'
      },
      description: '편한 손질로 하루의 시작을 행복하게 만들어드립니다!',
    },
    {
      id: 4,
      name: '수현',
      position: '디자이너',
      image: '/sinsa/수현.webp',
      social: {
        wonbar: '',
        instagram: '@atlanc_soohyun'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_soohyun',
        booking: 'https://naver.me/xXDTs98A'
      },
      description: '여자들이 좋아하는 꾸안꾸 느낌의 네추럴한 스타일을 추구합니다. 지나치게 화려하거나 인위적이지 않은, 가볍고 손질이 편한 디자인으로 고객님 본연의 아름다움을 살려 드리겠습니다!!',
    },
    {
      id: 5,
      name: '승빈',
      position: '디자이너',
      image: '/sinsa/승빈.webp',
      social: {
        wonbar: '',
        instagram: '@atlanc_bin'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_bin',
        booking: 'https://naver.me/GG7lQx3C'
      },
      description: '대한민국 남성의 두상·모질·라이프스타일까지 고려한 1:1 맞춤 헤어 컨설턴트, 승빈T',
    },
    {
      id: 6,
      name: '범',
      position: '디자이너',
      image: '/sinsa/범.webp',
      social: {
        wonbar: '',
        instagram: 'atlanc_bum'
      },
      urls: {
        instagram: 'https://www.instagram.com/atlanc_bum',
        booking: 'https://naver.me/FjC2sZ66'
      },
      description: '샤프하고 트렌디한 디자인을 추구합니다. 간편한 손질과 요즘 느낌의 멋스러운 포인트로, 본인이 가진 개성과 분위기를 살린 멋을 만들어 드립니다!!',
    }
  ],
  konkuk: [
    {
      id: 1,
      name: '태원빠',
      position: '대표 원장',
      image: '/konkuk/태원빠.webp',
      social: {
        wonbar: '@WonBar',
        instagram: '@atlanc_wonbar'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_wonbar',
        booking: 'https://naver.me/G9pb9FlM',
        youtube: 'https://www.youtube.com/channel/UCgil4B6Ag7wC9j0nXLPEhpQ'
      },
      description: '항상 저희 아뜰랑 맨즈헤어를 빛나게 해주셔서 감사합니다!!'
    },
    {
      id: 2,
      name: '민종',
      position: '원장',
      image: '/konkuk/민종.webp',
      social: {
        wonbar: '',
        instagram: 'atlanc_minjong'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_minjong',
        booking: 'https://naver.me/FgTHJqD1'
      },
      description: '대화와 디테일로 당신만의 분위기를 디자인해, 더 나은 하루를 만들어드립니다.'
    },
    {
      id: 3,
      name: '영재',
      position: '팀장',
      image: '/konkuk/영재.webp',
      social: {
        wonbar: '',
        instagram: 'atlanc_genius.0'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_genius.0',
        booking: 'https://naver.me/Gq9JsxDL'
      },
      description: '헤어스타일 하나로 당신의 인생이 달라지게 만들어 드리겠습니다!'
    },
    {
      id: 4,
      name: '새로',
      position: '디자이너',
      image: '/konkuk/새로.webp',
      social: {
        wonbar: '',
        instagram: 'atlanc_saero'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_saero',
        booking: 'https://naver.me/FkL7Wemh'
      },
      description: '[당신만을 위한 1:1 맞춤 컨설팅] 실패 없는 맞춤 컨설팅으로 디테일한 디자인을 선물해드립니다.'
    },
    {
      id: 5,
      name: '승원',
      position: '디자이너',
      image: '/konkuk/승원.webp',
      social: {
        wonbar: '',
        instagram: 'atlanc_sw'
      },
      urls: {
        instagram: 'https://instagram.com/atlanc_sw',
        booking: 'https://naver.me/FdosOn3T'
      },
      description: '스타일은 바뀌어도, 인생머리는 진심에서 시작됩니다.'
    }
  ]
};

// Hero slide data - 더 많은 슬라이드 추가하여 loop 효과 개선
const heroSlides = [
  {
    id: 1,
    image: '/sinsa/태원빠.webp',
    quote: '항상 저희 아뜰랑 맨즈헤어를\n빛나게 해주셔서 감사합니다!!',
    author: '태원 대표원장'
  },
  {
    id: 2,
    image: '/sinsa/다애.webp',
    quote: '| 컨설팅 마스터 | ’일상 속 완벽한 변화는 헤어스타일로부터 시작됩니다.‘ 두상과 얼굴형에 가장 최적인 당신만의 이미지를 디자인합니다.',
    author: '다애 실장'
  },
  {
    id: 3,
    image: '/sinsa/서한.webp',
    quote: '편한 손질로 하루의 시작을 \n행복하게 만들어드립니다!',
    author: '서한 디자이너'
  },
  {
    id: 4,
    image: '/sinsa/수현.webp',
    quote: '여자들이 좋아하는 꾸안꾸 느낌의 네추럴한 스타일을 추구합니다. 지나치게 화려하거나 인위적이지 않은, 가볍고 손질이 편한 디자인으로 고객님 본연의 아름다움을 살려 드리겠습니다!!',
    author: '수현 디자이너'
  },
  {
    id: 5,
    image: '/sinsa/승빈.webp',
    quote: '대한민국 남성의 두상·모질·라이프스타일까지 고려한 1:1 맞춤 헤어 컨설턴트, 승빈T',
    author: '승빈 디자이너'
  },
  {
    id: 6,
    image: '/sinsa/범.webp',
    quote: '샤프하고 트렌디한 디자인을 추구합니다. 간편한 손질과 요즘 느낌의 멋스러운 포인트로, 본인이 가진 개성과 분위기를 살린 멋을 만들어 드립니다!!',
    author: '범 디자이너'
  },
  {
    id: 7,
    image: '/konkuk/민종.webp',
    quote: '대화와 디테일로 당신만의 분위기를 디자인해, 더 나은 하루를 만들어드립니다.',
    author: '민종 원장'
  },
  {
    id: 8,
    image: '/konkuk/영재.webp',
    quote: '헤어스타일 하나로 당신의 인생이 달라지게 만들어 드리겠습니다!',
    author: '영재 팀장'
  },
  {
    id: 9,
    image: '/konkuk/새로.webp',
    quote: '[당신만을 위한 1:1 맞춤 컨설팅] 실패 없는 맞춤 컨설팅으로 디테일한 디자인을 선물해드립니다.',
    author: '새로 디자이너'
  },
  {
    id: 10,
    image: '/konkuk/승원.webp',
    quote: '스타일은 바뀌어도, \n인생머리는 진심에서 시작됩니다.',
    author: '승원 디자이너'
  },
];


export default function DesignersPage() {
  const [activeTab, setActiveTab] = useState<'sinsa' | 'konkuk'>('sinsa');
  const [swiperInstance, setSwiperInstance] = useState<{
    slidePrev: () => void;
    slideNext: () => void;
  } | null>(null);

  return (
    <div className="bg-white">
      <h1 className="sr-only">아뜰랑 맨즈헤어 디자이너 소개</h1>
      {/* Hero Section with Slides */}
      <section className="flex flex-col justify-center items-center h-[890px] max-md:h-[656px] bg-[url('/designers-bg.webp')] bg-cover bg-center px-4 tracking-[-1.5]">        
        {/* Section Title */}
        <div className="flex flex-col gap-1 text-center text-white max-w-4xl">
          <MotionWrapper animation="fadeIn" duration={1}>
            <h2 className="en text-xl max-md:text-[14px] font-semibold text-[var(--color-primary-500))] uppercase">Atlanc Consultant</h2>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className="mt-2 text-4xl max-md:text-[26px] font-bold">전문 맨즈 헤어 컨설턴트가 <br />여러분의 이미지를 완성해드립니다.</p>
          </MotionWrapper>
        </div>

        {/* Hero Slider */}
        <MotionWrapper className="relative w-full max-w-[1440px] h-[405px] max-md:h-[309px] mt-12 px-4" animation="fadeInUp" delay={0.4}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
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
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              }
            }}
            className="h-full pb-12"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              // 데스크톱에서만 투명도 애니메이션 적용
              if (window.innerWidth >= 1024) {
                swiper.slides.forEach((slideElement, index) => {
                  const slideContent = slideElement.querySelector('.slide-content') as HTMLElement;
                  if (slideContent) {
                    const distance = Math.abs(index - swiper.activeIndex);
                    let opacity = '0.5';
                    
                    if (distance === 0) {
                      opacity = '1';
                    } else if (distance === 1) {
                      opacity = '0.8';
                    }
                    
                    slideContent.style.opacity = opacity;
                  }
                });
              } else {
                // 모바일에서는 모든 슬라이드 opacity를 1로 설정
                swiper.slides.forEach((slideElement) => {
                  const slideContent = slideElement.querySelector('.slide-content') as HTMLElement;
                  if (slideContent) {
                    slideContent.style.opacity = '1';
                  }
                });
              }
            }}
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {({ isActive }) => (
                  <div className="relative h-[380px] max-md:h-[309px] w-full">
                    <div 
                      className="slide-content w-full h-full bg-cover bg-center rounded-lg overflow-hidden transition-opacity duration-300"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    />
                    {slide.quote && isActive && (
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800/90 rounded-lg">
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 text-center">
                          <p className="text-white text-sm md:text-base leading-relaxed font-semibold mb-2 max-md:line-clamp-3">
                            {slide.quote.split('\n').map((line, lineIndex) => (
                              <span key={lineIndex}>
                                {line}
                                {lineIndex < slide.quote!.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                          <p className="text-green-200 text-xs md:text-sm">{slide.author}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Arrows - 데스크톱에서만 표시 */}
          <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
            <SlideArrows 
              type="01"
              direction="left"
              onClick={() => swiperInstance?.slidePrev()}
            />
          </div>
          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
            <SlideArrows 
              type="01"
              direction="right"
              onClick={() => swiperInstance?.slideNext()}
            />
          </div>
        </MotionWrapper>
      </section>

      {/* Tab Section */}
      <section className="py-20 px-4">
        <div className="max-w-[1440px] mx-auto">
          {/* Tab Buttons */}
          <MotionWrapper className="flex justify-center mb-16 max-md:mb-8" animation="fadeInUp">
            <div className="bg-white border border-gray-200 rounded-full p-[5px]">
              <button
                onClick={() => setActiveTab('sinsa')}
                className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                  activeTab === 'sinsa' 
                    ? 'bg-gray-800 text-[var(--color-primary-500)]' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                아뜰랑 신사점
              </button>
              <button
                onClick={() => setActiveTab('konkuk')}
                className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                  activeTab === 'konkuk' 
                    ? 'bg-gray-800 text-[var(--color-primary-500)]' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                아뜰랑 건대점
              </button>
            </div>
          </MotionWrapper>

          {/* Designer Cards */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.15} delay={0.2}>
            {designersData[activeTab].map((designer) => (
              <StaggerItem key={designer.id} animation="fadeInUp">
                <DesignerCard 
                name={designer.name}
                position={designer.position}
                image={designer.image}
                social={designer.social}
                urls={designer.urls}
                description={designer.description}
                onDetailClick={() => console.log(`Detail for ${designer.name}`)}
                onBookingClick={() => console.log(`Booking for ${designer.name}`)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}