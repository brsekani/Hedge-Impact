"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg"; // Main about image
import { useEffect, useState } from "react";

const volunteers = [
  {
    name: "Oluwaseun Adetutu",
    role: "Founder",
    img: aboutImg,
    fullDesc: `Oluwaseun Adetutu is a Development Economist and International Development
Professional with extensive experience working with United Nations agencies and
international organizations. His expertise spans operations management, capacity
building, and programme implementation, with a proven record of advancing gender-
responsive and sustainable development initiatives.

Over the years, Oluwaseun has designed and delivered training programmes,
supported community-based interventions, and strengthened partner organizations
through robust monitoring, evaluation, and knowledge management systems. He has
also worked closely with governments, NGOs, and multilateral partners to bridge the
gap between policy and practice, ensuring that development efforts effectively reach
intended beneficiaries.

As Co-Founder of Hedge Impact Partners, Oluwaseun combines technical expertise
with practical field experience to drive innovative solutions. He is passionate about
empowering communities, promoting inclusive growth, and building resilient systems
that deliver lasting impact.`,
  },
  {
    name: "Dr. Segun Tekun",
    role: "Co-Founder",
    img: aboutImg,
    fullDesc: `Dr. Segun Tekun is a Social Protection Specialist and Socio-Economic Researcher
with extensive experience in designing and implementing inclusive development
programmes across Africa. He holds a PhD in Sustainable Development, with his
research focusing on the role of social protection systems in building resilience,
reducing poverty, and driving equitable growth.

Over the years, Segun has worked with governments, UN agencies, and
development partners to integrate social protection with agriculture, food systems,
and climate resilience strategies. His expertise spans policy design, programme
management, and research, with a strong track record in developing productive
safety net programmes, advancing financial inclusion, and promoting youth and
women’s economic empowerment.

As Co-Founder, Segun brings a unique blend of academic rigor, field experience,
and visionary leadership to drive innovative, sustainable solutions for communities
across the continent.`,
  },
];

function Modal({ show, onClose, title, fullDesc, image }) {
  useEffect(() => {
    if (show) {
      // prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      // restore scroll
      document.body.style.overflow = "";
    }
    // cleanup when unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-auto "
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl max-h-[80vh] overflow-auto "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-1 text-2xl font-bold hidden sm:flex cursor-pointer"
              onClick={onClose}
            >
              ×
            </button>

            {image && (
              <div className="w-full h-64 md:h-80 mb-6 overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {fullDesc.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function About() {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  return (
    <section className="relative pt-10 md:pt-24  overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5 pointer-events-none" />

      {/* ===== About Section ===== */}
      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={aboutImg}
            alt="Team working together"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Floating Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg"
          >
            <p className="text-gray-800 text-lg font-semibold">
              “Strengthening communities,{" "}
              <span className="text-primary">one project</span> at a time.”
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.2 },
          }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-primary">
              Hedge Impact Partners
            </span>{" "}
            is a development support firm committed to strengthening
            organizations and communities to deliver lasting change. Registered
            in Nigeria, we bridge the gap between{" "}
            <span className="font-semibold">
              international organizations, governments, civil society,
            </span>{" "}
            and beneficiaries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our work spans{" "}
            <span className="font-semibold">
              training, research, monitoring and evaluation, data-driven
              decision support, climate solutions,
            </span>{" "}
            and grassroots interventions. We champion{" "}
            <span className="text-primary font-semibold">
              accountability, inclusion, and sustainability
            </span>
            , ensuring that evidence guides every step of programme design and
            implementation.
          </p>

          {/* Highlighted Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            className="bg-primary/10 border-l-4 border-primary px-6 py-4 rounded-xl"
          >
            <p className="text-primary font-semibold">
              Impact is not an outcome — it’s a journey we take with
              communities.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== Our Approach Section ===== */}
      <div className="container mx-auto px-6 mt-20">
        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Pillar 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md flex flex-col items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 inline-flex">📌</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Community-first Design
            </h3>
            <p className="text-gray-600">
              We co-create with local leaders and beneficiaries so programs are
              owned locally — not delivered to them.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md flex flex-col items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 inline-flex">📊</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Data-driven Decisions
            </h3>
            <p className="text-gray-600">
              Rigorous monitoring and iterative learning make sure resources
              create measurable, lasting outcomes.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md flex flex-col items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 inline-flex">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Climate-resilient Solutions
            </h3>
            <p className="text-gray-600">
              From local adaptation to sustainable livelihoods, we embed climate
              resilience into every program.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ===== Volunteers Section ===== */}
      <div className="relative container mx-auto px-6 mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Meet Our <span className="text-primary">Dedicated Volunteers</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {volunteers.map((volunteer, i) => (
            <motion.div
              key={volunteer.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * i } }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedVolunteer(volunteer)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={volunteer.img}
                  alt={volunteer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {volunteer.name}
                </h3>
                <p className="text-gray-600">{volunteer.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Vision Marquee Section ===== */}
      <div className="mt-24 bg-gradient-to-br from-[#006e33]/10 to-[#009944]/10 text-primary py-6 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* First loop */}
          <div className="flex items-center gap-10">
            {[...Array(10)].map((_, i) => (
              <div
                key={`first-${i}`}
                className="flex items-center gap-3 text-5xl font-bold tracking-wide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"
                  />
                </svg>

                <span>Our Vision for a Better Future</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"
                  />
                </svg>
              </div>
            ))}
          </div>
          {/* Duplicate loop (so it never leaves blank space) */}
          <div className="flex items-center gap-10">
            {[...Array(10)].map((_, i) => (
              <div
                key={`second-${i}`}
                className="flex items-center gap-3 text-2xl font-bold tracking-wide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"
                  />
                </svg>

                <span>Our Vision for a Better Future</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-15 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {selectedVolunteer && (
        <Modal
          show={!!selectedVolunteer}
          onClose={() => setSelectedVolunteer(null)}
          title={selectedVolunteer?.name}
          fullDesc={selectedVolunteer?.fullDesc}
          image={selectedVolunteer?.img}
        />
      )}
    </section>
  );
}
