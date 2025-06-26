"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const titleLines = ["KİWİ RONDE", "STRANDPARASOL"];
const description = "Strandparasol met 8 ribben.";

export default function ProductZoomOnScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "center center"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.3, 1]), {
    stiffness: 200,
    damping: 20,
  });

  const containerOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  return (
    <section
      ref={ref}
      className="h-[60vh] flex items-center justify-center bg-white -mt-16"
    >
      <div className="max-w-7xl w-full flex items-center px-6 gap-12">
        {/* Left Image */}
        <motion.div
          style={{ scale }}
          className="relative flex-1 max-w-3xl aspect-video"
        >
          <Image
            src="/images/products/Kiwi-ronde-strandparasol.jpg"
            alt="Zooming Parasol"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          style={{ opacity: containerOpacity }}
          className="flex-1 max-w-md text-left select-none"
        >
          <h2 className="text-3xl mb-6">
            {titleLines.map((line, lineIndex) => (
              <div key={lineIndex} className="flex flex-wrap">
                {line.split("").map((char, charIndex) => {
                  const totalIndex =
                    lineIndex === 0
                      ? charIndex
                      : titleLines[0].length + charIndex;
                  const step = 1 / titleLines.join("").length;
                  const start = step * totalIndex;
                  const end = step * (totalIndex + 1);

                  const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0, 1]
                  );
                  const y = useTransform(
                    scrollYProgress,
                    [start, end],
                    [20, 0]
                  );

                  return (
                    <motion.span
                      key={totalIndex}
                      style={{ opacity, y }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
              </div>
            ))}
          </h2>

          <p className="text-lg opacity-80">{description}</p>
          <div className="relative w-full max-w-sm h-20 mt-4">
            <Image
              src="/images/products/Ronde-Parasol-Technisch.jpg"
              alt="Technical Plan Parasol"
              fill
              className="object-contain object-left"
            />
            <p className="ml-24 text-sm">Parasolmaat: 250 cm diameter</p>
            <p className="ml-24 text-sm">Maat middenpaal: 35 x 2 mm</p>
            <p className="ml-24 text-sm">Parasolribben: 12 x 18 x 1 mm</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
