"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Hedge Impact</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-16 font-medium">
          {["About", "History", "Mission", "Values"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="transition text-gray-700 hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="px-8 py-4 rounded-2xl font-semibold bg-primary text-white shadow-md hover:bg-green-600 transition duration-300 hidden md:block"
        >
          Donate now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50">
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-6 flex flex-col justify-start space-y-4 z-50"
          >
            {["About", "History", "Mission", "Values"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-medium py-2 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 rounded-2xl font-semibold bg-primary text-white shadow-md hover:bg-green-600 transition duration-300 text-center"
            >
              Donate
            </Link>
          </motion.div>
        </div>
      )}
    </header>
  );
};
