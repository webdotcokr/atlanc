"use client";

import MotionWrapper from "../ui/motion-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Section4() {
  return (
    <section className="flex flex-col gap-10 items-center relative bg-[#090D09]">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 relative pt-[70px] pb-11 max-md:pt-5 max-md:gap-[33px] max-md:pb-[65px]">
        <div className="flex flex-col gap-4 max-md:gap-3">
          <MotionWrapper animation="fadeIn">
            <p className="text-2xl font-bold leading-[1.4] font-[NanumSquareNeo] text-[#26E45C] max-md:text-[17px]">
              자영업자 100만 폐업시대
            </p>
          </MotionWrapper>

          <MotionWrapper animation="fadeIn">
            <p className="text-[46px]  leading-[1.3] font-[NanumSquareNeo] text-white max-md:text-2xl">
              아무나 할 수 있는 카페, 식당 대신 <br></br>
              <b className="font-extrabold">경쟁력 있는 업종을 선택하세요.</b>
            </p>
          </MotionWrapper>
        </div>

        <MotionWrapper animation="fadeIn">
          <div className="flex gap-[60px] max-xl:flex-col max-md:gap-5">
            <div className="relative max-md:pb-[62px] max-xl:pb-[132px]">
              <div className="w-[640px] relative h-[459px]  max-xl:w-full max-xl:h-fit max-xl:aspect-[335/240] ">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".section4-swiper-prev",
                    nextEl: ".section4-swiper-next",
                  }}
                  loop={true}
                  className="section4-swiper w-full h-full"
                >
                  <SwiperSlide>
                    <img
                      src="/image1.png"
                      className="w-full h-full object-cover"
                      alt="Image 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/image1.png"
                      className="w-full h-full object-cover"
                      alt="Image 2"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/image1.png"
                      className="w-full h-full object-cover"
                      alt="Image 3"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/image1.png"
                      className="w-full h-full object-cover"
                      alt="Image 4"
                    />
                  </SwiperSlide>
                </Swiper>

                {/* Navigation Buttons */}
                <div className="section4-swiper-prev absolute left-[25px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                  <img
                    src="/slide-arrow-1.svg"
                    alt="Previous"
                    className="w-[21px]"
                  />
                </div>
                <div className="section4-swiper-next absolute right-[25px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                  <img
                    src="/slide-arrow-1.svg"
                    alt="Next"
                    className="w-[21px] rotate-180"
                  />
                </div>
              </div>

              <h1 className="text-[66px] max-md:text-[31px] w-max font-extrabold absolute left-0 bottom-0 font-poppins leading-[66px] text-white opacity-[0.06] max-md:leading-[31px]">
                ATLANC<br></br>
                <b className="font-extrabold text-[#26E45C]">
                  PREMIUM MEN&apos;S HAIR
                </b>
              </h1>
            </div>

            <div className="w-[700px] flex flex-col max-xl:w-full">
              <div className="text-[28px] leading-[1.4] font-[NanumSquareNeo] font-bold pb-[21px] border-b w-full border-white text-white max-md:pb-[14px] max-md:text-[16px]">
                2025년 N월 직영점 매출 시뮬레이션
              </div>
              <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px] max-md:py-[14px]">
                <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6] max-md:text-[17px]">
                  총매출
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    60,000,000원
                  </p>
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    100.0%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px] max-md:py-[14px]">
                <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6] max-md:text-[17px]">
                  대표매출
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    15,000,000원
                  </p>
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    25%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px] max-md:py-[14px]">
                <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6] max-md:text-[17px]">
                  직원매출
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    45,000,000원
                  </p>
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    75%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px] max-md:py-[14px]">
                <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6] max-md:text-[17px]">
                  직원급여
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    22,500,000원
                  </p>
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    37.5%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[27px] pb-[25px] max-md:py-[14px]">
                <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6] max-md:text-[17px]">
                  임대료 및 기타 운영비
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    6,000,000원
                  </p>
                  <p className="text-[22px] font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] max-md:text-[17px]">
                    10%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#F6F6F6] pt-[22px] max-md:pt-[14px]">
                <p className="text-[28px] leading-[1.4] text-[#26E45C] font-[NanumSquareNeo] font-extrabold max-md:text-[22px]">
                  순이익
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-[28px] leading-[1.4] text-[#26E45C] font-[NanumSquareNeo] font-extrabold max-md:text-[22px]">
                    31,500,000원
                  </p>
                  <p className="text-[28px] leading-[1.4] text-[#26E45C] font-[NanumSquareNeo] font-extrabold max-md:text-[22px]">
                    52.5%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
