import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      {/* Hero Background with Image or Gradient */}
      <motion.div
        className="w-screen h-96 bg-cover bg-center bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Content Overlay */}
        <div className="flex flex-col justify-center items-center h-full p-5 text-center bg-opacity-70 bg-white rounded-lg">
          {/* Main Heading */}
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Our E-commerce Store!
          </motion.h1>

          {/* Sub-heading / Sales Text */}
          <motion.p
            className="text-base font-medium text-gray-700 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Discover the Best Deals of the Season! Save Big with Our Ongoing
            Sales and Grab Your Favorite Items at Unbeatable Prices. Shop Now
            and Enjoy the Trendiest Collections at a Discount!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition duration-300">
              Shop Now
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition duration-300">
              Explore Collections
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
