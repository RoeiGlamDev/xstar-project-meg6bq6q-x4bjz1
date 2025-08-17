import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`transition-all duration-700 ${className`}}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center p-10">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-orange-500">luxury LRP cosmetics</span>
        </h1>
        <p className="mt-4 text-lg">
          Elevate your beauty regime with our exclusive line of luxury cosmetics.
        </p>
      </header>
      <main className="flex flex-col items-center">
        <FadeIn className="my-10">
          <h2 className="text-3xl font-semibold">
            Discover Our Premium Collection
          </h2>
          <p className="mt-2 text-md">
            Indulge in high-quality formulations designed to enhance your natural beauty.
          </p>
        </FadeIn>
        <FadeIn className="my-10">
          <h2 className="text-3xl font-semibold">
            Why Choose luxury LRP cosmetics?
          </h2>
          <ul className="mt-2 text-md list-disc list-inside">
            <li>Luxurious textures and finishes</li>
            <li>Innovative, high-performance ingredients</li>
            <li>Ethically sourced, cruelty-free products</li>
            <li>Elegant packaging for the sophisticated consumer</li>
          </ul>
        </FadeIn>
        <FadeIn className="my-10">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
            Shop Now
          </button>
        </FadeIn>
      </main>
      <footer className="p-5 text-center">
        <p className="text-sm">
          © 2023 luxury LRP cosmetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;