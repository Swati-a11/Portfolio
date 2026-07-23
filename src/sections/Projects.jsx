import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Menu } from 'lucide-react';
import ws1 from '../assets/ws1.png';
import ws2 from '../assets/ws2.png';

const Projects = ({ isDarkMode }) => {
  const cards = [
    {
      id: "mern-stack",
      title: "MERN Stack Projects",
      description: "Full-stack MERN web applications featuring AI learning management system (CourseCraft), Razorpay credit- SaaS AI artwork generator (DreamDoodle). Built with React, Node, Node.js, MongoDB, and Gemini API.",
      primaryLink: "https://course-craft-ten.vercel.app",
      primaryLabel: "COURSECRAFT",
      secondaryLink: "https://dream-doodle.vercel.app",
      secondaryLabel: "DREAMDOODLE",
      image: ws1,
      imageAlt: "Developer workspace setup with dual monitors and mechanical keyboard"
    },
    {
      id: "gen-ai",
      title: "GenAI Projects",
      description: "Advanced Generative AI platforms featuring MultiMind AI multi-modal LLM intelligence engine and RAG-based Advanced Course Assistant for lecture summarization, document Q&A, and vector search.",
      primaryLink: "https://assignment2-gen-ai.vercel.app",
      primaryLabel: "MULTIMIND AI",
      secondaryLink: "https://rag-assignment-rouge.vercel.app",
      secondaryLabel: "COURSE ASSISTANT",
      image: ws2,
      imageAlt: "Laptop with code editor and coffee workspace setup"
    }
  ];

  // Theme tokens matching the user's screenshot 100%
  const sectionBg = isDarkMode ? 'bg-[#0a0d14] text-[#e8e4d9]' : 'bg-[#FFFCE1] text-[#1F2937]';
  const outerFrameBg = isDarkMode 
    ? 'bg-[#0f141e] border border-slate-800 shadow-2xl' 
    : 'bg-[#f4f5f9] border-4 border-[#5b3bf7] shadow-2xl';

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
        {/* Menu Icon Top-Right (Exact Match to User Screenshot) */}
        <div className="absolute top-8 right-8 z-30 p-2.5 rounded-xl border border-slate-700/60 bg-[#121824]/80 text-emerald-400 shadow-md">
          <Menu size={22} />
        </div>

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
          {cards.map((item) => (
            <div 
              key={item.id}
              className="relative flex flex-col lg:grid lg:grid-cols-12 items-center"
            >
              {/* Left Side: Developer Workspace Image Container */}
              <div className="w-full lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-700/40 bg-[#121620] z-10">
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
              <div className="w-[94%] sm:w-[88%] lg:w-[480px] lg:col-span-7 -mt-24 sm:-mt-32 md:-mt-44 lg:mt-24 lg:-ml-32 z-20 p-3 sm:p-4 rounded-[2rem] border border-slate-700/60 bg-[#0d121c]/90 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                <div className="p-6 sm:p-7 md:p-8 rounded-2xl bg-[#171f2e] border border-slate-700/40 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-300/90 font-sans">
                    {item.description}
                  </p>

                  {/* Action Buttons (Exact Match: Emerald Green Solid + Dark Slate Solid) */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={item.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c985] hover:bg-[#00b074] text-black shadow-lg shadow-[#00c985]/20 transition-all duration-300"
                    >
                      {item.primaryLabel} <ExternalLink size={13} />
                    </a>
                    <a
                      href={item.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3d4659] hover:bg-[#4b566d] text-white shadow-md transition-all duration-300"
                    >
                      {item.secondaryLabel} <ExternalLink size={13} />
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


