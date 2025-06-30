"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const titleLines = ["AVOCADO RONDE", "PARASOL"];
const description = "Ronde tuinparasol model Avocado";

function useCharTransforms(
  scrollYProgress: MotionValue<number>,
  totalChars: number
) {
  const opacity0 = useTransform(scrollYProgress, [0.0, 0.05], [0, 1]);
  const y0 = useTransform(scrollYProgress, [0.0, 0.05], [20, 0]);

  const opacity1 = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.1], [20, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.15], [20, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.15, 0.2], [20, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.2, 0.25], [20, 0]);

  const opacity5 = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const y5 = useTransform(scrollYProgress, [0.25, 0.3], [20, 0]);

  const opacity6 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const y6 = useTransform(scrollYProgress, [0.3, 0.35], [20, 0]);

  const opacity7 = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const y7 = useTransform(scrollYProgress, [0.35, 0.4], [20, 0]);

  const opacity8 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const y8 = useTransform(scrollYProgress, [0.4, 0.45], [20, 0]);

  const opacity9 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const y9 = useTransform(scrollYProgress, [0.45, 0.5], [20, 0]);

  const opacity10 = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const y10 = useTransform(scrollYProgress, [0.5, 0.55], [20, 0]);

  const opacity11 = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
  const y11 = useTransform(scrollYProgress, [0.55, 0.6], [20, 0]);

  const opacity12 = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
  const y12 = useTransform(scrollYProgress, [0.6, 0.65], [20, 0]);

  const opacity13 = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const y13 = useTransform(scrollYProgress, [0.65, 0.7], [20, 0]);

  const opacity14 = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
  const y14 = useTransform(scrollYProgress, [0.7, 0.75], [20, 0]);

  const opacity15 = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
  const y15 = useTransform(scrollYProgress, [0.75, 0.8], [20, 0]);

  const opacity16 = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
  const y16 = useTransform(scrollYProgress, [0.8, 0.85], [20, 0]);

  const opacity17 = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
  const y17 = useTransform(scrollYProgress, [0.85, 0.9], [20, 0]);

  const opacity18 = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const y18 = useTransform(scrollYProgress, [0.9, 0.95], [20, 0]);

  const opacity19 = useTransform(scrollYProgress, [0.95, 1.0], [0, 1]);
  const y19 = useTransform(scrollYProgress, [0.95, 1.0], [20, 0]);

  const transforms = [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
    { opacity: opacity4, y: y4 },
    { opacity: opacity5, y: y5 },
    { opacity: opacity6, y: y6 },
    { opacity: opacity7, y: y7 },
    { opacity: opacity8, y: y8 },
    { opacity: opacity9, y: y9 },
    { opacity: opacity10, y: y10 },
    { opacity: opacity11, y: y11 },
    { opacity: opacity12, y: y12 },
    { opacity: opacity13, y: y13 },
    { opacity: opacity14, y: y14 },
    { opacity: opacity15, y: y15 },
    { opacity: opacity16, y: y16 },
    { opacity: opacity17, y: y17 },
    { opacity: opacity18, y: y18 },
    { opacity: opacity19, y: y19 },
  ];

  return transforms.slice(0, totalChars);
}

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

  const allChars = titleLines.join("").split("");
  const charTransforms = useCharTransforms(scrollYProgress, allChars.length);

  return (
    <section
      ref={ref}
      className="h-[60vh] flex items-center justify-center bg-white -mt-12"
    >
      <div className="max-w-7xl w-full flex items-center px-6 gap-12">
        {/* LEFT SIDE: TEXT */}
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
                    const { opacity, y } = charTransforms[totalIndex];

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
              src="/images/products/Ronde-Parasol-Technisch.jpg"
              alt="Technical Plan Parasol"
              fill
              className="object-contain object-left"
            />
            <p className="ml-24 text-sm">Parasolmaat: 300 cm diameter</p>
            <p className="ml-24 text-sm">Maat middenpaal: 50 x 2 mm</p>
            <p className="ml-24 text-sm">Parasolribben: 20 x 30 x 2 mm</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition cursor-pointer">
              Avocado parasols
            </button>
            <button className="px-6 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition cursor-pointer">
              Alle parasols
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          style={{ scale }}
          className="relative flex-1 max-w-3xl aspect-video"
        >
          <Image
            src="/images/products/Avokado-Round-Garden-Parasol.jpg"
            alt="Zooming Parasol"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
