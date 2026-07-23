import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Linkedin } from '../components/Icons';

const Contact = ({ isDarkMode }) => {
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-white text-black border-black/5';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';
  const titleColor = isDarkMode ? 'text-[#e8e4d9]' : 'text-black';
  const descColor = isDarkMode ? 'text-[#e8e4d9]/70' : 'text-black/70';
  const btnStyle = isDarkMode
    ? 'border-white/10 bg-white/[0.01] hover:bg-[#e8e4d9] hover:text-[#0a0a0a]'
    : 'border-black/10 bg-slate-50 hover:bg-black hover:text-white';

  return (
    <section 
      id="contact" 
      className={`py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(15px)', scale: 0.95, y: 25 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12"
      >
        <div className="space-y-6">
          <span className={`text-xs uppercase tracking-[0.2em] block ${textMuted}`}>
            / Connect
          </span>
          <motion.h2
            className={`font-bebas text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase ${titleColor}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
            }}
          >
            {["Let's", "Talk"].map((word, i) => (
              <motion.span
                key={i}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className={`text-sm md:text-base font-light max-w-sm leading-relaxed ${descColor}`}>
            Got a project, question, or just want to connect?
            I'm always open to new opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full sm:w-auto">
          <a
            href="mailto:ss08swati14singh@gmail.com"
            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 font-medium text-sm tracking-wider uppercase text-center ${btnStyle}`}
          >
            <Mail size={16} />
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 font-medium text-sm tracking-wider uppercase text-center ${btnStyle}`}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
