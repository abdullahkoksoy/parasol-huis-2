"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const titleLines = ["T-MODEL DUBBELE", "PARASOL"];
const description = "Dubbelzijdige T-model parasol voor buitengebruik";

export default function ProductZoomOnScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "center center"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.3, 1.5]), {
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
      className="h-[76vh] flex items-center justify-center bg-white -mt-12"
    >
      <div className="max-w-7xl w-full flex items-center px-6 gap-12">
        {/* Left Image */}
        <motion.div
          style={{ scale }}
          className="relative flex-1 max-w-3xl aspect-video"
        >
          <Image
            src="/images/products/T-Model-Dubbele-Parasol2.jpg"
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
          <h2 className="text-3xl mb-6 inline-flex items-start">
            {/* Red bar */}
            <span className="text-red-500 mr-2">|</span>

            {/* Two-line animated title */}
            <span className="flex flex-col leading-tight">
              {titleLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
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
                </span>
              ))}
            </span>
          </h2>

          <p className="text-lg opacity-80">{description}</p>
          <div className="relative w-full max-w-sm h-20 mt-4">
            <Image
              src="/images/products/Dubbelzijdige-Vierkante-Techniek.jpg"
              alt="Technical Plan Parasol"
              fill
              className="object-contain object-left"
            />
            <p className="ml-42 text-sm">Parasolmaat: 350 x 350 cm (x2)</p>
            <p className="ml-42 text-sm">Maat zijpaal: 70 x 70 x 2,5 mm</p>
            <p className="ml-42 text-sm">
              Parasolribben: 20 x 30 x 2 mm – 8 stuks
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition cursor-pointer">
              Dubbelzijdige parasols
            </button>
            <button className="px-6 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition cursor-pointer">
              Alle parasols
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
