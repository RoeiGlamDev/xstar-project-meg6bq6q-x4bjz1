import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, isValid }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="flex flex-col mb-6">
      <label className={text-xl font-semibold mb-2 ${isValid ? 'text-orange-600' : 'text-red-600'}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={p-4 border-2 rounded-md transition-all duration-300 
          ${isValid ? 'border-orange-600' : 'border-red-600'} 
          ${isFocused ? 'shadow-lg' : 'shadow-sm'} 
          focus:outline-none focus:ring-2 focus:ring-orange-400}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {!isValid && <span className="text-red-600 text-sm">Please enter a valid {label.toLowerCase()}.</span>}
    </div>
  );
};

export default Input;