import MotionWrapper from "../ui/motion-wrapper";

export default function Section5() {
  return (
    <section className="bg-[#090D09] flex flex-col items-center pt-[140px]">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-11">
        <MotionWrapper animation="fadeIn">
          <h1 className="text-[46px] font-extrabold leading-[1.4] text-white font-[NanumSquareNeo] text-center">
            왜 미용실 창업이 <br></br>현 시점 가장 적합할까요?
          </h1>
        </MotionWrapper>
        <div className="w-full flex flex-col gap-6">
          <MotionWrapper animation="fadeIn">
            <div className="h-[480px] relative px-[238px] pr-[130px] flex justify-end gap-[215px] overflow-hidden bg-gradient-to-r from-[#0E120E] to-[#181a18]">
              <img
                className="w-[287px] h-[480px] object-cover object-bottom"
                src="/why1.webp"
              ></img>
              <div className="flex flex-col gap-[32px] pt-[123px]">
                <p className="text-[22px] font-[900] font-[NanumSquareNeo] leading-[1.4] text-primary">
                  01
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[32px] leading-[1.4] font-extrabold text-white font-[NanumSquareNeo]">
                    어느 지역에서나 수요가 일정합니다.
                  </h1>
                  <p className="text-[22px] text-[#eee] leading-[1.5] font-[NanumSquareNeo]">
                    수도권, 지방을 불문하고 상권이 있는 곳 어디든<br></br>
                    미용실 수요는 꾸준히 발생합니다. <br></br>
                    따라서, 전국 어디든 창업이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeIn">
            <div className="h-[480px] relative pl-[208px] pr-[130px] flex justify-end gap-[215px] overflow-hidden bg-gradient-to-r from-[#0E120E] to-[#181a18]">
              <div className="pt-[119px]">
                <img
                  className="w-[314px] h-[259px] object-cover object-bottom"
                  src="/why2.webp"
                ></img>
              </div>

              <div className="flex flex-col gap-[32px] pt-[107px]">
                <p className="text-[22px] font-[900] font-[NanumSquareNeo] leading-[1.4] text-primary">
                  02
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[32px] leading-[1.4] font-extrabold text-white font-[NanumSquareNeo]">
                    객단가가 높고 투입 비용이 적습니다.
                  </h1>
                  <p className="text-[22px] text-[#eee] leading-[1.5] font-[NanumSquareNeo]">
                    커트는 기본, 염색, 펌 등 시술로<br></br>
                    객단가를 높일 수 있는 방법이 많습니다. <br></br>
                    동시에 인력 기반 서비스이기 때문에,<br></br>
                    창업 비용과 투입 비용이 적습니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper animation="fadeIn">
            <div className="h-[480px] relative pl-[208px] pr-[64px] flex justify-end gap-[215px] overflow-hidden bg-gradient-to-r from-[#0E120E] to-[#181a18]">
              <div className="pt-[126px]">
                <img
                  className="w-[314px] h-[246px] object-cover object-bottom"
                  src="/why3.webp"
                ></img>
              </div>

              <div className="flex flex-col gap-[32px] pt-[107px]">
                <p className="text-[22px] font-[900] font-[NanumSquareNeo] leading-[1.4] text-primary">
                  03
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[32px] leading-[1.4] font-extrabold text-white font-[NanumSquareNeo]">
                    재구매가 꾸준히 발생해 매출이 안정적입니다.
                  </h1>
                  <p className="text-[22px] text-[#eee] leading-[1.5] font-[NanumSquareNeo]">
                    대부분 한 번 방문한 고객은 꾸준히 방문합니다.<br></br>
                    초기 광고를 통해 고객들을 모으고 만족도 높은 서비스를<br></br>
                    제공하면 시간이 지나면서<br></br>
                    안정적인 매출이 발생하는 구조입니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
