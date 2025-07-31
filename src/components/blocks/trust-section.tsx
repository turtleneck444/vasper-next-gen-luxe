import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Building2 } from "lucide-react";

const logos = [
  // Placeholder logos (replace with real client logos as needed)
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Cisco_logo_blue_2016.svg",
];

export default function TrustSection() {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 text-cyan-200 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Trusted by the World’s Leading Enterprises
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Animated badges */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="p-3 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </span>
            <span className="text-cyan-100 text-xs font-semibold">SOC 2 Certified</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="p-3 rounded-full bg-gradient-to-br from-blue-700 to-blue-400 shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </span>
            <span className="text-blue-100 text-xs font-semibold">ISO 27001</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="p-3 rounded-full bg-gradient-to-br from-teal-700 to-teal-400 shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </span>
            <span className="text-teal-100 text-xs font-semibold">Enterprise Ready</span>
          </motion.div>
        </div>
        {/* Fortune 500 logos */}
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {logos.map((logo, i) => (
            <motion.img
              key={logo}
              src={logo}
              alt="Client logo"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-lg bg-white/5 rounded-lg p-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              style={{ maxWidth: 120 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 