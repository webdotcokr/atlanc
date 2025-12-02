import MotionWrapper from "../ui/motion-wrapper";

export default function Section8() {
  return (
    <section className="bg-[#1FD854] relative">
      <div className="w-full max-w-[1440px] pt-[120px] flex flex-col items-center  mx-auto max-md:pt-[60px]">
        <MotionWrapper animation="fadeInUp">
          <div className="flex flex-col gap-4 items-center">
            <div className="px-2 py-1 bg-black text-white text-xl leading-[1.4] font-extrabold max-md:text-base">
              Point 02
            </div>
            <h1 className="text-[46px] leading-[1.3] text-center text-black max-md:text-2xl">
              따라서,{" "}
              <b className="font-extrabold">
                아뜰랑의 고객 만족도는<br></br> 최고일 수 밖에 없습니다.
              </b>
            </h1>
            <p className="text-2xl leading-[1.4] text-black text-center max-md:text-[17px]">
              아뜰랑의 평균 재방률은 -%, <br></br>한 달 -명이 고객님이
              재방문합니다.
            </p>
          </div>
        </MotionWrapper>

        <img
          src="/review01.webp"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[851px] object-cover max-md:hidden"
        />
        <img
          src="/review03.webp"
          className="absolute bottom-0 left-1/2 -translate-x-1/2  w-full h-auto aspect-[375/412] object-cover md:hidden"
        />
        <MotionWrapper animation="fadeInUp">
          <img
            src="/review02.webp"
            className="w-[642px] h-[658px] object-cover max-md:w-1/2 mx-auto max-md:hidden"
          />
          <img
            src="/review04.webp"
            className="object-cover w-1/2 aspect-[199/360] mx-auto max-md:object-bottom md:hidden mt-[72px] relative z-[1]"
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
