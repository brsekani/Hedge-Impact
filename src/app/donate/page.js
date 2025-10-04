"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import donateImg from "../../../public/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import toast, { Toaster } from "react-hot-toast";

const currencies = [
  { symbol: "₦", code: "NGN" },
  { symbol: "$", code: "USD" },
  { symbol: "€", code: "EUR" },
  { symbol: "£", code: "GBP" },
];

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    currency: "NGN", // ✅ Default NGN
    message: "",
  });

  // ✅ Load Flutterwave script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.amount) {
      toast.error("Please fill in email and amount.");
      return;
    }

    if (!window.FlutterwaveCheckout) {
      toast.error("⚠️ Payment system not ready, try again.");
      return;
    }

    // ✅ Flutterwave Checkout
    window.FlutterwaveCheckout({
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY, // 🔑 Your Flutterwave Public Key
      tx_ref: Date.now().toString(),
      amount: Number(form.amount),
      currency: form.currency,
      payment_options: "card, mobilemoney, ussd",
      customer: {
        email: form.email,
        phonenumber: "N/A",
        name: form.name || "Anonymous",
      },
      customizations: {
        title: "Donation",
        description: form.message || "Support our mission ❤️",
        logo: "/favicon.ico", // ✅ optional: replace with your org logo
      },
      callback: (response) => {
        console.log("Payment Success:", response);
        toast.success("🎉 Donation successful!");
        setForm({
          name: "",
          email: "",
          amount: "",
          currency: "NGN",
          message: "",
        });
      },
      onclose: () => {
        toast.error("❌ Donation cancelled.");
      },
    });
  };

  return (
    <section className="relative pb-10">
      <Toaster position="top-center" />
      <div className="space-y-20">
        {/* Emotional Image + Words */}
        <motion.div
          className="relative w-full h-[500px] md:h-[600px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <Image
            src={donateImg}
            alt="Group of people smiling with hope"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 h-full flex items-center">
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg mx-6 md:ml-16 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight font-serif">
                Give Hope <br /> Today
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your contribution makes a tangible difference in the lives of
                those in need. Join us in creating lasting change through your
                generosity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Donation Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6 bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-10 border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center font-serif">
            Support Our <span className="text-[#006e33]">Mission</span>
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Together, we can create lasting impact. Fill in your details and
            help change lives today.
          </p>

          {/* Name */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#006e33] bg-white/70"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#006e33] bg-white/70"
              required
            />
          </div>

          {/* Amount + Currency */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Donation Amount
            </label>
            <div className="flex gap-3">
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-24 border border-gray-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-[#006e33] bg-white/70"
              >
                {currencies.map((cur, i) => (
                  <option key={i} value={cur.code}>
                    {cur.symbol}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                value={form.amount}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#006e33] bg-white/70"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Message (optional)
            </label>
            <textarea
              name="message"
              placeholder="Leave a message..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#006e33] bg-white/70"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-[#006e33] to-[#009944] text-white px-6 py-4 rounded-xl font-semibold shadow-lg text-lg"
          >
            Donate Now ❤️
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
