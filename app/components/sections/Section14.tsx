import MotionWrapper from "../ui/motion-wrapper";

export default function Section14() {
  return (
    <section className="bg-[#090D09] flex flex-col gap-[33px] items-center pb-5 !px-0">
      <div className="flex flex-col gap-4">
        <MotionWrapper animation="fadeIn">
          <h1 className="mt-[120px] text-[46px] text-white leading-[1.3] text-center">
            성과는 단연코 개개인의 <br></br>
            <b className="font-extrabold">편차 없이 높은 수준을 유지합니다.</b>
          </h1>
        </MotionWrapper>
        <MotionWrapper animation="fadeInUp" delay={0.2}>
          <p className="text-white text-center text-2xl leading-[1.4]">
            개인의 역량에 의존하지 않습니다. <br></br>
            마케팅을 모르는 디자이너도 교육을 따르기만 하면<br></br>
            누구나 꾸준한 매출을 만들어냅니다.
          </p>
        </MotionWrapper>
      </div>

      <div className="h-[703px] w-full flex items-center justify-center gap-10 relative">
        <img
          src="/section14/bg.webp"
          className="w-full h-[777px] absolute top-0 left-0 object-cover"
        ></img>
        <div className="pt-2.5 px-2.5 pb-[18px] flex flex-col  rounded-lg bg-[#202020] gap-5 relative">
          <div className="w-[510px] h-[423px] rounded-lg bg-[#383838]"></div>
          <div className="flex justify-between pl-2.5 pr-[17px] ">
            <p className="text-2xl leading-[1.4] text-white opacity-40">
              1년 전
            </p>
            <p className="pt-[11px] lading-[1.4] font-[900] text-[#aeaeae] text-[50px]">
              36,715,085
            </p>
          </div>
          <img
            src="/section14/union-arrow.svg"
            className="w-[268px] h-[251px] absolute bottom-[45px] -right-[90px] z-[1]"
          ></img>
        </div>
        <div className="pt-2.5 px-2.5 pb-[18px] flex flex-col  rounded-lg bg-[#202020] gap-5 relative">
          <div className="w-[510px] h-[423px] rounded-lg bg-[#383838]"></div>
          <div className="flex justify-between pl-2.5 pr-[17px] ">
            <p className="text-2xl leading-[1.4] text-white">1년 후</p>
            <p className="pt-[11px] lading-[1.4] font-[900] text-[#26E45C] text-[50px]">
              50,025,440
            </p>
          </div>

          <img
            src="/section14/text.svg"
            className="w-[184px] h-[114px] absolute bottom-[45px] left-[102px] z-[1]"
          ></img>
        </div>
      </div>
    </section>
  );
}
