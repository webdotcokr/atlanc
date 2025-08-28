import React from 'react';
import { RightArrow } from './components/ui';

// Hero Section Images
const imgRectangle193989 = "http://localhost:3845/assets/aad7a07a18c5778c7589b7cd82daf88815b6453a.png";
const imgVector10 = "http://localhost:3845/assets/05170cd84baf4a5b251b65e5103e72a3ddc08dd6.svg";

// Hair Consulting Section Images
const imgRectangle194030 = "http://localhost:3845/assets/dd9c1c2c0df8e2ba56dfdbdc7a8b412ccb432ace.png";
const imgRectangle194031 = "http://localhost:3845/assets/90282f0b82baf19720ca71c85c4933ecb8808d6a.png";
const imgImg88741 = "http://localhost:3845/assets/6e515b36ed7ad680781c3b94b7dfb759338f0f2d.png";
const imgImg88742 = "http://localhost:3845/assets/102900ee6d5fc5e74c4308b1228407cad51213b7.png";
const imgRectangle194033 = "http://localhost:3845/assets/104c1a233f375a4c6b6ca97cacea71f9ce25c352.png";
const imgRectangle194032 = "http://localhost:3845/assets/1371b3e9d72499462b0753bd445731aa597e86fa.png";
const imgGroup51 = "http://localhost:3845/assets/c093154d83369435be74992c136be4f7f15550ff.svg";
const imgGroup52 = "http://localhost:3845/assets/59ed3560000ec85a7b7caff45da072ef2b55f9ce.svg";

// Who We Are Section Images
const imgEllipse1 = "http://localhost:3845/assets/e5cdef80b7b3b81ddf8cdcfe63e1012e0690be18.png";
const imgImage183 = "http://localhost:3845/assets/30aeeeed2b50795047c7082cfedc4d39ba02bb73.png";
const imgGroup = "http://localhost:3845/assets/36ae91c55cf46d7e36ac5ab165aa03dc9e543022.svg";
const imgIcon = "http://localhost:3845/assets/74fcab7dd6f43f7193cf3fa1a0c046357cb4cfd1.svg";
const imgVector1 = "http://localhost:3845/assets/ca15e010ab261bea8f519b64661237e74dd8e4fe.svg";

// News Section Images
const imgNews1 = "http://localhost:3845/assets/3f4644bfb8291d6f4617ec7b2dd4214a894833ad.png";
const imgNews2 = "http://localhost:3845/assets/92eb0870dab41d53735dbcd61ef6db6f6efaba7d.png";
const imgNews3 = "http://localhost:3845/assets/d04a1781681e2b454c1d630001d2b75b4e6170ff.png";

// Review Section Images
const imgImage185 = "http://localhost:3845/assets/db13c38b7576c9319e2fbc866f8c6e410ac7a2c5.png";
const imgImage186 = "http://localhost:3845/assets/cb8ce909166831628e9fbd1faac3549a0ee79d93.png";
const imgImage184 = "http://localhost:3845/assets/bc3872eed70274adcf0633e6ebe7ece0a39a56db.png";
const imgImage187 = "http://localhost:3845/assets/1637edd76d6e18d1be830ab320d4ebd22ca5c818.png";
const imgBgDeco = "http://localhost:3845/assets/62bc0aff2da1af6379264bbe178f2872002b24e2.svg";
const imgVector2 = "http://localhost:3845/assets/fce21bda13b192f26d8b74162a66afca3417b9a9.svg";

// Video Section Images
const imgRectangle194007 = "http://localhost:3845/assets/2e9a88489b032559dfe025ca3cdab537195332da.png";
const imgPolygon3 = "http://localhost:3845/assets/5107a2c531bb2924c09310c05e93c7958bbaf1c8.svg";

// Differentiator Section Images
const imgVector2_2 = "http://localhost:3845/assets/fce21bda13b192f26d8b74162a66afca3417b9a9.svg";
const imgVector3_2 = "http://localhost:3845/assets/dbf3818b7c7ae9a0a391bc5d0d02989e237b2764.svg";

