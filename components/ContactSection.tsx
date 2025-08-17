import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    contactReason: '',
  });

  const [formError, setFormError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message || !formState.contactReason) {
      setFormError('Please fill in all fields.');
      return;
    }
    
    // Form submission logic here
    // Reset form state after submission if needed
    setFormState({ name: '', email: '', message: '', contactReason: '' });
    setFormError('');
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <p className="text-gray-700 mb-4">
        For inquiries about our exclusive range of cosmetics, please fill out the form below or reach out to us directly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700">Reason for Contact</label>
          <select
            name="contactReason"
            id="contactReason"
            value={formState.contactReason}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select a reason...</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Partnership Request">Partnership Request</option>
            <option value="Customer Feedback">Customer Feedback</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            value={formState.message}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
            required
          />
        </div>
        {formError && <p className="text-red-600">{formError}</p>}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition duration-200"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-orange-600">Business Information</h3>
        <p className="text-gray-700">luxury LRP cosmetics</p>
        <p className="text-gray-700">123 Luxury St, Glamour City, CA 90210</p>
        <p className="text-gray-700">Business Hours: Mon - Fri, 9 AM - 5 PM</p>
        <p className="text-gray-700">Email: contact@luxurylrpcosmetics.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default ContactSection;