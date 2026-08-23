"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuKeyboardMusic, LuRadio, LuHeadphones } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

// ============================================================
// DATA - Genres with descriptions and color accents
// ============================================================

const genres = [
  { 
    name: "Rock", 
    img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMG11c2ljfGVufDB8fDB8fHww",
    description: "Electric guitars, powerful vocals, and timeless anthems.",
    color: "from-orange-400 to-red-400",
    icon: <LuRadio />
  },
  { 
    name: "Jazz", 
    img: "https://media.istockphoto.com/id/612507642/photo/man-playing-on-saxophone.jpg?s=612x612&w=0&k=20&c=KJ6-vMHkSBLneIe6TYSOmeOEZFwbk1BDXTFcZ65JPAA=",
    description: "Smooth saxophones, improvisation, and soulful melodies.",
    color: "from-amber-400 to-yellow-400",
    icon: <LuHeadphones />
  },
  { 
    name: "Pop", 
    img: "https://pyxis.nymag.com/v1/imgs/3a3/b1f/2141226b8ab1ae07afe4b541ee0d2b0825-11-yic-pop-essay.rsocial.w1200.jpg",
    description: "Catchy hooks, global hits, and cultural phenomena.",
    color: "from-pink-400 to-rose-400",
    icon: <LuRadio />
  },
  { 
    name: "Hip-Hop", 
    img: "https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/hip-hop-a-culture-of-vision-and-voice/hip-hop-169.jpg",
    description: "Rhythmic beats, lyrical storytelling, and urban culture.",
    color: "from-emerald-400 to-teal-400",
    icon: <LuHeadphones />
  },
  { 
    name: "Classical", 
    img: "https://npr.brightspotcdn.com/37/8b/c3f1e7b849918290d3bc53d7879e/new-york-philharmonic.jpg",
    description: "Orchestral masterpieces, timeless compositions, and elegance.",
    color: "from-violet-400 to-purple-400",
    icon: <LuRadio />
  },
  { 
    name: "EDM", 
    img: "https://www.lafilm.edu/wp-content/uploads/2017/08/Dance-Show.jpg",
    description: "Pulsing beats, festival anthems, and electronic energy.",
    color: "from-cyan-400 to-blue-400",
    icon: <LuHeadphones />
  },
];

// ============================================================
// GENRE CARD COMPONENT - Premium luxury light theme
// ============================================================

const GenreCard = ({ genre, index }: { genre: typeof genres[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    whileHover={{ y: -8 }}
    className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-[#2C2420]/5"
  >
    {/* Image */}
    <div className="relative h-72 overflow-hidden">
      <Image
        src={genre.img}
        alt={genre.name}
        width={600}
        height={450}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420] via-[#2C2420]/40 to-transparent" />
      
      {/* Play button overlay - appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/10 backdrop-blur-xl rounded-full p-5 border border-white/20 shadow-2xl">
          <FaPlay className="text-white text-2xl ml-1" />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r ${genre.color} text-white`}>
          {genre.name}
        </span>
        <span className="text-white/30 text-xs">
          {genre.icon}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
        {genre.name}
      </h3>
      <p className="text-white/70 text-sm font-light line-clamp-2">
        {genre.description}
      </p>
      
      {/* Hover action */}
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-white/50 group-hover:text-white transition-colors inline-flex items-center gap-1">
          Explore collection
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </div>

    {/* Accent border on hover */}
    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#C9A84C]/30 transition-all duration-500 pointer-events-none`} />
  </motion.div>
);

// ============================================================
// MAIN COMPONENT - Genres Page
// ============================================================

export default function GenresPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6 md:px-12 lg:px-20">
      {/* ==========================================================
      HEADER SECTION
      ========================================================== */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FBF8F2] border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="text-xs font-light text-[#6B5F54] tracking-wider uppercase">
              Discover Your Sound
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-[#2C2420]">
            Explore Music <span className="font-bold bg-gradient-to-r from-[#C9A84C] to-[#A8893A] bg-clip-text text-transparent">Genres</span>
          </h1>
          <p className="text-[#6B5F54] text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light">
            From classical masterpieces to electronic beats — find the sound that moves you.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-sm text-[#6B5F54]">
              <span className="font-bold text-[#C9A84C]">12+</span>
              <span className="font-light">Genres</span>
            </div>
            <div className="w-px h-4 bg-[#2C2420]/10" />
            <div className="flex items-center gap-2 text-sm text-[#6B5F54]">
              <span className="font-bold text-[#C9A84C]">50M+</span>
              <span className="font-light">Tracks</span>
            </div>
            <div className="w-px h-4 bg-[#2C2420]/10" />
            <div className="flex items-center gap-2 text-sm text-[#6B5F54]">
              <span className="font-bold text-[#C9A84C]">4.8★</span>
              <span className="font-light">Listener Rating</span>
            </div>
          </div>
        </motion.div>

        {/* ==========================================================
        GENRE GRID
        ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {genres.map((genre, idx) => (
            <GenreCard key={genre.name} genre={genre} index={idx} />
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
          <h3 className="text-2xl md:text-3xl font-light text-[#2C2420]">
            Cant find your vibe? <span className="font-bold text-[#C9A84C]">Create it.</span>
          </h3>
          <p className="text-[#6B5F54] text-sm mt-2">
            Start your own genre collection and share it with the world.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-300 text-sm font-light inline-flex items-center gap-2">
            <LuKeyboardMusic />
            <span>Start Curating</span>
          </button>
        </motion.div>
      </div>
    </main>
  );
}