import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const StickyButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="tel:+1234567890"
        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <Phone className="h-5 w-5" />
        <span className="font-medium">Call Now</span>
      </a>
    </motion.div>
  );
};

export default StickyButton;