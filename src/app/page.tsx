"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPlay,
  FaHeart,
  FaGuitar,
  FaDrum,
  FaMusic,
  FaHeadphones,
} from "react-icons/fa";

export default function Home() {
  const genres = [
    { name: "Pop", img: "https://t3.ftcdn.net/jpg/03/84/84/84/360_F_384848474_8cHZGZMZHkXYVyr5jAnJXmeINDEeiC4h.jpg", icon: <FaMusic /> },
    { name: "Rock", img: "https://ak1.ostkcdn.com/images/products/9075649/Rock-Music-Logo-Decor-Vinyl-Wall-Art-c2f2785e-18b2-471e-a471-fc994c2a74fb_600.jpg?impolicy=medium", icon: <FaGuitar /> },
    { name: "Jazz", img: "https://wdna.org/wp-content/uploads/2024/01/jazz-and-culture-brand-amplification.png", icon: <FaDrum /> },
    { name: "EDM", img: "https://www.ikmultimedia.com/products/stedm/main-banner/mobile.jpg", icon: <FaHeadphones /> },
    { name: "Hip-Hop", img: "https://cdn.aaihs.org/wp-content/uploads/2023/08/shutterstock_517774291-scaled.jpg", icon: <FaMusic /> },
    { name: "Classical", img: "https://img.neosounds.com/img/categories/styles/classical-music_1600x900.jpg", icon: <FaMusic /> },
  ];

  const tracks = [
    { title: "Blinding Lights", artist: "The Weeknd", img: "https://ca.billboard.com/media-library/image.jpg?id=49347679&width=980" },
    { title: "Levitating", artist: "Dua Lipa", img: "https://articles.roland.com/wp-content/uploads/2021/06/32623628818_211100320a_o-scaled.jpg" },
    { title: "Bad Guy", artist: "Billie Eilish", img: "https://d94thh4m1x8qv.cloudfront.net/eyJidWNrZXQiOiJkaXktbWFnYXppbmUiLCJrZXkiOiJkL2RpeS9BcnRpc3RzL0IvQmlsbGllLUVpbGlzaC9TY3JlZW5zaG90LTIwMTktMDMtMjktYXQtMTcuMzUuMzUtY29weS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxNTAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==" },
    { title: "Lose Yourself", artist: "Eminem", img: "https://cdn.mos.cms.futurecdn.net/CUP9byzyN3GBJXEmrApjPj.jpg" },
  ];

  const artists = [
    { name: "The Weeknd", img: "https://media.pitchfork.com/photos/5e3d7b57159e01000820beb9/2:1/w_2560%2Cc_limit/The-Weeknd.JPG" },
    { name: "Billie Eilish", img: "https://c.files.bbci.co.uk/048c/live/2bb03f70-1753-11ef-b507-edbcd7518f5c.jpg" },
    { name: "Drake", img: "https://www.vice.com/wp-content/uploads/sites/2/2025/10/Drake-Responds-to-Judge-Dismissing-His-UMG-Lawsuit-as-Joe-Budden-Trolls-in-The-Background.jpg" },
    { name: "Eminem", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3919x2589+577+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ffd%2Ff9%2F4823391143919668cf822f89888e%2Fgettyimages-2150218207.jpg" },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden relative">

      {/* Floating Lights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

     

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_25px_#a855f7] animate-pulse">
          Feel The Music <br />
          Live The <span className="text-pink-400">Moment</span>
        </motion.h1>

        <div className="flex gap-1 mt-6 z-10">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div key={i} animate={{ height: [8,40,8] }} transition={{ duration:1.2, delay:i*0.05, repeat:Infinity, repeatType:"mirror" }} className="w-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full" />
          ))}
        </div>

        <p className="max-w-2xl mx-auto text-gray-300 mt-10 text-lg z-10">
          Discover new sounds, feel the rhythm, and let the beats guide your soul 🎶
        </p>

        <div className="flex gap-6 mt-10 z-10">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_20px_#a855f7] flex items-center gap-2">
            <FaPlay /> Start Listening
          </button>
          <button className="border border-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-black transition flex items-center gap-2">
            <FaHeart /> Explore Artists
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      {/* Genres Section */}
      <section className="py-28 px-8 md:px-20 bg-black relative">
        <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-[0_0_15px_#a855f7]">🎶 Explore Genres</h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {genres.map((g) => (
            <motion.div key={g.name} whileHover={{ scale:1.07, rotateY:10 }} className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <Image width={1000} height={1000} src={g.img} alt={g.name} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2">
                <div className="text-white text-3xl drop-shadow-lg">{g.icon}</div>
                <h3 className="text-white text-2xl font-bold drop-shadow-[0_0_10px_#a855f7]">{g.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Top Tracks Section */}
      <section className="py-28 px-8 md:px-20 bg-black/90">
        <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-[0_0_15px_#ec4899]">💿 Top Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {tracks.map((t) => (
            <motion.div key={t.title} whileHover={{ scale: 1.05 }} className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <Image width={1000} height={1000} src={t.img} alt={t.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                <h3 className="text-xl font-bold flex items-center gap-2">{t.title} <FaPlay /></h3>
                <p className="text-gray-400">{t.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-28 px-8 md:px-20 bg-black/90">
        <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-[0_0_15px_#34d399]">🌟 Popular Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {artists.map((a, i) => (
            <motion.div key={a.name} initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:i*0.2 }} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <Image width={1000} height={1000} src={a.img} alt={a.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-[0_0_10px_#34d399] flex items-center gap-2">
                <FaHeart /> {a.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
