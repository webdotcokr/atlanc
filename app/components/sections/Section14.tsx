import MotionWrapper from "../ui/motion-wrapper";

export default function Section14() {
  return (
    <section className="bg-[#090D09] flex flex-col gap-[33px] items-center pb-5 !px-0 pt-[120px] max-md:pt-[80px]">
      <div className="flex flex-col gap-4">
        <MotionWrapper animation="fadeIn">
          <h1 className="text-[46px] text-white leading-[1.3] text-center max-md:text-[24px]">
            성과는 단연코 개개인의 <br></br>
            <b className="font-extrabold">편차 없이 높은 수준을 유지합니다.</b>
          </h1>
        </MotionWrapper>
        <MotionWrapper animation="fadeInUp" delay={0.2}>
          <p className="text-white text-center text-2xl leading-[1.4] max-md:text-[17px]">
            개인의 역량에 의존하지 않습니다. <br></br>
            마케팅을 모르는 디자이너도 교육을 따르기만 하면<br></br>
            누구나 꾸준한 매출을 만들어냅니다.
          </p>
        </MotionWrapper>
      </div>

      <div className="md:h-[703px] w-full flex items-center justify-center gap-10 relative max-md:flex-col max-md:gap-2.5">
        <img
          src="/section14/bg.webp"
          className="max-md:hidden w-full md:h-[777px] max-md:aspect-[590/237] absolute md:top-0 max-md:bottom-0 max-md:bg-bottom-right md:left-0 max-md:right-0 object-cover "
        ></img>
        <img
          src="/section14/mo-bg.webp"
          className="w-full md:h-[777px] max-md:aspect-[590/237] absolute md:top-0 max-md:bottom-0 max-md:bg-bottom-right md:left-0 max-md:right-0 object-cover "
        ></img>
        <div className="pt-2.5 px-2.5 max-md:px-1.5 max-md:pt-1.5 pb-[18px] max-md:pb-2.5 flex flex-col  rounded-lg bg-[#202020] gap-5 max-md:gap-2.5  relative">
          <div className="w-[510px] max-lg:w-[330px] max-xl:w-[400px] aspect-[510/423] max-md:w-[300px] max-md:aspect-[300/246] rounded-lg bg-[#383838]"></div>
          <div className="flex justify-between pl-2.5 pr-[17px] ">
            <p className="text-2xl leading-[1.4] text-white opacity-40  max-xl:text-[20px] max-md:text-base">
              1년 전
            </p>
            <p className="md:pt-[11px] lading-[1.4] max-xl:text-[40px] font-[900] text-[#aeaeae] text-[50px] max-lg:text-[32px] max-md:text-[28px]">
              36,715,085
            </p>
          </div>
          <img
            src="/section14/union-arrow.svg"
            className="w-[268px] h-[251px] absolute bottom-[45px] -right-[90px] z-[1] max-md:hidden"
          ></img>
          <img
            src="/section14/mo-union-arrow.svg"
            className="w-[101px] absolute -bottom-[30px] left-[55px] z-[1] md:hidden"
          ></img>
        </div>
        <div className="pt-2.5 px-2.5 max-md:px-1.5 max-md:pt-1.5 pb-[18px] max-md:pb-2.5 flex flex-col   rounded-lg bg-[#202020] gap-5 max-md:gap-2.5  relative">
          <div className="w-[510px] max-lg:w-[330px] max-xl:w-[400px] aspect-[510/423]  max-md:w-[300px] max-md:aspect-[300/246] rounded-lg bg-[#383838]"></div>
          <div className="flex justify-between pl-2.5 pr-[17px] ">
            <p className="text-2xl leading-[1.4] text-white max-xl:text-[20px] max-md:text-base">
              1년 후
            </p>
            <p className="md:pt-[11px] lading-[1.4] max-xl:text-[40px] font-[900] text-[#26E45C] text-[50px] max-lg:text-[32px] max-md:text-[28px]">
              65,000,000
            </p>
          </div>

          <img
            src="/section14/text.svg"
            className="w-[184px]  absolute bottom-[45px] max-xl:w-[150px] left-[102px] z-[1] max-lg:w-[130px] md:aspect-[184/114] max-md:w-[110px] max-md:h-[66px] max-md:bottom-[25px] max-md:left-[60px]"
          ></img>
        </div>
      </div>
    </section>
  );
}
