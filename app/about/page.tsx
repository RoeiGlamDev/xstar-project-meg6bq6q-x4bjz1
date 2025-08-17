import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Williams',
    position: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Thompson',
    position: 'Head of Product Development',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    position: 'Marketing Director',
    image: '/images/olivia.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold">About luxury LRP cosmetics</h1>
      </header>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Our History</h2>
          <p className="text-lg mb-4">
            Founded in 2021, luxury LRP cosmetics emerged from a passion for creating high-quality, luxurious cosmetic products that empower individuals. Our journey began with a vision to redefine beauty standards through innovative formulations and exquisite packaging.
          </p>
          <p className="text-lg">
            We believe in the power of luxury, and our products are crafted with the finest ingredients to ensure an exceptional experience. From skincare to makeup, luxury LRP cosmetics is dedicated to enhancing your natural beauty.
          </p>
        </motion.div>
      </section>
      <section className="bg-orange-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Values</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Commitment to Quality: We use only the finest ingredients.</li>
              <li>Innovation: We constantly seek to innovate and improve our products.</li>
              <li>Integrity: We are transparent and ethical in our practices.</li>
              <li>Empowerment: We celebrate diversity and aim to empower our customers.</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-orange-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;