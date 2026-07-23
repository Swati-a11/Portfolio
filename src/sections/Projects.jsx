import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link as LinkIcon, Sparkles, Layers, Folder, FolderOpen, ExternalLink, Eye } from 'lucide-react';
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
        subtitle: "AI Learning Management Platform",
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
        subtitle: "Multi-LLM Intelligence Engine",
        description: "An intelligent multi-modal GenAI platform integrating LLM chat, document analysis (RAG), dynamic model synthesis (Gemini, Groq, OpenRouter), and automated code generation.",
        tags: ["React", "FastAPI", "Gemini API", "LangChain", "RAG", "Python"],
        link: "https://assignment2-gen-ai.vercel.app",
        github: "https://github.com/Swati-a11/MultiMind-AI",
        mainImage: mm1,
        screenshots: [mm1, mm2, mm3, mm4, mm5]
      },
      {
        title: "Advanced Course Assistant",
        subtitle: "RAG Lecture & Document Q&A",
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
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

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
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIdx, activeCategory, activeProject]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? projectsList.length - 1 : prev - 1));
  };

  // Theme tokens
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#FFFCE1] text-[#3D2E2B] border-[#FFDDB0]';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-[#3D2E2B]/50';
  const cardBg = isDarkMode ? 'bg-[#121620]/90 border-white/10 shadow-2xl' : 'bg-[#FFDDB0]/50 border-[#FFBE91]/40 shadow-xl';
  const tagBg = isDarkMode ? 'bg-white/5 text-white/70 border-white/10' : 'bg-[#FFFCE1] text-[#3D2E2B]/80 border-[#FFBE91]/50';
  const titleColor = isDarkMode ? 'text-white' : 'text-[#3D2E2B]';
  const descColor = isDarkMode ? 'text-[#e8e4d9]/75' : 'text-[#3D2E2B]/80';

  const btnPrimary = isDarkMode
    ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
    : 'bg-[#FFBE91] hover:bg-[#ffa970] text-[#3D2E2B] shadow-md shadow-[#FFBE91]/30 font-bold';

  const btnSecondary = isDarkMode
    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
    : 'bg-[#FFFCE1] hover:bg-white text-[#3D2E2B] border-[#FFBE91]/50';

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
        {/* Section Tag */}
        <span className={`text-xs uppercase tracking-[0.25em] block mb-4 font-mono font-bold ${textMuted}`}>
          / Featured Work
        </span>

        {/* Section Heading */}
        <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl mb-8 tracking-wide uppercase leading-none">
          Selected Projects
        </h2>

        {/* Category Folder Tabs */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-12">
          {categoryKeys.map((catKey) => {
            const isActive = activeCategory === catKey;
            const projectCount = projectCategories[catKey].length;

            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl border text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)] ring-1 ring-emerald-500/40'
                      : 'bg-[#FFBE91] border-[#FFBE91] text-[#3D2E2B] shadow-lg shadow-[#FFBE91]/30 ring-2 ring-[#FFBE91]'
                    : isDarkMode
                      ? 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20 hover:text-white hover:bg-white/[0.08]'
                      : 'bg-[#FFDDB0]/40 border-[#FFDDB0] text-[#3D2E2B]/60 hover:text-[#3D2E2B] hover:bg-[#FFDDB0]/80'
                }`}
              >
                {isActive ? (
                  <FolderOpen size={18} className={isActive ? (isDarkMode ? 'text-emerald-400' : 'text-[#3D2E2B]') : 'text-slate-400'} />
                ) : (
                  <Folder size={18} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                )}
                <span>{catKey}</span>
                <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                  isActive
                    ? isDarkMode
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-[#FFFCE1] text-[#3D2E2B] border-[#FFBE91]'
                    : isDarkMode
                      ? 'bg-white/5 text-white/40 border-white/10'
                      : 'bg-[#FFFCE1]/70 text-[#3D2E2B]/50 border-[#FFDDB0]'
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
            initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(12px)', y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 md:space-y-16"
          >
            {projectsList.map((project, idx) => (
              <div 
                key={project.title}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center"
              >
                {/* Left Side: Large Image Container */}
                <div className={`lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group border transition-all duration-500 z-10 ${
                  isDarkMode ? 'border-white/10 bg-[#121620]' : 'border-[#FFBE91]/40 bg-[#FFDDB0]'
                }`}>
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img 
                      src={project.screenshots[activeScreenIdx] || project.mainImage} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Screenshot Counter Pill */}
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                      <Eye size={12} className="text-emerald-400" />
                      <span>Screen {activeScreenIdx + 1} / {project.screenshots.length}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Overlapping Elevated Content Card */}
                <div className={`lg:col-span-6 lg:-ml-12 z-20 p-6 md:p-10 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${cardBg}`}>
                  <div className="space-y-4">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-mono font-bold px-3 py-1 rounded-full inline-block border ${
                      isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-[#FFFCE1] text-[#D97736] border-[#FFBE91]'
                    }`}>
                      {project.subtitle}
                    </span>

                    <h3 className={`text-2xl md:text-4xl font-bold tracking-tight ${titleColor}`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs md:text-sm font-light leading-relaxed ${descColor}`}>
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 pb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${btnPrimary}`}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${btnSecondary}`}
                      >
                        <Github size={15} />
                        GitHub
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

