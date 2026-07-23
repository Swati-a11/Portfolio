import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, Menu } from 'lucide-react';
import ws1 from '../assets/ws1.png';
import ws2 from '../assets/ws2.png';

const Projects = ({ isDarkMode }) => {
  const categoriesList = [
    {
      id: "mern-stack",
      category: "MERN STACK",
      title: "CourseCraft & DreamDoodle",
      subtitle: "Full-Stack Web Applications",
      description: "Full-stack MERN web applications featuring AI learning management, YouTube playlist tracking, automated AI note generation, credit-based Razorpay payment SaaS, and AI artwork generation.",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Razorpay", "Gemini API"],
      primaryLink: "https://course-craft-ten.vercel.app",
      primaryLabel: "CourseCraft",
      secondaryLink: "https://dream-doodle.vercel.app",
      secondaryLabel: "DreamDoodle",
      image: ws1,
      imageAlt: "Mechanical keyboard and developer laptop workspace setup"
    },
    {
      id: "gen-ai",
      category: "GEN AI",
      title: "MultiMind AI & Course Assistant",
      subtitle: "Generative AI & LLM Systems",
      description: "Advanced Generative AI platforms featuring multi-modal LLM intelligence engines, document analysis (RAG), lecture summarization, vector DB search, and automated code generation.",
      tags: ["Python", "FastAPI", "Gemini API", "LangChain", "RAG", "Vector DB"],
      primaryLink: "https://assignment2-gen-ai.vercel.app",
      primaryLabel: "MultiMind AI",
      secondaryLink: "https://rag-assignment-rouge.vercel.app",
      secondaryLabel: "Course Assistant",
      image: ws2,
      imageAlt: "Laptop with code editor and coffee workspace setup"
    }
  ];

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
        <div className="relative text-center mb-16 select-none pt-4">
          <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-7xl md:text-9xl lg:text-[13rem] font-bold tracking-widest pointer-events-none ${watermarkColor}`}>
            PROJECTS
          </span>
          <h2 className="relative z-10 font-bebas text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none font-bold">
            PROJECTS
          </h2>
        </div>

        {/* Two Category Showcase Cards (MERN STACK & GEN AI) */}
        <div className="space-y-20 md:space-y-28 pb-6">
          {categoriesList.map((item) => (
            <div 
              key={item.id}
              className="relative grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* Left Side: Portrait Keyboard & Laptop Image Container (Matching Reference Image) */}
              <div className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl group border transition-all duration-500 z-10 ${
                isDarkMode ? 'border-white/10 bg-[#121620]' : 'border-2 border-[#5b3bf7]/30 bg-white shadow-xl shadow-[#5b3bf7]/10'
              }`}>
                <div className="aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none" />

                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5b3bf7] text-xs font-bold tracking-widest uppercase text-white shadow-lg">
                    {item.category === "GEN AI" ? <Sparkles size={14} className="text-white" /> : <Code2 size={14} className="text-white" />}
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Overlapping Floating Content Card (Exact Match to Reference Image) */}
              <div className={`lg:col-span-7 lg:-ml-20 lg:mt-12 z-20 p-8 md:p-12 rounded-3xl backdrop-blur-xl transition-all duration-500 ${cardBg}`}>
                <div className="space-y-5">
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-mono font-bold px-3.5 py-1.5 rounded-full inline-block border ${
                    isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-[#5b3bf7]/10 text-[#5b3bf7] border-[#5b3bf7]/30'
                  }`}>
                    {item.subtitle}
                  </span>

                  <h3 className={`text-3xl md:text-5xl font-bold tracking-tight ${titleColor}`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs md:text-sm font-light leading-relaxed ${descColor}`}>
                    {item.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 pb-4">
                    {item.tags.map((tag) => (
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
                      href={item.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${btnPrimary}`}
                    >
                      {item.primaryLabel} <ExternalLink size={14} />
                    </a>
                    <a
                      href={item.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${btnSecondary}`}
                    >
                      {item.secondaryLabel} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;


