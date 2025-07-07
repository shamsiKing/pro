// HeroSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative z-30 py-16 px-4 lg:px-0 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center text-left">
        {/* Caption */}
        <div className="mb-4">
          <p className="text-lg text-gray-700 font-semibold uppercase tracking-wide">
            Discover our cobots
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Collaborative Robots <br />
            <span className="text-indigo-600">and Automation Solutions</span>
          </h1>
        </div>

        {/* Paragraph */}
        <div className="max-w-xl mb-8">
          <p className="text-base text-gray-600">
            From palletizing to assembly, from inspection to welding, Elite
            Robots’ reliable, flexible and cost-effective cobots are boosting
            the efficiency and the bottom-line of thousands of companies of all
            sizes.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 z-30">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative group"
          >
            <Link
              to="/cobots"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-700 transition-all"
            >
              Explore
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative group"
          >
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
