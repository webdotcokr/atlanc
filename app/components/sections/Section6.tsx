import AnimatedCounter from "../ui/animated-counter";
import MotionWrapper, {
  StaggerContainer,
  StaggerItem,
} from "../ui/motion-wrapper";

export default function Section6() {
  return (
    <section className="pt-[138px] pb-[170px] max-md:pt-[60px] max-md:pb-[60px] bg-[#090D09] bg-[url(/section6-bg.webp)] bg-cover">
      <div className="max-w-[1440px] mx-auto">
        <MotionWrapper animation="fadeIn">
          <h2 className="text-2xl max-md:text-[16px]] font-bold text-center text-primary tracking-[-0.72px]">
            지난 8년간 수없이 검증했습니다.
          </h2>
        </MotionWrapper>
        <MotionWrapper animation="fadeInUp" delay={0.2}>
          <p className=" text-center text-[46px] max-md:text-[26px] leading-[1.3] mt-4 tracking-[-1.38px] text-white">
            아뜰랑 맨즈헤어의<br></br>
            <b className="font-extrabold">6가지 특별함</b>
          </p>
        </MotionWrapper>
        <div className="mt-[32px]">
          <StaggerContainer
            className="grid grid-cols-4 max-md:grid-cols-1 gap-4 max-md:gap-4 h-[380px]"
            staggerDelay={0.1}
            delay={0.3}
          >
            <StaggerItem animation="scaleIn">
              <div className="flex flex-col gap-11 bg-[#0E0E0ECC] h-full items-center justify-center">
                <img
                  src="/icon-1.svg"
                  alt="평균 고객 만족도"
                  className="w-[90px] max-md:w-[70px]"
                />
                <div className="text-center ">
                  <h3 className="text-xl font-bold mt-2 tracking-[-0.4px] text-white">
                    평균 고객 만족도
                  </h3>
                  <p className="font-poppins text-[60px] italic font-semibold text-primary">
                    <AnimatedCounter to={98} suffix="%" duration={2} />
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem animation="scaleIn">
              <div className="flex flex-col gap-11 bg-[#0E0E0ECC] h-full items-center justify-center">
                <img
                  src="/icon-2.png"
                  alt="누적 방문 고객수"
                  className="w-[90px] max-md:w-[70px]"
                />
                <div className="text-center ">
                  <h3 className="text-xl font-bold mt-2 tracking-[-0.4px] text-white">
                    누적 방문 고객수
                  </h3>
                  <p className="font-poppins text-[60px] italic font-semibold text-primary">
                    <AnimatedCounter to={20000} suffix="+" duration={2.5} />
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem animation="scaleIn">
              <div className="flex flex-col gap-11 bg-[#0E0E0ECC] h-full items-center justify-center">
                <img
                  src="/icon-3.png"
                  alt="평균 재방문율"
                  className="w-[90px] max-md:w-[70px]"
                />
                <div className="text-center ">
                  <h3 className="text-xl font-bold mt-2 tracking-[-0.4px] text-white">
                    평균 재방문율
                  </h3>
                  <p className="font-poppins text-[60px] italic font-semibold text-primary">
                    <AnimatedCounter to={98} suffix="%" duration={2} />
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem animation="scaleIn">
              <div className="flex flex-col gap-11 bg-[#0E0E0ECC] h-full items-center justify-center">
                <img
                  src="/icon-4.png"
                  alt="평균 재방문율"
                  className="w-[120px] max-md:w-[70px]"
                />
                <div className="text-center ">
                  <h3 className="text-xl font-bold mt-2 tracking-[-0.4px] text-white">
                    태원빠 | 남자머리 컨설턴트
                  </h3>
                  <p className="text-[var(--color-gray-600)] mt-1 tracking-tight">
                    아뜰랑 맨즈헤어 원장 태원빠의 <br />
                    B급 감성 남성 뷰티 채널
                  </p>
                  <p className="font-poppins text-[60px] italic font-semibold text-primary">
                    <AnimatedCounter
                      to={41.6}
                      suffix="K"
                      decimals={1}
                      duration={2.5}
                    />
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
