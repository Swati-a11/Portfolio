import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link as LinkIcon } from 'lucide-react';
import { Github } from '../components/Icons';
import cc1 from '../assets/cc1.png';
import cc2 from '../assets/cc2.png';
import cc3 from '../assets/cc3.png';
import dd1 from '../assets/dd1.png';
import dd2 from '../assets/dd2.png';
import dd3 from '../assets/dd3.png';

const Projects = ({ isDarkMode }) => {
  const projectsList = [
    {
      title: "CourseCraft",
      description: "An AI-powered learning management system with YouTube playlist tracking, AI notes generation, streak system, and practice questions. Built with MERN stack and Gemini API.",
      tags: ["React", "Node.js", "MongoDB", "Gemini API", "YouTube API"],
      link: "https://course-craft-ten.vercel.app",
      github: "https://github.com/Swati-a11/CourseCraft",
      screenshots: [cc1, cc2, cc3]
    },
    {
      title: "DreamDoodle",
      description: "An AI image generator with Razorpay payment integration, allowing users to generate and download AI-created artwork. Features credit-based system and gallery.",
      tags: ["React", "Node.js", "MongoDB", "Razorpay", "AI"],
      link: "https://dream-doodle.vercel.app",
      github: "https://github.com/Swati-a11/DreamDoodle",
      screenshots: [dd1, dd2, dd3]
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const activeProject = projectsList[currentIdx];

  // Auto-cycle screenshots inside the laptop screen for the current project
  useEffect(() => {
    setActiveScreenIdx(0);
    if (activeProject.screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setActiveScreenIdx((prev) => (prev + 1) % activeProject.screenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIdx, activeProject.screenshots.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? projectsList.length - 1 : prev - 1));
  };

  // Variants for slide-in animation
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-white text-black border-black/5';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';
  const cardBg = isDarkMode ? 'bg-[#121620] border-white/5' : 'bg-[#f8fafc] border-black/5';
  const tagColor = isDarkMode ? 'text-white/50' : 'text-black/45';
  const titleColor = isDarkMode ? 'text-white' : 'text-black';
  const descColor = isDarkMode ? 'text-[#e8e4d9]/70' : 'text-black/60';
  
  const btnColor = isDarkMode ? 'bg-white text-black hover:bg-emerald-400' : 'bg-black text-white hover:bg-emerald-600';
  const iconColor = isDarkMode ? 'fill-black' : 'fill-white';

  const arrowBg = isDarkMode 
    ? 'bg-[#16161a] border-white/10 text-[#e8e4d9]/60 hover:text-white hover:bg-[#222226]' 
    : 'bg-white border-black/10 text-black/60 hover:text-black hover:bg-slate-50';

  return (
    <section 
      id="projects" 
      className={`relative py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <div className="max-w-5xl mx-auto relative">
        <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
          / Selected Work
        </span>

        <h2 className="font-bebas text-4xl md:text-6xl mb-16 tracking-wide uppercase">
          Projects
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          
          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev}
            className={`absolute left-[-20px] md:left-[-60px] z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg ${arrowBg}`}
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Content Wrapper */}
          <div className="w-full overflow-hidden min-h-[550px] md:min-h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 rounded-3xl p-8 md:p-12 items-center relative border transition-colors duration-500 ${cardBg}`}
              >
                {/* Left Column: Details */}
                <div className="col-span-1 md:col-span-6 flex flex-col justify-between h-full min-h-[320px]">
                  <div>
                    {/* Top Buttons Row */}
                    <div className="flex gap-4 mb-8">
                      {/* GitHub Link */}
                      <a 
                        href={activeProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300 ${btnColor}`}
                        title="View GitHub Repository"
                      >
                        <Github size={20} className={iconColor} />
                      </a>
                      {/* Live Link */}
                      <a 
                        href={activeProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300 ${btnColor}`}
                        title="View Live Website"
                      >
                        <LinkIcon size={20} strokeWidth={2.5} />
                      </a>
                    </div>

                    {/* Title */}
                    <motion.h3 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className={`text-3xl md:text-5xl font-semibold tracking-tight mb-4 ${titleColor}`}
                    >
                      {activeProject.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className={`text-sm font-light leading-relaxed mb-10 ${descColor}`}
                    >
                      {activeProject.description}
                    </motion.p>
                  </div>

                  {/* Tech stack: Large capitalized letters spaced out */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-wrap gap-x-6 gap-y-2 mt-auto"
                  >
                    {activeProject.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`text-xs md:text-sm uppercase tracking-[0.15em] font-semibold ${tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Right Column: MacBook Pro Mockup */}
                <div className="col-span-1 md:col-span-6 flex items-center justify-center py-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative w-full max-w-[460px] aspect-[16/10] select-none"
                  >
                    {/* Floating animation wrapper */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full relative"
                    >
                      {/* Laptop Screen Body */}
                      <div className="absolute top-[6%] left-[12.5%] right-[12.5%] bottom-[12%] bg-[#08080a] border-[4px] border-[#1d1d1f] rounded-t-xl shadow-2xl flex flex-col overflow-hidden z-10">
                        {/* Camera and ambient sensor */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 z-30">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#040404]" />
                          <div className="w-1 h-1 rounded-full bg-[#142d54]/60" />
                        </div>

                        {/* Screen Content display */}
                        <div className="w-full h-full bg-[#18181b] relative overflow-hidden flex-grow">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={activeScreenIdx}
                              src={activeProject.screenshots[activeScreenIdx]} 
                              alt={`${activeProject.title} screenshot ${activeScreenIdx + 1}`} 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.6 }}
                              className="w-full h-full object-cover object-top"
                            />
                          </AnimatePresence>

                          {/* Subtle glare overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-20" />
                        </div>

                        {/* Bezel Bottom Brand Name Bar */}
                        <div className="w-full bg-[#08080a] py-0.5 border-t border-white/5 flex justify-center items-center select-none z-20">
                          <span className="text-[6.5px] font-medium tracking-[0.25em] text-[#86868b] font-sans">
                            MacBook Pro
                          </span>
                        </div>
                      </div>

                      {/* Laptop Base (keyboard deck) */}
                      <div className="absolute bottom-[5.5%] left-[2%] right-[2%] h-[6.5%] bg-gradient-to-b from-[#d2d2d7] via-[#8e8e93] to-[#555557] rounded-b-xl border-t border-[#f5f5f7]/30 shadow-[0_12px_24px_rgba(0,0,0,0.6)] flex items-start justify-center z-10">
                        {/* Notch lip to open screen */}
                        <div className="w-[14%] h-[35%] bg-[#2d2d2f] rounded-b-[4px]" />
                      </div>

                      {/* Screen-to-base hinge overlay */}
                      <div className="absolute bottom-[11.5%] left-[12.5%] right-[12.5%] h-[1.5%] bg-gradient-to-b from-black to-[#1a1a1c] z-10" />

                      {/* Laptop Drop Shadow */}
                      <div className="absolute bottom-0 left-[6%] right-[6%] h-[7%] bg-black/55 rounded-full blur-md z-0" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext}
            className={`absolute right-[-20px] md:right-[-60px] z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg ${arrowBg}`}
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;
