"use client";

import { motion } from "framer-motion";
import { FaHeadphones, FaMusic, FaUsers, FaGlobe } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";
import { TbMusicHeart } from "react-icons/tb";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-800 text-gray-200 pt-32 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
      {/* Floating lights */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl flex md:text-6xl font-bold text-purple-400 mb-10 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
      >
        About MelodyHub <SiMusicbrainz className="ml-1" />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-lg leading-relaxed text-gray-300 mb-14"
      >
        MelodyHub is a space created for true music lovers. Whether youre a
        passionate listener, a creator, or just someone looking for a vibe —
        MelodyHub connects you to the pulse of sound. Discover genres, follow
        your favorite artists, and explore new beats every day.
      </motion.p>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-5xl w-full"
      >
        {[
          { icon: <FaMusic />, title: "Genres", value: "25+" },
          { icon: <FaUsers />, title: "Artists", value: "500+" },
          { icon: <FaHeadphones />, title: "Listeners", value: "1M+" },
          { icon: <FaGlobe />, title: "Countries", value: "80+" },
        ].map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700"
          >
            <div className="text-3xl text-pink-400 mb-3">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            <p className="text-gray-400">{stat.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r flex from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full font-semibold shadow-[0_0_25px_#a855f7] hover:shadow-[0_0_40px_#a855f7aa] transition"
      >
        <TbMusicHeart className="mr-2 mt-1" /> Join the Rhythm Now
      </motion.div>
    </main>
  );
}
