"use client";

import Image from "next/image";
import { LuKeyboardMusic } from "react-icons/lu";

const genres = [
  { name: "Rock", img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMG11c2ljfGVufDB8fDB8fHww" },
  { name: "Jazz", img: "https://media.istockphoto.com/id/612507642/photo/man-playing-on-saxophone.jpg?s=612x612&w=0&k=20&c=KJ6-vMHkSBLneIe6TYSOmeOEZFwbk1BDXTFcZ65JPAA=" },
  { name: "Pop", img: "https://pyxis.nymag.com/v1/imgs/3a3/b1f/2141226b8ab1ae07afe4b541ee0d2b0825-11-yic-pop-essay.rsocial.w1200.jpg" },
  { name: "Hip-Hop", img: "https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/hip-hop-a-culture-of-vision-and-voice/hip-hop-169.jpg" },
  { name: "Classical", img: "https://npr.brightspotcdn.com/37/8b/c3f1e7b849918290d3bc53d7879e/new-york-philharmonic.jpg" },
  { name: "EDM", img: "https://www.lafilm.edu/wp-content/uploads/2017/08/Dance-Show.jpg" },
];

export default function GenresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white pt-32 pb-20 px-8">
      <h1 className="text-5xl flex justify-center font-bold text-center text-purple-400 mb-12 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
        Explore Music Genres <LuKeyboardMusic className="ml-2" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500"
          >
            <Image
              src={genre.img}
              alt={genre.name}
              width={400}
              height={300}
              className="object-cover w-full h-60 opacity-80 group-hover:opacity-100 transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <h2 className="text-2xl font-semibold group-hover:text-purple-400 transition">
                {genre.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
