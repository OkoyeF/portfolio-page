import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from './HeroImage';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <HeroImage />
      </motion.div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Fortune Okoye</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">DevOps/Cloud Engineer</p>
    </motion.section>
  );
};

export default Home;