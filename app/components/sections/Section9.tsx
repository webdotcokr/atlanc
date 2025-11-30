import MotionWrapper from "../ui/motion-wrapper";

export default function Section9() {
  return (
    <section className="py-[120px] bg-[#090D09]">
      <div className="flex flex-col items-center w-full mx-auto">
        <div className=" flex flex-col items-center gap-4">
          <MotionWrapper animation="fadeIn">
            <div className=" px-2 py-1 bg-[#26E45C] text-xl font-extrabold max-md:text-[16px]] text-center text-black w-fit">
              Point 03
            </div>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-[46px] max-md:text-[26px] leading-[1.3]  tracking-[-1.5]">
              그렇기에 투자대비<br></br>
              <b className="font-extrabold">
                독보적인 매출과 수익률이 가능합니다.
              </b>
            </p>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-2xl  max-md:text-[26px] leading-[1.4]  tracking-[-1.5]">
              아뜰랑 각 지점의 ‘실제 월매출'을<br></br> 거짓없이 투명하게
              공개합니다.
            </p>
          </MotionWrapper>
        </div>

        <MotionWrapper animation="fadeIn" className="mt-11">
          <div className="flex relative pb-[78px] gap-5 justify-center items-center w-full overflow-hidden">
            <img
              src="/store01.webp"
              alt="store"
              className="w-[680px] h-[478px] opacity-[0.1]"
            ></img>
            <img
              src="/store03.webp"
              alt="store"
              className="w-[680px] h-[478px] mr-5"
            ></img>
            <img
              src="/store04.webp"
              className="w-[680px] h-[478px]"
              alt="store"
            ></img>
            <img
              src="/store02.webp"
              alt="store"
              className="w-[680px] h-[478px] opacity-[0.1]"
            ></img>

            <div className="absolute flex gap-5 bottom-0 left-1/2 -translate-x-1/2">
              <img
                src="/recept01.webp"
                alt="recept"
                className="w-[307px]"
                style={{ boxShadow: "4px 12px 12px 0 rgba(0, 0, 0, 0.12)" }}
              ></img>
              <img
                src="/recept02.webp"
                alt="recept"
                className="w-[307px]"
                style={{ boxShadow: "4px 12px 12px 0 rgba(0, 0, 0, 0.12)" }}
              ></img>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fadeInUp" delay={0.2} className="mt-[87px]">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl leading-[1.3] font-bold text-[#26E45C] border-b-[3px] border-primary">
              광고로 만든 일시적인 매출이 아닙니다.
            </h1>
            <p className="text-2xl text-white leading-[1.4] text-center">
              높은 만족도와 재방률을 바탕으로 <br></br>아뜰랑의 매출은 매달
              상승합니다.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
