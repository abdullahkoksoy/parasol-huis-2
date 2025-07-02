"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mnnvrnda", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (res.ok) {
      setIsSubmitted(true);
      setFormData({ email: "", message: "" });
    } else {
      alert("Er is een fout opgetreden. Probeer het later opnieuw.");
    }
  };

  return (
    <>
      <Navbar />
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            {/* E-mail */}
            <a
              href="mailto:parasolhuis@gmail.com"
              className="text-lg text-white leading-relaxed bg-gray-600 border-2 border-gray-500 rounded-lg px-6 py-3 min-w-[250px] text-center hover:bg-gray-700 transition"
            >
              E-mail <br /> parasolhuis@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+31627392695"
              className="text-lg text-white leading-relaxed bg-gray-600 border-2 border-gray-500 rounded-lg px-6 py-3 min-w-[250px] text-center hover:bg-gray-700 transition"
            >
              Telefoon <br /> +31 6 27392695
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/31627392695"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white leading-relaxed bg-green-600 border-2 border-green-500 rounded-lg px-6 py-3 min-w-[250px] text-center hover:bg-green-700 transition"
            >
              WhatsApp <br /> Stuur een bericht
            </a>
          </div>
          <br />
          <p className="text-lg text-gray-600 leading-relaxed">
            Heeft u vragen? Neem gerust contact met ons op via het onderstaande
            formulier.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white pb-28 px-4 md:px-10 lg:px-32"
      >
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jouw@email.nl"
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bericht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Uw bericht..."
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
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-10"
            >
              <h2 className="text-2xl font-semibold text-black mb-2">
                Bedankt!
              </h2>
              <p className="text-gray-600">
                Uw bericht is verzonden. We nemen snel contact met u op.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
}
