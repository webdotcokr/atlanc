export default function Section3() {
    return (
        <section className="py-24 pb-30 max-md:py-16 tracking-tighter bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12 max-md:mb-8">
                    <span className="num text-gray-200 text-8xl font-semibold italic">03</span>
                    <h2 className="text-black font-bold text-5xl max-md:text-3xl">체계적인 교육시스템</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-6">
                    <div className="bg-[url('/edu-1.webp')] flex items-end aspect-[7/5] bg-center bg-cover">
                        <div className="p-12 max-md:p-5 text-white">
                            <p className="text-2xl max-md:text-[18px] font-bold leading">
                                언제 어느 지점에 방문해도<br/>
                                만족스러운 결과를 제공하는<br/>
                                교육시스템을 갖췄습니다.
                            </p>
                        </div>
                    </div>
                
                    <div className="bg-[url('/edu-2.webp')] flex items-end aspect-[7/5] bg-center bg-cover">
                        <div className="p-12 max-md:p-5 text-white">
                            <p className="text-2xl max-md:text-[18px] font-bold leading">
                                마케팅, 재방문율 상승, 객단가 상승 3가지<br/>
                                파트로 나누어져 각 파트당 6주 정도<br/>
                                총 18주의 교육 커리큘럼이 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}