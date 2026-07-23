import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Linkedin } from '../components/Icons';

const Contact = ({ isDarkMode }) => {
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] text-[#e8e4d9] border-white/5' : 'bg-[#FFFCE1] text-[#1F2937] border-[#FFDDB0]';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-[#6B7280]';
  const titleColor = isDarkMode ? 'text-white' : 'text-[#1F2937]';

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
          <span className={`text-xs uppercase tracking-[0.2em] block ${textMuted}`}>
            / Connect
          </span>
          <h2 className={`font-bebas text-5xl md:text-7xl lg:text-8xl tracking-wide uppercase leading-none ${titleColor}`}>
            LET'S WORK<br />TOGETHER
          </h2>
          <p className={`text-sm md:text-base font-light max-w-md ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-[#6B7280]'}`}>
            Have a project in mind or looking for a full stack developer? Drop a message or reach out on social media.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
          <a
            href="mailto:ss08swati14singh@gmail.com"
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all duration-300 font-semibold text-xs tracking-wider uppercase text-center ${
              isDarkMode
                ? 'bg-white text-black border-white hover:bg-emerald-400 hover:border-emerald-400'
                : 'bg-gradient-to-r from-[#FFBE91] to-[#ffa970] text-[#1F2937] border-[#FFBE91] hover:shadow-[0_0_25px_rgba(255,190,145,0.5)] font-bold'
            }`}
          >
            <Mail size={16} />
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all duration-300 font-semibold text-xs tracking-wider uppercase text-center ${
              isDarkMode
                ? 'bg-transparent text-white border-white/20 hover:bg-white hover:text-black hover:border-white'
                : 'bg-gradient-to-r from-[#87CEEB]/20 to-[#87CEEB]/40 text-[#1F2937] border-[#87CEEB]/50 hover:shadow-[0_0_25px_rgba(135,206,235,0.4)] font-semibold'
            }`}
          >
            <Linkedin size={16} />
            LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
