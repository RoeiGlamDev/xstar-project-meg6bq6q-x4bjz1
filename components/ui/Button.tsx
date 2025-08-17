import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      className={`py-2 px-4 rounded-lg shadow-lg transition-transform transform active:scale-95 ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={children.toString()}
    >
      {children}
    </motion.button>
  );
};

export default Button;