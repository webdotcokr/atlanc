"use client";

import Link from "next/link";
import MotionWrapper from "../ui/motion-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Section5() {
  return (
    <section className="bg-[#090D09] flex flex-col items-center pt-[140px] !px-0">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-11 px-5">
        <MotionWrapper animation="fadeIn">
          <h1 className="text-[46px] font-extrabold leading-[1.4] text-white font-[NanumSquareNeo] text-center">
            왜 미용실 창업이 <br></br>현 시점 가장 적합할까요?
          </h1>
        </MotionWrapper>
        <div className="w-full flex flex-col gap-6">
          <MotionWrapper animation="fadeIn">
            <div className="h-[480px] relative px-[238px] pr-[130px] flex justify-end gap-[215px] overflow-hidden bg-gradient-to-r from-[#0E120E] to-[#181a18]">
              <img
                className="w-[287px] h-[480px] object-cover object-bottom"
                src="/why1.webp"
              ></img>
              <div className="flex flex-col gap-[32px] pt-[123px]">
                <p className="text-[22px] font-[900] font-[NanumSquareNeo] leading-[1.4] text-primary">
                  01
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[32px] leading-[1.4] font-extrabold text-white font-[NanumSquareNeo]">
                    어느 지역에서나 수요가 일정합니다.
                  </h1>
                  <p className="text-[22px] text-[#eee] leading-[1.5] font-[NanumSquareNeo]">
                    수도권, 지방을 불문하고 상권이 있는 곳 어디든<br></br>
                    미용실 수요는 꾸준히 발생합니다. <br></br>
                    따라서, 전국 어디든 창업이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeIn">
            <div className="h-[480px] relative pl-[208px] pr-[130px] flex justify-end gap-[215px] overflow-hidden bg-gradient-to-r from-[#0E120E] to-[#181a18]">
              <div className="pt-[119px]">
                <img
                  className="w-[314px] h-[259px] object-cover object-bottom"
                  src="/why2.webp"
                ></img>
              </div>

              <div className="flex flex-col gap-[32px] pt-[107px]">
                <p className="text-[22px] font-[900] font-[NanumSquareNeo] leading-[1.4] text-primary">
                  02
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[32px] leading-[1.4] font-extrabold text-white font-[NanumSquareNeo]">
                    객단가가 높고 투입 비용이 적습니다.
                  </h1>
                  <p className="text-[22px] text-[#eee] leading-[1.5] font-[NanumSquareNeo]">
                    커트는 기본, 염색, 펌 등 시술로<br></br>
                    객단가를 높일 수 있는 방법이 많습니다. <br></br>
                    동시에 인력 기반 서비스이기 때문에,<br></br>
                    창업 비용과 투입 비용이 적습니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper animation="fadeIn">
            <div className="h-[480px] relative pl-[208px] pr-[64px] flex justify-end gap-[215px] overflow-hidden bg-gradient-to-r from-[#0E120E] to-[#181a18]">
              <div className="pt-[126px]">
                <img
                  className="w-[314px] h-[246px] object-cover object-bottom"
                  src="/why3.webp"
                ></img>
              </div>

              <div className="flex flex-col gap-[32px] pt-[107px]">
                <p className="text-[22px] font-[900] font-[NanumSquareNeo] leading-[1.4] text-primary">
                  03
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[32px] leading-[1.4] font-extrabold text-white font-[NanumSquareNeo]">
                    재구매가 꾸준히 발생해 매출이 안정적입니다.
                  </h1>
                  <p className="text-[22px] text-[#eee] leading-[1.5] font-[NanumSquareNeo]">
                    대부분 한 번 방문한 고객은 꾸준히 방문합니다.<br></br>
                    초기 광고를 통해 고객들을 모으고 만족도 높은 서비스를
                    <br></br>
                    제공하면 시간이 지나면서<br></br>
                    안정적인 매출이 발생하는 구조입니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>

      <div className="pt-[338px] pb-[90px] relative w-full flex flex-col items-center overflow-hidden">
        <img
          src="/section5-bg.webp"
          alt="bg"
          className="w-full h-[1355px] absolute top-0 left-0"
        ></img>

        <div className="w-screen absolute left-0 right-0 top-[600px] overflow-hidden">
          <div className="flex gap-[32px] opacity-20 animate-scroll-left-infinite">
            {/* First set */}
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <img
                  key={`first-${index}`}
                  className="shrink-0 w-[230px] h-[355px] object-cover"
                  src={`/designer${index + 1}.webp`}
                />
              ))}
            {/* Duplicate set for seamless loop */}
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <img
                  key={`second-${index}`}
                  className="shrink-0 w-[230px] h-[355px] object-cover"
                  src={`/designer${index + 1}.webp`}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[1440px] items-center gap-[53px]  px-5">
          <div className="flex flex-col gap-[16px] items-center">
            <div className="flex flex-col gap-4 items-center">
              <MotionWrapper animation="fadeIn">
                <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-primary">
                  물론 누구나 가능한 것은 아닙니다.
                </p>
              </MotionWrapper>
              <MotionWrapper animation="fadeIn">
                <p className="text-[46px] leading-[1.3] font-[NanumSquareNeo] text-white text-center">
                  하지만, 아뜰랑 맨즈헤어의 <br></br>
                  <b className="font-extrabold">
                    성공방정식을 적용한다면 가능합니다.
                  </b>
                </p>
              </MotionWrapper>
            </div>
            <MotionWrapper animation="fadeIn">
              <div className="relative w-fit pb-[45px]">
                <img
                  src="/ceo.webp"
                  alt="ceo"
                  className="w-[390px] h-[457px]"
                ></img>
                <div className="absolute right-[-27px] flex items-end w-fit bottom-[119px] h-fit gap-1.5">
                  <p className="text-lg leading-[1.3] text-white font-[NanumSquareNeo]">
                    아뜨랑 대표원장
                  </p>
                  <h1 className="text-[32px] leading-[1.3] font-extrabold text-white font-[NanumSquareNeo]">
                    김 태원
                  </h1>
                </div>
                <Link href="#">
                  <div className="absolute w-[379px] h-[70px] bg-primary rounded-full flex items-center justify-center gap-2.5 bottom-0 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.40)] ">
                    <p className="text-2xl leading-[1.4] font-extrabold text-black font-[NanumSquareNeo]">
                      아뜰랑 태원원장의 운영 철학
                    </p>
                    <img
                      src="/ico-arrow.svg"
                      alt="ico-arrow"
                      className="w-5"
                    ></img>
                  </div>
                </Link>
              </div>
            </MotionWrapper>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[36px] leading-[1.4] font-extrabold font-poppins text-primary opacity-30">
              Team ATLANC
            </p>

            <div className="relative w-full ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={4}
                navigation={{
                  prevEl: ".team-swiper-prev",
                  nextEl: ".team-swiper-next",
                }}
                loop={true}
                className="team-swiper"
              >
                {Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`/team${(index % 4) + 1}.webp`}
                        alt={`Team member ${(index % 4) + 1}`}
                        className="w-full h-[340px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="team-swiper-prev absolute left-[-60px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                <img
                  src="/slide-arrow-1.svg"
                  alt="Previous"
                  className="w-[21px]"
                />
              </div>
              <div className="team-swiper-next absolute right-[-60px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                <img
                  src="/slide-arrow-1.svg"
                  alt="Next"
                  className="w-[21px] rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
