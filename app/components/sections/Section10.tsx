import MotionWrapper from "../ui/motion-wrapper";

export default function Section10() {
  return (
    <section className="pt-[160px] pb-[130px] max-md:py-[80px] bg-[#1D1D1D] bg-[url('/section10-bg.webp')] relative">
      <div className="w-full max-w-[1440px] flex flex-col items-center mx-auto">
        <div className=" flex flex-col items-center gap-4">
          <MotionWrapper animation="fadeIn">
            <div className=" px-2 py-1 bg-[#26E45C] text-xl max-md:text-base font-extrabold max-md:text-[16px]] text-center text-black w-fit">
              Point 04
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-2xl  max-md:text-[17px] leading-[1.4]  tracking-[-1.5]">
              직영점만 잘나가는거 아닌가요?
            </p>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-[46px] max-lg:text-[40px] max-md:text-2xl leading-[1.3]  tracking-[-1.5]">
              체계적인 교육시스템으로<br className="md:hidden"></br> 어느
              매장에서나<br></br>
              <b className="font-extrabold">균일한 만족도를 제공합니다.</b>
            </p>
          </MotionWrapper>
        </div>

        <MotionWrapper
          animation="fadeIn"
          className="mt-[52px] max-md:mt-10 mb-[32px] max-md:mb-[30px] flex items-center"
        >
          <div className="w-[220px] max-lg:w-[200px] max-md:w-[104px] aspect-square bg-[#00000099] rounded-full flex items-center justify-center flex-col">
            <img
              src="/process-1.svg"
              className="w-16 aspect-square max-md:w-[26px] max-lg:w-14"
            ></img>
            <p className="text-[15px] leading-[1.7] font-bold text-[#26E45C] mt-[10px] max-md:mt-1 max-md:text-[11px]">
              SETP 01
            </p>
            <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
              실습 교육
            </p>
          </div>
          <img
            src="process-arrow.svg"
            className="w-[23px] ml-[42px] mr-[46px] max-md:w-[7px] max-md:mx-2 max-lg:mx-[30px]"
          ></img>
          <div className="w-[220px] max-lg:w-[200px] max-md:w-[104px] aspect-square bg-[#00000099] rounded-full flex items-center justify-center flex-col">
            <img
              src="/process-2.svg"
              className="w-[65px] aspect-square max-md:w-[26px] max-lg:w-14"
            ></img>
            <p className="text-[15px] leading-[1.7] font-bold text-[#26E45C] mt-[8px] max-md:mt-1 max-md:text-[11px]">
              SETP 02
            </p>
            <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
              서비스 교육
            </p>
          </div>
          <img
            src="process-arrow.svg"
            className="w-[23px] ml-[42px] mr-[46px] max-md:w-[7px] max-md:mx-2 max-lg:mx-[30px]"
          ></img>
          <div className="w-[220px] max-lg:w-[200px] max-md:w-[104px] aspect-square bg-[#00000099] rounded-full flex items-center justify-center flex-col">
            <img
              src="/process-3.svg"
              className="w-[66px] aspect-square max-md:w-[26px] max-lg:w-14"
            ></img>
            <p className="text-[15px] leading-[1.7] font-bold text-[#26E45C] mt-[8px] max-md:mt-1 max-md:text-[11px]">
              SETP 03
            </p>
            <p className="text-xl leading-[1.7] font-extrabold text-white max-md:text-base">
              마케팅 교육
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fadeIn">
          <p className="text-2xl leading-[1.7] text-white text-center max-md:text-[17px] max-lg:text-xl">
            신규 채용부터 브랜드 맞춤 교육까지 <br></br>누구나 높은 만족도를
            제공할 수 있도록<br className="md:hidden"></br> 아뜰랑만의
            교육시스템을 갖췄습니다.
          </p>
        </MotionWrapper>
      </div>
      <div className="w-[1px] h-[111px] max-md:h-[80px] bg-white absolute -bottom-[46px] max-md:-bottom-[38px] left-1/2 -translate-x-1/2 z-[1]"></div>
    </section>
  );
}
