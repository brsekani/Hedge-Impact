"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import eee from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";

const images = [
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
  eee,
];

export default function Marquee() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 font-serif">
      {/* Testimonial Text */}
      <div className="max-w-3xl text-center mb-10">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          "Charis has truly changed lives with their dedication and support.
          Their efforts in education and emergency relief have given hope to so
          many. I'm proud to be part of this mission."
        </p>
        <p className="mt-4 text-gray-600 font-medium">
          — Oluwaseun Adetutu, Founder
        </p>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30, // adjust speed (lower = faster)
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`marquee-${idx}`}
                width={250}
                height={180}
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
