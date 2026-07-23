import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, CheckCircle, Clock } from 'lucide-react';

const DSA = ({ isDarkMode }) => {
  const topics = [
    { 
      name: "Arrays", 
      status: "In Progress", 
      icon: CheckCircle, 
      color: isDarkMode 
        ? "border-emerald-500/20 bg-emerald-500/[0.01] text-emerald-400" 
        : "border-emerald-500/20 bg-emerald-50/70 text-emerald-700" 
    },
    { 
      name: "Strings", 
      status: "Coming up", 
      icon: Clock, 
      color: isDarkMode 
        ? "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
        : "border-black/5 bg-slate-50 text-black/40" 
    },
    { 
      name: "Linked Lists", 
      status: "Coming up", 
      icon: Clock, 
      color: isDarkMode 
        ? "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
        : "border-black/5 bg-slate-50 text-black/40" 
    },
    { 
      name: "Trees & Graphs", 
      status: "Coming up", 
      icon: Clock, 
      color: isDarkMode 
        ? "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
        : "border-black/5 bg-slate-50 text-black/40" 
    },
  ];

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-white text-black border-black/5';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';
  const textNormal = isDarkMode ? 'text-[#e8e4d9]/70' : 'text-black/70';
  const strongColor = isDarkMode ? 'text-white' : 'text-black';
  const bottomBox = isDarkMode ? 'border-white/5 bg-white/[0.005]' : 'border-black/5 bg-slate-50';
  const linkHover = isDarkMode ? 'hover:text-white' : 'hover:text-emerald-600';

  return (
    <section 
      id="dsa" 
      className={`py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(15px)', scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
          / Problem Solving
        </span>

        <motion.h2
          className="font-bebas text-4xl md:text-6xl mb-8 tracking-wide uppercase leading-[1.1] flex flex-wrap gap-x-[0.22em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
          }}
        >
          {"Solving problems, one line at a time.".split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <p className={`text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl transition-colors duration-500 ${textNormal}`}>
          I solve DSA problems daily in C++ — currently <strong className={`font-semibold ${strongColor}`}>50+ problems solved</strong> and counting. Following <strong className={`font-semibold ${strongColor}`}>Striver's A2Z DSA Sheet</strong> systematically.
        </p>

        {/* Progress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div 
                key={idx} 
                className={`border p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ${topic.color}`}
              >
                <div>
                  <h3 className="text-base font-medium tracking-wide mb-4">
                    {topic.name}
                  </h3>
                  <div className="text-xs font-light flex items-center gap-1.5 mt-auto">
                    <Icon size={14} />
                    {topic.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platforms and Languages */}
        <div className={`flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl border transition-colors duration-500 ${bottomBox}`}>
          <div className="flex items-center gap-3">
            <Code size={18} className={isDarkMode ? 'text-white/40' : 'text-black/40'} />
            <span className={`text-sm font-light ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-black/60'}`}>
              Language: <strong className={`font-medium ${isDarkMode ? 'text-[#e8e4d9]' : 'text-black'}`}>C++ / Python</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen size={18} className={isDarkMode ? 'text-white/40' : 'text-black/40'} />
            <span className={`text-sm font-light ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-black/60'}`}>
              Platform: <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 transition-colors ${linkHover}`}>LeetCode</a>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DSA;
