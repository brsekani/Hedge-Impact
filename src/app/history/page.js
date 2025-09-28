"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import historyImg1 from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";

const historyEvents = [
  {
    year: "2015",
    title: "Foundation",
    desc: "Hedge Impact Partners was founded to bridge the gap between organizations and grassroots realities.",
    fullDesc:
      "Hedge Impact Partners was established to respond to the growing need for credible intermediaries that can connect organizations with grassroots realities. Drawing from years of experience in programme management, partner monitoring, research, and policy engagement, we were founded to support organizations in designing, implementing, and scaling interventions that create measurable social, environmental, and economic impact.",
    image: historyImg1,
  },
  {
    year: "2018",
    title: "First Major Programme",
    desc: "Implemented our first large-scale intervention focusing on community development and environmental sustainability.",
    fullDesc:
      "Our first major programme focused on community development and environmental sustainability. It involved extensive partner collaboration, research-backed strategies, and measurable outcomes that shaped our future approach to impactful interventions.",
    image: historyImg1,
  },
  {
    year: "2022",
    title: "Expansion & Recognition",
    desc: "Expanded our operations, impacting thousands of communities and receiving recognition for innovative solutions.",
    fullDesc:
      "By 2022, Hedge Impact Partners expanded its operations, reaching thousands of communities. Our innovative solutions and evidence-driven interventions earned recognition, highlighting our commitment to sustainable and inclusive impact.",
    image: historyImg1,
  },
];

// Modal Component
function Modal({ show, onClose, title, fullDesc, image }) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        {image && (
          <div className="w-full h-64 md:h-80 mb-4 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{fullDesc}</p>
      </div>
    </div>
  );
}

// History Card Component
function HistoryCard({ event, onReadMore }) {
  return (
    <motion.div
      className="flex-1 bg-gradient-to-br from-[#006e33]/20 to-[#009944]/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden cursor-pointer hover:shadow-3xl transition"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      {/* Decorative floating image */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full overflow-hidden opacity-30 rotate-12">
        <Image
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full"
        />
      </div>

      <span className="text-2xl font-bold text-[#006e33]">{event.year}</span>
      <h2 className="text-3xl font-bold mt-2 mb-4">{event.title}</h2>
      <p className="text-gray-800 leading-relaxed mb-6">{event.desc}</p>

      <button
        onClick={onReadMore}
        className="px-6 py-3 rounded-2xl bg-[#006e33] text-white font-semibold shadow-md hover:bg-[#009944] transition"
      >
        Read More
      </button>
    </motion.div>
  );
}

// Main History Section
export default function History() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
        Our <span className="text-[#006e33]">History</span>
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {historyEvents.map((event, i) => (
          <HistoryCard
            key={i}
            event={event}
            onReadMore={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal
          show={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
          fullDesc={selectedEvent.fullDesc}
          image={selectedEvent.image}
        />
      )}
    </section>
  );
}
