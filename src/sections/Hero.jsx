import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
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
    <span className={`inline-block font-semibold border-r-2 pr-1 animate-pulse ${isDarkMode ? 'text-[#e8e4d9] border-white' : 'text-[#0a0a0a] border-black'
      }`}>
      {text}
    </span>
  );
};

// Typewriter Text component
const TypewriterText = ({ text, delay = 0, speed = 25, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= text.length) {
        setDisplayedText(text.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current ml-1 animate-pulse align-middle" />
      )}
    </span>
  );
};

const Hero = ({ isDarkMode }) => {
  const [avatarHovered, setAvatarHovered] = useState(false);

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9]' : 'bg-[#F7BBD0] text-[#000000]';
  const blobBg1 = isDarkMode ? 'bg-white/5' : 'bg-white/40';
  const blobBg2 = isDarkMode ? 'bg-white/5' : 'bg-[#FDE02F]/30';
  const footerBorder = isDarkMode ? 'border-white/10 text-[#e8e4d9]' : 'border-[#0A4222]/30 text-[#000000]';
  const avatarBorder = isDarkMode ? 'border-white/5' : 'border-[#0A4222] shadow-xl shadow-[#0A4222]/10';

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-between px-4 pt-24 pb-10 md:px-12 md:pt-32 md:pb-12 overflow-hidden transition-colors duration-500 ${bgStyle}`}
    >
      {/* Moving Background Blobs (White & Yellow Accents) */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 rounded-full blur-3xl pointer-events-none ${blobBg1}`}
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className={`absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 rounded-full blur-3xl pointer-events-none ${blobBg2}`}
      />

      {/* Hero Body */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-grow flex flex-col justify-center items-center py-8 md:py-16 select-none"
      >

        {/* Status badge + typing loop + Resume CTAs */}
        <div className="flex flex-col items-center gap-3 mb-4 md:mb-6 select-none z-30">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className={`text-[9px] md:text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border font-mono ${
                isDarkMode 
                  ? 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20' 
                  : 'text-[#000000] bg-[#FDE02F] border-2 border-[#0A4222]'
              }`}>
                Available for Opportunities
              </span>
            </div>

            {/* Resume Buttons in Hero */}
            <div className="flex items-center gap-1.5 ml-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20' 
                    : 'bg-[#FDE02F] border-2 border-[#0A4222] text-[#000000] hover:bg-[#ebd025]'
                }`}
              >
                <Eye size={12} />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Swati_Kumari_Resume.pdf"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20' 
                    : 'bg-white border-2 border-[#0A4222] text-[#000000] hover:bg-slate-100'
                }`}
              >
                <Download size={12} />
                Download
              </a>
            </div>
          </div>

          <div className="text-xs md:text-sm font-light flex items-center min-h-[20px]">
            <TypingLoop isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Background name layer */}
        <h1 className={`font-bebas text-[28vw] sm:text-[24vw] md:text-[22vw] leading-[0.8] tracking-tighter text-center uppercase select-none pointer-events-none transition-opacity duration-300 ${isDarkMode ? 'opacity-10' : 'opacity-5 text-black'
          }`}>
          <div>Swati</div>
          <div>Kumari</div>
        </h1>

        {/* Avatar */}
        <div className="absolute z-20 top-1/2 -translate-y-1/2 mt-2 md:mt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative cursor-none"
            onMouseEnter={() => setAvatarHovered(true)}
            onMouseLeave={() => setAvatarHovered(false)}
          >
            <motion.div
              animate={{ backgroundColor: avatarHovered ? (isDarkMode ? '#7c3aed' : '#10b981') : (isDarkMode ? '#222' : '#f1f5f9') }}
              className={`rounded-2xl p-3 md:p-4 w-32 h-40 md:w-48 md:h-56 flex items-end justify-center overflow-hidden border shadow-2xl ${avatarBorder}`}
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
                  className={`absolute -bottom-12 left-1/2 whitespace-nowrap text-xs px-4 py-2 rounded-full font-medium shadow-md z-30 ${isDarkMode ? 'bg-[#e8e4d9] text-[#0a0a0a]' : 'bg-black text-white'
                    }`}
                >
                  Open to work — DM or Email me!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Foreground text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none mt-8 md:mt-8">
          <h1 className="font-bebas text-[28vw] sm:text-[24vw] md:text-[22vw] leading-[0.8] tracking-tighter text-center uppercase text-white mix-blend-difference">
            <div>Swati</div>
            <div>Kumari</div>
          </h1>
        </div>
      </motion.div>

      {/* Hero Footer: Larger Font, Typewriter Effect, Right Alignment for Second Block */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-base md:text-lg lg:text-xl font-semibold tracking-wide pt-6 md:pt-10 border-t-2 z-10 transition-colors duration-500 ${footerBorder}`}>
        <div className="max-w-xl text-left">
          <p className="leading-relaxed">
            <TypewriterText 
              text="I'm currently a 4th year student at IKG Punjab Technical University, open to internship and work opportunities." 
              speed={25}
              delay={300}
            />
          </p>
        </div>
        <div className="max-w-xl md:ml-auto text-left md:text-right">
          <p className="leading-relaxed">
            <TypewriterText 
              text="Focused on building websites and AI-powered products, working from Kapurthala, Punjab." 
              speed={25}
              delay={2800}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
