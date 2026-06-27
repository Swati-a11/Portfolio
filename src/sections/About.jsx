import React from 'react';
import { motion } from 'framer-motion';

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
      </motion.div>
    </section>
  );
};

export default About;
