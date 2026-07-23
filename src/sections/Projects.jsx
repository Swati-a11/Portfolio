import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { Github } from '../components/Icons';
import ws1 from '../assets/ws1.png';
import ws2 from '../assets/ws2.png';
import cc1 from '../assets/cc1.png';
import dd1 from '../assets/dd1.png';
import mm1 from '../assets/mm1.png';
import aca1 from '../assets/aca1.png';

const Projects = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: "mern-stack",
      title: "MERN Stack Projects",
      subtitle: "Full-Stack Web Applications",
      description: "Full-stack MERN web applications featuring AI learning management system (CourseCraft) and Razorpay credit-based SaaS AI artwork generator (DreamDoodle). Built with React, Node.js, MongoDB, and Gemini API.",
      image: ws1,
      imageAlt: "Developer workspace setup with dual monitors and mechanical keyboard",
      projects: [
        {
          title: "CourseCraft",
          subtitle: "AI Learning Management System",
          description: "An AI-powered learning management system with YouTube playlist tracking, automated AI notes generation, streak system, and interactive practice questions.",
          tags: ["React", "Node.js", "MongoDB", "Gemini API", "YouTube API"],
          link: "https://course-craft-ten.vercel.app",
          github: "https://github.com/Swati-a11/CourseCraft",
          image: cc1,
          imageAlt: "CourseCraft platform screenshot preview"
        },
        {
          title: "DreamDoodle",
          subtitle: "AI Artwork Generator & SaaS",
          description: "An AI image generator with Razorpay payment gateway integration, credit-based model, instant high-res downloads, and creative prompt gallery.",
          tags: ["React", "Node.js", "MongoDB", "Razorpay", "AI Image Gen"],
          link: "https://dream-doodle.vercel.app",
          github: "https://github.com/Swati-a11/DreamDoodle",
          image: dd1,
          imageAlt: "DreamDoodle platform screenshot preview"
        }
      ]
    },
    {
      id: "gen-ai",
      title: "GenAI Projects",
      subtitle: "Generative AI & LLM Systems",
      description: "Advanced Generative AI platforms featuring MultiMind AI multi-modal LLM intelligence engine and RAG-based Advanced Course Assistant for lecture summarization, document Q&A, and vector search.",
      image: ws2,
      imageAlt: "Laptop with code editor and coffee workspace setup",
      projects: [
        {
          title: "MultiMind AI",
          subtitle: "Multi-LLM Intelligence Platform",
          description: "An intelligent multi-modal GenAI platform integrating LLM chat, document analysis (RAG), dynamic context switching, and automated code generation.",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Gemini API", "LangChain", "RAG"],
          link: "https://assignment2-gen-ai.vercel.app",
          github: "https://github.com/Swati-a11/MultiMind-AI",
          image: mm1,
          imageAlt: "MultiMind AI platform screenshot preview"
        },
        {
          title: "Advanced Course Assistant",
          subtitle: "RAG Document & Lecture Q&A",
          description: "An AI academic assistant featuring RAG-based document Q&A, automated lecture summarization, smart quizzes, and indexed course material search.",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "OpenAI API", "Vector DB", "RAG"],
          link: "https://rag-assignment-rouge.vercel.app",
          github: "https://github.com/Swati-a11/Advanced-Course-Assistant",
          image: aca1,
          imageAlt: "Advanced Course Assistant platform preview"
        }
      ]
    }
  ];

  // Theme tokens matching the user's screenshot 100%
  const sectionBg = isDarkMode ? 'bg-[#0a0d14] text-[#e8e4d9]' : 'bg-[#FFFCE1] text-[#1F2937]';
  const outerFrameBg = isDarkMode 
    ? 'bg-[#0f141e] border border-slate-800 shadow-2xl' 
    : 'bg-[#f4f5f9] border-4 border-[#5b3bf7] shadow-2xl';

  const activeCategoryData = categories.find(c => c.id === selectedCategory);

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
        className={`max-w-6xl mx-auto relative rounded-[2.5rem] p-6 sm:p-10 md:p-14 ${outerFrameBg}`}
      >
        {/* Centered Heading with Watermark */}
        <div className="relative text-center mb-16 select-none pt-2">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-7xl md:text-9xl lg:text-[13rem] font-bold tracking-widest pointer-events-none text-slate-500/10">
            PROJECTS
          </span>
          <h2 className="relative z-10 font-bebas text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none font-bold">
            PROJECTS
          </h2>
        </div>

        {/* Showcase Cards matching User Screenshot 100% */}
        <div className="space-y-24 md:space-y-36 pb-6">
          {categories.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedCategory(item.id)}
              className="relative flex flex-col lg:grid lg:grid-cols-12 items-center cursor-pointer group"
            >
              {/* Left Side: Developer Workspace Image Container */}
              <div className="w-full lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/40 bg-[#121620] z-10">
                <div className="aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Small Red Dot Accent on Bottom-Right Edge (Exact Match to Screenshot) */}
                  <div className="absolute bottom-4 right-4 z-20 w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/80" />
                </div>
              </div>

              {/* Right Side: Floating Dark Content Card (Exact Overlapping Match to Screenshot) */}
              <div className="w-[94%] sm:w-[88%] lg:w-[480px] lg:col-span-7 -mt-24 sm:-mt-32 md:-mt-44 lg:mt-24 lg:-ml-32 z-20 p-3 sm:p-4 rounded-[2rem] border border-slate-700/60 bg-[#0d121c]/90 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] group-hover:border-emerald-500/40 transition-colors">
                <div className="p-6 sm:p-7 md:p-8 rounded-2xl bg-[#171f2e] border border-slate-700/40 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight size={18} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-300/90 font-sans">
                    {item.description}
                  </p>

                  {/* Action Button: Opens the 2 Underlying Projects */}
                  <div className="pt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(item.id);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c985] hover:bg-[#00b074] text-black shadow-lg shadow-[#00c985]/20 transition-all duration-300 cursor-pointer"
                    >
                      <span>EXPLORE 2 PROJECTS</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Modal showing the two projects when a card is clicked */}
      <AnimatePresence>
        {selectedCategory && activeCategoryData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-[2.5rem] bg-[#0d121c] border border-slate-700/80 p-6 sm:p-10 shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20 z-20"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-10 text-center space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-emerald-400 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 inline-block">
                  {activeCategoryData.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  {activeCategoryData.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-light">
                  Explore live deployments, interactive features, tech stacks, and source code.
                </p>
              </div>

              {/* 2 Project Cards inside Modal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeCategoryData.projects.map((project) => (
                  <div 
                    key={project.title}
                    className="flex flex-col rounded-3xl bg-[#171f2e] border border-slate-700/60 overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all duration-300"
                  >
                    {/* Project Screenshot Container */}
                    <div className="aspect-video w-full overflow-hidden relative group">
                      <img 
                        src={project.image} 
                        alt={project.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-400 bg-black/60 px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md">
                        {project.subtitle}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold tracking-tight text-white">
                          {project.title}
                        </h4>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-slate-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Live Demo & GitHub Action Buttons */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-700/40">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c985] hover:bg-[#00b074] text-black shadow-lg shadow-[#00c985]/20 transition-all duration-300"
                        >
                          Live Demo <ExternalLink size={13} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3d4659] hover:bg-[#4b566d] text-white transition-all duration-300"
                        >
                          GitHub <Github size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;


