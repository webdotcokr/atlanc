export default function Footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="pt-23 pb-12 max-w-[1440px] mx-auto pl-[20px] pr-[20px]">
          <img src="/footer-logo.png" className="max-md:w-[140px]"></img>
          <p className="text-2xl max-md:text-[18px] font-semibold text-white mt-4">A premium men's hair salon<br/>designed to shape your impression</p>
          <hr className="border-white/20 mt-12"></hr>
          <div className="flex flex-row max-md:flex-col flex-wrap justify-between items-center max-md:items-start mt-8">
            <p className="text-xs text-[var(--color-gray-500)] max-md:order-2 max-md:mt-12">© 2025 ATLANC</p>
            <div className="flex flex-row flex-wrap items-center gap-5 max-md:order-1">
              <a href="https://www.instagram.com/atlanc_wonbar/" target="_blank"><img src="/instagram.svg"></img></a>
              <a href="https://www.youtube.com/@%EC%95%84%EB%9C%B0%EB%9E%91%EB%A7%A8%EC%A6%88%ED%97%A4%EC%96%B4" target="_blank"><img src="/youtube.svg"></img></a>
              <a href="https://blog.naver.com/atlanc100" target="_blank"><img src="/blog.svg"></img></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};