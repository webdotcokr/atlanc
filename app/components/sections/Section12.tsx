import MotionWrapper from "../ui/motion-wrapper";

export default function Section12() {
  return (
    <section className=" bg-[#090D09]  relative pb-[73px]">
      <div className="bg-[url('/section12/bg.webp')] w-full h-[960px] flex flex-col items-center pt-[113px] pb-[43px]">
        <div className=" flex flex-col items-center gap-4">
          <MotionWrapper animation="fadeIn">
            <div className=" px-2 py-1 bg-[#26E45C] text-xl font-extrabold max-md:text-[16px]] text-center text-black w-fit">
              Point 05
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-2xl  max-md:text-[26px] leading-[1.4]  tracking-[-1.5]">
              심화되는 미용실 마케팅 경쟁
            </p>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-[46px] max-md:text-[26px] leading-[1.3]  tracking-[-1.5]">
              아뜰랑은 현시점{" "}
              <b className="font-extrabold">
                가장 트렌디한<br></br> 미용실 마케팅을 집행합니다.
              </b>
            </p>
          </MotionWrapper>
        </div>

        <MotionWrapper animation="fadeIn" className="mt-[52px]">
          <div className="flex items-center gap-4">
            <div className="w-[220px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-0.5">
              <img src="/section12/logo-1.webp" alt="logo"></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white">
                네이버 블로그
              </p>
            </div>
            <img
              src="/section12/ico-plus.svg"
              alt="plus"
              className="w-[30px]"
            ></img>
            <div className="w-[220px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-[13px]">
              <img src="/section12/logo-2.webp" alt="logo"></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white">
                유튜브
              </p>
            </div>
            <img
              src="/section12/ico-plus.svg"
              alt="plus"
              className="w-[30px]"
            ></img>
            <div className="w-[220px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-0.5">
              <img src="/section12/logo-3.webp" alt="logo"></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white">
                네이버 플레이스
              </p>
            </div>
            <img
              src="/section12/ico-plus.svg"
              alt="plus"
              className="w-[30px]"
            ></img>
            <div className="w-[220px] aspect-square rounded-full bg-[#00000066] flex flex-col items-center justify-center gap-2">
              <img src="/section12/logo-4.webp" alt="logo"></img>
              <p className="text-xl leading-[1.7] font-extrabold text-white">
                인스타그램
              </p>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper
          animation="fadeIn"
          className="mt-[42px] flex flex-col items-center"
        >
          <p className="text-2xl leading-[1.7] text-white text-center">
            각 마케팅 채널에서 가장 최적화된 방법으로<br></br>
            <b className="font-extrabold text-center">
              과도한 혜택, 저가 전략 없이도
            </b>
            <br></br>꾸준한 신규 고객 방문을 만들어냅니다.
          </p>
          <div className="w-[1px] h-[84px] bg-white mt-10"></div>
        </MotionWrapper>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="border-b-[2px] border-primary text-[#26E45C] text-[36px] leading-[1.3] font-bold">
            단지 높은 광고비가 아닌 오직 실력으로 승부합니다.
          </h1>
          <p className="text-2xl leading-[1.4] text-white text-center">
            높은 광고비만으로 매출을 유지하는 것은<br></br> 지속 가능하지
            않습니다.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 overflow-hidden">
          <img
            src="/section12/image-1.webp"
            className="h-[421px] rounded-2xl opacity-[0.08] shrink-0"
            alt="image"
          ></img>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <img
                src={`/section12/image-${index + 2}.webp`}
                className="h-[421px] rounded-2xl shrink-0 mr-1"
                alt="image"
              ></img>
            ))}
          <img
            src="/section12/image-1.webp"
            className="h-[421px] rounded-2xl opacity-[0.08] shrink-0"
            alt="image"
          ></img>
        </div>
      </div>
    </section>
  );
}
