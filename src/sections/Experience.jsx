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
        <span className={`text-xs uppercase tracking-[0.2em] block mb-6 ${textMuted}`}>
          / Professional Journey
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
          {"Experience".split(' ').map((word, i) => (
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

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 pb-12 border-b last:border-none last:pb-0 ${borderLine}`}
            >
              <div className="md:col-span-1">
                <span className={`text-2xl md:text-3xl font-bebas tracking-widest ${yearColor}`}>
                  {exp.year}
                </span>
              </div>
              <div className="md:col-span-3 space-y-3">
                <h3 className={`text-lg md:text-xl font-medium ${roleColor}`}>
                  {exp.role} <span className={`font-light text-sm ${companyColor}`}>@ {exp.company}</span>
                </h3>
                <p className={`text-sm md:text-base font-light leading-relaxed ${descColor}`}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
