import React from 'react';
import { RightArrow } from './components/ui';
import Section1 from './components/sections/Section1';
import Section2Client from './components/sections/Section2Client';
import Section3 from './components/sections/Section3';
import NewsClient, { NewsItem } from './components/sections/NewsClient';
import BeforeAfterSlider from './components/ui/BeforeAfterSlider';
import { SynchronizedSliderProvider } from './components/ui/SynchronizedSliderContext';

// Hero Section Images
const imgRectangle193989 = "http://localhost:3845/assets/aad7a07a18c5778c7589b7cd82daf88815b6453a.png";
const imgVector10 = "http://localhost:3845/assets/05170cd84baf4a5b251b65e5103e72a3ddc08dd6.svg";


export default function Home() {
  // Sample news data - this will be replaced with DB data later
  const newsData: NewsItem[] = [
    {
      id: '1',
      date: '25.07',
      day: 26,
      title: '신사미용실 아뜰랑 맨즈헤어 신사역점 남자 크롭컷 새로 디자이너',
      imageUrl: '/news-1.webp'
    },
    {
      id: '2', 
      date: '25.07',
      day: 30,
      title: '스타일은 디테일에서 완성된다 아뜰랑 맨즈헤어, 남성 전문 그루밍샵으로 주목',
      imageUrl: '/news-2.webp'
    },
    {
      id: '3',
      date: '25.07', 
      day: 26,
      title: '남자를 위한 특별한 공간, 아뜰랑 맨즈헤어에서 프리미엄 스타일링으로 차별화된 경험 선사합니다.',
      imageUrl: '/news-3.webp'
    },
  ];

  return (
    <div>
      {/* Main Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[890px] max-md:h-[656px] w-full text-center bg-[url('/hero.webp')]">
        <h2 className="en text-xl max-md:text-[14px] text-white">Atlanc Premium Men's Hair Consulting</h2>
        <p className="mt-6 text-white text-[55px] max-md:text-[30px] font-bold leading-[1.3] tracking-[-2]">우리는 헤어를 <br className="md:hidden"/>디자인하지 않습니다. <br/>당신의 인상을 디자인합니다.</p>
        {/* Bottom Center Text with Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="num text-white text-xl font-medium tracking-wide mb-4">explore</span>
          <div className="w-px h-16 bg-white opacity-60"></div>
        </div>
      </section>

      {/* Hair Consulting Section */}
      <SynchronizedSliderProvider>
        <section className="pt-35 pb-35 max-md:pt-[60px] max-md:pb-[60px] bg-[url('/consulting-bg.webp')]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px]] font-semibold text-center text-[var(--color-primary-500)]">HAIR CONSULTING</h2>
                <p className="font-bold text-white text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3 tracking-[-1.5]">내게 맞는 헤어스타일만 찾아도 <br/>인상은 완전히 달라집니다.</p>
                <div className="mt-10">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-md:gap-4">
                        <BeforeAfterSlider 
                            beforeImage="before/before-1.webp"
                            afterImage="after/after-1.webp"
                            beforeLabel="BEFORE"
                            afterLabel="AFTER"
                        />
                        <BeforeAfterSlider 
                            beforeImage="before/before-2.webp"
                            afterImage="after/after-2.webp"
                            beforeLabel="BEFORE"
                            afterLabel="AFTER"
                        />
                        <BeforeAfterSlider 
                            beforeImage="before/before-3.webp"
                            afterImage="after/after-3.webp"
                            beforeLabel="BEFORE"
                            afterLabel="AFTER"
                        />
                    </div>
                </div>
            </div>
        </section>
      </SynchronizedSliderProvider>

      {/* Who We Are Section */}
      <section className="pt-35 pb-35 max-md:pt-[60px] max-md:pb-[60px] bg-white">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px]] font-semibold text-center text-[var(--color-primary-500)]">Who We Are</h2>
                <p className="font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3 tracking-[-1.5]">맨즈 헤어컨설팅 분야에서 <br/>끊임없이 실력을 증명해 왔습니다.</p>
                <div className="mt-10">
                    <div className="grid grid-cols-4 max-md:grid-cols-1 gap-6 max-md:gap-4">
                        <div className="flex flex-col justify-between bg-[var(--color-gray-50)] p-[40px] max-md:p-[30px]">
                            <img src="/icon-1.png" alt="평균 고객 만족도" className="w-[90px] max-md:w-[70px]" />
                            <div className="text-right mt-[120px] max-md:mt-[40px]">
                                <h3 className="text-xl font-bold mt-2 tracking-tight">평균 고객 만족도</h3>
                                <p className="num text-7xl italic font-semibold text-[var(--color--gray-500)] mt-1">98%</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-[var(--color-gray-50)] p-[40px] max-md:p-[30px]">
                            <img src="/icon-2.png" alt="누적 방문 고객수" className="w-[90px] max-md:w-[70px]" />
                            <div className="text-right mt-[120px] max-md:mt-[40px]">
                                <h3 className="text-xl font-bold mt-2 tracking-tight">누적 방문 고객수</h3>
                                <p className="num text-7xl italic font-semibold text-[var(--color--gray-500)] mt-1">20,000+</p>
                            </div>  
                        </div>
                        <div className="flex flex-col justify-between bg-[var(--color-gray-50)] p-[40px] max-md:p-[30px]">
                            <img src="/icon-3.png" alt="평균 재방문율" className="w-[90px] max-md:w-[70px]" />
                            <div className="text-right mt-[120px] max-md:mt-[40px]">
                                <h3 className="text-xl font-bold mt-2 tracking-tight">평균 재방문율</h3>
                                <p className="num text-7xl italic font-semibold text-[var(--color--gray-500)] mt-1">98%</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between bg-[var(--color-gray-50)] p-[40px] max-md:p-[30px]">
                            <img src="/icon-4.png" alt="평균 재방문율" className="w-[120px] max-md:w-[70px]" />
                            <div className="text-right mt-[70px] max-md:mt-[30px]">
                                <h3 className="text-2xl font-bold mt-2 tracking-tight">태원빠 | 남자머리 컨설턴트</h3>
                                <p className="text-[var(--color-gray-600)] mt-1 tracking-tight">아뜰랑 맨즈헤어 원장 태원빠의 <br/>B급 감성 남성 뷰티 채널</p>
                                <p className="num text-5xl italic font-semibold text-[var(--color--gray-500)] mt-1">41.6K</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </section>


      {/* News Section */}
      <NewsClient newsItems={newsData} />

      {/* Customer Reviews Section */}


      {/* 아뜰랑 맨즈헤어 대표원장이 직접 소개합니다. */}
        <section className="bg-[url('/welcome-bg.webp')] pt-32 pb-32 max-md:pt-[60px] max-md:pb-[60px]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px] font-semibold text-center text-[var(--color-primary-500)]">Welcome</h2>
                <p className="text-white font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3 tracking-[-1.5]">아뜰랑 맨즈헤어 <br/>대표원장이 직접 소개합니다.</p>
                <div className="mt-10 flex justify-center">
                    <div className="relative w-full max-w-[1000px] aspect-video overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/xUKyB8ITNzs" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>   
            </div>          
        </section>

        {/* 아뜰랑은 이렇게 다릅니다. */}
        <section className="tracking-tight bg-white pt-35 pb-0 max-md:pt-[60px] max-md:pb-[60px]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px] font-semibold text-center text-[var(--color-primary-500)]">Why Atlanc?</h2>
                <p className="text-black font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3">아뜰랑은 이렇게 다릅니다.</p>
                <div className="mt-10">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
                        <a className="" href="#" style={{ cursor: 'pointer' }}>
                            <div className="group flex flex-col max-md:flex-row max-md:items-center max-md:gap-8 p-[32px] bg-[var(--color-gray-50)] hover:bg-black">
                                <p className="num font-semibold text-6xl text-[var(--color-gray-300)] group-hover:text-[var(--color-gray-700)]">01</p>
                                <div>
                                    <h3 className="text-2xl font-semibold mt-2 mb-10 max-md:mb-4 text-black group-hover:text-white">데이터 기반 컨설팅 시스템</h3>
                                    <div className="group-hover:text-[var(--color-primary-500)]"><span className="mr-2 font-semibold">자세히</span><span><RightArrow className="inline-block" /></span></div>
                                </div>
                            </div>
                        </a>
                        <a className="" href="#" style={{ cursor: 'pointer' }}>
                            <div className="group flex flex-col max-md:flex-row max-md:items-center max-md:gap-8 p-[32px] bg-[var(--color-gray-50)] hover:bg-black">
                                <p className="num font-semibold text-6xl text-[var(--color-gray-300)] group-hover:text-[var(--color-gray-700)]">02</p>
                                <div>
                                    <h3 className="text-2xl font-semibold mt-2 mb-10 max-md:mb-4 text-black group-hover:text-white">개인 맞춤형 컨설팅</h3>
                                    <div className="group-hover:text-[var(--color-primary-500)]"><span className="mr-2 font-semibold">자세히</span><span><RightArrow className="inline-block" /></span></div>
                                </div>
                            </div>
                        </a>
                          <a className="" href="#" style={{ cursor: 'pointer' }}>
                            <div className="group flex flex-col max-md:flex-row max-md:items-center max-md:gap-8 p-[32px] bg-[var(--color-gray-50)] hover:bg-black">
                                <p className="num font-semibold text-6xl text-[var(--color-gray-300)] group-hover:text-[var(--color-gray-700)]">03</p>
                                <div>
                                    <h3 className="text-2xl font-semibold mt-2 mb-10 max-md:mb-4 text-black group-hover:text-white">체계적인 교육 시스템</h3>
                                    <div className="group-hover:text-[var(--color-primary-500)]"><span className="mr-2 font-semibold">자세히</span><span><RightArrow className="inline-block" /></span></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>   
            </div>          
        </section>

      {/* New Detailed Sections */}
      <Section1 />
      <Section2Client />
      <Section3 />
      {/* 아뜰랑의 각 지점에 대해 궁금하신가요? */}
        <section className="tracking-tight bg-black bg-[url('/location-bg.webp')] pt-35 pb-35 max-md:pt-[60px] max-md:pb-[60px]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px]] font-semibold text-center text-[var(--color-primary-500)]">LOCATION</h2>
                <p className="text-white font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3">아뜰랑의 각 지점에 대해 <br/>궁금하신가요?</p>
                <div className="mt-10">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-12">
                        <div>
                            <img src="/sinsa-office.webp" alt="아뜰랑 신사점" className="w-full h-auto" />
                            <p className="mt-4 font-semibold text-[var(--color-primary-500)]">1호점</p>
                            <h3 className="text-2xl font-bold mt-2 text-white">아뜰랑 신사점</h3>
                            <p className="mt-1"><span className="mr-2 text-white">영업시간</span><span className="text-[var(--color-extended-gray-400)]">10:00 ~ 21:00 (매주 화요일 휴무)</span></p>
                        </div>
                        <div>
                            <img src="/ku-office.webp" alt="아뜰랑 건대점" className="w-full h-auto" />
                            <p className="mt-4 font-semibold text-[var(--color-primary-500)]">2호점</p>
                            <h3 className="text-2xl font-bold mt-2 text-white">아뜰랑 건대점</h3>
                            <p className="mt-1"><span className="mr-2 text-white">영업시간</span><span className="text-[var(--color-extended-gray-400)]">11:00 ~ 20:00 (매주 수요일 휴무)</span></p>
                        </div>
                        <div>
                            <img src="/virtual-office.webp" alt="아뜰랑 가맹점" className="w-full h-auto" />
                            <p className="mt-4 font-semibold text-[var(--color-primary-500)]">3호점</p>
                            <h3 className="text-2xl font-bold mt-2 text-white">아뜰랑 OO점</h3>
                            <p className="mt-1"><span className="mr-2 text-white">영업시간</span><span className="text-[var(--color-extended-gray-400)]">11:00 ~ 20:00 (매주 수요일 휴무)</span></p>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
    </div>
  );
}
  