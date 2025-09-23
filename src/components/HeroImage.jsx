import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20"
    >
      <img
        src="/images/fortune okoye.jpg"
        alt="Fortune Okoye"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </motion.div>
  );
};

export default HeroImage;