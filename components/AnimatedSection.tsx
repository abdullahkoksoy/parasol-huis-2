"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gray-50"
    >
      <h2 className="text-5xl font-light">WIND RESISTANT TECHNOLOGY</h2>
    </motion.section>
  );
}
