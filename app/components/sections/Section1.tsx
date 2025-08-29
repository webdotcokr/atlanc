export default function Section1() {
    return (
        <section className="py-24 max-md:py-16 tracking-tighter bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-24 max-md:mb-12">
                    <span className="num text-gray-200 text-8xl font-semibold italic">01</span>
                    <h2 className="text-black font-bold text-5xl max-md:text-3xl">데이터 기반 컨설팅 시스템</h2>
                </div>

                <div className="space-y-20 max-md:space-y-12">
                    {/* Top Row: Image + Text */}
                    <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 items-center">
                        {/* Left - Circular Diagram Image Area */}
                        <div className="flex justify-center">
                            <div className="bg-white rounded-lg border border-gray-200 flex items-center jmax-md:text-centerustify-center">
                                <img 
                                    src="/circular-diagram.webp" 
                                    alt="데이터 기반 컨설팅 다이어그램"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Right - Text Content */}
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-4 max-md:mb-2 max-md:text-2xl max-md:text-center">10년 경력으로 축적된 데이터</h3>
                            <p className="text-gray-600 text-lg max-md:text-center leading-relaxed">
                                얼굴형부터 모발, 두상까지 모두 분석해 <br/>감이 아닌 데이터로 컨설팅합니다.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row: Text + Image */}
                    <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 items-center">
                        {/* Left - Text Content */}
                        <div className="text-right max-md:order-2">
                            <h3 className="text-3xl font-bold max-md:mb-2 max-md:text-center max-md:text-2xl text-black mb-4">심층 설문 시스템</h3>
                            <p className="text-lg max-md:text-center leading-relaxed">
                                고객님의 특성과 니즈를 정확하게 파악하기 위해 <br/>심층 설문지 작성 및 1:1 상담을 진행합니다.
                            </p>
                        </div>

                        {/* Right - Dashboard Image Area */}
                        <div className="flex justify-center max-md:order-1">
                            <div className="w-full bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <img 
                                    src="/dashboard-report.webp" 
                                    alt="Dashboard Report"
                                    className="w-full h-full object-contain rounded border border-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}