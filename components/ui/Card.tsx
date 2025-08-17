import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-orange-600">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <button className="mt-4 bg-orange-600 text-white rounded-full py-2 px-4 hover:bg-orange-500 transition-colors">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;