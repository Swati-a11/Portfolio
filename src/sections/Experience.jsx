import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      year: "2026",
      role: "Full Stack Intern",
      company: "COGNEFY (Performance-based)",
      description: "Built an AI Customer Support Assistant from scratch — full RBAC system, chat sessions, document management, ticket system, and admin analytics dashboard."
    },
    {
      year: "2024",
      role: "Industrial Training (45 Days)",
      company: "The Core System, Chandigarh",
      description: "Full-stack development training in MERN Stack with AI integration. Built real-world projects and learned professional development practices."
    }
  ];

  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#F7BBD0] text-[#000000] border-[#0A4222]/30';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-[#000000]/70 font-semibold';
  const yearColor = isDarkMode ? 'text-[#e8e4d9]/30' : 'text-[#0A4222] font-bold';
  const roleColor = isDarkMode ? 'text-white' : 'text-[#000000] font-bold';
  const companyColor = isDarkMode ? 'text-[#e8e4d9]/40' : 'text-[#0A4222] font-bold';
  const descColor = isDarkMode ? 'text-[#e8e4d9]/70' : 'text-[#000000]';
  const borderLine = isDarkMode ? 'border-white/5' : 'border-[#0A4222]/30';

  return (
    <section 
      id="experience" 
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
          / Professional Journey
        </span>

        <motion.h2
          className="font-bebas text-5xl md:text-7xl lg:text-8xl mb-16 tracking-wide uppercase leading-[1.05]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
          }}
        >
          {"Experience".split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.22em] last:mr-0"
              variants={{
                hidden: { opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.95 },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <div className="space-y-14">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 pb-14 border-b-2 last:border-none last:pb-0 ${borderLine}`}
            >
              <div className="md:col-span-1">
                <span className={`text-4xl md:text-6xl font-bebas tracking-widest block ${yearColor}`}>
                  {exp.year}
                </span>
              </div>
              <div className="md:col-span-3 space-y-4">
                <h3 className={`text-2xl md:text-3xl font-bold flex flex-wrap items-center gap-2 ${roleColor}`}>
                  <span>{exp.role}</span>
                  <span className={`font-bold text-lg md:text-2xl ${companyColor}`}>@ {exp.company}</span>
                </h3>
                <p className={`text-base md:text-xl font-medium leading-relaxed ${descColor}`}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
