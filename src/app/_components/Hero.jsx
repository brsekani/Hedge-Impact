"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import Link from "next/link";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  // Framer motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-green-950 text-white">
      {/* Background Image with smooth fade-in */}
      <Image
        src={heroImage}
        alt="Community development"
        fill
        priority
        placeholder="blur"
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-60" : "opacity-0"
        }`}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight drop-shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Partnering for <span className="text-green-400">Sustainable</span>{" "}
          Impact
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Strengthening the capacity of organizations and communities to deliver
          lasting impact for future generations.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="/about"
            className="px-8 py-4 rounded-2xl font-semibold bg-white text-green-950 shadow-md hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </a>
          <Link
            href="/donate"
            className="px-8 py-4 rounded-2xl font-semibold bg-primary text-white shadow-md hover:bg-green-600 transition duration-300"
          >
            Join us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
