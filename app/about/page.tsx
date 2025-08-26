import React from 'react';
import { SectionTitle } from '../components/ui';

const heroBackgroundImage = "http://localhost:3845/assets/a7d84877b64bccafe110d8770b8eda90cb3594f3.png";
const heroBackgroundMobile = "http://localhost:3845/assets/a120d39c351885791072bf5f65c3866da166a1fc.png";
const mainVideoThumbnail = "http://localhost:3845/assets/3adeb1e37421bd7b4e84621d427131f22323d465.png";
const mainVideoThumbnailMobile = "http://localhost:3845/assets/2e9a88489b032559dfe025ca3cdab537195332da.png";
const galleryImages = [
  "http://localhost:3845/assets/7b73b0a2284bbf997f6e3201b96686aa7f81db88.png",
  "http://localhost:3845/assets/1086493a236e9f71b0b12c1b8905a8df82a2efb9.png",
  "http://localhost:3845/assets/31ec8f59edef6e1b77dbfd3b9ddf55ea2b4a2885.png",
  "http://localhost:3845/assets/9f2c60cfc1fb26d60b8c90d4780e92d14bc84362.png",
  "http://localhost:3845/assets/407ddf265b68ae5dddaf0ad1959a4a0fc1eb2549.png"
];
const consultingImage = "http://localhost:3845/assets/75234b633b8112e50bf25d6a0f17e9609152528d.png";
const stylistImage = "http://localhost:3845/assets/67ecbda9efd85f33dac0f5c207cb9066aa5fabc5.png";
const stylistIcon = "http://localhost:3845/assets/7091e184906063db45c253fdec4f69b55ef3e583.png";
const playButtonIcon = "http://localhost:3845/assets/22fa20258c14f05392a449d309f52de590919492.svg";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section 
        className="relative h-[656px] md:h-[890px] flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroBackgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Mobile background overlay - hidden on desktop */}
        <div className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('${heroBackgroundMobile}')`
        }}></div>
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="mb-3 md:mb-6">
            <p className="font-medium text-green-400 text-sm md:text-xl tracking-wide">
              Atlanc Man&apos;s Hair
            </p>
          </div>
          
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl leading-none tracking-tight mb-3 md:mb-6">
            <span className="block">Efficiency isn&apos;t our goal</span>
            <span className="block">your satisfaction is</span>
          </h1>
          
          <p className="font-semibold text-sm md:font-medium md:text-xl tracking-tight leading-relaxed">
            <span className="block">효율이 아닌 고객님의 만족이</span>
            <span className="block">우리의 목표입니다.</span>
          </p>
        </div>

        <div className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-white">
          <p className="font-medium text-lg md:text-xl">explore</p>
          <div className="h-12 w-px bg-white/50"></div>
        </div>
      </section>

      <div className="py-12 md:py-20">
        <SectionTitle 
          subtitle="We Are Atlanc"
          title="아뜰랑을 소개합니다"
          className="px-4"
        />
      </div>

      <section className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        <div className="relative">
          <div className="relative">
            {/* Desktop video thumbnail */}
            <div className="hidden md:block w-full h-[736px] bg-cover bg-center rounded-lg overflow-hidden" style={{
              backgroundImage: `url('${mainVideoThumbnail}')`
            }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <img src={playButtonIcon} alt="Play" className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Mobile video thumbnail */}
            <div className="md:hidden w-full h-[200px] bg-cover bg-center rounded-lg overflow-hidden max-w-[335px] mx-auto" style={{
              backgroundImage: `url('${mainVideoThumbnailMobile}')`
            }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <img src={playButtonIcon} alt="Play" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mb-12 md:mb-20">
        <div className="overflow-x-auto">
          <div className="flex gap-2 md:grid md:grid-cols-5 md:gap-5 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="flex-none w-[95px] md:w-auto aspect-[260/160] bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-center">
        <div className="mb-12">
          <div 
            className="w-[139px] h-[130px] md:w-48 md:h-44 bg-contain bg-no-repeat bg-top mx-auto mb-8"
            style={{ backgroundImage: `url('${consultingImage}')` }}
          />
          
          <div className="h-12 w-px bg-gray-300 mx-auto mb-8"></div>
          
          <h2 className="font-semibold text-2xl md:text-4xl tracking-tight text-black mb-6">
            Man&apos;s Hair Counsulting
          </h2>
          
          <div className="font-normal text-lg md:text-xl leading-relaxed tracking-tight text-gray-800 space-y-2 md:space-y-4 max-w-[335px] md:max-w-none mx-auto">
            <p>남성의 인상은 헤어 스타일에 따라 크게 좌우됩니다.</p>
            <p className="hidden md:block">단지 획일화된 유행하는 스타일을 따르기엔 우리는 직업, 스타일, 두상, 얼굴형, 모발까지</p>
            <p className="md:hidden">단지 획일화된 유행하는 스타일을 따르기엔 우리는 직업, 스타일, 두상, 얼굴형, 모발까지 다양한 특성을 가지고 있습니다.</p>
            <p className="hidden md:block">다양한 특성을 가지고 있습니다.</p>
            <p className="pt-4">아뜰랑은 개인의 특성을 세밀하게 분석하고 최적의 스타일을 제안합니다.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center">
            
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="relative order-2 md:order-2 mb-8 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 via-transparent to-gray-800 rounded-lg"></div>
              <div 
                className="w-[280px] h-[368px] md:w-full md:h-[657px] bg-cover bg-center rounded-lg mx-auto"
                style={{ backgroundImage: `url('${stylistImage}')` }}
              />
            </div>

            <div className="order-1 md:order-1 text-center md:text-right max-w-[335px] md:max-w-none mx-auto">
              <h3 className="font-bold text-4xl md:text-5xl text-gray-200 tracking-tight mb-4 md:mb-8">
                Man&apos;s Hair Counsulting
              </h3>
              
              <div className="font-normal text-base md:text-lg leading-relaxed tracking-tight text-gray-800 space-y-2 md:space-y-4">
                <p>방문하시는 고객님들께서 가장 많이 물어보시는 질문이</p>
                <p>&quot;저는 어떤 머리가 어울릴까요?&quot; 입니다.</p>
                
                <div className="py-2 md:py-4">
                  <p>최근에는 유행하는 스타일을 우후죽순 따라하는 것보다 개개인에게 어울리는 스타일을 찾고 싶다는 니즈가 세분화 되고. 저희 아뜰랑 맨즈헤어는 세분화 된 고객님의 니즈를 충족시켜 드리기 위해 고객님의 얼굴형, 두상, 모발 상태는 물론 직업과 라이프스타일까지 고려한</p>
                </div>
                
                <div>
                  <p>1:1 맞춤 헤어 컨설팅을 진행하고 있습니다.</p>
                  <p>단순한 유행을 넘어서, 당신만의 인상을 디자인해 드립니다.</p>
                </div>
              </div>
              
              <div className="mt-5 md:mt-8 flex justify-center md:justify-end">
                <div 
                  className="w-[106px] h-[50px] md:w-32 md:h-16 bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url('${stylistIcon}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}