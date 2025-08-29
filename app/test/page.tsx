import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';

export default function Test() {
    return (
        <>
      <section className="relative flex flex-col items-center justify-center h-[890px] max-md:h-[656px] w-full text-center bg-[url('/hero.webp')]">
        <h2 className="en text-xl max-md:text-[14px] text-white">Atlanc Premium Men's Hair Consulting</h2>
        <p className="mt-6 text-white text-[55px] max-md:text-[30px] font-bold leading-[1.3] tracking-[-2]">우리는 헤어를 <br className="md:hidden"/>디자인하지 않습니다. <br/>당신의 인상을 디자인합니다.</p>
        {/* Bottom Center Text with Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="num text-white text-xl font-medium tracking-wide mb-4">explore</span>
          <div className="w-px h-16 bg-white opacity-60"></div>
        </div>
      </section>
        </>
    )
} 