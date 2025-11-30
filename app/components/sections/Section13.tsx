import MotionWrapper from "../ui/motion-wrapper";

export default function Section13() {
  return (
    <section className="bg-[url('/welcome-bg.webp')] bg-[#090D09] pt-[96px] pb-[120px] max-md:pt-[60px] max-md:pb-[60px]">
      <div className="max-w-[1440px] mx-auto flex items-center flex-col gap-7">
        <MotionWrapper animation="fadeIn">
          <h2 className="text-[34px] max-md:text-[16px] font-bold text-center text-primary leading-[1.4]">
            본사의 지속가능한 유튜브 마케팅
          </h2>
        </MotionWrapper>
        <MotionWrapper
          className="flex justify-center"
          animation="scaleIn"
          delay={0.4}
        >
          <div className="relative w-full max-w-[840px] aspect-video overflow-hidden h-[520px]">
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
          <h2 className="text-[28px] max-md:text-[16px] text-center text-white leading-[1.7]">
            4만 구독자 유튜브 채널을 육성한 노하우로<br></br>
            <b className="font-extrabold">
              광고비 0원으로 자동으로 영업이 되는
            </b>
            <br></br> 자체 마케팅 채널을 각 매장과 디자이너 별로 구축합니다.
          </h2>
        </MotionWrapper>
      </div>
    </section>
  );
}
