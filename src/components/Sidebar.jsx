import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Eye, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import avatar from '../assets/avatar.png';

const navLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'DSA', href: '#dsa' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Sidebar = ({ isOpen, onClose, isDarkMode }) => {
  const bg = isDarkMode
    ? 'bg-[#0c0c10] border-white/5 text-[#e8e4d9]'
    : 'bg-white border-black/5 text-black';

  const linkColor = isDarkMode
    ? 'text-[#e8e4d9]/60 hover:text-white hover:pl-5'
    : 'text-black/50 hover:text-emerald-600 hover:pl-5';

  const divider = isDarkMode ? 'border-white/5' : 'border-black/5';
  const closeBtnStyle = isDarkMode
    ? 'text-white/40 hover:text-white hover:bg-white/10'
    : 'text-black/40 hover:text-black hover:bg-black/5';

  const resumeBtnStyle = isDarkMode
    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
    : 'bg-emerald-50 border-emerald-500/20 text-emerald-700 hover:bg-emerald-100';

  const overlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay behind sidebar */}
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={overlayClick}
          />

          {/* Sidebar panel sliding in from right */}
          <motion.aside
            key="sidebar-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className={`fixed top-0 right-0 h-full w-64 md:w-72 z-[70] border-l flex flex-col py-6 px-5 md:py-8 md:px-6 transition-colors duration-500 ${bg}`}
          >
            {/* Top row: avatar + name + close button */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={avatar}
                    alt="Swati Kumari"
                    className={`w-9 h-9 rounded-full object-cover border ${
                      isDarkMode ? 'border-white/20' : 'border-black/10'
                    }`}
                  />
                  <span className="absolute bottom-0 right-0 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase">Swati Kumari</p>
                  <p className={`text-[10px] font-mono ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    Full Stack Dev
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-all duration-200 ${closeBtnStyle}`}
                aria-label="Close sidebar"
              >
                <X size={18} />
              </button>
            </div>

            {/* Resume Action Group */}
            <div className="mb-6 space-y-2">
              <p className={`text-[9px] uppercase font-bold tracking-[0.3em] ${isDarkMode ? 'text-white/25' : 'text-black/25'}`}>
                Resume
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all duration-200 ${resumeBtnStyle}`}
                >
                  <Eye size={14} />
                  View
                </a>
                <a
                  href="/resume.pdf"
                  download="Swati_Kumari_Resume.pdf"
                  onClick={onClose}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all duration-200 ${resumeBtnStyle}`}
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex-grow overflow-y-auto">
              <p className={`text-[9px] uppercase font-bold tracking-[0.3em] mb-4 ${isDarkMode ? 'text-white/25' : 'text-black/25'}`}>
                Navigate
              </p>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between py-2.5 text-sm font-medium tracking-wide border-b transition-all duration-200 ${linkColor} ${divider}`}
                    >
                      <span>{link.label}</span>
                      <span className={`text-[10px] font-mono opacity-40`}>
                        {String(navLinks.indexOf(link) + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom social links */}
            <div className={`pt-6 border-t space-y-4 ${divider}`}>
              <p className={`text-[9px] uppercase font-bold tracking-[0.3em] ${isDarkMode ? 'text-white/25' : 'text-black/25'}`}>
                Connect
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Swati-a11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs font-medium transition-colors duration-200 ${
                    isDarkMode ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                  }`}
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/swati-kumari-25931a2a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs font-medium transition-colors duration-200 ${
                    isDarkMode ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                  }`}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href="mailto:ss08swati14singh@gmail.com"
                  className={`flex items-center gap-2 text-xs font-medium transition-colors duration-200 ${
                    isDarkMode ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'
                  }`}
                >
                  <Mail size={14} />
                  Email
                </a>
              </div>
              <p className={`text-[9px] font-light tracking-wide ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>
                © 2026 Swati Kumari. All rights reserved.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
