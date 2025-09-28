"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import volunteers from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";

// Reusable animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function DonateSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative grid md:grid-cols-2 items-stretch overflow-hidden">
      {/* Left Image with fade-in */}
      <div className="relative w-full h-[500px] md:h-auto">
        <Image
          src={volunteers}
          alt="Volunteers helping"
          fill
          priority
          placeholder="blur"
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:hidden" />
      </div>

      {/* Right Form */}
      <div className=" bg-gradient-to-br from-[#006e33]/10 to-[#009944]/10 p-10 md:pl-24 flex flex-col justify-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Make a difference: <br /> Donate today
        </motion.h2>

        <motion.form
          className="space-y-6 md:max-w-[70%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm bg-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm bg-white"
              required
            />
          </div>

          {/* Donation Amount */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Donation amount*
            </label>
            <input
              type="number"
              placeholder="Enter your amount"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm bg-white"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Your message*
            </label>
            <textarea
              rows={4}
              placeholder="Enter your message"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none resize-none shadow-sm h-[100px] bg-white"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-md"
            variants={fadeUp}
            custom={3}
          >
            Donate Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default DonateSection;
