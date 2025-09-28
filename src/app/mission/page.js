"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import visionImg from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg"; // Replace with NGO-relevant image
import missionImg from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg"; // Replace with NGO-relevant image

export default function Mission() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-primary">Vision</span> &{" "}
            <span className="text-primary">Mission</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Everything we do is driven by a single purpose: to create a world
            where hope, data, and action unite for the good of humanity and the
            planet.
          </p>
        </motion.div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-primary flex items-center gap-3">
              <span className="text-4xl">🌍</span> Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where organizations and communities work together
              seamlessly to achieve inclusive, data-driven, climate-resilient,
              and sustainable development.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
              “Our vision is not just about tomorrow—it’s about the generations
              to come.”
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={visionImg}
              alt="Children smiling with hope - representing vision"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 flex justify-center">
          <span className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-primary" />
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl order-last md:order-first"
          >
            <Image
              src={missionImg}
              alt="Volunteers working together - representing mission"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-primary flex items-center gap-3">
              <span className="text-4xl">🤝</span> Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower organizations, governments, and communities with the
              knowledge, tools, data systems, and capacity needed to design,
              deliver, and measure impactful, sustainable, climate-conscious,
              and people-centered solutions.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
              “Our mission is action—turning ideas into measurable, lasting
              change.”
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
