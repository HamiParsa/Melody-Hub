"use client";

import { motion } from "framer-motion";
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaHeart,
  FaPlay,
} from "react-icons/fa";
import { MdVerified, MdOutlineAudiotrack } from "react-icons/md";
import { IoMdMusicalNotes } from "react-icons/io";
import { LuRadio } from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";

// ============================================================
// DATA - Artists with ORIGINAL images you provided
// ============================================================

const artists = [
  {
    name: "Freddie Mercury",
    genre: "Rock Legend",
    bio: "The voice behind Queen's timeless hits, Freddie redefined what it means to be a performer.",
    songs: 147,
    followers: "12.4M",
    verified: true,
    img: "https://cdn.britannica.com/38/200938-050-E22981D1/Freddie-Mercury-Live-Aid-Queen-Wembley-Stadium-July-13-1985.jpg",
    featured: true,
  },
  {
    name: "Billie Eilish",
    genre: "Pop / Indie",
    bio: "The modern face of alternative pop, known for her haunting vocals and emotional depth.",
    songs: 89,
    followers: "92.1M",
    verified: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Billie_Eilish_at_Pukkelpop_Festival_-_18_AUGUST_2019_%2801%29_%28cropped%29.jpg",
    featured: true,
  },
  {
    name: "Eminem",
    genre: "Hip-Hop",
    bio: "One of the greatest lyricists in hip-hop history, blending storytelling and raw emotion.",
    songs: 203,
    followers: "63.8M",
    verified: true,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcReOx6ScXSDcKj7zzQmvGklPNkuov4wlVuozf4Kv23PHZj4Kj3SUHdWNjUSGGfxao3i_BVMlhypw0mIJRqI4o4RvPwI0GPqLnSe8pjb6g",
    featured: false,
  },
  {
    name: "Hans Zimmer",
    genre: "Classical / Film Score",
    bio: "The master behind the soundtracks of Inception, Interstellar, and The Dark Knight.",
    songs: 324,
    followers: "8.7M",
    verified: true,
    img: "https://cdn-images.dzcdn.net/images/artist/1bd0b9f7a3cf12e01bdcc26fa69673f7/1900x1900-000000-81-0-0.jpg",
    featured: false,
  },
  {
    name: "Adele",
    genre: "Soul / Pop",
    bio: "A voice that captures raw emotion, delivering ballads that resonate across generations.",
    songs: 112,
    followers: "76.4M",
    verified: true,
    img: "https://i.scdn.co/image/ab6761610000e5eb6b6f7b6b6f7b6b6f7b6b6f7b",
    featured: false,
  },
  {
    name: "Daft Punk",
    genre: "Electronic / EDM",
    bio: "Pioneers of electronic music, blending house, funk, and futuristic soundscapes.",
    songs: 67,
    followers: "14.2M",
    verified: true,
    img: "https://i.scdn.co/image/ab6761610000e5eb5b5f7b5b5f7b5b5f7b5b5f7b",
    featured: false,
  },
];

// ============================================================
// ARTIST CARD COMPONENT - Perfect image display
// ============================================================

