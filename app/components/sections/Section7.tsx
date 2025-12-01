"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import MotionWrapper, {
  StaggerContainer,
  StaggerItem,
} from "../ui/motion-wrapper";
import { SynchronizedSliderProvider } from "../ui/SynchronizedSliderContext";

export default function Section7() {
  return (
    <SynchronizedSliderProvider>
      <section className="py-[120px] max-md:pt-[60px] max-md:pb-[60px] bg-[#1D1D1D] bg-[url('/consulting-bg.webp')]">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <div className=" flex flex-col items-center gap-4">
            <MotionWrapper animation="fadeIn">
              <div className=" px-2 py-1 bg-[#26E45C] text-xl font-extrabold max-md:text-[16px]] text-center text-black w-fit">
                Point 01
              </div>
            </MotionWrapper>
            <MotionWrapper animation="fadeInUp" delay={0.2}>
              <p className=" text-white text-center text-[46px] max-md:text-[26px] leading-[1.3]  tracking-[-1.5]">
                압도적인 경쟁력의<br></br>
                <b className="font-extrabold">맨즈 컨설팅을 제공합니다.</b>
              </p>
            </MotionWrapper>
            <MotionWrapper animation="fadeInUp" delay={0.2}>
              <p className=" text-white text-center text-2xl  max-md:text-[26px] leading-[1.4]  tracking-[-1.5]">
                아뜰랑은 단순한 헤어 디자인이 아닌<br></br>
                맨즈 컨설팅을 통해{" "}
                <b className="font-extrabold">
                  남성들의 &apos;인상&apos;을 디자인합니다.
                </b>
              </p>
            </MotionWrapper>
          </div>
          <div className="mt-[47px] w-full">
            <StaggerContainer
              className="grid grid-cols-3 max-md:grid-cols-1 gap-[21px] max-md:gap-4"
              staggerDelay={0.15}
              delay={0.4}
            >
              <StaggerItem animation="fadeInUp">
                <BeforeAfterSlider
                  beforeImage="before/before-1.webp"
                  afterImage="after/after-1.webp"
                  beforeLabel="BEFORE"
                  afterLabel="AFTER"
                />
              </StaggerItem>
              <StaggerItem animation="fadeInUp">
                <BeforeAfterSlider
                  beforeImage="before/before-2.webp"
                  afterImage="after/after-2.webp"
                  beforeLabel="BEFORE"
                  afterLabel="AFTER"
                />
              </StaggerItem>
              <StaggerItem animation="fadeInUp">
                <BeforeAfterSlider
                  beforeImage="before/before-3.webp"
                  afterImage="after/after-3.webp"
                  beforeLabel="BEFORE"
                  afterLabel="AFTER"
                />
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="mt-[140px] flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-0.5 items-center">
              <div className="flex justify-center items-center gap-[29px]">
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={`section7-${index}`}
                      className="w-[5px] aspect-square rounded-full bg-[#26E45C]"
                    ></div>
                  ))}
              </div>
              <h1 className="text-center font-bold text-[36px] text-[#26E45C] leadign-[1.3]">
                이제는<br></br> 남성 고객도 눈이 높아졌습니다.
              </h1>
            </div>

            <p className="text-center text-2xl leading-[1.4] text-white">
              단지 저렴하거나 가깝다고 해서 <br></br>미용실을 선택하지 않습니다.
            </p>
          </div>

          <div className="relative w-full max-w-[1400px] mt-11">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
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
                      src={`/model${(index % 4) + 1}.webp`}
                      alt={`model ${(index % 4) + 1}`}
                      className="w-full h-[348px] object-cover"
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

          <p className="mt-[55px] text-2xl text-white leading-[1.4] text-center">
            자신에게 알맞는 스타일을 디자인해주는 샵에 <br></br>
            <b className="font-extrabold">
              아낌없이 투자하고 다시 찾아주십니다.
            </b>
          </p>
        </div>
      </section>
    </SynchronizedSliderProvider>
  );
}
