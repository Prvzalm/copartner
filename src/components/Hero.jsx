import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { CenterBg1 } from '../assets';

const Hero = () => {
  return (
    <motion.div // Wrap the entire Hero component with motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
      transition={{ duration: 0.8 }} // Animation duration
      className="hero-container md:h-[100vh] h-[60vh] flex justify-center items-center relative overflow-hidden" style={{ backgroundImage: `url(${CenterBg1})`, backgroundSize: '90%', backgroundRepeat:'no-repeat', backgroundPosition: 'center' }}
    >
      <div className="hero-section md:max-w-[800px] md:w-[80%] md:h-[95vh] md:p-8 p-4 rounded-lg text-center flex flex-col justify-center relative">
        <h1 className="text-[2.5rem] md:text-[5rem] font-bold mb-4 text-gradient md:leading-[80px] leading-[40px] md:px-20 px-4">Invest, Learn and Earn</h1>
        <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-20 px-4">Get partnered with our SEBI Registered Research Analysts to start your profitable trading journey. </p>
        <div>
          <button className='main-button md:text-lg text-sm'>Get Started Today</button>
        </div>
      </div>
    </motion.div> // Close the motion.div wrapper
  );
};

export default Hero;
