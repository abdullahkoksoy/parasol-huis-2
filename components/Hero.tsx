// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dl6cfl5d1/video/upload/f_auto,q_auto/v1719851543/products/video/Parasol-video-hero-qua.mp4
"
          type="video/mp4"
        />
        {/* Add other formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide max-w-4xl">
          WIND RESISTANT TECHNOLOGY
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-80">
          Innovative parasol design for every outdoor lifestyle.
        </p>
      </div>
    </motion.section>
  );
}
