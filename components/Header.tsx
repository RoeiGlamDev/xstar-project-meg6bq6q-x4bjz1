import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div
          className="text-orange-500 font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="luxury LRP cosmetics logo" className="h-12" />
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.div
            href="#home"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#products"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-5 space-y-4">
            <motion.div
              href="#home"
              className="text-orange-500 hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.div
              href="#products"
              className="text-orange-500 hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.div
              href="#about"
              className="text-orange-500 hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-orange-500 hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;