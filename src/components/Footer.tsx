"use client";

import { FaInstagram, FaTwitter, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-gray-800 bg-black/80 flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-10">
      <p className="text-gray-400">© 2025 MelodyHub — Built with ❤️ for true music lovers 🎵</p>
      <div className="flex gap-6 text-gray-400 text-xl">
        <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
        <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
        <FaSpotify className="hover:text-green-500 transition cursor-pointer" />
      </div>
    </footer>
  );
}
