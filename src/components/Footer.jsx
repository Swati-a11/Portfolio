import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-[#0a0a0a] text-[#e8e4d9]/40 border-t border-white/5 text-[11px] md:text-xs">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="tracking-wide">
            Copyright &copy; 2026 — Swati Kumari
          </p>
        </div>
        <div className="flex gap-6 tracking-widest uppercase font-medium">
          <a 
            href="https://github.com/Swati-a11" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#e8e4d9] transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#e8e4d9] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:ss08swati14singh@gmail.com" 
            className="hover:text-[#e8e4d9] transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
