import React from "react";
import MotionWrapper from "../components/ui/motion-wrapper";
import CustomCheckbox from "../components/ui/custom-checkbox";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";
import Section7 from "../components/sections/Section7";
import Section8 from "../components/sections/Section8";
import Section9 from "../components/sections/Section9";
import Section10 from "../components/sections/Section10";
import Section11 from "../components/sections/Section11";
import Section12 from "../components/sections/Section12";
import Section13 from "../components/sections/Section13";
import Section14 from "../components/sections/Section14";
import Section15 from "../components/sections/Section15";

export default function FranchisePage() {
  return (
    <div
      style={{
        fontFamily:
          "'NanumSquareNeo', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      }}
    >
      <h1 className="sr-only">아뜰랑 맨즈헤어, 프리미엄 남성 전문 헤어샵</h1>
      {/* Main Hero Section */}
      <section className="relative flex flex-col items-center gap-5 justify-center h-[890px] max-md:h-[656px] w-full text-center bg-[url('/hero.webp')] bg-[#090D09]">
        <MotionWrapper animation="fadeIn" duration={1}>
          <div className="flex flex-col items-center gap-2">
            <img className="w-[106px] aspect-square" src="/logo.svg"></img>
            <div className="text-center justify-start">
              <p className="text-white text-[40px] font-bold  leading-[58px]">
                미용실 창업으로
              </p>
              <div className=" relative">
                <div
                  className="bg-[#26E45C] h-[62px]  absolute w-[526px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                  style={{ transform: "skewX(-15deg)" }}
                />
                <p className=" text-black text-[40px] font-extrabold relative leading-[58px]">
                  월매출 6천만원, 마진율 40%
                </p>
              </div>
            </div>
          </div>
        </MotionWrapper>
        <MotionWrapper animation="fadeInUp" delay={0.3} duration={0.8}>
          <p className="text-white text-[60px] max-md:text-[30px] font-bold leading-[1.3] tracking-[-2]">
            아뜰랑 맨즈헤어에서는<br></br>가능합니다
          </p>
        </MotionWrapper>
        {/* Bottom Center Text with Line */}
        <MotionWrapper
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animation="fadeInUp"
          delay={0.6}
        >
          <span className=" text-white text-xl  font-medium tracking-wide mb-3">
            스크롤을 내려서 성공창업을 확인해보세요!{" "}
          </span>
          <div className="w-px h-[46px] bg-white opacity-60"></div>
        </MotionWrapper>
      </section>
      {/* 자영업자 100만 폐업시대 */}
      <Section4></Section4>
      {/* 왜 미용실 창업이 적합할까요? */}
      <Section5></Section5>
      {/* Who We Are Section */}
      <Section6></Section6>
      {/* Hair Consulting Section */}
      <Section7></Section7>
      {/* point2 */}
      <Section8></Section8>
      {/* point3 */}
      <Section9></Section9>
      {/* point4 */}
      <Section10></Section10>
      {/* 최고의 품질 유지를 위해 */}
      <Section11></Section11>
      {/* point5 */}
      <Section12></Section12>
      {/* 아뜰랑 맨즈헤어 대표원장이 직접 소개합니다. */}
      <Section13></Section13>
      {/* 띠배너 */}
      <div className="w-full h-[170px] overflow-hidden bg-[#1FD854]">
        <div className="flex items-center gap-11 h-full animate-scroll-left-infinite">
          {/* 첫 번째 세트 */}
          <h1 className="text-[74px] font-poppins font-bold text-black leading-[1.7] shrink-0 whitespace-nowrap">
            ATLANC PREMIUM MEN&apos;S HAIR
          </h1>
          <img
            src="/black-logo.svg"
            className="w-[95px] aspect-square shrink-0"
            alt="Atlanc Logo"
          />
          <h1 className="text-[74px] font-poppins font-bold text-black leading-[1.7] shrink-0 whitespace-nowrap">
            ATLANC PREMIUM MEN&apos;S HAIR
          </h1>
          <img
            src="/black-logo.svg"
            className="w-[95px] aspect-square shrink-0"
            alt="Atlanc Logo"
          />
          {/* 두 번째 세트 (복제 - 끊김 없는 루프) */}
          <h1 className="text-[74px] font-poppins font-bold text-black leading-[1.7] shrink-0 whitespace-nowrap">
            ATLANC PREMIUM MEN&apos;S HAIR
          </h1>
          <img
            src="/black-logo.svg"
            className="w-[95px] aspect-square shrink-0"
            alt="Atlanc Logo"
          />
          <h1 className="text-[74px] font-poppins font-bold text-black leading-[1.7] shrink-0 whitespace-nowrap">
            ATLANC PREMIUM MEN&apos;S HAIR
          </h1>
          <img
            src="/black-logo.svg"
            className="w-[95px] aspect-square shrink-0"
            alt="Atlanc Logo"
          />
        </div>
      </div>
      {/* 성과는 단연코 개개인의 */}
      <Section14></Section14>
      {/* point6 */}
      <Section15></Section15>
      {/* 무료상담 */}
      <section className=" bg-[url('/free-consulting-bg.webp')] pt-[120px] pb-[165px]">
        <div className="flex flex-col gap-[25px] w-full max-w-[1140px] mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-2xl leading-[1.4] text-white">
              조급하게 결정하지 마세요
            </p>
            <h1 className="text-center text-[46px] leading-[1.3] font-extrabold text-white">
              무료 상담을 받아보고 결정해도 <br></br>늦지 않습니다.
            </h1>
          </div>

          <div className="pt-11 pb-[38px] px-10 bg-[#00000099] border border-[#FFFFFF26] flex items-end gap-4 rounded-lg">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-bold leading-[1.3] text-white">
                    성함
                  </p>
                  <input
                    className="bg-white w-[222px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                    placeholder="성함을 입력하세요"
                  ></input>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-bold leading-[1.3] text-white">
                    연락처
                  </p>
                  <input
                    className="bg-white w-[244px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                    placeholder="연락처를 입력하세요"
                    type="number"
                  ></input>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-bold leading-[1.3] text-white">
                    창업 희망지역
                  </p>
                  <input
                    className="bg-white w-[313px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                    placeholder="희망 지역을 입력하세요.(ex. 성남 분당)"
                  ></input>
                </div>
              </div>

              <div className="flex items-center gap-5 justify-end">
                <CustomCheckbox />
                <p className="cursor-pointer text-sm leading-1.4 text-white underline">
                  약관보기
                </p>
              </div>
            </div>

            <div className="bg-[#26E45C] py-4 pl-[24px] cursor-pointer pr-5 rounded-lg w-[192px] h-[87px] flex items-center justify-center gap-[15px]">
              <p className="text-[22px] text-black font-extrabold leading-[1.2]">
                무료 컨설팅 <br></br>신청하기
              </p>
              <img src="ico-arrow-2.svg" alt="ico-arrow" className="w-5"></img>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 상담신청 */}
      <div className="h-[102px] w-full">
        <section className="bg-[#313532] w-full h-[102px] fixed bottom-0 left-0 z-[1] flex flex-col !px-0">
          <div className="w-full h-[3px] bg-gradient-to-r from-[#26e45c] to-[#187d68]" />
          <div className="max-w-[1440px] px-5 flex items-center mx-auto grow justify-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <img src="/ico-call.svg" alt="ico-call" className="w-4"></img>
                <p className="text-lg text-white font-bold leading-[1.4]">
                  가맹문의
                </p>
              </div>
              <p className="text-[21px] font-extrabold text-[#26E45C] leading-[1.4]">
                0507-1341-9532
              </p>
            </div>

            <div className="flex items-center gap-3 ml-[29px] mr-6">
              <input
                className="bg-white w-[222px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                placeholder="성함을 입력하세요"
              ></input>
              <input
                className="bg-white w-[244px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                placeholder="연락처를 입력하세요"
                type="number"
              ></input>
              <input
                className="bg-white w-[313px] h-[54px] px-[17px] py-[15px] text-[16px] font-bold leading-[1.4] placeholder:text-[#777] outline-none rounded-sm"
                placeholder="희망 지역을 입력하세요.(ex. 성남 분당)"
              ></input>

              <div className="flex flex-col gap-[3px] items-end">
                <CustomCheckbox label="개인정보 수집동의" />
                <p className="cursor-pointer text-sm leading-1.4 text-white underline">
                  약관보기
                </p>
              </div>
            </div>
            <div className="bg-[#26E45C] py-4  cursor-pointer  rounded-lg w-[192px] h-[68px] flex items-center justify-center gap-[15px]">
              <p className="text-[22px] text-black font-extrabold leading-[1.2]">
                무료상담 신청
              </p>
              <img src="ico-arrow-2.svg" alt="ico-arrow" className="w-5"></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
