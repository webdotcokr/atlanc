'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
            : 'bg-black/80 backdrop-blur-sm'
        } ${className}`}
      >
        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="text-white font-bold text-xl tracking-wide">
                  <span className="text-2xl">🅰️</span> ATLANC
                </div>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-8">
                <Link 
                  href="/atlanc" 
                  className="text-white hover:text-green-400 transition-colors duration-200 font-semibold"
                >
                  Atlanc
                </Link>
                <Link 
                  href="/designers" 
                  className="text-white hover:text-green-400 transition-colors duration-200 font-semibold"
                >
                  디자이너 소개
                </Link>
              </nav>

              {/* CTA Button */}
              <Link href="/booking">
                <button className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-md">
                  예약 문의하기
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="block md:hidden">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center">
                <div className="text-white font-bold text-lg tracking-wide">
                  <span className="text-xl">🅰️</span> ATLANC
                </div>
              </Link>

              <div className="flex items-center gap-3">
                {/* Mobile CTA Button */}
                <Link href="/booking">
                  <button className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-full font-semibold text-xs transition-all duration-200">
                    예약 문의하기
                  </button>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  aria-label="메뉴 열기"
                >
                  <div className="w-6 h-5 flex flex-col justify-between">
                    <span 
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                      }`}
                    />
                    <span 
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-0' : ''
                      }`}
                    />
                    <span 
                      className={`w-full h-0.5 bg-white transition-all duration-300 ${
                        isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
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
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <nav className="flex flex-col items-center gap-6">
              <Link 
                href="/atlanc" 
                className="text-white text-xl font-semibold hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Atlanc
              </Link>
              <Link 
                href="/designers" 
                className="text-white text-xl font-semibold hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                디자이너 소개
              </Link>
            </nav>

            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors duration-200">
                예약 문의하기
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}