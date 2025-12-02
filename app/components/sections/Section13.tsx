import MotionWrapper from "../ui/motion-wrapper";

export default function Section13() {
  return (
    <section className="md:bg-[url('/welcome-bg.webp')] bg-[#090D09] pt-[96px] pb-[120px] max-md:pt-[80px] max-md:pb-[72px]">
      <div className="max-w-[1440px] mx-auto flex items-center flex-col gap-7 max-md:gap-[33px]">
        <MotionWrapper animation="fadeIn">
          <h2 className="text-[34px] max-md:text-[28px] font-bold text-center text-[#26E45C] leading-[1.4]">
            본사의 지속가능한 <br className="md:hidden"></br>유튜브 마케팅
          </h2>
        </MotionWrapper>
        <MotionWrapper
          className="flex justify-center w-full"
          animation="scaleIn"
          delay={0.4}
        >
          <div className="relative w-full max-w-[840px] h-auto overflow-hidden aspect-[840/520] max-md:aspect-[335/207]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ghqe3lR3h84"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </MotionWrapper>
        <MotionWrapper animation="fadeIn">
          <h2 className="text-[28px] max-md:text-[17px] text-center text-white leading-[1.7]">
            4만 구독자 유튜브 채널을 육성한 노하우로<br></br>
            <b className="font-extrabold">
              광고비 0원으로 자동으로 영업이 되는
            </b>
            <br></br> 자체 마케팅 채널을<br className="md:hidden"></br> 각
            매장과 디자이너 별로 구축합니다.
          </h2>
        </MotionWrapper>
      </div>
    </section>
  );
}
