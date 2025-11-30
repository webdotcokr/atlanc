import MotionWrapper from "../ui/motion-wrapper";

export default function Section11() {
  return (
    <section className="bg-[#090D09] pt-[110px] pb-[120px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        <MotionWrapper animation="fadeIn">
          <p className="text-[34px] leading-[1.3] text-white text-center">
            최고의 품질 유지를 위해 <br></br>
            <b className="text-[#26E45C] font-extrabold">
              슈퍼바이저가 직접 매장을 관리합니다.
            </b>
          </p>
        </MotionWrapper>
        <MotionWrapper animation="fadeIn">
          <div className="mt-10 mb-11 flex flex-col gap-7 items-center">
            <div className="bg-[url(/section11/photo-1.webp)] w-[1100px] h-[463px] flex items-center justify-center rounded-xl">
              <p className="text-[50px] leading-[1.7] font-extrabold text-white opacity-70">
                단체사진
              </p>
            </div>

            <div className="flex gap-5">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <img
                    src={`/section11/photo-${index + 2}.webp`}
                    className="w-full h-[180px] rounded-xl"
                  ></img>
                ))}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fadeIn">
          <div className="flex flex-col gap-7 items-center">
            <div className="h-[48px] flex items-center">
              <h1 className="text-[28px]  font-bold text-white border-b-[3px] border-white">
                매장 관리도 걱정하지 마세요
              </h1>
            </div>

            <p className="text-2xl leading-[1.7] text-white text-center">
              표준화된 서비스로 브랜드 가치와 고객 만족을 높이기 위해 <br></br>
              점주 중심이 아닌, 본사의 전문 슈퍼바이저가 매장 관리를 전담합니다.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
