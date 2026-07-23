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
        : "border-2 border-[#0A4222] bg-[#FDE02F] text-[#000000] font-bold shadow-md" 
    },
    { 
      name: "Strings", 
      status: "Coming up", 
      icon: Clock, 
      color: isDarkMode 
        ? "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
        : "border-2 border-[#0A4222] bg-white text-[#000000] font-medium shadow-sm" 
    },
    { 
      name: "Linked Lists", 
      status: "Coming up", 
      icon: Clock, 
      color: isDarkMode 
        ? "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
        : "border-2 border-[#0A4222] bg-white text-[#000000] font-medium shadow-sm" 
    },
    { 
      name: "Trees & Graphs", 
      status: "Coming up", 
      icon: Clock, 
      color: isDarkMode 
        ? "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
        : "border-2 border-[#0A4222] bg-white text-[#000000] font-medium shadow-sm" 
    },
  ];

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#F7BBD0] text-[#000000] border-[#0A4222]/30';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-[#000000]/70 font-semibold';
  const textNormal = isDarkMode ? 'text-[#e8e4d9]/70' : 'text-[#000000]';
  const strongColor = isDarkMode ? 'text-white' : 'text-[#000000] font-bold';
  const bottomBox = isDarkMode ? 'border-white/5 bg-white/[0.005]' : 'border-2 border-[#0A4222] bg-white shadow-xl text-[#000000]';
  const linkHover = isDarkMode ? 'hover:text-white' : 'hover:text-[#0A4222] font-bold';

  return (
    <section 
      id="dsa" 
      className={`py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <span className={`text-sm uppercase tracking-[0.25em] font-mono font-bold block mb-6 ${textMuted}`}>
          / Problem Solving
        </span>

        <motion.h2
          className="font-bebas text-5xl md:text-7xl lg:text-8xl mb-10 tracking-wide uppercase leading-[1.05] flex flex-wrap gap-x-[0.25em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
        >
          {"Solving problems, one line at a time.".split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.95 },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <p className={`text-lg md:text-2xl font-semibold leading-relaxed mb-14 max-w-3xl transition-colors duration-500 ${textNormal}`}>
          I solve DSA problems daily in C++ — currently <strong className={`font-bold underline decoration-2 underline-offset-4 ${strongColor}`}>50+ problems solved</strong> and counting. Following <strong className={`font-bold underline decoration-2 underline-offset-4 ${strongColor}`}>Striver's A2Z DSA Sheet</strong> systematically.
        </p>

        {/* Progress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05, y: -4 }}
                className={`border-2 p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xl ${topic.color}`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-6">
                    {topic.name}
                  </h3>
                  <div className="text-sm font-bold flex items-center gap-2 mt-auto">
                    <Icon size={16} />
                    {topic.status}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Platforms and Languages */}
        <div className={`flex flex-wrap items-center justify-between gap-6 p-7 rounded-3xl border-2 transition-colors duration-500 shadow-xl ${bottomBox}`}>
          <div className="flex items-center gap-3">
            <Code size={22} className={isDarkMode ? 'text-white' : 'text-[#0A4222]'} />
            <span className={`text-base md:text-lg font-medium ${isDarkMode ? 'text-[#e8e4d9]' : 'text-black'}`}>
              Language: <strong className={`font-bold ${isDarkMode ? 'text-white' : 'text-[#0A4222]'}`}>C++ / Python</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen size={22} className={isDarkMode ? 'text-white' : 'text-[#0A4222]'} />
            <span className={`text-base md:text-lg font-medium ${isDarkMode ? 'text-[#e8e4d9]' : 'text-black'}`}>
              Platform: <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 transition-colors font-bold ${linkHover}`}>LeetCode</a>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DSA;
