"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function OverOns() {
  return (
    <>
      <Navbar />

      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUpVariant}
        className="bg-white py-10 px-4 md:px-10 lg:px-32 mt-20"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-4">
            Over ons
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welkom bij{" "}
            <span className="font-semibold text-gray-800">ParasolHuis</span> –
            uw betrouwbare partner voor hoogwaardige horeca- en tuinparasols.
            <br />
            <br />
            Sinds onze oprichting hebben wij ons gespecialiseerd in het
            ontwerpen en produceren van duurzame, stijlvolle en functionele
            parasols voor cafés, restaurants, hotels en tuinen.
            <br />
            <br />
            Ons team combineert vakmanschap met innovatie om oplossingen te
            bieden die niet alleen beschermen tegen zon en regen, maar ook
            bijdragen aan de uitstraling van uw buitenruimte. Of u nu een kleine
            bistro of een groot terras beheert, bij ParasolHuis vindt u de
            juiste parasol die past bij uw stijl en behoeften.
          </p>
        </div>
      </motion.section>

      {/* 🎯 Gallery Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative w-full h-[450px]">
            {/* Main image */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 shadow-xl rounded-xl overflow-hidden"
            >
              <Image
                src="/images/habitats/parasol-beach.jpg"
                alt="Hero Parasol"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </motion.div>

            {/* Left small image */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="absolute top-56 left-10 z-10 shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src="/images/habitats/parasol-beach.jpg"
                alt="Parasol Small 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </motion.div>

            {/* Right small image */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute top-72 right-10 z-20 shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src="/images/habitats/parasol-beach.jpg"
                alt="Parasol Small 2"
                width={350}
                height={250}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final section */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-10 px-4 md:px-10 lg:px-32"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            Wij geloven dat elk terras en elke tuin een unieke sfeer verdient.
            Of het nu gaat om het stijlvolle buitenterras van een hotel, de
            gezellige tuin van een café of een exclusieve horecagelegenheid aan
            het water – wij bieden niet alleen standaardoplossingen, maar denken
            actief met u mee. Dankzij ons oog voor detail en onze passie voor
            design creëren wij parasols die perfect aansluiten bij de identiteit
            en uitstraling van uw onderneming.
            <br />
            <br />
            Kwaliteit, betrouwbaarheid en klanttevredenheid staan bij ons
            centraal. Ontdek wat wij voor u kunnen betekenen en ervaar de
            perfecte combinatie van design en functionaliteit.
          </p>
        </div>
      </motion.section>
    </>
  );
}
