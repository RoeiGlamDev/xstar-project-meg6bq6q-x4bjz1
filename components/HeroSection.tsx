import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <div className="relative bg-gradient-to-r from-orange-500 to-white h-screen flex flex-col justify-center items-center text-center">
            <motion.div
                className="text-6xl font-bold text-white shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                luxury LRP cosmetics
            </motion.h1>
            <motion.div
                className="mt-4 text-xl text-orange-600 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Indulge in high-quality, luxurious cosmetics that enhance your natural beauty and elevate your confidence.
            </motion.p>
            <div className="mt-8 flex justify-center space-x-4">
                <motion.div
                    className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    Shop Now
                </motion.button>
                <motion.div
                    className="bg-white text-orange-500 border border-orange-500 font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    Learn More
                </motion.button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    );
};

export default HeroSection;