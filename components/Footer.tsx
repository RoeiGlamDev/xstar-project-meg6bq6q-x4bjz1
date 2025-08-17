import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  links: { label: string; url: string }[];
  companyInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links, companyInfo, socialMedia }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">luxury LRP cosmetics</h2>
          <p className="text-lg font-light">Elevate your beauty experience with our premium cosmetics.</p>
        </motion.div>

        <div className="flex justify-center flex-col md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2">
              {links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.url}
                    className="text-orange-600 hover:text-orange-700 transition duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-xl font-semibold">Company Info</h3>
            <p className="mt-2">{companyInfo.name}</p>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex mt-2">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-orange-600 hover:text-orange-700 transition duration-200 mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm font-light">© {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;