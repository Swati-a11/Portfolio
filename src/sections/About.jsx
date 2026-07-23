import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, FileText } from 'lucide-react';

const About = ({ isDarkMode }) => {
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-white text-black border-black/5';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';
  const textNormal = isDarkMode ? 'text-[#e8e4d9]/80' : 'text-black/75';
  const highlightGradient = isDarkMode 
    ? 'from-orange-400 via-yellow-200 to-amber-400' 
    : 'from-emerald-600 via-teal-500 to-green-600';

  return (
    <section 
      id="about" 
      className={`py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Label */}
        <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
          / About Me
        </span>

        {/* Heading with staggered word typography animation */}
        <motion.h2 
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-bebas text-4xl md:text-6xl lg:text-7xl mb-12 tracking-wide uppercase leading-[1.1] max-w-3xl flex flex-wrap gap-x-[0.25em]"
        >
          {"I build websites and".split(" ").map((word, i) => (
            <motion.span 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1] }
                }
              }} 
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
          {"AI-powered products.".split(" ").map((word, i) => (
            <motion.span 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1] }
                }
              }} 
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${highlightGradient}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Content Paragraphs */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm md:text-base font-light tracking-wide leading-relaxed transition-colors duration-500 ${textNormal}`}>
          <div className="space-y-6">
            <p>
              I specialize in crafting full-stack web applications using the MERN stack with AI integration. I'm passionate about building software that solves real problems.
            </p>
            <p>
              Beyond development, I'm actively solving DSA problems daily (50+ questions solved in C++ and Python) — strengthening my problem-solving skills for competitive programming and interviews.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              I completed 45 days of industrial training at The Core System, Chandigarh in MERN Stack with AI, where I built real-world projects under professional mentorship.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new UI designs and finding creative ways to make things look premium and feel smooth.
            </p>
          </div>
        </div>

        {/* Dedicated Resume Section directly below About */}
        <div id="resume" className="mt-16 pt-10 border-t border-emerald-500/20">
          <div className={`p-6 md:p-8 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-500 ${
            isDarkMode 
              ? 'bg-[#121620]/70 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]' 
              : 'bg-emerald-50/70 border-emerald-500/20 shadow-sm'
          }`}>
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-emerald-500" />
                <h3 className={`text-xl md:text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Curriculum Vitae / Resume
                </h3>
              </div>
              <p className={`text-xs md:text-sm font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/70' : 'text-black/60'}`}>
                View or download my resume covering software engineering experience, technical stack, key projects, and academic background.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30'
                    : 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
                }`}
              >
                <Eye size={16} />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Swati_Kumari_Resume.pdf"
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    : 'bg-white text-black border-black/20 hover:bg-slate-100'
                }`}
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
