import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ isDarkMode }) => {
  const categories = [
    {
      title: "Frontend Tools",
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Framer Motion", "JavaScript (ES6+)", "Redux Toolkit", "Vite"]
    },
    {
      title: "Backend Tools",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "Python", "JWT Auth", "Mongoose"]
    },
    {
      title: "AI & Integration",
      skills: ["Gemini API", "OpenAI API", "LangChain (basics)", "Resend", "YouTube API", "RAG Architecture"]
    },
    {
      title: "Other & Core",
      skills: ["C++", "Git/GitHub", "Vercel", "Render", "MongoDB Atlas", "Postman", "DSA (50+ solved)"]
    }
  ];

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-white text-black border-black/5';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';
  const cardBorder = isDarkMode ? 'border-white/5 bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.02]' : 'border-black/5 bg-slate-50 hover:border-emerald-500/10 hover:bg-emerald-500/5';
  const cardHeader = isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5';
  const dotColor = isDarkMode ? 'bg-orange-400/40' : 'bg-emerald-500';
  const listColor = isDarkMode ? 'text-[#e8e4d9]/70' : 'text-black/70';

  return (
    <section 
      id="skills" 
      className={`py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto"
      >
        <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
          / Stack & Tools
        </span>

        <h2 className="font-bebas text-4xl md:text-6xl mb-16 tracking-wide uppercase">
          Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className={`p-6 rounded-2xl flex flex-col transition-all duration-300 border ${cardBorder}`}
            >
              <h3 className={`text-xs font-semibold tracking-widest uppercase mb-6 pb-2 border-b ${cardHeader}`}>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className={`text-sm font-light tracking-wide flex items-center gap-2 ${listColor}`}>
                    <span className={`w-1 h-1 rounded-full ${dotColor}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
