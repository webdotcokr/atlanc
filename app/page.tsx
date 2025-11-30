import React from "react";
import { RightArrow } from "./components/ui";
import Section1 from "./components/sections/Section1";
import Section2Client from "./components/sections/Section2Client";
import Section3 from "./components/sections/Section3";
import NewsClient, { NewsItem } from "./components/sections/NewsClient";
import BeforeAfterSlider from "./components/ui/BeforeAfterSlider";
import { SynchronizedSliderProvider } from "./components/ui/SynchronizedSliderContext";
import ReviewInfo from "./components/ui/review-info";
import MotionWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./components/ui/motion-wrapper";
import AnimatedCounter from "./components/ui/animated-counter";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import Section7 from "./components/sections/Section7";
import Section8 from "./components/sections/Section8";
import Section9 from "./components/sections/Section9";
import Section10 from "./components/sections/Section10";
import Section11 from "./components/sections/Section11";
import Section12 from "./components/sections/Section12";
import Section13 from "./components/sections/Section13";
import Section14 from "./components/sections/Section14";
import Section15 from "./components/sections/Section15";

export default function Home() {
  // Sample news data - this will be replaced with DB data later
  const newsData: NewsItem[] = [
    {
      id: "1",
      date: "25.07",
      day: 26,
      title: "신사미용실 아뜰랑 맨즈헤어 신사역점 남자 크롭컷 새로 디자이너",
      imageUrl: "/news-1.webp",
    },
    {
      id: "2",
      date: "25.07",
      day: 30,
      title:
        "스타일은 디테일에서 완성된다 아뜰랑 맨즈헤어, 남성 전문 그루밍샵으로 주목",
      imageUrl: "/news-2.webp",
    },
    {
      id: "3",
      date: "25.07",
      day: 26,
      title:
        "남자를 위한 특별한 공간, 아뜰랑 맨즈헤어에서 프리미엄 스타일링으로 차별화된 경험 선사합니다.",
      imageUrl: "/news-3.webp",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          "'NanumSquareNeo', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      }}
    >
      <h1 className="sr-only">아뜰랑 맨즈헤어, 프리미엄 남성 전문 헤어샵</h1>
      {/* Main Hero Section */}
      <section className="relative flex flex-col items-center gap-5 justify-center h-[890px] max-md:h-[656px] w-full text-center bg-[url('/hero.webp')]">
        <MotionWrapper animation="fadeIn" duration={1}>
          <div className="flex flex-col items-center gap-2">
            <img className="w-[106px] aspect-square" src="/logo.svg"></img>
            <div className="text-center justify-start">
              <p className="text-white text-[40px] font-bold  leading-[58px]">
                미용실 창업으로
              </p>
              <div className=" relative">
                <div
                  className="bg-primary h-[62px]  absolute w-[526px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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
          <span className="num text-white text-xl  font-medium tracking-wide mb-3">
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
      <div className="w-full h-[170px] flex items-center gap-11 overflow-hidden px-[5px] bg-[#1FD854]">
        <h1 className="text-[74px] font-poppins font-bold text-black leading-[1.7] shrink-0">
          {" "}
          ATLANC PREMIUM MEN’S HAIR
        </h1>
        <img
          src="/black-logo.svg"
          className="w-[95px] aspect-square shrink-0"
        ></img>
        <h1 className="text-[74px] font-poppins font-bold text-black leading-[1.7] shrink-0">
          {" "}
          ATLANC PREMIUM MEN’S HAIR
        </h1>
      </div>
      {/* 성과는 단연코 개개인의 */}
      <Section14></Section14>
      {/* point6 */}
      <Section15></Section15>
    </div>
  );
}
