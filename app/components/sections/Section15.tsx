"use client";

import { useState } from "react";
import MotionWrapper from "../ui/motion-wrapper";

export default function Section15() {
  const [activeTab, setActiveTab] = useState<"franchise" | "direct">(
    "franchise"
  );
  return (
    <section className="bg-[#090D09] py-[100px] max-md:pt-[60px] max-md:pb-[80px]">
      <div className="w-full max-w-[1140px] flex flex-col gap-11 items-center mx-auto overflow-hidden">
        <div className=" flex flex-col items-center gap-4">
          <MotionWrapper animation="fadeIn">
            <div className=" px-2 py-1 bg-[#26E45C] text-xl font-extrabold max-md:text-[16px] text-center text-black w-fit">
              Point 06
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-2xl  max-md:text-[17px] leading-[1.4]  tracking-[-1.5]">
              “그럼 초기비용은 당연히 비싸겠죠?”
            </p>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white font-extrabold text-center text-[46px] max-md:text-[24px] leading-[1.3]  tracking-[-1.5]">
              불필요한 금액 없이<br></br> 초기비용을 효율화했습니다.
            </p>
          </MotionWrapper>
        </div>

        <div className="flex flex-col gap-5 items-center max-md:gap-0 overflow-hidden w-full">
          <div className="w-fit border flex items-center border-[#26E45C] bg-(--var(color-green-900)) rounded-full p-[5px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.05)]">
            <div
              onClick={() => setActiveTab("franchise")}
              className={`px-5 py-3 cursor-pointer text-xl max-md:text-sm leading-[1.4] font-semibold rounded-full transition-colors ${
                activeTab === "franchise"
                  ? "bg-[#26E45C] text-black"
                  : "bg-transparent text-[#FFFFFF80]"
              }`}
            >
              가맹점 예상 창업비용
            </div>
            <div
              onClick={() => setActiveTab("direct")}
              className={`px-5 py-3 cursor-pointer text-xl max-md:text-sm leading-[1.4] font-semibold rounded-full transition-colors ${
                activeTab === "direct"
                  ? "bg-[#26E45C] text-black"
                  : "bg-transparent text-[#FFFFFF80]"
              }`}
            >
              직영점 예상 창업비용
            </div>
          </div>

          <p className="md:hidden mt-6 mb-2 text-[#d1d1d1] text-[11px] font-bold leading-[1.6] w-full">
            ← → 좌우로 스크롤해서 확인하실 수 있습니다!
          </p>
          {/* 가맹점 예상 창업비용 테이블 */}
          {activeTab === "franchise" && (
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full overflow-auto">
                <table className="table-fixed border-collapse w-full">
                  <tr>
                    <td className="w-[230px] max-md:w-[125px] px-9 py-6 max-md:px-4 max-md:py-[17px] text-xl max-md:text-[15px] leading-[1.4] font-bold text-white bg-[#323232] rounded-tl-lg">
                      구분
                    </td>
                    <td className="w-[400px] max-md:w-[172px] px-9 py-6 text-xl max-md:px-[14px] max-md:py-4 leading-[1.4] font-bold max-md:text-[15px] text-white bg-[#323232]">
                      내용(17평 / 4인 운영 기준)
                    </td>
                    <td className="w-[270px] px-9 py-6 text-xl max-md:px-[14px] max-md:py-4 leading-[1.4] max-md:text-[15px] font-bold text-white bg-[#323232] text-center">
                      금액(VAT별도)
                    </td>
                    <td className="w-[190px] px-9 py-6 text-xl max-md:px-[14px] max-md:py-4 leading-[1.4] max-md:text-[15px] font-bold text-white bg-[#323232] text-center rounded-tr-lg">
                      비고
                    </td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      로얄티
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      본사의 브랜드 노하우, 교육, 운영 시스템 등
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      3 ~ 8%
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
                  </tr>
                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      내부 인테리어
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] text-black text-xl max-md:text-[13px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.4]">
                      바닥, 천장, 조명, 전기공사, 도장 등<br></br>전체적인
                      공사비가 포함
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      2,500만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      집기
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      사업 운영에 필요한 설비나 도구류
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      700만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white max-md:px-[11px] max-md:py-[14px]"></td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      가구류
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      테이블, 의자, 진열대, 카운터
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      300만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      홍보물
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      현수막, 전단지, 간판, 온라인 마케팅 등
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      250만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
                  </tr>

                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#26E45C] px-[31px] py-5 text-2xl font-extrabold leading-[1.6] rounded-bl-lg max-md:text-[17px]"
                    >
                      예상 투자 비용
                    </td>
                    <td className="px-[21px] py-5 bg-[#26E45C] text-right text-2xl font-extrabold text-black max-md:text-[15px]">
                      3,750만원
                    </td>
                    <td className="bg-[#26E45C]  rounded-br-lg"></td>
                  </tr>
                </table>
              </div>
              <p className="text-sm font-bold leading-[1.6] text-[#8F8F8F] max-md:flex max-md:gap-0.5">
                <span className="text-[#D1D1D1]">* 별도:</span> 철거, 전기증설,
                가스공사(순간 온수기 포함),<br className="md:hidden"></br>{" "}
                외부공사, 샷시, 화장실, CCTV등
              </p>
            </div>
          )}

          {/* 직영점 예상 창업비용 테이블 */}
          {activeTab === "direct" && (
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full overflow-auto">
                <table className="table-fixed border-collapse w-full">
                  <tr>
                    <td className="w-[230px] max-md:w-[125px] px-9 py-6 max-md:px-4 max-md:py-[17px] text-xl max-md:text-[15px] leading-[1.4] font-bold text-white bg-[#323232] rounded-tl-lg">
                      구분
                    </td>
                    <td className="w-[400px] max-md:w-[172px] px-9 py-6 text-xl max-md:px-[14px] max-md:py-4 leading-[1.4] font-bold max-md:text-[15px] text-white bg-[#323232]">
                      내용(17평 / 4인 운영 기준)
                    </td>
                    <td className="w-[270px] px-9 py-6 text-xl max-md:px-[14px] max-md:py-4 leading-[1.4] max-md:text-[15px] font-bold text-white bg-[#323232] text-center">
                      금액(VAT별도)
                    </td>
                    <td className="w-[190px] px-9 py-6 text-xl max-md:px-[14px] max-md:py-4 leading-[1.4] max-md:text-[15px] font-bold text-white bg-[#323232] text-center rounded-tr-lg">
                      비고
                    </td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      내부 인테리어
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] text-black text-xl max-md:text-[13px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.4]">
                      바닥, 천장, 조명, 전기공사, 도장 등<br></br>전체적인
                      공사비가 포함
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      2,500만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      집기
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      사업 운영에 필요한 설비나 도구류
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      700만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white max-md:px-[11px] max-md:py-[14px]">
                      <div className="flex items-center justify-center">
                        <div className="px-2.5 py-[5px] max-md:px-1.5 max-md:py-[3px] bg-[#26E45C] transform-[rotate(-8deg)] text-lg max-md:text-sm leading-[1.6] font-extrabold">
                          한시적 할인
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      가구류
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      테이블, 의자, 진열대, 카운터
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      300만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white max-md:px-[11px] max-md:py-[14px]">
                      <div className="flex items-center justify-center">
                        <div className="px-2.5 py-[5px] max-md:px-1.5 max-md:py-[3px] bg-[#26E45C] transform-[rotate(-8deg)] text-lg max-md:text-sm leading-[1.6] font-extrabold">
                          한시적 할인
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-[31px] py-5 max-md:px-[14px] max-md:py-[15px] font-extrabold text-black text-[22px] max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      홍보물
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] max-md:text-[13px] text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                      현수막, 전단지, 간판, 온라인 마케팅 등
                    </td>
                    <td className="px-[21px] py-5 max-md:px-[11px] max-md:py-[14px] font-bold text-black text-xl max-md:text-[15px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                      250만원
                    </td>
                    <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
                  </tr>

                  <tr>
                    <td
                      colSpan={2}
                      className="bg-[#26E45C] px-[31px] py-5 text-2xl font-extrabold leading-[1.6] rounded-bl-lg max-md:text-[17px]"
                    >
                      예상 투자 비용
                    </td>
                    <td className="px-[21px] py-5 bg-[#26E45C] text-right text-2xl font-extrabold text-black max-md:text-[15px]">
                      3,750만원
                    </td>
                    <td className="bg-[#26E45C]  rounded-br-lg"></td>
                  </tr>
                </table>
              </div>

              <p className="text-sm font-bold leading-[1.6] text-[#8F8F8F] max-md:flex max-md:gap-0.5">
                <span className="text-[#D1D1D1]">* 별도:</span> 철거, 전기증설,
                가스공사(순간 온수기 포함),<br className="md:hidden"></br>{" "}
                외부공사, 샷시, 화장실, CCTV등
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
