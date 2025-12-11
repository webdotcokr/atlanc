import MotionWrapper from "../ui/motion-wrapper";

export default function Section11() {
  return (
    <section className="bg-[#090D09] pt-[110px] pb-[120px] max-md:pt-[80px] max-md:pb-[60px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center overflow-hidden">
        <MotionWrapper animation="fadeIn">
          <p className="text-[34px] leading-[1.3] text-white text-center max-md:text-[28px]">
            최고의 품질 유지를 위해 <br></br>
            <b className="text-[#26E45C] font-extrabold">
              슈퍼바이저가 직접 매장을 관리합니다.
            </b>
          </p>
        </MotionWrapper>
        <MotionWrapper animation="fadeIn">
          <div className="mt-10 mb-11 flex flex-col gap-7 max-md:gap-2 items-center max-md:mt-8">
            <div className="bg-[url(/section11/photo-1.webp)] w-full max-w-[1100px] flex items-center justify-center rounded-xl aspect-[1100/463] max-md:aspect-[335/204] max-md:rounded-lg bg-cover bg-center"></div>

            <div className="w-full gap-5 grid  grid-cols-4 max-md:grid-cols-2 overflow-hidden max-md:gap-2">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <img
                    key={index}
                    src={`/section11/photo-${index + 2}.webp`}
                    className="w-full aspect-[260/180] rounded-xl max-md:aspect-[163/101]"
                    alt={`매장 사진 ${index + 2}`}
                  ></img>
                ))}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fadeIn">
          <div className="flex flex-col gap-7 items-center">
            <div className="h-[48px] flex items-center max-md:h-[34px]">
              <h1 className="text-[28px] max-md:text-xl font-bold text-white border-b-[3px] max-md:border-b-[1px] border-white">
                매장 관리도 걱정하지 마세요
              </h1>
            </div>

            <p className="text-2xl leading-[1.7] text-white text-center max-md:text-[17px]">
              표준화된 서비스로<br className="md:hidden"></br> 브랜드 가치와
              고객 만족을 높이기 위해 <br></br>
              점주 중심이 아닌, 본사의 전문 슈퍼바이저가
              <br className="md:hidden"></br> 매장 관리를 전담합니다.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
