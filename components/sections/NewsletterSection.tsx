import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Updated with luxury LRP cosmetics",
  description = "Subscribe to our newsletter for exclusive offers, luxury beauty tips, and the latest product launches."
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-orange-600 py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="border-2 border-orange-600 rounded-lg p-3 md:mr-4 mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.div
              type="submit"
              className="bg-orange-600 text-white rounded-lg p-3 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <p className="text-lg font-semibold">Thank you for subscribing to luxury LRP cosmetics!</p>
        )}
      </motion.div>
    </div>
  );
};

export default NewsletterSection;