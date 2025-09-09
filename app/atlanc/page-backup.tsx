import React from 'react';

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">아뜰랑 맨즈헤어, 브랜드 소개</h1>
      <section 
        className="relative flex flex-col items-center justify-center h-[890px] max-md:h-[656px] w-full text-center bg-[url('/atlanc-bg.webp')]"
      >
        <h2 className="en text-xl max-md:text-[14px] text-[var(--color-primary-500))]">Atlanc Man&apos;s Hair</h2>
        <p className="num mt-6 text-white text-[80px] max-md:text-[38px] font-bold leading-[1.1] tracking-[-2]">Efficiency isn&apos;t our goal <br/>your satisfaction is</p>
        <p className="text-white text-xl max-md:text-[14px] text-medium mt-6">효율은 우리의 목표가 아닙니다. <br/>당신의 만족이죠.</p>
        {/* Bottom Center Text with Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="num text-white text-xl font-medium tracking-wide mb-4">explore</span>
          <div className="w-px h-16 bg-white opacity-60"></div>
        </div>
      </section>

      {/* 아뜰랑 맨즈헤어 대표원장이 직접 소개합니다. */}
        <section className="pt-32 pb-32 max-md:pt-[60px] max-md:pb-[60px] bg-white">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px] font-semibold text-center text-[var(--color-primary-500)]">We Are Atlanc</h2>
                <p className="font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3 tracking-[-1.5]">아뜰랑을 소개합니다</p>
                <div className="mt-10 flex justify-center">
                    <div className="relative w-full aspect-video overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%"
                            src="https://www.youtube.com/embed/Ghqe3lR3h84" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 max-md:gap-2 mt-4 max-md:mt-2">
                  <img src="/consult-1.webp" className="w-full h-auto" />
                  <img src="/consult-2.webp" className="w-full h-auto" />
                  <img src="/consult-3.webp" className="w-full h-auto" />
                  <img src="/consult-4.webp" className="w-full h-auto" />
                  <img src="/consult-5.webp" className="w-full h-auto" />
                </div>   
            </div>          
        </section>

        <section className="pb-32 max-md:pt-[60px] max-md:pb-[60px] bg-white">
          <div className="tracking-[-1] flex flex-col items-center justify-center text-center">
            <img src="/about-2.webp" className="max-md:w-[140px]" />
            <div className="flex flex-col items-center mt-3 mb-6">
              <div className="w-px h-12 bg-black"></div>
            </div>
            <h2 className="text-4xl max-md:text-[26px] text-bold font-semibold">Man’s Hair Consulting</h2>
            <p className="text-xl mt-4">남성의 인상은 헤어 스타일에 따라 크게 좌우됩니다. <br/>단지 획일화된 유행하는 스타일을 따르기엔 우리는 직업, 스타일, 두상, 얼굴형, 모발까지 <br/>다양한 특성을 가지고 있습니다. </p>
            <p className="text-xl mt-8">아뜰랑은 개인의 특성을 세밀하게 분석하고 최적의 스타일을 제안합니다.</p>
          </div>
        </section>

        <section className="pb-32 max-md:pt-[60px] max-md:pb-[60px] bg-white tracking-[-1] break-keep">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 items-center justify-center">
            <div className="text-right max-md:text-center max-md:order-2">
              <p className="num text-5xl max-md:text-[36px] font-bold text-[var(--color-gray-200)]">Man’s Hair Counsulting</p>
              <p className="text-xl mt-6">방문하시는 고객님들께서 가장 많이 물어보시는 질문이 <br/>“저는 어떤 머리가 어울릴까요?” 입니다.</p>
              <p className="text-xl mt-8">최근에는 유행하는 스타일을 우후죽순 따라하는 것보다 <br className="max-md:hidden"/>개개인에게 어울리는 스타일을 찾고 싶다는 니즈가 세분화 되고. <br/><br className="md:hidden"/>
저희 아뜰랑 맨즈헤어는 세분화 된 <br className="md:hidden"/>고객님의 니즈를 충족시켜 드리기 위해 <br/>고객님의 얼굴형, 두상, 모발 상태는 물론 <br/>직업과 라이프스타일까지 고려한 1:1 맞춤 헤어 컨설팅을 진행하고 있습니다. <br/><br className="md:hidden"/>단순한 유행을 넘어서, <br className="md:hidden"/>당신만의 인상을 디자인해 드립니다</p>
            </div>
            <img src="/about-6.webp" className="max-md:order-1"/>
          </div>
        </section>

    </>
  );
}