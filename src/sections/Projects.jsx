import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link as LinkIcon, Sparkles, Layers, Folder, FolderOpen } from 'lucide-react';
import { Github } from '../components/Icons';
import cc1 from '../assets/cc1.png';
import cc2 from '../assets/cc2.png';
import cc3 from '../assets/cc3.png';
import dd1 from '../assets/dd1.png';
import dd2 from '../assets/dd2.png';
import dd3 from '../assets/dd3.png';
import mm1 from '../assets/mm1.png';
import mm2 from '../assets/mm2.png';
import mm3 from '../assets/mm3.png';
import mm4 from '../assets/mm4.png';
import mm5 from '../assets/mm5.png';
import aca1 from '../assets/aca1.png';
import aca2 from '../assets/aca2.png';
import aca3 from '../assets/aca3.png';
import aca4 from '../assets/aca4.png';
import aca5 from '../assets/aca5.png';

const Projects = ({ isDarkMode }) => {
  const projectCategories = {
    "MERN Stack Projects": [
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
    ],
    "GenAI Projects": [
      {
        title: "MultiMind AI",
        description: "An intelligent multi-modal GenAI platform integrating LLM chat, document analysis (RAG), dynamic context switching, and automated code generation.",
        tags: ["React", "FastAPI", "Gemini API", "LangChain", "RAG", "Python"],
        link: "https://assignment2-gen-ai.vercel.app",
        github: "https://github.com/Swati-a11/MultiMind-AI",
        screenshots: [mm1, mm2, mm3, mm4, mm5]
      },
      {
        title: "Advanced Course Assistant",
        description: "An AI academic assistant featuring RAG-based document Q&A, automated lecture summarization, smart quizzes, and course material indexing.",
        tags: ["Python", "FastAPI", "OpenAI API", "Vector DB", "React", "Tailwind"],
        link: "https://rag-assignment-rouge.vercel.app",
        github: "https://github.com/Swati-a11/Advanced-Course-Assistant",
        screenshots: [aca1, aca2, aca3, aca4, aca5]
      }
    ]
  };

  const categoryKeys = Object.keys(projectCategories);
  const [activeCategory, setActiveCategory] = useState("MERN Stack Projects");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const projectsList = projectCategories[activeCategory];
  const activeProject = projectsList[currentIdx] || projectsList[0];

  useEffect(() => {
    setCurrentIdx(0);
  }, [activeCategory]);

  useEffect(() => {
    setActiveScreenIdx(0);
    if (!activeProject || activeProject.screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setActiveScreenIdx((prev) => (prev + 1) % activeProject.screenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIdx, activeCategory, activeProject]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? projectsList.length - 1 : prev - 1));
  };

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
      className={`relative py-16 md:py-24 px-4 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(15px)', scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto relative"
      >
        <span className={`text-xs uppercase tracking-[0.2em] block mb-4 ${textMuted}`}>
          / Selected Work
        </span>

        {/* macOS / IDE Folder-Like Structure for Categories */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categoryKeys.map((catKey) => {
            const isActive = activeCategory === catKey;
            const projectCount = projectCategories[catKey].length;

            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl border text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 shadow-[0_4px_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                      : 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-1 ring-emerald-500'
                    : isDarkMode
                      ? 'bg-white/[0.03] border-white/10 text-white/60 hover:border-white/20 hover:text-white hover:bg-white/[0.06]'
                      : 'bg-slate-100 border-black/10 text-slate-700 hover:border-black/20 hover:text-black hover:bg-slate-200'
                }`}
              >
                {isActive ? (
                  <FolderOpen size={18} className={isActive ? (isDarkMode ? 'text-emerald-400' : 'text-white') : 'text-slate-400'} />
                ) : (
                  <Folder size={18} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                )}

                <span>{catKey}</span>

                <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      : 'bg-white/20 text-white border-white/30'
                    : isDarkMode
                      ? 'bg-white/5 text-white/40 border-white/10'
                      : 'bg-slate-200 text-slate-500 border-black/5'
                }`}>
                  {projectCount} {projectCount === 1 ? 'project' : 'projects'}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.h2
            className="font-bebas text-4xl md:text-6xl tracking-wide uppercase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
            }}
          >
            {"Featured Projects".split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em] last:mr-0"
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Category Tabs — fully responsive on mobile & desktop */}
          <div className="flex flex-wrap gap-2">
            {categoryKeys.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 ${
                  activeCategory === catKey ? activeTabStyle : inactiveTabStyle
                }`}
              >
                {catKey === "GenAI Projects" ? <Sparkles size={14} /> : <Layers size={14} />}
                <span>{catKey}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Category Subheading */}
        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className={`text-xs md:text-sm font-bold uppercase tracking-widest font-mono ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            {activeCategory} ({projectsList.length})
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow — responsive on both mobile and desktop */}
          <button 
            onClick={handlePrev}
            className={`flex absolute -left-3 md:-left-14 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg ${arrowBg}`}
            aria-label="Previous Project"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Slider Content Wrapper */}
          <div className="w-full overflow-hidden px-2 md:px-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${activeCategory}-${currentIdx}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 rounded-3xl p-5 md:p-12 items-center relative border transition-colors duration-500 ${cardBg}`}
              >
                {/* Left Column: Details */}
                <div className="col-span-1 md:col-span-6 flex flex-col justify-between h-full min-h-[240px] md:min-h-[320px]">
                  <div>
                    {/* Top Buttons Row */}
                    <div className="flex gap-4 mb-6 md:mb-8">
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
                      className={`text-2xl md:text-5xl font-semibold tracking-tight mb-4 ${titleColor}`}
                    >
                      {activeProject.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className={`text-sm font-light leading-relaxed mb-6 md:mb-10 ${descColor}`}
                    >
                      {activeProject.description}
                    </motion.p>
                  </div>

                  {/* Tech stack */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-wrap gap-x-4 gap-y-2 mt-auto"
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
                <div className="col-span-1 md:col-span-6 flex items-center justify-center py-2 md:py-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative w-full max-w-[320px] md:max-w-[460px] aspect-[16/10] select-none"
                  >
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full relative"
                    >
                      {/* Laptop Screen Body */}
                      <div className="absolute top-[6%] left-[12.5%] right-[12.5%] bottom-[12%] bg-[#08080a] border-[4px] border-[#1d1d1f] rounded-t-xl shadow-2xl flex flex-col overflow-hidden z-10">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 z-30">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#040404]" />
                          <div className="w-1 h-1 rounded-full bg-[#142d54]/60" />
                        </div>

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
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-20" />
                        </div>

                        <div className="w-full bg-[#08080a] py-0.5 border-t border-white/5 flex justify-center items-center select-none z-20">
                          <span className="text-[6.5px] font-medium tracking-[0.25em] text-[#86868b] font-sans">
                            MacBook Pro
                          </span>
                        </div>
                      </div>

                      {/* Laptop Base */}
                      <div className="absolute bottom-[5.5%] left-[2%] right-[2%] h-[6.5%] bg-gradient-to-b from-[#d2d2d7] via-[#8e8e93] to-[#555557] rounded-b-xl border-t border-[#f5f5f7]/30 shadow-[0_12px_24px_rgba(0,0,0,0.6)] flex items-start justify-center z-10">
                        <div className="w-[14%] h-[35%] bg-[#2d2d2f] rounded-b-[4px]" />
                      </div>

                      <div className="absolute bottom-[11.5%] left-[12.5%] right-[12.5%] h-[1.5%] bg-gradient-to-b from-black to-[#1a1a1c] z-10" />
                      <div className="absolute bottom-0 left-[6%] right-[6%] h-[7%] bg-black/55 rounded-full blur-md z-0" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow — responsive on both mobile and desktop */}
          <button 
            onClick={handleNext}
            className={`flex absolute -right-3 md:-right-14 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg ${arrowBg}`}
            aria-label="Next Project"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Additional mobile-friendly project switcher controls */}
        <div className="flex justify-between items-center mt-6 text-xs font-mono">
          <span className={textMuted}>
            Project {currentIdx + 1} of {projectsList.length}
          </span>
          <div className="flex gap-2">
            <button onClick={handlePrev} className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${arrowBg}`}>
              Previous
            </button>
            <button onClick={handleNext} className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${arrowBg}`}>
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
