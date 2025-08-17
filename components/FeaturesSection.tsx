import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality Formulations',
    description: 'Experience the luxury of our meticulously crafted cosmetics, designed to enhance your natural beauty with the finest ingredients.',
    icon: <i className="fas fa-star text-orange-500"></i>,
  },
  {
    title: 'Exquisite Packaging',
    description: 'Our products are elegantly packaged to reflect the luxury of luxury LRP cosmetics, making every unboxing a delightful experience.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Personalized Consultation',
    description: 'Enjoy a bespoke consultation to find the perfect products tailored to your unique beauty needs, elevating your cosmetic experience.',
    icon: <i className="fas fa-user-check text-orange-500"></i>,
  },
  {
    title: 'Sustainable Luxury',
    description: 'We are committed to sustainability, ensuring our products are not only luxurious but also environmentally responsible.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">Discover the Luxury of LRP Cosmetics</h2>
        <p className="text-lg text-gray-700 mb-12">Indulge in our exclusive range of cosmetics that encapsulate elegance, quality, and sophistication.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;