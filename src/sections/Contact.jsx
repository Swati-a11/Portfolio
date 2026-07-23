import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Linkedin } from '../components/Icons';

const Contact = ({ isDarkMode }) => {
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#F7BBD0] text-[#000000] border-[#0A4222]/30';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-[#000000]/70 font-semibold';
  const titleColor = isDarkMode ? 'text-white' : 'text-[#000000]';

  return (
    <section 
      id="contact" 
      className={`py-24 px-6 md:px-12 overflow-hidden border-t transition-colors duration-500 ${bgStyle}`}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12"
      >
        <div className="space-y-6">
          <span className={`text-sm uppercase tracking-[0.25em] font-mono font-bold block ${textMuted}`}>
            / Connect
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`font-bebas text-6xl md:text-8xl lg:text-[7rem] tracking-wide uppercase leading-none ${titleColor}`}
          >
            LET'S WORK<br />TOGETHER
          </motion.h2>
          <p className={`text-lg md:text-2xl font-bold leading-relaxed max-w-lg ${isDarkMode ? 'text-[#e8e4d9]/80' : 'text-[#000000]'}`}>
            Have a project in mind or looking for a full stack developer? Drop a message or reach out on social media.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-5 w-full md:w-auto">
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:ss08swati14singh@gmail.com"
            className={`flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 transition-all duration-300 font-bold text-sm md:text-base tracking-wider uppercase text-center cursor-pointer interactive ${
              isDarkMode
                ? 'bg-white text-black border-white hover:bg-emerald-400 hover:border-emerald-400 shadow-xl'
                : 'bg-[#FDE02F] text-[#000000] border-[#0A4222] hover:bg-[#ebd025] shadow-2xl'
            }`}
          >
            <Mail size={18} />
            Send Email
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 transition-all duration-300 font-bold text-sm md:text-base tracking-wider uppercase text-center cursor-pointer interactive ${
              isDarkMode
                ? 'bg-transparent text-white border-white/20 hover:bg-white hover:text-black hover:border-white shadow-xl'
                : 'bg-white text-[#000000] border-[#0A4222] hover:bg-slate-100 shadow-2xl'
            }`}
          >
            <Linkedin size={18} />
            LinkedIn Profile
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
