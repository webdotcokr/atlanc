import MotionWrapper from "../ui/motion-wrapper";

export default function Section4() {
  return (<section className="flex flex-col gap-10 items-center relative bg-[#090D09]">
            <div className="w-full max-w-[1400px] flex flex-col gap-10 relative pt-[70px] pb-11 ">
              <h1 className="text-[66px] font-extrabold absolute left-0 bottom-0 font-poppins leading-[66px] text-white opacity-[0.06]">
                ATLANC<br></br>
                <b className="font-extrabold text-primary">PREMIUM MEN’S HAIR</b>
              </h1>
    
              <div className="flex flex-col gap-4">
                <MotionWrapper animation="fadeIn">
                  <p className="text-2xl font-bold leading-[1.4] font-[NanumSquareNeo] text-primary">
                    자영업자 100만 폐업시대
                  </p>
                </MotionWrapper>
    
                <MotionWrapper animation="fadeIn">
                  <p className="text-[46px]  leading-[1.3] font-[NanumSquareNeo] text-white">
                    아무나 할 수 있는 카페, 식당 대신 <br></br>
                    <b className="font-extrabold">경쟁력 있는 업종을 선택하세요.</b>
                  </p>
                </MotionWrapper>
              </div>
    
              <MotionWrapper animation="fadeIn">
                <div className="flex gap-[60px]">
                  <div className="w-[640px] h-[459px]">
                    <img src="/image1.png"></img>
                  </div>
    
                  <div className="w-[700px] flex flex-col">
                    <div className="text-[28px] leading-[1.4] font-[NanumSquareNeo] font-bold pb-[21px] border-b w-full border-white text-white">
                      2025년 9월 건대 직영점 실제 월매출
                    </div>
                    <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px]">
                      <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6]">
                        매출
                      </p>
                      <p className="text-[22px]  font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6]">
                        14,952,300원
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px]">
                      <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6]">
                        도입비
                      </p>
                      <p className="text-[22px]  font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] line-through">
                        0원
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-6 pb-[22px]">
                      <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6]">
                        가맹비
                      </p>
                      <p className="text-[22px]  font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] line-through">
                        0원
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#F6F6F633] pt-[27px] pb-[26px]">
                      <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6]">
                        인건비
                      </p>
                      <p className="text-[22px]  font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] line-through">
                        0,000,000원
                      </p>
                    </div>
                    <div className="flex items-center justify-between  pt-[27px] pb-[25px]">
                      <p className="text-2xl leading-[1.4] font-bold font-[NanumSquareNeo] text-[#f6f6f6]">
                        임대료 및 운영잡비
                      </p>
                      <p className="text-[22px]  font-[NanumSquareNeo] leading-[1.4] text-[#f6f6f6] line-through">
                        0,000,000원
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#F6F6F6] pt-[22px]">
                      <p className="text-[28px] leading-[1.4] text-primary font-[NanumSquareNeo] font-extrabold">
                        영업이익 (40%)
                      </p>
                      <p className="text-[28px] leading-[1.4] text-primary font-[NanumSquareNeo] font-extrabold">
                        0,000,000원
                      </p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </section>)
    ;
}
