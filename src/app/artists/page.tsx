"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdHeadphonesBattery } from "react-icons/md";

const artists = [
  {
    name: "Freddie Mercury",
    genre: "Rock Legend",
    img: "https://cdn.britannica.com/38/200938-050-E22981D1/Freddie-Mercury-Live-Aid-Queen-Wembley-Stadium-July-13-1985.jpg",
    bio: "The voice behind Queen’s timeless hits, Freddie redefined what it means to be a performer.",
  },
  {
    name: "Billie Eilish",
    genre: "Pop / Indie",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Billie_Eilish_at_Pukkelpop_Festival_-_18_AUGUST_2019_%2801%29_%28cropped%29.jpg",
    bio: "The modern face of alternative pop, known for her haunting vocals and emotional depth.",
  },
  {
    name: "Eminem",
    genre: "Hip-Hop",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReOx6ScXSDcKj7zzQmvGklPNkuov4wlVuozf4Kv23PHZj4Kj3SUHdWNjUSGGfxao3i_BVMlhypw0mIJRqI4o4RvPwI0GPqLnSe8pjb6g",
    bio: "One of the greatest lyricists in hip-hop history, blending storytelling and raw emotion.",
  },
  {
    name: "Hans Zimmer",
    genre: "Classical / Film Score",
    img: "https://cdn-images.dzcdn.net/images/artist/1bd0b9f7a3cf12e01bdcc26fa69673f7/1900x1900-000000-81-0-0.jpg",
    bio: "The master behind the soundtracks of Inception, Interstellar, and The Dark Knight.",
  },
];

export default function ArtistsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white pt-32 pb-24 px-6 md:px-16 overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full animate-pulse" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl flex justify-center md:text-6xl font-bold text-center text-pink-400 mb-16 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
      >
        <MdHeadphonesBattery className="mr-2" /> Meet the Artists
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {artists.map((artist, i) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group relative bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_#ec4899aa] hover:-translate-y-2 transition-all duration-500"
          >
            <Image
              src={artist.img}
              alt={artist.name}
              width={500}
              height={500}
              className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-5 text-center">
              <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
              <p className="text-gray-400 mb-3">{artist.genre}</p>
              <p className="text-sm text-gray-300 mb-5">{artist.bio}</p>

              <div className="flex justify-center gap-4 text-xl text-gray-400">
                <FaSpotify className="hover:text-green-400 transition" />
                <FaYoutube className="hover:text-red-500 transition" />
                <FaInstagram className="hover:text-pink-500 transition" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
