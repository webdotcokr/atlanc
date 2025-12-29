"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const pathname = usePathname();
  const isFranchisePage = pathname === "/franchise";
  const isAdminPage = pathname?.startsWith("/admin");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // admin 페이지에서는 헤더 숨김
  if (isAdminPage) {
    return null;
  }

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasMounted && isScrolled ? "bg-black/30 backdrop-blur-[10px]" : ""
        } ${className}`}
      >
        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="mx-auto px-6">
            <div className="flex items-center justify-between relative h-[88px]">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div>
                  <img src="/logo.png" alt="Logo" className="h-16" />
                </div>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <Link
                  href="/atlanc"
                  className="text-white text-xl hover:text-[#26E45C] transition-colors duration-200 font-semibold leading-[1.4]"
                >
                  Atlanc
                </Link>
                <Link
                  href="/designers"
                  className="text-white text-xl hover:text-[#26E45C] transition-colors duration-200 font-semibold leading-[1.4]"
                >
                  디자이너 소개
                </Link>
                {/* 가맹문의는 가맹문의 페이지에서만 표시 */}
                {isFranchisePage && (
                  <Link
                    href="/franchise"
                    className="text-white text-xl hover:text-[#26E45C] transition-colors duration-200 font-semibold leading-[1.4]"
                  >
                    가맹문의
                  </Link>
                )}
              </nav>

              {/* CTA Button */}
              {/* <Link href="#">
                <button className="flex flex-row gap-2 items-center bg-white hover:bg-gray-100 px-5 h-[51px] rounded-full cursor-pointer">
                  <div className="flex items-center gap-1 text-lg  font-semibold text-black">
                    <span>
                      <img src="/cta-icon-1.png" className="w-6" />
                    </span>
                    <span>무료 컨설팅</span>
                  </div>

                  <span>
                    <img src="/cta-icon-2.png" />
                  </span>
                </button>
              </Link> */}
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="block md:hidden">
          <div className="px-3 h-[76px] flex items-center">
            <div className="flex items-center justify-between w-full">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-11" />
              </Link>

              <div className="flex items-center gap-3">
                {/* Mobile CTA Button */}
                <Link href="/#">
                  <button className="flex flex-row gap-2 items-center bg-white text-sm hover:bg-gray-100 w-[120px] h-[37px] justify-center rounded-full font-semibold cursor-pointer">
                    <div className="flex items-center gap-1">
                      <span>
                        <img
                          src="/cta-icon-1.png"
                          alt="CTA Icon 1"
                          className="h-4"
                        />
                      </span>
                      <span>무료컨설팅</span>
                    </div>
                    <span>
                      <img
                        src="/cta-icon-2.png"
                        alt="CTA Icon 2"
                        className="h-2"
                      />
                    </span>
                  </button>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                  aria-label="메뉴 열기"
                >
                  <div className="w-6 h-5 flex flex-col justify-between">
                    <span
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isMobileMenuOpen ? "opacity-0" : ""
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-60 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 w-80 h-full bg-white backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="메뉴 닫기"
            >
              <div className="w-6 h-5 flex flex-col justify-center items-center">
                <span className="w-[22px] h-0.5 bg-black rotate-45 absolute" />
                <span className="w-[22px] h-0.5 bg-black -rotate-45 absolute" />
              </div>
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-8 pt-8">
            {/* Logo */}
            <div className="mb-12">
              <img src="/logo-color.png" alt="Logo" className="h-12" />
            </div>

            {/* Navigation */}
            <nav className="space-y-8">
              <div className="border-b border-[var(--color-gray-100)] pb-6">
                <Link
                  href="/atlanc"
                  className="flex items-center justify-between text-xl font-semibold group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Atlanc</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <div className="border-b border-[var(--color-gray-100)] pb-6">
                <Link
                  href="/designers"
                  className="flex items-center justify-between text-xl font-semibold group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>디자이너 소개</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              {/* 가맹문의는 가맹문의 페이지에서만 표시 */}
              {isFranchisePage && (
                <div className="border-b border-[var(--color-gray-100)] pb-6">
                  <Link
                    href="/franchise"
                    className="flex items-center justify-between text-xl font-semibold group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>가맹문의</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
