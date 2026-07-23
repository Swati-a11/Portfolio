import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Folder, FolderOpen, Sparkles, Layers } from 'lucide-react';
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
import ws1 from '../assets/ws1.png';
import ws2 from '../assets/ws2.png';

const Projects = ({ isDarkMode }) => {
  const projectCategories = {
    "MERN STACK": [
      {
        title: "CourseCraft",
        subtitle: "AI Learning Management System",
        description: "An AI-powered learning management system with YouTube playlist tracking, automated AI notes generation, streak system, and interactive practice questions.",
        tags: ["React", "Node.js", "MongoDB", "Gemini API", "YouTube API"],
        link: "https://course-craft-ten.vercel.app",
        github: "https://github.com/Swati-a11/CourseCraft",
        mainImage: ws1,
        screenshots: [cc1, cc2, cc3]
      },
      {
        title: "DreamDoodle",
        subtitle: "AI Artwork Generator & SaaS",
        description: "An AI image generator with Razorpay payment gateway integration, credit-based model, instant high-res downloads, and creative prompt gallery.",
        tags: ["React", "Node.js", "MongoDB", "Razorpay", "AI Image Gen"],
        link: "https://dream-doodle.vercel.app",
        github: "https://github.com/Swati-a11/DreamDoodle",
        mainImage: ws2,
        screenshots: [dd1, dd2, dd3]
      }
    ],
    "GEN AI": [
      {
        title: "MultiMind AI",
        subtitle: "Multi-LLM Intelligence Platform",
        description: "An intelligent multi-modal GenAI platform integrating LLM chat, document analysis (RAG), dynamic context switching, and automated code generation.",
        tags: ["React", "FastAPI", "Gemini API", "LangChain", "RAG", "Python"],
        link: "https://assignment2-gen-ai.vercel.app",
        github: "https://github.com/Swati-a11/MultiMind-AI",
        mainImage: mm1,
        screenshots: [mm1, mm2, mm3, mm4, mm5]
      },
      {
        title: "Advanced Course Assistant",
        subtitle: "RAG Document & Lecture Q&A",
        description: "An AI academic assistant featuring RAG-based document Q&A, automated lecture summarization, smart quizzes, and indexed course material search.",
        tags: ["Python", "FastAPI", "OpenAI API", "Vector DB", "React", "Tailwind"],
        link: "https://rag-assignment-rouge.vercel.app",
        github: "https://github.com/Swati-a11/Advanced-Course-Assistant",
        mainImage: aca1,
        screenshots: [aca1, aca2, aca3, aca4, aca5]
      }
    ]
  };

  const categoryKeys = Object.keys(projectCategories);
  const [activeCategory, setActiveCategory] = useState("MERN STACK");
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  const projectsList = projectCategories[activeCategory];

  useEffect(() => {
    setActiveScreenIdx(0);
  }, [activeCategory]);

  // Theme tokens
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#FFFCE1] text-[#1F2937] border-[#FFDDB0]';
  const watermarkColor = isDarkMode ? 'text-white/[0.03]' : 'text-[#87CEEB]/25';
  const cardBg = isDarkMode 
    ? 'bg-[#121620]/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
    : 'bg-white/70 backdrop-blur-xl border-white/80 shadow-2xl shadow-sky-500/10';
  const titleColor = isDarkMode ? 'text-white' : 'text-[#1F2937]';
  const descColor = isDarkMode ? 'text-[#e8e4d9]/75' : 'text-[#6B7280]';

  const btnPrimary = isDarkMode
    ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
    : 'bg-gradient-to-r from-[#FFBE91] to-[#ffa970] text-[#1F2937] border-[#FFBE91] hover:shadow-[0_0_20px_rgba(255,190,145,0.5)] font-bold';

  const btnSecondary = isDarkMode
    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
    : 'bg-gradient-to-r from-[#87CEEB]/20 to-[#87CEEB]/40 text-[#1F2937] border-[#87CEEB]/50 hover:shadow-[0_0_20px_rgba(135,206,235,0.4)] font-semibold';

  return (
    <section 
      id="projects" 
      className={`relative py-20 md:py-32 px-4 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Centered Heading with Background Watermark (Matching Reference Image) */}
        <div className="relative text-center mb-12 select-none">
          <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-7xl md:text-9xl lg:text-[13rem] font-bold tracking-widest pointer-events-none ${watermarkColor}`}>
            PROJECTS
          </span>
          <h2 className="relative z-10 font-bebas text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none font-bold">
            PROJECTS
          </h2>
        </div>

        {/* Category Folder Tabs directly below header */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 relative z-10">
          {categoryKeys.map((catKey) => {
            const isActive = activeCategory === catKey;
            const projectCount = projectCategories[catKey].length;

            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`group relative flex items-center gap-3 px-7 py-3.5 rounded-full border text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 backdrop-blur-md ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/40'
                      : 'bg-gradient-to-r from-[#FFBE91] to-[#FFDDB0] border-[#FFBE91] text-[#1F2937] shadow-lg shadow-sky-500/10 ring-2 ring-[#87CEEB]'
                    : isDarkMode
                      ? 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white hover:bg-white/[0.08]'
                      : 'bg-white/70 border-[#FFDDB0] text-[#1F2937]/70 hover:text-[#1F2937] hover:bg-white hover:border-[#87CEEB]'
                }`}
              >
                {isActive ? (
                  <FolderOpen size={18} className={isActive ? (isDarkMode ? 'text-emerald-400' : 'text-[#0284c7]') : 'text-slate-400'} />
                ) : (
                  <Folder size={18} className="text-slate-400 group-hover:text-[#0284c7] transition-colors" />
                )}
                <span>{catKey}</span>
                <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-white/80 text-[#1F2937] border-[#87CEEB]/50'
                    : isDarkMode
                      ? 'bg-white/5 text-white/40 border-white/10'
                      : 'bg-[#FFFCE1] text-[#6B7280] border-[#FFDDB0]'
                }`}>
                  {projectCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Smooth Fade + Blur Transition Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, filter: 'blur(14px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(14px)', y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20 md:space-y-28"
          >
            {projectsList.map((project, idx) => (
              <div 
                key={project.title}
                className="relative grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Left Side: Large Portrait Workspace Image Container (Matching Reference Image) */}
                <div className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl group border transition-all duration-500 z-10 ${
                  isDarkMode ? 'border-white/10 bg-[#121620]' : 'border-[#FFBE91]/40 bg-[#FFDDB0]'
                }`}>
                  <div className="aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden relative">
                    <img 
                      src={project.mainImage || project.screenshots[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none" />

                    {/* Screenshot Preview Badge */}
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                      <Eye size={12} className="text-emerald-400" />
                      <span>{project.screenshots.length} Screens Included</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Overlapping Elevated Content Card (Exact Match to Reference Image) */}
                <div className={`lg:col-span-7 lg:-ml-20 lg:mt-12 z-20 p-8 md:p-12 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${cardBg}`}>
                  <div className="space-y-5">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-mono font-bold px-3.5 py-1.5 rounded-full inline-block border ${
                      isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-[#FFBE91]/30 text-[#D97736] border-[#FFBE91]'
                    }`}>
                      {project.subtitle}
                    </span>

                    <h3 className={`text-3xl md:text-5xl font-bold tracking-tight ${titleColor}`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs md:text-sm font-light leading-relaxed ${descColor}`}>
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 pb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${
                            isDarkMode 
                              ? 'bg-white/5 text-white/70 border-white/10' 
                              : 'bg-[#FFFCE1] text-[#3D2E2B]/80 border-[#FFBE91]/50'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons (Pill Buttons matching Reference Image) */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${btnPrimary}`}
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${btnSecondary}`}
                      >
                        GitHub <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;


