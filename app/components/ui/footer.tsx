export default function Footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="pt-23 pb-12 max-w-[1440px] mx-auto pl-[20px] pr-[20px]">
          <img src="/footer-logo.png"></img>
          <p className="text-2xl font-semibold text-white mt-4">A premium men's hair salon<br/>designed to shape your impression</p>
          <hr className="border-white/20 mt-12"></hr>
          <div className="flex flex-row flex-wrap justify-between items-center mt-8">
            <p className="text-xs text-[var(--color-gray-500)]">© 2025 ATLANC</p>
            <div className="flex flex-row flex-wrap items-center gap-5">
              <a><span><img src="/instagram.svg"></img></span></a>
              <a><span><img src="/youtube.svg"></img></span></a>
              <a><span><img src="/blog.svg"></img></span></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};