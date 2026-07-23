import React from 'react';
import { Mail, Sun, Moon, AlignRight, FileText, Eye, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import avatar from '../assets/avatar.png';

const Navbar = ({ isDarkMode, toggleTheme, onToggleSidebar }) => {
  const navBg = isDarkMode 
    ? 'bg-[#0a0a0a]/80 border-white/5 text-[#e8e4d9]' 
    : 'bg-[#FFFCE1]/80 border-white/50 text-[#1F2937] shadow-sm';

  const linkColor = isDarkMode
    ? 'text-[#e8e4d9]/70 hover:text-[#e8e4d9]'
    : 'text-[#1F2937]/75 hover:text-[#0284c7]';

  const btnHover = isDarkMode
    ? 'hover:bg-white/10 text-white'
    : 'hover:bg-[#87CEEB]/30 text-[#0284c7]';

  const resumeBtnStyle = isDarkMode
    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
    : 'bg-emerald-50 border-emerald-500/20 text-emerald-700 hover:bg-emerald-100';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-3 py-2.5 md:px-12 md:py-4 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-500 ${navBg}`}>
      {/* Logo / Brand */}
      <a 
        href="#hero" 
        className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] transition-colors duration-300 uppercase"
      >
        <div className="relative flex-shrink-0">
          <img 
            src={avatar} 
            alt="Swati Kumari Logo" 
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full object-cover hover:scale-105 transition-transform duration-300 border ${
              isDarkMode ? 'border-white/20' : 'border-black/10'
            }`}
          />
          <span className="absolute bottom-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
        <span className="inline font-bold">SWATI KUMARI</span>
      </a>

      {/* Right side controls */}
      <div className="flex gap-1.5 md:gap-4 items-center text-xs md:text-sm">
        {/* Nav links — responsive on mobile & desktop */}
        <a 
          href="https://github.com/Swati-a11" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-1 p-1.5 md:p-0 hover:translate-y-[-1px] transition-all duration-300 ${linkColor}`}
          title="GitHub"
        >
          <Github size={15} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-1 p-1.5 md:p-0 hover:translate-y-[-1px] transition-all duration-300 ${linkColor}`}
          title="LinkedIn"
        >
          <Linkedin size={15} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a 
          href="mailto:ss08swati14singh@gmail.com"
          className={`flex items-center gap-1 p-1.5 md:p-0 hover:translate-y-[-1px] transition-all duration-300 ${linkColor}`}
          title="Email"
        >
          <Mail size={15} />
          <span className="hidden sm:inline">Email</span>
        </a>



        {/* Theme toggle */}
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${btnHover}`}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Sidebar toggle */}
        <button
          onClick={onToggleSidebar}
          className={`p-2 rounded-full transition-all duration-300 ${btnHover}`}
          title="Open menu"
          aria-label="Open sidebar"
        >
          <AlignRight size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
