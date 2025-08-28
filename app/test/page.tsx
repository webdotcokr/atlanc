'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SlideArrows from '../components/ui/slide-arrows';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Test() {
    const [isAfter, setIsAfter] = useState(false);

    const cardData = [
        {
            beforeImg: '/before-1.webp',
            afterImg: '/after-1.webp',
        },
        {
            beforeImg: '/before-2.webp', 
            afterImg: '/after-2.webp',
        },
        {
            beforeImg: '/before-3.webp',
            afterImg: '/after-3.webp',
        },
        {
            beforeImg: '/before-4.webp',
            afterImg: '/after-4.webp',
        },
        {
            beforeImg: '/before-5.webp',
            afterImg: '/after-5.webp',
        },
        {
            beforeImg: '/before-6.webp',
            afterImg: '/after-6.webp',
        }
    ];

    return (
        <>
        <section className="py-24 max-md:py-16 tracking-tighter bg-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="num text-gray-200 text-8xl font-semibold italic">01</span>
                    <h2 className="text-black font-bold text-5xl max-md:text-2xl">데이터 기반 컨설팅 시스템</h2>
                </div>

                <div className="space-y-20 max-md:space-y-12">
                    {/* Top Row: Image + Text */}
                    <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 items-center">
                        {/* Left - Circular Diagram Image Area */}
                        <div className="flex justify-center">
                            <div className="bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <img 
                                    src="/circular-diagram.webp" 
                                    alt="데이터 기반 컨설팅 다이어그램"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Right - Text Content */}
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-4">10년 경력으로 축적된 데이터</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                얼굴형부터 모발, 두상까지 모두 분석해 <br/>감이 아닌 데이터로 컨설팅합니다.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row: Text + Image */}
                    <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 items-center">
                        {/* Left - Text Content */}
                        <div className="text-right">
                            <h3 className="text-3xl font-bold text-black mb-4">심층 설문 시스템</h3>
                            <p className="text-lg leading-relaxed">
                                고객님의 특성과 니즈를 정확하게 파악하기 위해 <br/>심층 설문지 작성 및 1:1 상담을 진행합니다.
                            </p>
                        </div>

                        {/* Right - Dashboard Image Area */}
                        <div className="flex justify-center">
                            <div className="w-full bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <img 
                                    src="/dashboard-report.webp" 
                                    alt="Dashboard Report"
                                    className="w-full h-full object-contain rounded border border-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="bg-white py-12 max-md:py-16 tracking-tighter">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="num text-gray-200 text-8xl font-semibold italic">02</span>
                    <h2 className="text-black font-bold text-5xl max-md:text-2xl">개인 맞춤형 컨설팅</h2>
                    <p className="text-lg mt-6 max-md:text-base">
                        단순히 트렌드를 따르기 보다<br/>개개인의 특성에 맞게 설계하고 완벽하게 구현합니다.
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }}
                        className="pb-16"
                    >
                        {cardData.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <div className="aspect-square overflow-hidden">
                                        <img 
                                            src={isAfter ? card.afterImg : card.beforeImg}
                                            alt={`${isAfter ? 'After' : 'Before'} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
                        <SlideArrows 
                            type="02"
                            direction="left"
                            className="hover:scale-105"
                        />
                    </div>
                    
                    <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
                        <SlideArrows 
                            type="02"
                            direction="right"
                            className="hover:scale-105"
                        />
                    </div>
                {/* Tab Buttons */}
                <div className="flex justify-center mt-16">
                    <div className="bg-white border border-gray-200 rounded-full p-[5px]">
                        <button
                            onClick={() => setIsAfter(false)}
                            className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                                !isAfter 
                                    ? 'bg-gray-800 text-green-400' 
                                    : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            Before
                        </button>
                        <button
                            onClick={() => setIsAfter(true)}
                            className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                                isAfter 
                                    ? 'bg-gray-800 text-[var(--color-primary-500)]' 
                                    : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            After
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
        <section className="py-24 pb-30 max-md:py-16 tracking-tighter bg-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="num text-gray-200 text-8xl font-semibold italic">03</span>
                    <h2 className="text-black font-bold text-5xl max-md:text-2xl">체계적인 교육시스템</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-6">
                        <div className="bg-[url('/edu-1.webp')] flex items-end aspect-[7/5] bg-center bg-cover">
                            <div className="p-12 text-white">
                                <p className="text-2xl font-bold leading">
                                    언제 어느 지점에 방문해도<br/>
                                    만족스러운 결과를 제공하는<br/>
                                    교육시스템을 갖췄습니다.
                                </p>
                            </div>
                        </div>
                    
                        <div className="bg-[url('/edu-2.webp')] flex items-end aspect-[7/5] bg-center bg-cover">
                            <div className="p-12 text-white">
                                <p className="text-2xl font-bold leading">
                                    마케팅, 재방문율 상승, 객단가 상승 3가지<br/>
                                    파트로 나누어져 각 파트당 6주 정도<br/>
                                    총 18주의 교육 커리큘럼이 있습니다.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
} 