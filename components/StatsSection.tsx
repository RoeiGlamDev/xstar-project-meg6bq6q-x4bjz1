import React from 'react';
import { motion } from 'framer-motion';

interface StatsItem {
  value: number;
  label: string;
}

const statsData: StatsItem[] = [
  { value: 100, label: 'Luxury Products' },
  { value: 5000, label: 'Happy Customers' },
  { value: 250, label: 'Awards Won' },
  { value: 300, label: 'Beauty Influencers' }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="stats">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-orange-600 mb-10">Achievements of luxury LRP cosmetics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl font-bold text-orange-600"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-lg text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;