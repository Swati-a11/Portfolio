import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, FileCode, Palette, Wand2, Sparkles, Server, Cpu, Database, 
  Globe, Flame, Terminal, ShieldCheck, Bot, Brain, Link, Mail, 
  Video, Layers, Code, GitBranch, Cloud, Send, CheckCircle, Zap, Boxes
} from 'lucide-react';

const skillIconMap = {
  "Next.js": <Globe size={16} className="text-[#000000] dark:text-white flex-shrink-0" />,
  "TypeScript (TS)": <Code2 size={16} className="text-blue-600 flex-shrink-0" />,
  "TypeScript": <Code2 size={16} className="text-blue-600 flex-shrink-0" />,
  "React.js": <Code2 size={16} className="text-sky-400 flex-shrink-0" />,
  "HTML5": <FileCode size={16} className="text-orange-500 flex-shrink-0" />,
  "CSS3": <Palette size={16} className="text-blue-500 flex-shrink-0" />,
  "TailwindCSS": <Wand2 size={16} className="text-cyan-400 flex-shrink-0" />,
  "Framer Motion": <Sparkles size={16} className="text-purple-400 flex-shrink-0" />,
  "JavaScript (ES6+)": <FileCode size={16} className="text-yellow-400 flex-shrink-0" />,
  "Redux Toolkit": <Layers size={16} className="text-indigo-400 flex-shrink-0" />,
  "Vite": <Zap size={16} className="text-amber-400 flex-shrink-0" />,
  "Node.js": <Server size={16} className="text-emerald-500 flex-shrink-0" />,
  "Express.js": <Cpu size={16} className="text-emerald-400 flex-shrink-0" />,
  "MongoDB": <Database size={16} className="text-emerald-500 flex-shrink-0" />,
  "REST APIs": <Globe size={16} className="text-indigo-400 flex-shrink-0" />,
  "FastAPI": <Flame size={16} className="text-teal-400 flex-shrink-0" />,
  "Python": <Terminal size={16} className="text-blue-400 flex-shrink-0" />,
  "JWT Auth": <ShieldCheck size={16} className="text-rose-400 flex-shrink-0" />,
  "Mongoose": <Database size={16} className="text-rose-500 flex-shrink-0" />,
  "Gemini API": <Bot size={16} className="text-cyan-400 flex-shrink-0" />,
  "OpenAI API": <Brain size={16} className="text-emerald-400 flex-shrink-0" />,
  "LangChain (basics)": <Link size={16} className="text-teal-300 flex-shrink-0" />,
  "Resend": <Mail size={16} className="text-slate-400 flex-shrink-0" />,
  "YouTube API": <Video size={16} className="text-red-500 flex-shrink-0" />,
  "RAG Architecture": <Layers size={16} className="text-purple-400 flex-shrink-0" />,
  "C++": <Code size={16} className="text-blue-500 flex-shrink-0" />,
  "Git/GitHub": <GitBranch size={16} className="text-orange-400 flex-shrink-0" />,
  "Vercel": <Cloud size={16} className="text-slate-300 flex-shrink-0" />,
  "Render": <Server size={16} className="text-cyan-400 flex-shrink-0" />,
  "MongoDB Atlas": <Database size={16} className="text-emerald-600 flex-shrink-0" />,
  "Postman": <Send size={16} className="text-orange-500 flex-shrink-0" />,
  "DSA (50+ solved)": <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />,
};

const Skills = ({ isDarkMode }) => {
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#F7BBD0] text-[#000000] border-[#0A4222]/30';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-[#000000]/70 font-semibold';

  const categories = [
    {
      title: "Frontend Tools",
      skills: ["Next.js", "TypeScript (TS)", "React.js", "HTML5", "CSS3", "TailwindCSS", "Framer Motion", "JavaScript (ES6+)"]
    },
    {
      title: "Backend Tools",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "Python"]
    },
    {
      title: "AI Integration",
      skills: ["Gemini API", "OpenAI API", "YouTube API", "RAG Architecture"]
    }
  ];

  const itemBorder = isDarkMode 
    ? 'border-white/5 bg-white/[0.02] text-[#e8e4d9]/80 hover:text-white hover:border-emerald-500/30' 
    : 'border-[#0A4222]/40 bg-white text-[#000000] font-medium hover:bg-[#FDE02F] hover:border-[#0A4222]';

  const cardBorder = isDarkMode ? 'border-white/5 bg-white/[0.01] hover:border-white/15' : 'border-2 border-[#0A4222] bg-white shadow-xl text-[#000000]';
  const cardHeader = isDarkMode ? 'text-white/40 border-white/5' : 'text-[#0A4222] font-bold border-[#0A4222]/30';

  return (
    <section 
      id="skills" 
      className={`py-24 px-4 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto"
      >
        <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
          / Stack & Tools
        </span>

        <motion.h2
          className="font-bebas text-4xl md:text-6xl mb-16 tracking-wide uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
          }}
        >
          {"Capabilities".split(' ').map((word, i) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className={`p-6 rounded-2xl flex flex-col transition-all duration-300 border ${cardBorder}`}
            >
              <h3 className={`text-xs font-semibold tracking-widest uppercase mb-6 pb-2 border-b ${cardHeader}`}>
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx} 
                    className={`text-xs md:text-sm font-medium tracking-wide flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-200 ${itemBorder}`}
                  >
                    {skillIconMap[skill] || <Boxes size={16} className="text-emerald-500 flex-shrink-0" />}
                    <span className="truncate">{skill}</span>
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
