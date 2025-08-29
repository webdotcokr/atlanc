import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';

export default function Test() {
    return (
        <>
        <section className="tracking-tight pt-35 pb-35 max-md:pt-[60px] max-md:pb-[60px] bg-[url('/consulting-bg.webp')]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="en text-lg max-md:text-[16px]] font-semibold text-center text-[var(--color-primary-500)]">HAIR CONSULTING</h2>
                <p className="font-bold text-white text-center text-5xl max-md:text-[26px] leading-[1.3] mt-3">내게 맞는 헤어스타일만 찾아도 <br/>인상은 완전히 달라집니다.</p>
                <div className="mt-10">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-md:gap-4">
                        <BeforeAfterSlider 
                            beforeImage="/dashboard-report.webp"
                            afterImage="/circular-diagram.webp"
                            beforeLabel="BEFORE"
                            afterLabel="AFTER"
                        />
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>           
        </section>
        </>
    )
} 