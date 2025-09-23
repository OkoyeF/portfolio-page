import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16"
    >
      {/* ...existing code... */}
      
      <motion.a
        href="/FortuneOkoye_CV.pdf"
        download="Fortune Chidera Okoye CV.pdf"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        <Download size={20} />
        Download CV
      </motion.a>
      
      {/* ...existing code... */}
    </motion.section>
  );
};

export default About;