import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="container mx-auto px-4"
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Find Us</h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019370582687!2d-122.41941548468102!3d37.77492927975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4e3c7b1b%3A0x8c6e7a4d9b9b9f7e!2s123%20Smile%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1634567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lotus Dental Group Location"
          className="rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default Map;