import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{content}</p>
          <button
            className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;