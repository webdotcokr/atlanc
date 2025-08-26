'use client';

import React from 'react';
import Image from 'next/image';

// Asset imports - these would need to be replaced with actual asset paths
const logoImage = "http://localhost:3845/assets/22ecebc567a0e64b0944246435ceb46df01e06cb.png";
const lineDesktop = "http://localhost:3845/assets/cd2994e78cd2adef238fbc95ef2f8fea6d42fb75.svg";
const lineMobile = "http://localhost:3845/assets/4a40ebcbcd927cd4df54d058f6472ac9b6f7d6d7.svg";
const instagramIcon = "http://localhost:3845/assets/ab47ecabcc5eb9159908fd545c07bcbbb4812076.svg";
const youtubeIcon = "http://localhost:3845/assets/e72b2e1fca99e343ba0fd548a237a99b63a23106.svg";
const tiktokIcon = "http://localhost:3845/assets/51c386abe8ad76ccea9ee4c9b0599421ed6422a4.svg";
const instagramMobile = "http://localhost:3845/assets/47194e388823e46fa10baeb405aacf93aa4113e7.svg";
const youtubeMobile = "http://localhost:3845/assets/dd482d3dd136abeda9fca2c9d0c5de69d1d7af51.svg";
const tiktokMobile = "http://localhost:3845/assets/be9ebd608d497064c0b6f51cbb58c7752e2b8ec6.svg";

export interface FooterProps {
  logoSrc?: string;
  tagline?: string;
  copyright?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
  className?: string;
}

export default function Footer({
  logoSrc = logoImage,
  tagline = "A premium men's hair salon\ndesigned to shape your impression",
  copyright = "© 2025 ATLANC",
  socialLinks = {
    instagram: "#",
    youtube: "#", 
    tiktok: "#"
  },
  className = ""
}: FooterProps) {
  return (
    <footer className={`bg-black text-white relative ${className}`}>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-16 py-16">
          <div className="grid grid-cols-12 items-center gap-8">
            {/* Logo */}
            <div className="col-span-2">
              <div className="w-24 h-8 relative">
                <img 
                  src={logoSrc} 
                  alt="ATLANC" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Tagline */}
            <div className="col-span-6">
              <div className="font-semibold text-2xl leading-tight tracking-tight">
                {tagline.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < tagline.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="col-span-4 flex justify-end">
              <div className="flex items-center gap-6">
                <a href={socialLinks.instagram} className="hover:opacity-70 transition-opacity">
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href={socialLinks.youtube} className="hover:opacity-70 transition-opacity">
                  <img src={youtubeIcon} alt="YouTube" className="w-6 h-4" />
                </a>
                <a href={socialLinks.tiktok} className="hover:opacity-70 transition-opacity">
                  <img src={tiktokIcon} alt="TikTok" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="mt-8 mb-4">
            <img src={lineDesktop} alt="" className="w-full h-px" />
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-xs tracking-tight">
            {copyright}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="px-8 py-12">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-20 h-6 relative">
              <img 
                src={logoSrc} 
                alt="ATLANC" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <div className="mb-8">
            <div className="font-semibold text-lg leading-tight tracking-tight">
              {tagline.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < tagline.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="mb-6">
            <div className="flex items-center gap-6">
              <a href={socialLinks.instagram} className="hover:opacity-70 transition-opacity">
                <img src={instagramMobile} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href={socialLinks.youtube} className="hover:opacity-70 transition-opacity">
                <img src={youtubeMobile} alt="YouTube" className="w-6 h-4" />
              </a>
              <a href={socialLinks.tiktok} className="hover:opacity-70 transition-opacity">
                <img src={tiktokMobile} alt="TikTok" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="mb-4">
            <img src={lineMobile} alt="" className="w-full h-px" />
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-xs tracking-tight">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}