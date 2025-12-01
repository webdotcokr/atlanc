"use client";

import { useState } from "react";
import MotionWrapper from "../ui/motion-wrapper";

export default function Section15() {
  const [activeTab, setActiveTab] = useState<"franchise" | "direct">("franchise");
  return (
    <section className="bg-[#090D09] py-[100px]">
      <div className="w-full max-w-[1140px] flex flex-col gap-11 items-center mx-auto">
        <div className=" flex flex-col items-center gap-4">
          <MotionWrapper animation="fadeIn">
            <div className=" px-2 py-1 bg-[#26E45C] text-xl font-extrabold max-md:text-[16px]] text-center text-black w-fit">
              Point 06
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white text-center text-2xl  max-md:text-[26px] leading-[1.4]  tracking-[-1.5]">
              “그럼 초기비용은 당연히 비싸겠죠?”
            </p>
          </MotionWrapper>
          <MotionWrapper animation="fadeInUp" delay={0.2}>
            <p className=" text-white font-extrabold text-center text-[46px] max-md:text-[26px] leading-[1.3]  tracking-[-1.5]">
              불필요한 금액 없이<br></br> 초기비용을 효율화했습니다.
            </p>
          </MotionWrapper>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="w-fit border flex items-center border-[#26E45C] bg-(--var(color-green-900)) rounded-full p-[5px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.05)]">
            <div
              onClick={() => setActiveTab("franchise")}
              className={`px-5 py-3 cursor-pointer text-xl leading-[1.4] font-semibold rounded-full transition-colors ${
                activeTab === "franchise"
                  ? "bg-[#26E45C] text-black"
                  : "bg-transparent text-[#FFFFFF80]"
              }`}
            >
              가맹점 예상 창업비용
            </div>
            <div
              onClick={() => setActiveTab("direct")}
              className={`px-5 py-3 cursor-pointer text-xl leading-[1.4] font-semibold rounded-full transition-colors ${
                activeTab === "direct"
                  ? "bg-[#26E45C] text-black"
                  : "bg-transparent text-[#FFFFFF80]"
              }`}
            >
              직영점 예상 창업비용
            </div>
          </div>

          {/* 가맹점 예상 창업비용 테이블 */}
          {activeTab === "franchise" && (
            <div className="flex flex-col gap-4">
              <table className="table-fixed border-collapse">
              <tr>
                <td className="w-[230px] px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232] rounded-tl-lg">
                  구분
                </td>
                <td className=" px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232]">
                  내용(20평 기준)
                </td>
                <td className="w-[270px] px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232] text-center">
                  금액(VAT별도)
                </td>
                <td className="w-[190px] px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232] text-center rounded-tr-lg">
                  비고
                </td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  보증금
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  매장 보증금
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  500원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>
              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  가맹비
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  본사의 브랜드, 노하우, 교육, 운영 시스템 등
                </td>
                <td className="px-[21px] py-5 border-b border-r border-dashed border-[#D3D3D3] bg-white text-right">
                  <div className="flex items-center gap-4 justify-end">
                    <p className="text-[#6b6b6b] text-lg leading-[1.6] line-through">
                      500만원
                    </p>
                    <p className=" font-bold text-black text-xl  leading-[1.6]">
                      0원
                    </p>
                  </div>
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white ">
                  <div className="flex items-center justify-center">
                    <div className="px-2.5 py-[5px] bg-[#26E45C] transform-[rotate(-8deg)] text-lg leading-[1.6] font-extrabold">
                      선착순 면제
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  내부 인테리어
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.4]">
                  바닥, 천장, 조명, 전기공사, 도장 등<br></br>전체적인 공사비가
                  포함
                </td>
                <td className="px-[21px] py-5 border-b border-r border-dashed border-[#D3D3D3] bg-white text-right">
                  <div className="flex items-center gap-4 justify-end">
                    <p className="text-[#6b6b6b] text-lg leading-[1.6] line-through">
                      1,200만원
                    </p>
                    <p className=" font-bold text-black text-xl  leading-[1.6]">
                      800만원
                    </p>
                  </div>
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white ">
                  <div className="flex items-center justify-center">
                    <div className="px-2.5 py-[5px] bg-[#26E45C] transform-[rotate(-8deg)] text-lg leading-[1.6] font-extrabold">
                      한시적 할인
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  집기
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  사업 운영에 필요한 설비나 도구류
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  1,500만원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  가구류
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  테이블, 의자, 진열대, 카운터
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  300만원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  홍보물
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  현수막, 전단지, 간판, 온라인 마케팅 등
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  200만원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  className="bg-[#26E45C] px-[31px] py-5 text-2xl font-extrabold leading-[1.6] rounded-bl-lg"
                >
                  예상 투자 비용
                </td>
                <td className="px-[21px] py-5 bg-[#26E45C] text-right text-2xl font-extrabold text-black">
                  2,000만원~
                </td>
                <td className="bg-[#26E45C]  rounded-br-lg"></td>
              </tr>
            </table>

            <p className="text-sm font-bold leading-[1.6] text-[#8F8F8F]">
              <span className="text-[#D1D1D1]">* 별도:</span> 철거, 전기증설,
              가스공사(순간 온수기 포함), 외부공사, 샷시, 화장실, CCTV등
            </p>
          </div>
          )}

          {/* 직영점 예상 창업비용 테이블 */}
          {activeTab === "direct" && (
            <div className="flex flex-col gap-4">
              <table className="table-fixed border-collapse">
              <tr>
                <td className="w-[230px] px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232] rounded-tl-lg">
                  구분
                </td>
                <td className=" px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232]">
                  내용(20평 기준)
                </td>
                <td className="w-[270px] px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232] text-center">
                  금액(VAT별도)
                </td>
                <td className="w-[190px] px-9 py-6 text-xl leading-[1.4] font-bold text-white bg-[#323232] text-center rounded-tr-lg">
                  비고
                </td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  보증금
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  매장 보증금
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  500원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>
              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  가맹비
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  본사의 브랜드, 노하우, 교육, 운영 시스템 등
                </td>
                <td className="px-[21px] py-5 border-b border-r border-dashed border-[#D3D3D3] bg-white text-right">
                  <div className="flex items-center gap-4 justify-end">
                    <p className="text-[#6b6b6b] text-lg leading-[1.6] line-through">
                      500만원
                    </p>
                    <p className=" font-bold text-black text-xl  leading-[1.6]">
                      0원
                    </p>
                  </div>
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white ">
                  <div className="flex items-center justify-center">
                    <div className="px-2.5 py-[5px] bg-[#26E45C] transform-[rotate(-8deg)] text-lg leading-[1.6] font-extrabold">
                      선착순 면제
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  내부 인테리어
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.4]">
                  바닥, 천장, 조명, 전기공사, 도장 등<br></br>전체적인 공사비가
                  포함
                </td>
                <td className="px-[21px] py-5 border-b border-r border-dashed border-[#D3D3D3] bg-white text-right">
                  <div className="flex items-center gap-4 justify-end">
                    <p className="text-[#6b6b6b] text-lg leading-[1.6] line-through">
                      1,200만원
                    </p>
                    <p className=" font-bold text-black text-xl  leading-[1.6]">
                      800만원
                    </p>
                  </div>
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white ">
                  <div className="flex items-center justify-center">
                    <div className="px-2.5 py-[5px] bg-[#26E45C] transform-[rotate(-8deg)] text-lg leading-[1.6] font-extrabold">
                      한시적 할인
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  집기
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  사업 운영에 필요한 설비나 도구류
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  1,500만원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  가구류
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  테이블, 의자, 진열대, 카운터
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  300만원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>

              <tr>
                <td className="px-[31px] py-5 font-extrabold text-black text-[22px] border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  홍보물
                </td>
                <td className="px-[21px] py-5  text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6]">
                  현수막, 전단지, 간판, 온라인 마케팅 등
                </td>
                <td className="px-[21px] py-5 font-bold text-black text-xl border-b border-r border-dashed border-[#D3D3D3] bg-white leading-[1.6] text-right">
                  200만원
                </td>
                <td className="border-b border-dashed border-[#D3D3D3] bg-white "></td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  className="bg-[#26E45C] px-[31px] py-5 text-2xl font-extrabold leading-[1.6] rounded-bl-lg"
                >
                  예상 투자 비용
                </td>
                <td className="px-[21px] py-5 bg-[#26E45C] text-right text-2xl font-extrabold text-black">
                  2,000만원~
                </td>
                <td className="bg-[#26E45C]  rounded-br-lg"></td>
              </tr>
            </table>

            <p className="text-sm font-bold leading-[1.6] text-[#8F8F8F]">
              <span className="text-[#D1D1D1]">* 별도:</span> 철거, 전기증설,
              가스공사(순간 온수기 포함), 외부공사, 샷시, 화장실, CCTV등
            </p>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
