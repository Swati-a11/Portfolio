import React from 'react';
import { Mail, Sun, Moon, LayoutGrid, List, AlignRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import avatar from '../assets/avatar.png';

const Navbar = ({ isDarkMode, toggleTheme, isBentoLayout, toggleLayout, onToggleSidebar }) => {
  const navBg = isDarkMode 
    ? 'bg-[#0a0a0a]/80 border-white/5 text-[#e8e4d9]' 
    : 'bg-white/90 border-black/5 text-black';

  const linkColor = isDarkMode
    ? 'text-[#e8e4d9]/70 hover:text-[#e8e4d9]'
    : 'text-black/60 hover:text-emerald-600';

  const btnHover = isDarkMode
    ? 'hover:bg-white/10 text-white'
    : 'hover:bg-black/5 text-emerald-600';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-500 ${navBg}`}>
      <a 
        href="#hero" 
        className="flex items-center gap-3 text-xs md:text-sm font-semibold tracking-[0.2em] transition-colors duration-300 uppercase"
      >
        <div className="relative">
          <img 
            src={avatar} 
            alt="Swati Kumari Logo" 
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full object-cover hover:scale-105 transition-transform duration-300 border ${
              isDarkMode ? 'border-white/20' : 'border-black/10'
            }`}
          />
          {/* Pulsing work indicator badge next to profile image */}
          <span className="absolute bottom-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
        <span className="flex items-center gap-2">
          SWATI KUMARI
        </span>
      </a>

      <div className="flex gap-3 md:gap-5 items-center text-xs md:text-sm">
        <a 
          href="https://github.com/Swati-a11" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`hidden md:flex items-center gap-1.5 hover:translate-y-[-1px] transition-all duration-300 ${linkColor}`}
        >
          <Github size={15} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`hidden md:flex items-center gap-1.5 hover:translate-y-[-1px] transition-all duration-300 ${linkColor}`}
        >
          <Linkedin size={15} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a 
          href="mailto:ss08swati14singh@gmail.com"
          className={`hidden md:flex items-center gap-1.5 hover:translate-y-[-1px] transition-all duration-300 ${linkColor}`}
        >
          <Mail size={15} />
          <span className="hidden sm:inline">Email</span>
        </a>

        {/* Minimalist Layout toggler */}
        <button 
          onClick={toggleLayout}
          className={`p-2 rounded-full transition-all duration-300 ${btnHover}`}
          title={isBentoLayout ? "Switch to Minimal Layout" : "Switch to Bento Layout"}
        >
          {isBentoLayout ? <List size={16} /> : <LayoutGrid size={16} />}
        </button>

        {/* Minimalist Sun/Moon theme toggler */}
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${btnHover}`}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Sidebar hamburger toggler */}
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

