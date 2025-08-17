import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Lux',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Elite',
    role: 'Chief Formulator',
    image: '/images/james.jpg',
  },
  {
    name: 'Isabella Grace',
    role: 'Marketing Director',
    image: '/images/isabella.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h2>
        <motion.div
          className="text-lg text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          luxury LRP cosmetics was founded on the belief that beauty should feel luxurious and empowering. Our journey began with a passion for high-quality, innovative cosmetic formulations that enhance natural beauty while providing a touch of elegance. We pride ourselves on sourcing the finest ingredients and employing cutting-edge technology to bring the most luxurious cosmetics to our clients.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          At luxury LRP cosmetics, our mission is to redefine luxury in cosmetics. We aim to inspire confidence and self-expression through our meticulously crafted products. We believe in sustainability and ethical practices, ensuring that our formulations are not only effective but also kind to the planet.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h4 className="text-xl font-bold text-orange-600 mt-4">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;