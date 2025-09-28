"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import kids from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import { FaHandsHelping, FaUsers, FaRegChartBar } from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "Making a Real Impact",
    description:
      "Our initiatives have transformed thousands of lives through education, healthcare, and relief efforts. Every project we undertake is focused on creating lasting, meaningful change.",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
  },
  {
    id: "02",
    title: "Transparency You Can Trust",
    description:
      "Every donation is allocated directly to meaningful causes with complete accountability. We ensure funds are used efficiently to maximize impact. Your support truly makes a difference.",
    icon: <FaRegChartBar className="text-4xl text-primary" />,
  },
  {
    id: "03",
    title: "Strong Community Support",
    description:
      "Our dedicated volunteers, donors, and partners work together to create change. With collective effort, we provide aid, empower lives, and uplift communities worldwide.",
    icon: <FaUsers className="text-4xl text-primary" />,
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-24">
      {/* Heading outside image */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-serif font-bold text-gray-900 max-w-3xl mx-auto mb-8"
      >
        Why Choose <span className="text-primary">Us?</span>
      </motion.h2>

      {/* Background Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src={kids}
          alt="Happy children"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Feature Cards floating above image */}
      <div className="relative -mt-40 md:-mt-56 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Badge */}
            {/* <span className="absolute top-5 right-5 bg-accent text-gray-900 text-xs font-bold rounded-full px-3 py-1 shadow">
              {feature.id}
            </span> */}

            {/* Icon with circle background */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/20 mb-6 group-hover:bg-accent transition-colors duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
