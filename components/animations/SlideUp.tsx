import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const LuxuryCosmeticsSection: React.FC = () => {
  return (
    <SlideUp>
      <h2 className="text-3xl font-bold text-orange-600 mb-4">
        Welcome to luxury LRP cosmetics
      </h2>
      <p className="text-gray-700 mb-6">
        Elevate your beauty routine with our luxurious range of cosmetics, designed for the discerning individual who appreciates quality and sophistication.
      </p>
      <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300">
        Explore Our Collection
      </button>
    </SlideUp>
  );
};

export default LuxuryCosmeticsSection;