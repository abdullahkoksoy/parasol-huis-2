"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";

const habitats = [
  {
    label: "Gardens",
    imgSrc: "/images/habitats/garden.jpg",
    description:
      "Beautiful gardens featuring our parasols in natural outdoor settings.",
  },
  {
    label: "Restaurants",
    imgSrc: "/images/habitats/restaurant.jpg",
    description:
      "Enjoy elegant parasol-covered dining areas in top restaurants.",
  },
  {
    label: "Cruise",
    imgSrc: "/images/habitats/cruise.jpg",
    description:
      "Relax under parasols on luxury cruise ship decks and lounges.",
  },
  {
    label: "Hotels",
    imgSrc: "/images/habitats/hotel.jpg",
    description:
      "Upscale hotels with stylish parasols to enhance your outdoor spaces.",
  },
];

export default function ExploreHabitats() {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = window.innerWidth * 0.5;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl mb-10 text-center">Ontdek waar het past</h2>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ArrowRight size={24} />
        </button>

        {/* Scrollable habitat cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar py-2 px-4"
        >
          {habitats.map(({ label, imgSrc }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.02 }}
              className="min-w-[45%] max-w-[45%] bg-white rounded-xl overflow-hidden shadow-md relative"
            >
              <div className="relative w-full h-60">
                <Image src={imgSrc} alt={label} fill className="object-cover" />
                {/* Plus icon overlay */}
                <button
                  onClick={() => setSelected(index)}
                  className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  aria-label={`Show details for ${label}`}
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with blurred background */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-white rounded-lg max-w-3xl w-full p-6 mx-4 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Styled close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold mb-4">
                {habitats[selected].label}
              </h3>

              <div className="relative w-full h-64 sm:h-80 mb-4 rounded-md overflow-hidden">
                <Image
                  src={habitats[selected].imgSrc}
                  alt={habitats[selected].label}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700">{habitats[selected].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
