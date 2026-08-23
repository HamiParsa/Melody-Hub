"use client";

import { motion } from "framer-motion";
import { FaHeadphones, FaMusic, FaUsers, FaGlobe, FaHeart, FaPlay, FaSpotify } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";
import { TbMusicHeart } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import { LuRadio } from "react-icons/lu";

// ============================================================
// ABOUT PAGE - Premium Luxury Light Theme
// ============================================================

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* ==========================================================
        HERO SECTION
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FBF8F2] border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-6">
            <IoMdMusicalNotes className="text-[#C9A84C] text-xs" />
            <span className="text-xs font-light text-[#6B5F54] tracking-wider uppercase">
              Our Story
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-[#2C2420]">
            About <span className="font-bold bg-gradient-to-r from-[#C9A84C] to-[#A8893A] bg-clip-text text-transparent">Echo</span>
          </h1>
          <p className="text-[#6B5F54] text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            We believe music is more than sound — its emotion, memory, and connection. 
            Echo was built to celebrate that.
          </p>
        </motion.div>

        {/* ==========================================================
        MAIN CONTENT - Two column layout
        ========================================================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light text-[#2C2420]">
              Where <span className="font-bold text-[#C9A84C]">Sound</span> Meets Soul
            </h2>
            <div className="space-y-4 text-[#6B5F54] font-light leading-relaxed">
              <p>
                Echo was born from a simple idea: that everyone deserves a space 
                where music feels personal, curated, and meaningful. We started 
                with a passion for sound and a desire to connect listeners with 
                the artists who move them.
              </p>
              <p>
                Today, Echo is home to millions of tracks, thousands of artists, 
                and a community of listeners who share a love for discovering 
                something new. From classical orchestras to electronic beats, 
                we celebrate every genre, every voice, and every moment.
              </p>
              <p className="text-[#C9A84C] font-medium">
                Music is the language that speaks to everyone.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <button className="px-6 py-2.5 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2">
                <FaPlay className="text-xs" />
                <span>Our Story</span>
              </button>
              <button className="px-6 py-2.5 border border-[#2C2420]/10 text-[#2C2420] rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2">
                <FaHeart className="text-xs" />
                <span>Join Us</span>
              </button>
            </div>
          </motion.div>

          {/* Right - Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaMusic />, value: "50M+", label: "Tracks" },
                { icon: <FaUsers />, value: "100K+", label: "Artists" },
                { icon: <FaHeadphones />, value: "4.8★", label: "Rating" },
                { icon: <FaGlobe />, value: "180+", label: "Countries" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#FBF8F2] rounded-2xl p-6 text-center border border-[#2C2420]/5 hover:border-[#C9A84C]/20 transition-all duration-300"
                >
                  <div className="text-3xl text-[#C9A84C] mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#2C2420]">{stat.value}</div>
                  <div className="text-sm text-[#6B5F54] font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Mini player card */}
            <div className="bg-[#2C2420] rounded-2xl p-5 text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#A8893A] flex items-center justify-center">
                  <FaSpotify className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Now Playing</div>
                  <div className="text-xs text-white/50">Midnight Sessions</div>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#C9A84C] transition-colors">
                  <FaPlay className="text-xs ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==========================================================
        MISSION SECTION
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <TbMusicHeart className="text-3xl" />,
              title: "Curated for You",
              desc: "Personalized recommendations that match your unique taste."
            },
            {
              icon: <LuRadio className="text-3xl" />,
              title: "Live & Global",
              desc: "Connect with music from every corner of the world."
            },
            {
              icon: <SiMusicbrainz className="text-3xl" />,
              title: "Artist First",
              desc: "We put creators at the center of everything we do."
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#FBF8F2] rounded-3xl p-8 text-center border border-[#2C2420]/5 hover:border-[#C9A84C]/20 transition-all duration-300"
            >
              <div className="text-[#C9A84C] mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#2C2420] mb-2">{item.title}</h3>
              <p className="text-[#6B5F54] text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ==========================================================
        CTA SECTION
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 bg-gradient-to-br from-[#FBF8F2] to-white rounded-3xl border border-[#C9A84C]/10"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2420] mb-4">
            Ready to <span className="font-bold text-[#C9A84C]">feel the music?</span>
          </h2>
          <p className="text-[#6B5F54] text-sm max-w-xl mx-auto font-light">
            Join thousands of listeners whove found their soundtrack with Echo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-8 py-3.5 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2">
              <FaPlay className="text-xs" />
              <span>Start Listening</span>
            </button>
            <button className="px-8 py-3.5 border border-[#2C2420]/10 text-[#2C2420] rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2">
              <TbMusicHeart className="text-sm" />
              <span>Explore</span>
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}