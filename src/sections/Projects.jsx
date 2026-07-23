import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, Menu, Folder, FolderOpen } from 'lucide-react';
import { Github } from '../components/Icons';
import ws1 from '../assets/ws1.png';
import ws2 from '../assets/ws2.png';
import cc1 from '../assets/cc1.png';
import dd1 from '../assets/dd1.png';
import mm1 from '../assets/mm1.png';
import aca1 from '../assets/aca1.png';

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
        image: ws1,
        imageAlt: "CourseCraft workspace setup with keyboard and laptop"
      },
      {
        title: "DreamDoodle",
        subtitle: "AI Artwork Generator & SaaS",
        description: "An AI image generator with Razorpay payment gateway integration, credit-based model, instant high-res downloads, and creative prompt gallery.",
        tags: ["React", "Node.js", "MongoDB", "Razorpay", "AI Image Gen"],
        link: "https://dream-doodle.vercel.app",
        github: "https://github.com/Swati-a11/DreamDoodle",
        image: dd1,
        imageAlt: "DreamDoodle AI image generator preview"
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
        image: ws2,
        imageAlt: "MultiMind AI workspace photo with dark laptop setup"
      },
      {
        title: "Advanced Course Assistant",
        subtitle: "RAG Document & Lecture Q&A",
        description: "An AI academic assistant featuring RAG-based document Q&A, automated lecture summarization, smart quizzes, and indexed course material search.",
        tags: ["Python", "FastAPI", "OpenAI API", "Vector DB", "React", "Tailwind"],
        link: "https://rag-assignment-rouge.vercel.app",
        github: "https://github.com/Swati-a11/Advanced-Course-Assistant",
        image: aca1,
        imageAlt: "Advanced Course Assistant platform preview"
      }
    ]
  };

  const categoryKeys = Object.keys(projectCategories);
  const [activeCategory, setActiveCategory] = useState("MERN STACK");

  const projectsList = projectCategories[activeCategory];

  // Theme tokens matching the purple reference screenshot in light mode
  const sectionBg = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9]' : 'bg-[#FFFCE1] text-[#1F2937]';
  const containerFrame = isDarkMode 
    ? 'border border-white/10 bg-[#0a0a0a] shadow-2xl' 
    : 'border-4 border-[#5b3bf7] rounded-[2.5rem] bg-[#f5f3ff]/60 shadow-2xl p-4 md:p-10';
  
  const watermarkColor = isDarkMode ? 'text-white/[0.03]' : 'text-[#5b3bf7]/[0.08]';
  const cardBg = isDarkMode 
    ? 'bg-[#121620]/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
    : 'bg-white/95 backdrop-blur-xl border-2 border-[#5b3bf7]/20 shadow-2xl shadow-[#5b3bf7]/10';
  
  const titleColor = isDarkMode ? 'text-white' : 'text-[#1F2937]';
  const descColor = isDarkMode ? 'text-[#e8e4d9]/75' : 'text-[#4B5563]';

  const btnPrimary = isDarkMode
    ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 font-bold'
    : 'bg-[#5b3bf7] hover:bg-[#4a2ee0] text-white shadow-xl shadow-[#5b3bf7]/30 font-bold';

  const btnSecondary = isDarkMode
    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold'
    : 'bg-white border-2 border-[#5b3bf7] text-[#5b3bf7] hover:bg-[#5b3bf7]/10 font-bold shadow-md';

  return (
    <section 
      id="projects" 
      className={`relative py-16 md:py-28 px-4 md:px-12 overflow-hidden transition-colors duration-500 ${sectionBg}`}
    >
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-6xl mx-auto relative ${containerFrame}`}
      >
        {/* Menu icon top-right (Matching Reference Image) */}
        {!isDarkMode && (
          <div className="absolute top-6 right-6 z-30 p-2.5 rounded-xl bg-[#5b3bf7] text-white shadow-md">
            <Menu size={20} />
          </div>
        )}

        {/* Centered Heading with Background Watermark (Exact Match to Reference Image) */}
        <div className="relative text-center mb-10 select-none pt-4">
          <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-7xl md:text-9xl lg:text-[13rem] font-bold tracking-widest pointer-events-none ${watermarkColor}`}>
            PROJECTS
          </span>
          <h2 className="relative z-10 font-bebas text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none font-bold">
            PROJECTS
          </h2>
        </div>

        {/* Category Folder Tabs directly below header */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 relative z-20">
          {categoryKeys.map((catKey) => {
            const isActive = activeCategory === catKey;
            const projectCount = projectCategories[catKey].length;

            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`group relative flex items-center gap-3 px-7 py-3.5 rounded-full border text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 backdrop-blur-md cursor-pointer ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/40'
                      : 'bg-[#5b3bf7] border-[#5b3bf7] text-white shadow-xl shadow-[#5b3bf7]/30 ring-2 ring-[#5b3bf7]'
                    : isDarkMode
                      ? 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white hover:bg-white/[0.08]'
                      : 'bg-white border-2 border-[#5b3bf7]/40 text-[#5b3bf7] hover:bg-[#5b3bf7]/10'
                }`}
              >
                {isActive ? (
                  <FolderOpen size={18} className="text-white" />
                ) : (
                  <Folder size={18} className="text-[#5b3bf7] group-hover:scale-110 transition-transform" />
                )}
                <span>{catKey}</span>
                <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                  isActive
                    ? 'bg-white/20 text-white border-white/30'
                    : 'bg-[#5b3bf7]/10 text-[#5b3bf7] border-[#5b3bf7]/30'
                }`}>
                  {projectCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Projects List with Smooth Fade + Blur Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, filter: 'blur(14px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(14px)', y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20 md:space-y-28 pb-6"
          >
            {projectsList.map((project) => (
              <div 
                key={project.title}
                className="relative grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Left Side: Portrait Workspace Image Container (Exact Reference Image Match) */}
                <div className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl group border transition-all duration-500 z-10 ${
                  isDarkMode ? 'border-white/10 bg-[#121620]' : 'border-2 border-[#5b3bf7]/30 bg-white shadow-xl shadow-[#5b3bf7]/10'
                }`}>
                  <div className="aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none" />

                    {/* Category Pill Badge */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5b3bf7] text-xs font-bold tracking-widest uppercase text-white shadow-lg">
                      {activeCategory === "GEN AI" ? <Sparkles size={14} className="text-white" /> : <Code2 size={14} className="text-white" />}
                      <span>{activeCategory}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Overlapping Floating Content Card (Exact Reference Image Match) */}
                <div className={`lg:col-span-7 lg:-ml-20 lg:mt-12 z-20 p-8 md:p-12 rounded-3xl backdrop-blur-xl transition-all duration-500 ${cardBg}`}>
                  <div className="space-y-5">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-mono font-bold px-3.5 py-1.5 rounded-full inline-block border ${
                      isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-[#5b3bf7]/10 text-[#5b3bf7] border-[#5b3bf7]/30'
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
                              : 'bg-indigo-50 text-[#5b3bf7] border-[#5b3bf7]/30'
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
                        className={`flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${btnPrimary}`}
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${btnSecondary}`}
                      >
                        GitHub <Github size={14} />
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