const ArtistCard = ({ artist, index }: { artist: typeof artists[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#2C2420]/5"
    >
      {/* Image Section - Fixed height, perfect crop */}
      <div className="relative h-[280px] w-full overflow-hidden bg-gradient-to-br from-[#FBF8F2] to-[#F5F0E8]">
        {!imgError ? (
          <Image
            src={artist.img}
            alt={artist.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            priority={index < 2}
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback gradient with artist initial
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C9A84C]/20 to-[#A8893A]/20">
            <span className="text-6xl font-light text-[#C9A84C]/30">
              {artist.name.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420] via-[#2C2420]/20 to-transparent" />
        
        {/* Verified Badge */}
        {artist.verified && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg border border-white/20">
            <MdVerified className="text-[#C9A84C] text-sm" />
            <span className="text-[10px] font-medium text-[#2C2420] tracking-wider uppercase">Verified</span>
          </div>
        )}

        {/* Featured Badge */}
        {artist.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#C9A84C] to-[#A8893A] rounded-full px-3 py-1 shadow-lg">
            <span className="text-[10px] font-medium text-white tracking-wider uppercase">Featured</span>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-xl rounded-full p-5 border border-white/30 shadow-2xl transform scale-100 hover:scale-110 transition-transform">
            <FaPlay className="text-white text-2xl ml-1" />
          </div>
        </div>

        {/* Artist Name - appears on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">{artist.name}</h3>
          <p className="text-white/80 text-sm font-light">{artist.genre}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <p className="text-[#6B5F54] text-sm font-light leading-relaxed line-clamp-2 min-h-[44px]">
          {artist.bio}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#2C2420]/5">
          <div className="flex items-center gap-2">
            <FaHeart className="text-[#C9A84C] text-xs" />
            <span className="text-sm font-medium text-[#2C2420]">{artist.followers}</span>
          </div>
          <div className="w-px h-6 bg-[#2C2420]/10" />
          <div className="flex items-center gap-1 text-xs text-[#6B5F54]">
            <MdOutlineAudiotrack className="text-[#C9A84C]" />
            <span>{artist.songs} tracks</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#2C2420]/5">
          <span className="text-[10px] text-[#6B5F54] tracking-widest uppercase font-light">Stream</span>
          <div className="flex gap-3 text-[#6B5F54]">
            <FaSpotify className="hover:text-[#C9A84C] transition-colors cursor-pointer text-lg" />
            <FaApple className="hover:text-[#C9A84C] transition-colors cursor-pointer text-lg" />
            <FaYoutube className="hover:text-[#C9A84C] transition-colors cursor-pointer text-lg" />
            <FaInstagram className="hover:text-[#C9A84C] transition-colors cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================
// SPOTLIGHT ARTIST - Featured hero section
// ============================================================

const SpotlightArtist = () => {
  const spotlight = artists[0];
  const [imgError, setImgError] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-[#FBF8F2] to-white border border-[#C9A84C]/10 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C9A84C]/5 to-[#A8893A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#C9A84C]/5 to-transparent rounded-full blur-2xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 rounded-full px-4 py-1.5 mb-4">
            <LuRadio className="text-[#C9A84C] text-xs" />
            <span className="text-xs font-medium text-[#C9A84C] tracking-wider uppercase">Artist Spotlight</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2420]">
            Featured Artist
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#2C2420] mt-2">
            {spotlight.name}
          </p>
          <p className="text-[#6B5F54] text-sm mt-3 max-w-md leading-relaxed">
            {spotlight.bio}
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div>
              <div className="text-sm font-bold text-[#2C2420]">{spotlight.songs}</div>
              <div className="text-[10px] text-[#6B5F54] tracking-wider uppercase">Songs</div>
            </div>
            <div className="w-px h-8 bg-[#2C2420]/10" />
            <div>
              <div className="text-sm font-bold text-[#2C2420]">{spotlight.followers}</div>
              <div className="text-[10px] text-[#6B5F54] tracking-wider uppercase">Followers</div>
            </div>
          </div>
          <button className="mt-6 px-6 py-2.5 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2">
            <FaPlay className="text-xs" />
            <span>Listen Now</span>
          </button>
        </div>

        {/* Right image - perfect square crop */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 relative bg-gradient-to-br from-[#FBF8F2] to-[#F5F0E8]">
          {!imgError ? (
            <Image
              src={spotlight.img}
              alt={spotlight.name}
              fill
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover object-center"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C9A84C]/20 to-[#A8893A]/20">
              <span className="text-5xl font-light text-[#C9A84C]/30">
                {spotlight.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================
// MAIN COMPONENT - Artists Page
// ============================================================

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* ==========================================================
        HEADER SECTION
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FBF8F2] border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-4">
            <IoMdMusicalNotes className="text-[#C9A84C] text-xs" />
            <span className="text-xs font-light text-[#6B5F54] tracking-wider uppercase">
              World-Class Musicians
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-[#2C2420]">
            Meet the <span className="font-bold bg-gradient-to-r from-[#C9A84C] to-[#A8893A] bg-clip-text text-transparent">Artists</span>
          </h1>
          <p className="text-[#6B5F54] text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light">
            Discover the voices and visionaries shaping the sound of today and tomorrow.
          </p>
        </motion.div>

        {/* ==========================================================
        SPOTLIGHT ARTIST
        ========================================================== */}
        <SpotlightArtist />

        {/* ==========================================================
        ARTISTS GRID
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artists.map((artist, idx) => (
            <ArtistCard key={artist.name} artist={artist} index={idx} />
          ))}
        </div>

        {/* ==========================================================
        BOTTOM CTA
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center p-12 bg-[#FBF8F2] rounded-3xl border border-[#C9A84C]/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-light text-[#2C2420]">
                Discover more talent? <span className="font-bold text-[#C9A84C]">Explore all.</span>
              </h3>
              <p className="text-[#6B5F54] text-sm mt-1">
                Browse our complete collection of world-class musicians.
              </p>
            </div>
            <button className="px-8 py-3 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2 whitespace-nowrap">
              <span>View All Artists</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}