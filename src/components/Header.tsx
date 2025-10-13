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
} from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Link Pages
  const links = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "Genres", icon: <FaGuitar />, href: "/genres" },
    { name: "Artists", icon: <FaUsers />, href: "/artists" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
  ];

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 1, 1],
      },
    },
  };

  const handleLinkClick = () => setMobileMenu(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-500 ${
        scroll ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      >
        MelodyHub
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-1 text-gray-300 hover:text-purple-400 transition"
          >
            {link.icon} {link.name}
          </Link>
        ))}
        <FaSearch className="text-gray-300 hover:text-purple-400 cursor-pointer text-xl" />
        <FaUser className="text-gray-300 hover:text-purple-400 cursor-pointer text-xl" />
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        <FaSearch className="text-gray-300 text-xl cursor-pointer" />
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-gray-300 text-2xl"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-black/90 flex flex-col gap-4 py-4 px-6 md:hidden z-40 shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition text-lg"
              >
                {link.icon} {link.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-2">
              <FaUser className="text-gray-300 text-xl cursor-pointer" />
              <FaPlay className="text-purple-400 text-xl cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <button className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition px-5 py-2 rounded-full font-semibold shadow-[0_0_20px_#a855f7] items-center gap-2">
        <FaPlay /> Join the Beat
      </button>
    </header>
  );
}
