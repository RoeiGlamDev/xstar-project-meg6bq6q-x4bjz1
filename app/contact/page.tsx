import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.div
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <p className="text-lg text-gray-600 mb-4">
        We value your feedback and inquiries. Reach out to us using the form below or visit us at our luxurious location.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>
        <motion.div
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-orange-500">Visit Us</h2>
        <p className="text-lg text-gray-600">luxury LRP cosmetics Headquarters</p>
        <p className="text-gray-700">123 Luxury St, Glamour City, CA 90210</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default ContactPage;