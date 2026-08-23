"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPlay,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaGuitar,
  FaUsers,
  FaInfoCircle,
  FaSpotify,
  FaHeart,
} from "react-icons/fa";
import Link from "next/link";

// ============================================================
// HEADER COMPONENT - Premium Minimalist with Luxury Light Theme
// ============================================================

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // ============================================================
  // Track scroll position for glass morphism effect
  // ============================================================
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================================
  // Navigation links configuration
  // ============================================================
  const links = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "Genres", icon: <FaGuitar />, href: "/genres" },
    { name: "Artists", icon: <FaUsers />, href: "/artists" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
  ];

  // ============================================================
  // Mobile menu animation variants
  // ============================================================
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      transition: {
        duration: 0.25,
        ease: [0.42, 0, 1, 1],
      },
    },
  };

  // ============================================================
  // Staggered child animation for mobile menu items
  // ============================================================
  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  // ============================================================
  // Handle mobile menu close on link click
  // ============================================================
  const handleLinkClick = () => setMobileMenu(false);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 
        px-6 md:px-12 lg:px-20 
        py-3 md:py-4 
        flex justify-between items-center 
        transition-all duration-500 ease-out
        ${scroll 
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-[#2C2420]/5" 
          : "bg-transparent"
        }
      `}
    >
      {/* ==========================================================
      LOGO - Elegant typography with gold accent
      ========================================================== */}
      <Link
        href="/"
        className="group flex items-center gap-2.5"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#A8893A] flex items-center justify-center shadow-md shadow-[#C9A84C]/20 group-hover:scale-105 transition-transform duration-300">
          <FaPlay className="text-white text-sm" />
        </div>
        <span className="text-xl md:text-2xl font-light tracking-tight text-[#2C2420]">
          Echo<span className="font-bold text-[#C9A84C]">.</span>
        </span>
      </Link>

      {/* ==========================================================
      DESKTOP NAVIGATION - Minimal with subtle hover
      ========================================================== */}
      <nav className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group flex items-center gap-1.5 text-sm font-light text-[#6B5F54] hover:text-[#2C2420] transition-all duration-300 relative"
          >
            <span className="text-[#C9A84C]/30 group-hover:text-[#C9A84C] transition-colors text-xs">
              {link.icon}
            </span>
            {link.name}
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </nav>

      {/* ==========================================================
      DESKTOP RIGHT ACTIONS
      ========================================================== */}
      <div className="hidden lg:flex items-center gap-5">
        <button className="p-2 rounded-full hover:bg-[#F5F0E8] transition-colors group">
          <FaSearch className="text-[#6B5F54] group-hover:text-[#2C2420] transition-colors" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#F5F0E8] transition-colors group">
          <FaHeart className="text-[#6B5F54] group-hover:text-[#C9A84C] transition-colors" />
        </button>
        <button className="group flex items-center gap-2 px-5 py-2 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light tracking-wide shadow-md shadow-[#2C2420]/10">
          <FaSpotify className="text-[#C9A84C] group-hover:text-white transition-colors" />
          <span>Listen Now</span>
        </button>
        <button className="p-2 rounded-full hover:bg-[#F5F0E8] transition-colors group">
          <FaUser className="text-[#6B5F54] group-hover:text-[#2C2420] transition-colors" />
        </button>
      </div>

      {/* ==========================================================
      MOBILE ACTIONS
      ========================================================== */}
      <div className="lg:hidden flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-[#F5F0E8] transition-colors">
          <FaSearch className="text-[#6B5F54]" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#F5F0E8] transition-colors">
          <FaHeart className="text-[#6B5F54]" />
        </button>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="p-2 rounded-full hover:bg-[#F5F0E8] transition-colors"
        >
          {mobileMenu ? (
            <FaTimes className="text-[#2C2420] text-xl" />
          ) : (
            <FaBars className="text-[#6B5F54] text-xl" />
          )}
        </button>
      </div>

      {/* ==========================================================
      MOBILE MENU - Premium overlay with blur
      ========================================================== */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#2C2420]/5 shadow-2xl py-6 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-4 py-3.5 text-[#2C2420] hover:bg-[#FBF8F2] rounded-xl transition-all duration-200 group"
                  >
                    <span className="text-[#C9A84C] text-sm group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span className="font-light">{link.name}</span>
                    <span className="ml-auto text-xs text-[#6B5F54]/30 group-hover:text-[#C9A84C] transition-colors">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-4 pt-4 border-t border-[#2C2420]/5 flex items-center gap-4 px-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#2C2420] text-white rounded-xl hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light">
                  <FaPlay className="text-xs" />
                  <span>Listen</span>
                </button>
                <button className="p-3 rounded-xl border border-[#2C2420]/10 hover:border-[#C9A84C] hover:bg-[#FBF8F2] transition-all duration-300">
                  <FaUser className="text-[#6B5F54]" />
                </button>
                <button className="p-3 rounded-xl border border-[#2C2420]/10 hover:border-[#C9A84C] hover:bg-[#FBF8F2] transition-all duration-300">
                  <FaHeart className="text-[#6B5F54]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}