// Location Section Images
const imgLocationBanner = "http://localhost:3845/assets/a7950e8190e5e4003e53bf92b07e829b639c632b.png";
const imgRectangle194011 = "http://localhost:3845/assets/437f38165a93485c451a7557f52549aef2149177.png";
const imgRectangle194012 = "http://localhost:3845/assets/d0ca6ee4373e8b5f0ae59ff752c4eb86e024f161.png";
const imgRectangle194013 = "http://localhost:3845/assets/53453098ee25e7182aae43d1c33b7a749e83a7c2.png";
const imgArrowWhite = "http://localhost:3845/assets/d942459d521256a4c0a88162be5d5643c7a486b1.svg";
const imgArrowGreen = "http://localhost:3845/assets/c86ff43f308a99a3ab36dcb1cd1c7195b7028d79.svg";

// Footer Images
const imgFooterLogo = "http://localhost:3845/assets/22ecebc567a0e64b0944246435ceb46df01e06cb.png";
const imgFooterLine = "http://localhost:3845/assets/cd2994e78cd2adef238fbc95ef2f8fea6d42fb75.svg";
const imgInstagram = "http://localhost:3845/assets/be1c875da0477d036e435a2a33a93bce647a47f1.svg";
const imgYoutube = "http://localhost:3845/assets/2853fca569f2612d8d886a06975665ff985d24a2.svg";
const imgKakao = "http://localhost:3845/assets/1feb48efc10043d30f334f61474945da939c9370.svg";

