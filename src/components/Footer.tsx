"use client";

import { FaInstagram, FaTwitter, FaSpotify, FaApple, FaYoutube, FaHeart, FaMusic } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import Link from "next/link";

// ============================================================
// FOOTER COMPONENT - Premium Minimalist Luxury Light Theme
// ============================================================

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#2C2420]/5 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* ==========================================================
        TOP SECTION - Brand + Links + Social
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#2C2420]/5">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#A8893A] flex items-center justify-center shadow-md shadow-[#C9A84C]/20">
                <IoMdMusicalNotes className="text-white text-sm" />
              </div>
              <span className="text-xl font-light tracking-tight text-[#2C2420]">
                Echo<span className="font-bold text-[#C9A84C]">.</span>
              </span>
            </div>
            <p className="text-[#6B5F54] text-sm font-light leading-relaxed max-w-xs">
              Premium audio experiences for the discerning listener. Minimal. Pure. Timeless.
            </p>
            <div className="flex gap-4 mt-6">
              <FaSpotify className="text-[#6B5F54] hover:text-[#C9A84C] transition-colors cursor-pointer text-xl" />
              <FaApple className="text-[#6B5F54] hover:text-[#C9A84C] transition-colors cursor-pointer text-xl" />
              <FaYoutube className="text-[#6B5F54] hover:text-[#C9A84C] transition-colors cursor-pointer text-xl" />
              <FaInstagram className="text-[#6B5F54] hover:text-[#C9A84C] transition-colors cursor-pointer text-xl" />
              <FaTwitter className="text-[#6B5F54] hover:text-[#C9A84C] transition-colors cursor-pointer text-xl" />
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-[#2C2420] font-medium text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {["Genres", "Artists", "Albums", "Playlists"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-[#6B5F54] hover:text-[#2C2420] text-sm font-light transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#2C2420] font-medium text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-[#6B5F54] hover:text-[#2C2420] text-sm font-light transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[#2C2420] font-medium text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {["Help Center", "Contact", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-[#6B5F54] hover:text-[#2C2420] text-sm font-light transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==========================================================
        BOTTOM SECTION - Copyright + Made with love
        ========================================================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-[#6B5F54] text-sm font-light">
            © 2026 Echo Music. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#6B5F54] text-sm font-light">
            <span>Made with</span>
            <FaHeart className="text-[#C9A84C] text-xs animate-pulse" />
            <span>for true music lovers</span>
            <FaMusic className="text-[#C9A84C] text-xs ml-1" />
          </div>
          <div className="flex items-center gap-4 text-xs text-[#6B5F54]/40 font-mono">
            <span>v2.0</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A84C]/30" />
            <span>Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
}