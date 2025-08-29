'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SlideArrows from '../ui/slide-arrows';
import NewsCard from '../ui/NewsCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface NewsItem {
    id: string;
    date: string;
    day: number;
    title: string;
    imageUrl: string;
    slug?: string;
}

interface NewsClientProps {
    newsItems: NewsItem[];
}

export default function NewsClient({ newsItems }: NewsClientProps) {
    return (
        <section className="bg-[url('/news-bg.webp')] relative py-24 max-md:py-16">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="en text-lg max-md:text-[16px] font-semibold text-center text-[var(--color-primary-500)]">NEWS</h2>
                    <p className="text-white font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3">시장은 아뜰랑에 대해 이렇게 이야기합니다.</p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-news',
                            prevEl: '.swiper-button-prev-news'
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
                            }
                        }}
                        className="pb-16"
                    >
                        {newsItems.map((news) => (
                            <SwiperSlide key={news.id}>
                                <NewsCard
                                    date={news.date}
                                    day={news.day}
                                    title={news.title}
                                    imageUrl={news.imageUrl}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-prev-news absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
                        <SlideArrows 
                            type="01"
                            direction="left"
                            className="hover:scale-105"
                        />
                    </div>
                    
                    <div className="swiper-button-next-news absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
                        <SlideArrows 
                            type="01"
                            direction="right"
                            className="hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}