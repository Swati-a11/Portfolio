import React from 'react';
import { motion } from 'framer-motion';

// SVG Skill Icons
const ReactLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#61DAFB] fill-none stroke-[1.2] stroke-current">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TailwindLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#38BDF8]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.002 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" fill="currentColor"/>
  </svg>
);

const NodeLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#339933]">
    <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm1 14.5l-2-1.2v-3.6l2 1.2v3.6zm0-5.2L11 9.9l2-1.2 2 1.2-2 1.2z" fill="currentColor"/>
  </svg>
);

const MongoDBLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#47A248]">
    <path d="M12 1.5c-.3 0-5 5.5-5 11c0 3.7 2.2 6.5 4.5 8c2.3-1.5 4.5-4.3 4.5-8c0-5.5-4.7-11-4.7-11zm.2 16V4c1.1 2.3 2.6 5 2.6 7s-1.2 3.8-2.6 4.7z" fill="currentColor"/>
  </svg>
);

const ReduxLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#764ABC]">
    <path d="M12 2.2L2.5 7l9.5 4.8L21.5 7 12 2.2zM2.5 16.8l9.5 4.8 9.5-4.8M2.5 12l9.5 4.8 9.5-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FastAPILogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#059669]">
    <path d="M12 2L3.5 13.5h7.5L9 22.5l8.5-11.5H10L12 2z" fill="currentColor"/>
  </svg>
);

const PythonLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3776AB]">
    <path d="M12 2C9.2 2 7 4.2 7 7v1h5v1H5C3.3 9 2 10.3 2 12v5c0 1.7 1.3 3 3 3h2v-3c0-2.2 1.8-4 4-4h5v-1h-5c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h5c1.7 0 3 1.3 3 3v2h2V7c0-2.8-2.2-5-5-5h-5z" fill="currentColor"/>
  </svg>
);

const ExpressLogo = ({ size = 20, isDarkMode }) => (
  <div className={`text-[10px] font-bold tracking-tight border px-1.5 py-0.5 rounded transition-colors duration-500 ${
    isDarkMode 
      ? 'text-[#e8e4d9] border-white/20 bg-white/5' 
      : 'text-black border-black/20 bg-black/5'
  }`}>
    EX
  </div>
);

const items = [
  { name: 'React.js', component: ReactLogo },
  { name: 'Tailwind CSS', component: TailwindLogo },
  { name: 'Node.js', component: NodeLogo },
  { name: 'Express.js', component: ExpressLogo },
  { name: 'MongoDB', component: MongoDBLogo },
  { name: 'Redux Toolkit', component: ReduxLogo },
  { name: 'FastAPI', component: FastAPILogo },
  { name: 'Python', component: PythonLogo },
];

const Marquee = ({ isDarkMode }) => {
  const bgStyle = isDarkMode ? 'bg-[#0a0a0a] border-white/5 text-[#e8e4d9]/70' : 'bg-white border-black/5 text-black/70';
  const boxStyle = isDarkMode 
    ? 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]' 
    : 'border-black/5 bg-slate-50 hover:border-emerald-500/20 hover:bg-emerald-500/5';

  return (
    <div className={`overflow-hidden whitespace-nowrap border-y py-4 select-none transition-colors duration-500 ${bgStyle}`}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="inline-flex gap-8 pr-8"
      >
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-8">
            {items.map((item, idx) => {
              const IconComponent = item.component;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 ${boxStyle}`}
                >
                  <IconComponent size={18} isDarkMode={isDarkMode} />
                  <span className="text-xs font-semibold tracking-wider uppercase font-inter">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
