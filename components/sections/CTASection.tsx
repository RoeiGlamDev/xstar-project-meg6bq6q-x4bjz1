import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Beauty with luxury LRP cosmetics", 
  subtitle = "Experience the ultimate in luxury skincare and makeup. Transform your beauty routine with our exclusive products designed for the discerning individual.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <motion.div 
        className="text-4xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg text-gray-700 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={buttonLink} 
        className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </div>
  );
};

export default CTASection;