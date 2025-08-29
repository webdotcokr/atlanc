'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SlideArrows from '../ui/slide-arrows';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Section2Client() {
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
        <section className="bg-white py-12 max-md:py-16 tracking-tighter">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12 max-md:mb-8">
                    <span className="num text-gray-200 text-8xl font-semibold italic">02</span>
                    <h2 className="text-black font-bold text-5xl max-md:text-3xl">개인 맞춤형 컨설팅</h2>
                    <p className="text-lg mt-6 max-md:text-base">
                        단순히 트렌드를 따르기 보다<br/>개개인의 특성에 맞게 설계하고 완벽하게 구현합니다.
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white border border-gray-200 rounded-full p-[5px]">
                        <button
                            onClick={() => setIsAfter(false)}
                            className={`px-5 py-3 rounded-full text-base font-semibold transition-colors ${
                                !isAfter 
                                    ? 'bg-gray-800 text-[var(--color-primary-500)]' 
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
                </div>
            </div>
        </section>
    );
}