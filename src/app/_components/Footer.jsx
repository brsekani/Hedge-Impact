"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
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

  return (
    <footer className="bg-[#00694b] text-gray-200">
      <motion.div
        className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
      >
        {/* Brand */}
        <motion.div variants={fadeUp} custom={1}>
          <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">
            Hedge Impact Partners
          </h3>
          <p className="text-gray-200 leading-relaxed max-w-sm">
            Partnering for{" "}
            <span className="text-green-400 font-semibold">
              Sustainable Solutions
            </span>
            . Empowering communities and organizations to create lasting impact.
          </p>
          {/* Social Media */}
          <div className="flex items-center gap-4 mt-6">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Youtube, href: "https://youtube.com" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} custom={2}>
          <h3 className="text-lg font-semibold mb-5 text-white tracking-tight">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["About", "History", "Mission", "Values"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} custom={3}>
          <h3 className="text-lg font-semibold mb-5 text-white tracking-tight">
            Contact
          </h3>
          <div className="space-y-2 text-gray-200">
            <p>
              Email:{" "}
              <a
                href="mailto:info@hedgeimpact.org"
                className="hover:text-white transition"
              >
                info@hedgeimpact.org
              </a>
            </p>
            <p>Location: Nigeria</p>
            <p>
              Phone:{" "}
              <a href="tel:+2340000000" className="hover:text-white transition">
                +234 000 000 000
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        className="text-center border-t border-primary/50 py-5 text-sm text-gray-300"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        © {new Date().getFullYear()} Hedge Impact Partners. All rights reserved.
      </motion.div>
    </footer>
  );
};
