import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatar from '../assets/avatar.png';

// Typing loop helper component
const TypingLoop = ({ isDarkMode }) => {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const phrases = [
      "I build platforms.",
      "I solve complex logic.",
      "I design scalable systems."
    ];
    const currentPhrase = phrases[phraseIdx];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 80);
    }
    
    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIdx(prev => (prev + 1) % phrases.length);
    }
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx]);

  return (
    <span className={`inline-block font-semibold border-r-2 pr-1 animate-pulse ${
      isDarkMode ? 'text-[#e8e4d9] border-white' : 'text-[#0a0a0a] border-black'
    }`}>
      {text}
    </span>
  );
};

const Hero = ({ isDarkMode }) => {
  const [avatarHovered, setAvatarHovered] = useState(false);

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9]' : 'bg-white text-black';
  const blobBg = isDarkMode ? 'bg-white/5' : 'bg-emerald-500/5';
  const footerBorder = isDarkMode ? 'border-white/10 text-[#e8e4d9]/70' : 'border-black/10 text-black/70';
  const avatarBorder = isDarkMode ? 'border-white/5' : 'border-black/5';

  return (
    <section 
      id="hero" 
      className={`relative min-h-screen flex flex-col justify-between px-6 pt-32 pb-12 md:px-12 overflow-hidden transition-colors duration-500 ${bgStyle}`}
    >
      {/* Moving Background Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl pointer-events-none ${blobBg}`}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute top-0 right-0 w-72 h-72 md:w-80 md:h-80 rounded-full blur-3xl pointer-events-none ${blobBg}`}
      />

      {/* Hero Body containing the giant name and overlapping avatar */}
      <div className="relative flex-grow flex flex-col justify-center items-center py-12 md:py-16 select-none">
        
        {/* Pulsing work indicator and typing loop at the top of Hero */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 select-none z-30">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border font-mono ${
              isDarkMode 
                ? 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20' 
                : 'text-emerald-600 bg-emerald-50/70 border-emerald-500/10'
            }`}>
              Available for Opportunities
            </span>
          </div>
          <span className={`hidden sm:inline ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>|</span>
          <div className="text-xs md:text-sm font-light flex items-center min-h-[20px]">
            <TypingLoop isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Name Background Layer (Gives nice contrast/depth) */}
        <h1 className={`font-bebas text-[22vw] leading-[0.8] tracking-tighter text-center uppercase select-none pointer-events-none transition-opacity duration-300 ${
          isDarkMode ? 'opacity-10' : 'opacity-5 text-black'
        }`}>
          <div>Swati</div>
          <div>Kumari</div>
        </h1>
 
        {/* The overlapping Avatar Container */}
        <div className="absolute z-20 top-1/2 -translate-y-1/2 mt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative cursor-none"
            onMouseEnter={() => setAvatarHovered(true)}
            onMouseLeave={() => setAvatarHovered(false)}
          >
            <motion.div
              animate={{ backgroundColor: avatarHovered ? (isDarkMode ? '#7c3aed' : '#10b981') : (isDarkMode ? '#222' : '#f1f5f9') }}
              className={`rounded-2xl p-4 w-44 h-52 md:w-48 md:h-56 flex items-end justify-center overflow-hidden border shadow-2xl ${avatarBorder}`}
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
                  className={`absolute -bottom-12 left-1/2 whitespace-nowrap text-xs px-4 py-2 rounded-full font-medium shadow-md z-30 ${
                    isDarkMode ? 'bg-[#e8e4d9] text-[#0a0a0a]' : 'bg-black text-white'
                  }`}
                >
                  Open to work — DM or Email me!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Foreground Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none mt-8">
          <h1 className="font-bebas text-[22vw] leading-[0.8] tracking-tighter text-center uppercase text-white mix-blend-difference">
            <div>Swati</div>
            <div>Kumari</div>
          </h1>
        </div>

      </div>

      {/* Hero Footer text */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-xs md:text-sm font-light tracking-wide pt-8 border-t z-10 transition-colors duration-500 ${footerBorder}`}>
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
