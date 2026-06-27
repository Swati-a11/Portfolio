import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatar from '../assets/avatar.png';

const Hero = () => {
  const [avatarHovered, setAvatarHovered] = useState(false);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between px-6 pt-32 pb-12 md:px-12 overflow-hidden bg-[#0a0a0a] text-[#e8e4d9]"
    >
      {/* Moving Background Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-0 right-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"
      />

      {/* Hero Body containing the giant name and overlapping avatar */}
      <div className="relative flex-grow flex flex-col justify-center items-center py-12 md:py-20 select-none">
        
        {/* Name Background Layer (Gives nice contrast/depth) */}
        <h1 className="font-bebas text-[22vw] leading-[0.8] tracking-tighter text-center uppercase opacity-10 select-none pointer-events-none">
          <div>Swati</div>
          <div>Kumari</div>
        </h1>

        {/* The overlapping Avatar Container */}
        <div className="absolute z-20 top-1/2 -translate-y-1/2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative cursor-none"
            onMouseEnter={() => setAvatarHovered(true)}
            onMouseLeave={() => setAvatarHovered(false)}
          >
            <motion.div
              animate={{ backgroundColor: avatarHovered ? '#7c3aed' : '#222' }}
              className="rounded-2xl p-4 w-44 h-52 md:w-48 md:h-56 flex items-end justify-center overflow-hidden border border-white/5 shadow-2xl"
            >
              <img 
                src={avatar} 
                alt="Swati Kumari" 
                className="w-full h-full object-cover object-top rounded-xl filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300" 
              />
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {avatarHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: 10, x: '-50%' }}
                  className="absolute -bottom-12 left-1/2 whitespace-nowrap
                    bg-[#e8e4d9] text-[#0a0a0a] text-xs px-4 py-2 rounded-full font-medium shadow-md z-30"
                >
                  Open to work — DM or Email me!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Foreground Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none">
          <h1 className="font-bebas text-[22vw] leading-[0.8] tracking-tighter text-center uppercase text-[#e8e4d9] mix-blend-difference">
            <div>Swati</div>
            <div>Kumari</div>
          </h1>
        </div>

      </div>

      {/* Hero Footer text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-xs md:text-sm font-light tracking-wide text-[#e8e4d9]/70 pt-8 border-t border-white/10 z-10">
        <div className="max-w-md">
          <p className="leading-relaxed">
            I'm currently a 4th year student at IKG Punjab Technical University,
            open to internship and work opportunities.
          </p>
        </div>
        <div className="max-w-md md:text-right">
          <p className="leading-relaxed">
            Focused on building websites and AI-powered products,
            working from Kapurthala, Punjab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
