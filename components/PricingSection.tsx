import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essence Package',
    price: '$49',
    features: [
      'Skin Analysis',
      'Custom Foundation Match',
      'Luxury Lip Treatment',
      'Free Shipping on Orders Over $100'
    ]
  },
  {
    title: 'Radiance Package',
    price: '$99',
    features: [
      'Essence Package Features',
      'Luxury Skincare Consultation',
      'Personalized Makeup Application',
      'Exclusive Access to New Products'
    ]
  },
  {
    title: 'Glamour Package',
    price: '$149',
    features: [
      'Radiance Package Features',
      'Full Makeup Transformation',
      'Private VIP Shopping Experience',
      'Luxury Gift Set'
    ]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing for luxury LRP cosmetics Services
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-orange-500 text-white rounded-lg shadow-lg p-6 flex-1 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
              <p className="text-xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded transition-transform hover:scale-105">
                Choose {tier.title}
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;