export default function Home() {
  return (
    <div>
      {/* Main Hero Section */}
      <section className="relative h-[890px] w-full">
        <div 
          className="absolute bg-[#000000a6] h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${imgRectangle193989}')` }} 
        />
        <div className="absolute left-1/2 top-[340px] -translate-x-1/2 w-[780px] flex flex-col gap-6 items-start justify-start">
          <div className="w-full flex items-center justify-center pl-1">
            <p className="font-medium text-[20px] text-white text-center leading-[28px]">
              Atlanc Premium Men&apos;s Hair Consulting
            </p>
          </div>
          <div className="w-full text-center text-white">
            <p className="font-bold text-[55px] leading-[1.3] tracking-[-1.65px] mb-0">
              우리는 헤어를 디자인하지 않습니다.
            </p>
            <p className="font-bold text-[55px] leading-[1.3] tracking-[-1.65px]">
              당신의 인상을 디자인합니다.
            </p>
          </div>
        </div>
        <div className="absolute left-[931px] top-[804px] flex flex-col gap-3 items-center justify-start w-[58px]">
          <p className="text-white text-[20px] leading-[28px] font-medium">explore</p>
          <div className="h-[46px] w-0 relative">
            <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
              <img alt="" className="block max-w-none size-full" src={imgVector10} />
            </div>
          </div>
        </div>
      </section>

      {/* Hair Consulting Section */}
      <section className="bg-[#111111] relative h-[890px] w-full">
        <div className="absolute left-1/2 top-[114px] -translate-x-1/2 w-[779px] flex flex-col gap-1 items-center justify-start text-center">
          <p className="font-semibold text-[#26d07c] text-[18px] tracking-[-0.54px] uppercase leading-[1.5]">
            HAIR CONSULTING
          </p>
          <div className="font-bold text-[48px] text-white tracking-[-1.44px] leading-[1.3]">
            내게 맞는 헤어스타일만 찾아도 <br />인상은 완전히 달라집니다.
          </div>
        </div>
        <div className="absolute left-1/2 top-[309px] -translate-x-1/2 flex gap-[21px] items-center justify-center w-[1440px]">
          {/* Before/After Comparison 1 */}
          <div className="relative grow min-w-0">
            <div 
              className="h-[464.919px] w-[466px] bg-cover bg-[0%_10.94%] bg-no-repeat bg-size-[100%_128.45%]"
              style={{ backgroundImage: `url('${imgRectangle194030}')` }}
            />
            <div 
              className="absolute top-0 left-[183px] h-[464.919px] w-[283px] bg-no-repeat bg-[100%_10.94%] bg-size-[164.66%_128.45%] shadow-[-4px_4px_20px_0px_rgba(0,0,0,0.13)]"
              style={{ backgroundImage: `url('${imgRectangle194031}')` }}
            />
            <p className="absolute top-[20.73px] left-[52.5px] -translate-x-1/2 font-semibold text-[18px] text-black text-center opacity-30 tracking-[-0.18px] leading-[1.5]">
              BEFORE
            </p>
            <p className="absolute top-[20.73px] left-[420.5px] -translate-x-1/2 font-semibold text-[18px] text-black text-center opacity-30 tracking-[-0.18px] leading-[1.5]">
              AFTER
            </p>
            <div className="absolute top-[0.459px] left-[152px] h-[464.27px] w-[62px]">
              <img alt="" className="absolute bottom-0 left-[-9.68%] right-[-22.58%] top-0 block max-w-none size-full" src={imgGroup51} />
            </div>
          </div>
          {/* Before/After Comparison 2 */}
          <div className="relative grow min-w-0">
            <div 
              className="size-[466px] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('${imgImg88741}')` }}
            />
            <div 
              className="absolute top-0 left-[189px] h-[466px] w-[277px] bg-no-repeat bg-size-[168.23%_100%] bg-top-right shadow-[-4px_4px_20px_0px_rgba(0,0,0,0.13)]"
              style={{ backgroundImage: `url('${imgImg88742}')` }}
            />
            <div className="absolute top-0 left-[158px] h-[466px] w-[62px]">
              <img alt="" className="absolute bottom-0 left-[-9.68%] right-[-22.58%] top-0 block max-w-none size-full" src={imgGroup52} />
            </div>
            <p className="absolute top-[21px] left-[52.5px] -translate-x-1/2 font-semibold text-[18px] text-black text-center opacity-30 tracking-[-0.18px] leading-[1.5]">
              BEFORE
            </p>
            <p className="absolute top-[21px] left-[420.5px] -translate-x-1/2 font-semibold text-[18px] text-black text-center opacity-30 tracking-[-0.18px] leading-[1.5]">
              AFTER
            </p>
          </div>
          {/* Before/After Comparison 3 */}
          <div className="relative grow min-w-0">
            <div 
              className="h-[464.919px] w-[466px] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('${imgRectangle194033}')` }}
            />
            <div 
              className="absolute top-0 left-[168px] h-[464.919px] w-[298px] bg-no-repeat bg-size-[156.38%_100%] bg-top-right shadow-[-4px_4px_20px_0px_rgba(0,0,0,0.13)]"
              style={{ backgroundImage: `url('${imgRectangle194032}')` }}
            />
            <p className="absolute top-[20.73px] left-[52.5px] -translate-x-1/2 font-semibold text-[18px] text-black text-center opacity-30 tracking-[-0.18px] leading-[1.5]">
              BEFORE
            </p>
            <p className="absolute top-[20.73px] left-[420.5px] -translate-x-1/2 font-semibold text-[18px] text-black text-center opacity-30 tracking-[-0.18px] leading-[1.5]">
              AFTER
            </p>
            <div className="absolute top-[0.459px] left-[138px] h-[464.27px] w-[62px]">
              <img alt="" className="absolute bottom-0 left-[-9.68%] right-[-22.58%] top-0 block max-w-none size-full" src={imgGroup51} />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative h-[890px] w-full">
        <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[779px] flex flex-col gap-1 items-center justify-start text-center">
          <p className="font-semibold text-[#26d07c] text-[18px] tracking-[-0.54px] uppercase leading-[1.5]">
            Who We Are
          </p>
          <div className="font-bold text-[48px] text-black tracking-[-1.44px] leading-[1.3]">
            맨즈 헤어컨설팅 분야에서<br />끊임없이 실력을 증명해 왔습니다.
          </div>
        </div>
        <div className="absolute left-1/2 top-[323px] -translate-x-1/2 flex gap-5 items-center justify-start w-[1440px]">
          {/* Stat Card 1 */}
          <div className="relative w-[345px] h-[440px]">
            <div className="bg-gray-50 w-full h-full" />
            <div className="absolute right-[28px] bottom-[50px] text-right text-[#242423]">
              <p className="font-semibold text-[20px] tracking-[-0.4px] leading-[1.4]">평균 고객 만족도</p>
              <p className="font-semibold italic text-[72px] tracking-[-2.16px]">98%</p>
            </div>
            <div className="absolute top-[50px] left-[50px] w-[90px] h-[90px]">
              <img alt="" className="block max-w-none size-full" src={imgGroup} />
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="relative w-[345px] h-[440px]">
            <div className="bg-gray-50 w-full h-full" />
            <div className="absolute right-[32px] bottom-[50px] text-right text-[#242423]">
              <p className="font-semibold text-[20px] tracking-[-0.4px] leading-[1.4]">누적 방문 고객수</p>
              <p className="font-semibold italic text-[72px] tracking-[-2.16px]">20,000+</p>
            </div>
            <div className="absolute top-[50px] left-[50px] w-[90px] h-[90px]">
              <img alt="" className="block max-w-none size-full" src={imgIcon} />
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="relative w-[345px] h-[440px]">
            <div className="bg-gray-50 w-full h-full" />
            <div className="absolute right-[22px] bottom-[50px] text-right text-[#242423]">
              <p className="font-semibold text-[20px] tracking-[-0.4px] leading-[1.4]">평균 재방문율</p>
              <p className="font-semibold italic text-[72px] tracking-[-2.16px]">98%</p>
            </div>
            <div className="absolute top-[50px] left-[50px] w-[90px] h-[90px] overflow-clip">
              {/* Complex SVG icon would be rendered here */}
            </div>
          </div>
          {/* Profile Card */}
          <div className="relative w-[345px] h-[440px]">
            <div className="bg-gray-50 w-full h-full" />
            <div className="absolute top-11 left-[38px] w-[120px] h-[120px]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
            </div>
            <div className="absolute top-60 left-[69px] w-[238px] flex flex-col gap-1 items-end">
              <div className="flex gap-2 items-center">
                <p className="font-bold text-[#242423] text-[24px] tracking-[-0.72px] leading-[1.3]">태원빠</p>
                <div className="h-[19px] w-0 relative">
                  <img alt="" className="absolute bottom-0 left-[-1px] right-[-1px] top-0 block max-w-none size-full" src={imgVector1} />
                </div>
                <p className="font-bold text-[#242423] text-[24px] tracking-[-0.72px] leading-[1.3]">남자머리 컨설턴트</p>
              </div>
              <p className="font-regular text-[16px] text-zinc-600 tracking-[-0.16px] leading-[1.5] text-right">
                아뜰랑 맨즈헤어 원장 태원빠의<br />B급 갬성 남성 뷰티 채널
              </p>
              <p className="font-semibold italic text-[#242423] text-[48px] tracking-[-0.48px] leading-[1.4]">
                41.6K
              </p>
            </div>
            <div 
              className="absolute top-[138px] left-[110px] w-12 h-[33px] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('${imgImage183}')` }}
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-black relative h-[890px] w-full">
        <div className="absolute left-1/2 top-[170px] -translate-x-1/2 w-[779px] flex flex-col gap-1 items-center justify-start text-center">
          <p className="font-semibold text-[#26d07c] text-[18px] tracking-[-0.54px] uppercase leading-[1.5]">
            News
          </p>
          <p className="font-bold text-[48px] text-white tracking-[-1.44px] leading-[1.3]">
            시장은 아뜰랑에 대해 이렇게 이야기합니다.
          </p>
        </div>
        <div className="absolute left-1/2 top-[303px] -translate-x-1/2 flex gap-5 items-center justify-center w-[1440px]">
          {/* News Item 1 */}
          <div className="bg-white flex flex-col gap-3 p-8 pt-10 pb-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] grow">
            <div className="flex flex-col items-start w-[46px]">
              <p className="font-regular text-[14px] text-zinc-500 tracking-[-0.14px] leading-[1.5] px-0.5">
                25.07
              </p>
              <p className="font-semibold text-[#242423] text-[36px] text-center tracking-[-1.08px] leading-[1.3]">
                26
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="font-medium text-[#242423] text-[18px] tracking-[-0.18px] leading-[1.5] overflow-hidden line-clamp-2">
                신사미용실 아뜰랑 맨즈헤어 신사역점 남자 크롭컷 새로 디자이너
              </p>
              <div 
                className="h-[200px] w-full bg-cover bg-center bg-[#d9d9d9]"
                style={{ backgroundImage: `url('${imgNews1}')` }}
              />
            </div>
          </div>
          {/* News Item 2 */}
          <div className="bg-white flex flex-col gap-3 p-8 pt-10 pb-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] grow">
            <div className="flex flex-col items-start w-[46px]">
              <p className="font-regular text-[14px] text-zinc-500 tracking-[-0.14px] leading-[1.5] px-0.5">
                25.07
              </p>
              <p className="font-semibold text-[#242423] text-[36px] text-center tracking-[-1.08px] leading-[1.3]">
                30
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="font-medium text-[#242423] text-[18px] tracking-[-0.18px] leading-[1.5] overflow-hidden line-clamp-2">
                스타일은 디테일에서 완성된다 아뜰랑 맨즈헤어, 남성 전문 그루밍샵으로 주목
              </p>
              <div 
                className="h-[200px] w-full bg-cover bg-center bg-[#d9d9d9]"
                style={{ backgroundImage: `url('${imgNews2}')` }}
              />
            </div>
          </div>
          {/* News Item 3 */}
          <div className="bg-white flex flex-col gap-3 p-8 pt-10 pb-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] grow">
            <div className="flex flex-col items-start w-[46px]">
              <p className="font-regular text-[14px] text-zinc-500 tracking-[-0.14px] leading-[1.5] px-0.5">
                25.07
              </p>
              <p className="font-semibold text-[#242423] text-[36px] text-center tracking-[-1.08px] leading-[1.3]">
                26
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="font-medium text-[#242423] text-[18px] tracking-[-0.18px] leading-[1.5] overflow-hidden line-clamp-2">
                남자를 위한 특별한 공간, 아뜰랑 맨즈헤어에서 프리미엄 스타일링으로 차별화된 경험 선사합니다.
              </p>
              <div 
                className="h-[200px] w-full bg-cover bg-center bg-[#d9d9d9]"
                style={{ backgroundImage: `url('${imgNews3}')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="relative h-[890px] w-full">
        <div className="absolute h-[522px] left-[451px] top-[344px] w-[527px]">
          <img alt="" className="block max-w-none size-full" src={imgBgDeco} />
        </div>
        <div className="absolute left-[240px] top-[120px] w-[779px] flex flex-col gap-1 items-start text-left">
          <p className="font-semibold text-[#26d07c] text-[18px] tracking-[-0.54px] uppercase leading-[1.5]">
            Review
          </p>
          <div className="font-bold text-[48px] text-black tracking-[-1.44px] leading-[1.3]">
            아뜰랑을 통해<br />새로운 나의 모습을 발견한<br />고객님들의 실시간 후기
          </div>
        </div>
        <div className="absolute left-[240px] top-[337px] flex gap-1 items-center">
          <p className="font-semibold text-[#242423] text-[14px] tracking-[-0.14px] leading-[1.5]">
            리뷰 더보기
          </p>
          <div className="h-2 w-3 relative">
            <img alt="" className="absolute bottom-[-5.3%] left-0 right-[-7.07%] top-[-5.3%] block max-w-none size-full" src={imgVector2} />
          </div>
        </div>
        {/* Review Cards */}
        <div className="absolute left-[932px] top-5 w-[362px] flex flex-col gap-7">
          {/* Review Item 1 */}
          <div className="relative">
            <div 
              className="h-[480px] w-[362px] bg-gradient-to-b from-[#f3f4f600] from-[47.187%] to-[#f3f4f6] to-[60.938%]"
              style={{ backgroundImage: `url('${imgImage185}')` }}
            />
            <div className="absolute left-7 top-[306px] w-[306px] flex flex-col gap-3">
              <p className="font-semibold text-[18px] text-black tracking-[-0.18px] leading-[1.5]">
                원하는 스타일을 완벽하게 이해하시고<br />따로 말 안해도 맞춤형으로<br />매번 예쁘게 머리해주셔서 감사합니다!!
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    💚 원하는 스타일로 잘 해줘요
                  </p>
                </div>
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    😎 트렌디해요
                  </p>
                </div>
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    💗친절해요
                  </p>
                </div>
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    🔍 꼼꼼해요
                  </p>
                </div>
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    👦 남자 머리를 잘해요
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Review Item 2 */}
          <div className="relative">
            <div className="bg-gray-100 h-[209px] w-[361px]" />
            <div className="absolute left-7 top-7 w-[306px] flex flex-col gap-3">
              <p className="font-semibold text-[18px] text-black tracking-[-0.18px] leading-[1.5]">
                남자 컷트는 디테일이 생명인데, 옆머리 뜨는 거나 윗머리 볼륨 같은 부분도 딱 알고 잘라주세요!
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    💚 원하는 스타일로 잘 해줘요
                  </p>
                </div>
                <div className="bg-white px-2 py-1 rounded-full">
                  <p className="font-regular text-[#242423] text-[12px] tracking-[-0.12px] leading-[1.5]">
                    😎 트렌디해요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 아뜰랑 맨즈헤어 대표원장이 직접 소개합니다. */}
        <section className="tracking-tight bg-[url('/welcome-bg.webp')] pt-32 pb-32 max-md:pt-[60px] max-md:pb-[60px]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px] font-semibold text-center text-[var(--color-primary-500)]">Welcome</h2>
                <p className="text-white font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3">아뜰랑 맨즈헤어 <br/>대표원장이 직접 소개합니다.</p>
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

      {/* Differentiator Overview Section */}
              <section className="tracking-tight bg-white pt-35 pb-35 max-md:pt-[60px] max-md:pb-[60px]">
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
      {/* 아뜰랑의 각 지점에 대해 궁금하신가요? */}
        <section className="tracking-tight bg-black bg-[url('/location-bg.webp')] pt-35 pb-35 max-md:pt-[60px] max-md:pb-[60px]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-3xl font-semibold text-center text-[var(--color-primary-500)]">LOCATION</h2>
                <p className="text-white font-bold text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3">아뜰랑의 각 지점에 대해 <br/>궁금하신가요?</p>
                <div className="mt-10">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-12">
                        <div>
                            <img src="/sinsa-office.webp" alt="아뜰랑 신사점" />
                            <p className="mt-4 font-semibold text-[var(--color-primary-500)]">1호점</p>
                            <h3 className="text-2xl font-bold mt-2 text-white">아뜰랑 신사점</h3>
                            <p className="mt-1"><span className="mr-2 text-white">영업시간</span><span className="text-[var(--color-extended-gray-400)]">10:00 ~ 21:00 (매주 화요일 휴무)</span></p>
                        </div>
                        <div>
                            <img src="/ku-office.webp" alt="아뜰랑 건대점" />
                            <p className="mt-4 font-semibold text-[var(--color-primary-500)]">2호점</p>
                            <h3 className="text-2xl font-bold mt-2 text-white">아뜰랑 건대점</h3>
                            <p className="mt-1"><span className="mr-2 text-white">영업시간</span><span className="text-[var(--color-extended-gray-400)]">11:00 ~ 20:00 (매주 수요일 휴무)</span></p>
                        </div>
                        <div>
                            <img src="/virtual-office.webp" alt="아뜰랑 가맹점" />
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
  