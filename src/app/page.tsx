"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPlay,
  FaEllipsisH,
  FaClock,
} from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";

// ============================================================
// DATA - Tracks & Artists
// ============================================================

const tracks = [
  { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20", img: "https://ca.billboard.com/media-library/image.jpg?id=49347679&width=980" },
  { title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", img: "https://articles.roland.com/wp-content/uploads/2021/06/32623628818_211100320a_o-scaled.jpg" },
  { title: "Bad Guy", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP", duration: "3:14", img: "https://d94thh4m1x8qv.cloudfront.net/eyJidWNrZXQiOiJkaXktbWFnYXppbmUiLCJrZXkiOiJkL2RpeS9BcnRpc3RzL0IvQmlsbGllLUVpbGlzaC9TY3JlZW5zaG90LTIwMTktMDMtMjktYXQtMTcuMzUuMzUtY29weS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxNTAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==" },
  { title: "Lose Yourself", artist: "Eminem", album: "8 Mile", duration: "5:20", img: "https://cdn.mos.cms.futurecdn.net/CUP9byzyN3GBJXEmrApjPj.jpg" },
  { title: "Shape of You", artist: "Ed Sheeran", album: "÷", duration: "3:53", img: "https://i.scdn.co/image/ab67616d0000b2731b9d5f5b5f5b5f5b5f5b5f5b" },
  { title: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming", duration: "3:29", img: "https://i.scdn.co/image/ab67616d0000b2731b9d5f5b5f5b5f5b5f5b5f5b" },
];

const artists = [
  { name: "The Weeknd", img: "https://media.pitchfork.com/photos/5e3d7b57159e01000820beb9/2:1/w_2560%2Cc_limit/The-Weeknd.JPG", genre: "R&B" },
  { name: "Billie Eilish", img: "https://c.files.bbci.co.uk/048c/live/2bb03f70-1753-11ef-b507-edbcd7518f5c.jpg", genre: "Pop" },
  { name: "Drake", img: "https://www.vice.com/wp-content/uploads/sites/2/2025/10/Drake-Responds-to-Judge-Dismissing-His-UMG-Lawsuit-as-Joe-Budden-Trolls-in-The-Background.jpg", genre: "Hip-Hop" },
  { name: "Eminem", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3919x2589+577+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ffd%2Ff9%2F4823391143919668cf822f89888e%2Fgettyimages-2150218207.jpg", genre: "Rap" },
];

// ============================================================
// WAVE ANIMATION BACKGROUND
// ============================================================

const WaveBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <svg
      className="absolute bottom-0 left-0 w-full h-[60vh] opacity-10"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#D4B86A" />
          <stop offset="100%" stopColor="#B8943E" />
        </linearGradient>
      </defs>
      <motion.path
        animate={{ d: [
          "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,160C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          "M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,138.7C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,160C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        fill="url(#waveGrad)"
      />
    </svg>
  </div>
);

// ============================================================
// HERO - Minimalist Luxury
// ============================================================

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F2] via-white to-[#F5F0E8]" />
    <WaveBackground />

    <div className="relative z-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 border border-[#C9A84C]/30 rounded-full text-xs tracking-[0.2em] text-[#8B7A50] uppercase">
            Premium Audio Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] text-[#2C2420]">
            Sound that
            <br />
            <span className="font-bold bg-gradient-to-r from-[#C9A84C] to-[#A8893A] bg-clip-text text-transparent">
              moves you.
            </span>
          </h1>
          <p className="text-[#6B5F54] text-lg md:text-xl mt-6 max-w-md font-light leading-relaxed">
            Curated audio experiences designed for the discerning listener.
            Minimal. Pure. Timeless.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="group px-8 py-4 bg-[#2C2420] text-white rounded-full hover:bg-[#C9A84C] transition-all duration-500 flex items-center gap-3 text-sm tracking-wide">
              <span>Explore Collection</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 border border-[#2C2420]/10 text-[#2C2420] rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-500 flex items-center gap-2 text-sm">
              <FaPlay className="text-xs" />
              <span>Listen</span>
            </button>
          </div>
        </motion.div>

        {/* Right - Album Art Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-[#C9A84C]/10 to-[#2C2420]/5 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <IoMdMusicalNotes className="text-7xl text-[#C9A84C]/30 mx-auto" />
                <div className="mt-4 text-[#2C2420]/20 text-xs tracking-[0.3em] uppercase">
                  Now Playing
                </div>
                <div className="mt-2 text-sm font-light text-[#2C2420]/40">
                  Midnight Sessions
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C9A84C]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C9A84C]/5 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ============================================================
// TRACKS - Minimal List Layout
// ============================================================

const TracksSection = () => (
  <section className="py-24 px-6 md:px-12 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-end justify-between border-b border-[#2C2420]/5 pb-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-[#2C2420]">
            Latest <span className="font-bold text-[#C9A84C]">Tracks</span>
          </h2>
          <p className="text-[#6B5F54] text-sm mt-1">New releases this week</p>
        </div>
        <button className="text-sm text-[#6B5F54] hover:text-[#C9A84C] transition-colors">
          View all →
        </button>
      </motion.div>

      <div className="space-y-1">
        {tracks.map((track, idx) => (
          <motion.div
            key={track.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ backgroundColor: "#FBF8F2" }}
            className="group flex items-center gap-6 px-4 py-4 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#C9A84C]/20"
          >
            <span className="text-[#6B5F54]/30 text-sm font-mono w-6">
              {String(idx + 1).padStart(2, "0")}
            </span>
            
            <div className="w-12 h-12 rounded-lg bg-[#F5F0E8] overflow-hidden flex-shrink-0">
              <Image src={track.img} alt={track.title} width={48} height={48} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-[#2C2420] font-medium truncate">{track.title}</h4>
              <p className="text-[#6B5F54] text-sm truncate">{track.artist} · {track.album}</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#6B5F54]">
              <span className="hidden md:block"><FaClock className="inline mr-1 text-xs" /> {track.duration}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <FaPlay className="text-[#C9A84C] hover:scale-110 transition-transform" />
              </button>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <FaEllipsisH className="text-[#6B5F54] hover:text-[#2C2420]" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// ARTISTS - Gallery Style
// ============================================================

const ArtistsSection = () => (
  <section className="py-24 px-6 md:px-12 bg-[#FBF8F2]">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-light text-[#2C2420]">
          Featured <span className="font-bold text-[#C9A84C]">Artists</span>
        </h2>
        <p className="text-[#6B5F54] text-sm mt-1">The voices that define our time</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {artists.map((artist, idx) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -8 }}
            className="group text-center cursor-pointer"
          >
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
              <Image src={artist.img} alt={artist.name} width={160} height={160} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-full border-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/30 transition-all duration-500" />
            </div>
            <h4 className="text-[#2C2420] font-medium mt-4">{artist.name}</h4>
            <p className="text-[#6B5F54] text-sm">{artist.genre}</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-4 py-1.5 border border-[#C9A84C] text-[#C9A84C] text-xs rounded-full hover:bg-[#C9A84C] hover:text-white transition-all duration-300">
                Follow
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// MASTER COMPONENT - Clean, no header/footer
// ============================================================

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-['Inter',_sans-serif] selection:bg-[#C9A84C]/30 selection:text-[#2C2420]">
      <Hero />
      <TracksSection />
      <ArtistsSection />
    </main>
  );
}