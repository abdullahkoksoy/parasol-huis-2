"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Başlık ve Açıklama */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-20 px-4 md:px-10 lg:px-32 mt-20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
            Contact
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Heeft u vragen of wenst u meer informatie over onze producten? Neem
            gerust contact met ons op – we helpen u graag verder.
          </p>
        </div>
      </motion.section>

      {/* İletişim Formu */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white pb-28 px-4 md:px-10 lg:px-32"
      >
        <div className="max-w-3xl mx-auto">
          <form
            action="https://formsubmit.io/send/akoksoy94@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="_redirect"
              value="https://parasolhuis.nl/bedankt"
            />
            <input
              type="text"
              name="_formsubmit_id"
              style={{ display: "none" }}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Naam
              </label>
              <input
                type="text"
                name="naam"
                placeholder="Uw naam"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mailadres
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@voorbeeld.nl"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bericht
              </label>
              <textarea
                name="bericht"
                rows={5}
                placeholder="Uw bericht..."
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Verstuur bericht
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
}
