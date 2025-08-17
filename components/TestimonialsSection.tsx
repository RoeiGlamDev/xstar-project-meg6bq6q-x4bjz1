import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Carter',
    review: 'Luxury LRP cosmetics transformed my skincare routine! The quality is unparalleled and my skin has never felt better.',
    rating: 5,
    photoUrl: '/images/sophia.jpg',
  },
  {
    name: 'Isabella Martinez',
    review: 'I adore the vibrant colors and luxurious finish of the lipsticks. They truly elevate my makeup collection!',
    rating: 5,
    photoUrl: '/images/isabella.jpg',
  },
  {
    name: 'Chloe Zhang',
    review: 'The foundation blends seamlessly and gives my skin that perfect glow. I can’t recommend Luxury LRP cosmetics enough!',
    rating: 5,
    photoUrl: '/images/chloe.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.photoUrl}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;