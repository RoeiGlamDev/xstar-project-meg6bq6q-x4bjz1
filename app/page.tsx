import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      <motion.div
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-orange-600">
          luxury LRP cosmetics
        </h1>
      </motion.div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="bg-orange-600 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-10">
          Experience Luxury Like Never Before
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-5 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-orange-600">Premium Ingredients</h3>
            <p className="text-gray-700 mt-2">
              Our products are formulated with the highest quality ingredients to ensure your skin feels luxurious.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-5 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-orange-600">Elegant Packaging</h3>
            <p className="text-gray-700 mt-2">
              Each product is beautifully packaged, reflecting the luxury of our brand and enhancing your experience.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-5 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-orange-600">Exclusive Collections</h3>
            <p className="text-gray-700 mt-2">
              Discover our exclusive collections that cater to your every beauty need, designed for the discerning customer.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LuxuryLRPCosmetics;