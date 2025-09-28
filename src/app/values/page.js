"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "We uphold transparency and accountability in all our work.",
    icon: "🛡️",
  },
  {
    title: "Collaboration",
    desc: "We believe in partnerships as the key to sustainable change.",
    icon: "🤝",
  },
  {
    title: "Excellence",
    desc: "We deliver high-quality, evidence-based solutions.",
    icon: "🏆",
  },
  {
    title: "Inclusion",
    desc: "We prioritize voices of marginalized groups in all interventions.",
    icon: "🌍",
  },
  {
    title: "Sustainability",
    desc: "We ensure every programme contributes to long-term systemic change.",
    icon: "♻️",
  },
  {
    title: "Environmental Stewardship",
    desc: "We commit to integrating climate action and ecological responsibility into all our initiatives.",
    icon: "🌱",
  },
  {
    title: "Evidence & Learning",
    desc: "We prioritize research, monitoring, evaluation, and data-driven approaches.",
    icon: "📊",
  },
];

function ValueCard({ icon, title, desc, i }) {
  return (
    <motion.div
      className="flex-1 bg-gradient-to-br from-[#006e33]/15 to-[#009944]/15 p-8 rounded-3xl shadow-2xl relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: i * 0.2,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 25px 60px rgba(0,0,0,0.15)",
      }}
    >
      {/* Decorative floating icon background */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/20 flex items-center justify-center text-6xl opacity-20">
        {icon}
      </div>

      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Values() {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our <span className="text-[#006e33]">Values</span>
      </motion.h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {values.map((val, i) => (
          <ValueCard key={val.title} {...val} i={i} />
        ))}
      </div>
    </section>
  );
}
