import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Creating.', 'Empowering.', 'Building.'];

const IntroAnimation = ({ onComplete }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Cycle through words
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => {
        if (prev === words.length - 1) {
          clearInterval(wordInterval);
          // Start exit animation after last word
          setTimeout(() => {
            setIsExiting(true);
            // Call onComplete after exit animation
            setTimeout(onComplete, 1000);
          }, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isExiting ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center select-none"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Background subtle noise/grain effect */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Word display */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentWord}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1]
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#e8e4d9] tracking-tight uppercase font-bebas"
              >
                {words[currentWord]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {words.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === currentWord ? 24 : 8,
                  backgroundColor: i === currentWord ? '#e8e4d9' : '#333'
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
              />
            ))}
          </div>

          {/* Corner branding */}
          <div className="absolute bottom-12 right-12 text-[#e8e4d9]/20 text-xs tracking-[0.2em] uppercase font-semibold">
            Swati Kumari
          </div>
        </motion.div>
      ) : (
        // Exit slide up animation (cream/white screen wipe)
        <motion.div
          key="exit"
          className="fixed inset-0 z-[9999] bg-[#e8e4d9]"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
