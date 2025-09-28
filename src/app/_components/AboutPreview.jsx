"use client";
import Image from "next/image";
import donate from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function AboutPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-serif font-bold leading-tight mx-auto mb-16 max-w-4xl"
      >
        Every initiative,{" "}
        <span className="text-primary font-extrabold underline decoration-2 underline-offset-4">
          every donation, and every volunteer
        </span>{" "}
        effort fuels our mission of{" "}
        <span className="italic">hope and change.</span>
      </motion.h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <Image
            src={donate}
            alt="Donation volunteer"
            width={600}
            height={500}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        </motion.div>

        {/* Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            We turn{" "}
            <span className="font-semibold">compassion into action</span>,
            driving change in communities worldwide. Through dedicated
            volunteers, generous donors, and impactful programs, we’ve touched
            thousands of lives, provided essential aid, and funded critical
            initiatives.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With over{" "}
            <span className="font-bold text-primary">1,200+ projects</span>,{" "}
            <span className="font-bold text-primary">5,200 lives impacted</span>
            , and <span className="font-bold text-primary">$12M raised</span>,
            we remain committed to shaping a brighter future — one act of
            kindness at a time.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-4">
            {[
              { value: 5200, label: "Lives Touched" },
              { value: 500, label: "Volunteers", suffix: "+" },
              { value: 12, label: "Funds Raised", prefix: "$", suffix: "M" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <p className="text-3xl md:text-4xl font-bold font-serif text-primary">
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.suffix === "M" ? 1 : 0}
                  />
                  {stat.suffix}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href="/about"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-4 rounded-2xl font-semibold bg-primary text-white shadow-md hover:bg-green-600 transition duration-300"
          >
            Learn More About Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;
