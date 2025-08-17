import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Signature Glow Package',
    description: 'Indulge in our signature facial treatment designed to illuminate and rejuvenate your skin.',
    price: '$150',
    features: ['Deep cleansing', 'Exfoliation', 'Hydrating mask', 'Luxury facial massage'],
  },
  {
    title: 'Luxury LRP Experience',
    description: 'Experience the luxury of our premium skincare services tailored for your unique needs.',
    price: '$250',
    features: ['Personalized skin analysis', 'Custom facial', 'Exclusive product samples', 'Post-treatment follow-up'],
  },
  {
    title: 'Ultimate Pampering Session',
    description: 'A comprehensive session that combines multiple services for a complete rejuvenation.',
    price: '$350',
    features: ['Signature Glow Package', 'Luxury LRP Experience', 'Foot massage', 'Spa refreshments'],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing at luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Discover our luxurious cosmetic services designed to enhance your natural beauty.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-orange-600">{option.title}</h2>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <span className="text-3xl font-bold text-orange-600">{option.price}</span>
            <ul className="mt-4 list-disc list-inside">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-orange-600 mb-4">Comparison Table</h2>
      <table className="min-w-full bg-white border border-gray-300 mb-8">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4">Feature</th>
            <th className="border border-gray-300 p-4">Signature Glow</th>
            <th className="border border-gray-300 p-4">Luxury LRP Experience</th>
            <th className="border border-gray-300 p-4">Ultimate Pampering</th>
          </tr>
        </thead>
        <tbody>
          {['Deep cleansing', 'Exfoliation', 'Hydrating mask', 'Luxury facial massage', 'Personalized skin analysis', 'Custom facial', 'Exclusive product samples', 'Foot massage', 'Spa refreshments'].map((feature, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 p-4">{feature}</td>
              <td className="border border-gray-300 p-4">{pricingOptions[0].features.includes(feature) ? '✔' : '✖'}</td>
              <td className="border border-gray-300 p-4">{pricingOptions[1].features.includes(feature) ? '✔' : '✖'}</td>
              <td className="border border-gray-300 p-4">{pricingOptions[2].features.includes(feature) ? '✔' : '✖'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-3xl font-bold text-orange-600 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">What is included in the Signature Glow Package?</h3>
          <p className="text-gray-600">This package includes a deep cleansing treatment, exfoliation, hydrating mask, and a luxury facial massage.</p>
        </div>
        <div>
          <h3 className="font-semibold">How often should I book a treatment?</h3>
          <p className="text-gray-600">For optimal results, we recommend booking treatments every 4-6 weeks.</p>
        </div>
        <div>
          <h3 className="font-semibold">Are the products used cruelty-free?</h3>
          <p className="text-gray-600">Yes, at luxury LRP cosmetics, we are committed to using only cruelty-free products.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;