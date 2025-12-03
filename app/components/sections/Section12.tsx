"use client";

import MotionWrapper from "../ui/motion-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Section12() {
  return (
    <section className=" bg-[#090D09]  relative pb-[73px] !px-0 max-md:pb-[40px] overflow-hidden">
      <div className="bg-[url('/section12/bg.webp')] bg-no-repeat w-full flex flex-col items-center pt-[113px] pb-[43px] max-md:pb-6 max-md:px-5">
        <div className=" flex flex-col items-center gap-4">
          <MotionWrapper animation="fadeIn">
            <div className=" px-2 py-1 bg-[#26E45C] text-xl font-extrabold max-md:text-[16px] text-center text-black w-fit">
              Point 05
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-2xl  max-md:text-[17px] leading-[1.4]  tracking-[-1.5]">
              심화되는 미용실 마케팅 경쟁
            </p>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-[46px] max-md:text-[24px] leading-[1.3]  tracking-[-1.5]">
              아뜰랑은 현시점{" "}
              <b className="font-extrabold">
                가장 트렌디한<br></br> 미용실 마케팅을 집행합니다.
              </b>
            </p>
          </MotionWrapper>
        </div>

        <MotionWrapper
          animation="fadeIn"
          className="mt-[52px] max-md:mt-[25px]"
        >
          <div className="flex items-center gap-4 max-lg:grid max-lg:grid-cols-2 max-md:gap-x-5 max-md:gap-y-4 relative">
            <div className="w-[220px] max-md:w-[142px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-0.5">
              <img
                src="/section12/logo-1.webp"
                alt="logo"
                className="max-md:w-[48px]"
              ></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
                네이버 블로그
              </p>
            </div>
            <img
              src="/section12/ico-plus.svg"
              alt="plus"
              className="w-[30px] max-md:w-[32px] max-lg:absolute max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2"
            ></img>
            <div className="w-[220px] max-md:w-[142px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-0.5">
              <img
                src="/section12/logo-2.webp"
                alt="logo"
                className="max-md:w-[48px]"
              ></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
                유튜브
              </p>
            </div>
            <img
              src="/section12/ico-plus.svg"
              alt="plus"
              className="w-[30px] max-lg:hidden"
            ></img>
            <div className="w-[220px] max-md:w-[142px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-0.5">
              <img
                src="/section12/logo-3.webp"
                alt="logo"
                className="max-md:w-[48px]"
              ></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
                네이버 플레이스
              </p>
            </div>
            <img
              src="/section12/ico-plus.svg"
              alt="plus"
              className="w-[30px] max-lg:hidden"
            ></img>
            <div className="w-[220px] max-md:w-[142px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-0.5">
              <img
                src="/section12/logo-4.webp"
                alt="logo"
                className="max-md:w-[48px]"
              ></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
                인스타그램
              </p>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper
          animation="fadeIn"
          className="mt-[42px] flex flex-col items-center max-md:mt-11"
        >
          <p className="text-2xl leading-[1.7] text-white text-center max-md:text-[17px]">
            각 마케팅 채널에서 가장 최적화된 방법으로<br></br>
            <b className="font-extrabold text-center">
              과도한 혜택, 저가 전략 없이도
            </b>
            <br></br>꾸준한 신규 고객 방문을 만들어냅니다.
          </p>
          <div className="w-[1px] h-[84px] bg-white mt-10 max-md:mt-11 max-md:h-[52px]"></div>
        </MotionWrapper>
      </div>

      <div className="flex flex-col gap-8 items-center max-md:pt-5">
        <div className="flex flex-col gap-4 max-md:px-5">
          <h1 className="underline max-lg:text-[32px] text-center text-[#26E45C] text-[36px] leading-[1.3] font-bold max-md:text-2xl">
            단지 높은 광고비가 아닌 오직 실력으로 승부합니다.
          </h1>
          <p className="text-2xl leading-[1.4] text-white text-center max-md:text-[17px]">
            높은 광고비만으로 매출을 유지하는 것은<br></br> 지속 가능하지
            않습니다.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 overflow-hidden max-md:hidden">
          <img
            src="/section12/image-1.webp"
            className="h-[421px] rounded-2xl opacity-[0.08] shrink-0"
            alt="image"
          ></img>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <img
                key={index}
                src={`/section12/image-${index + 2}.webp`}
                className="h-[421px] rounded-2xl shrink-0 mr-1"
                alt="image"
              ></img>
            ))}
          <img
            src="/section12/image-1.webp"
            className="h-[421px] rounded-2xl opacity-[0.08] shrink-0"
            alt="image"
          ></img>
        </div>

        <div className="relative overflow-visible w-full section12-swiper px-9 md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={2}
            centeredSlides={false}
            slidesOffsetBefore={-30}
            slidesOffsetAfter={-30}
            navigation={{
              prevEl: ".team-swiper-prev",
              nextEl: ".team-swiper-next",
            }}
            loop={true}
            slideToClickedSlide={true}
            className="px-9"
          >
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  {({ isActive, isNext }) => (
                    <img
                      alt={`model ${(index % 5) + 1}`}
                      src={`/section12/image-${index + 1}.webp`}
                      className="rounded-lg shrink-0 aspect-[148/240] transition-opacity duration-300"
                      style={{
                        opacity: isActive || isNext ? 1 : 0.2,
                      }}
                    />
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
          {/* Navigation Buttons */}
          <div className="team-swiper-prev absolute left-[-60px] top-1/2 -translate-y-1/2 cursor-pointer z-10 max-md:left-[3px]">
            <img
              src="/slide-arrow-1.svg"
              alt="Previous"
              className="w-[21px] max-md:w-4"
            />
          </div>
          <div className="team-swiper-next absolute right-[-60px] top-1/2 -translate-y-1/2 cursor-pointer z-10 max-md:right-[3px]">
            <img
              src="/slide-arrow-1.svg"
              alt="Next"
              className="w-[21px] rotate-180 max-md:w-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
