import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Mail, ChevronLeft, ChevronRight, Link as LinkIcon, Code, BookOpen, Check, RotateCw, ExternalLink, Calendar, Coffee, Bolt, Music, CheckCircle, Clock, GitBranch } from 'lucide-react';
import { Github, Linkedin } from './components/Icons';
import IntroAnimation from './components/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import DSA from './sections/DSA';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Screenshots
import cc1 from './assets/cc1.png';
import cc2 from './assets/cc2.png';
import cc3 from './assets/cc3.png';
import dd1 from './assets/dd1.png';
import dd2 from './assets/dd2.png';
import dd3 from './assets/dd3.png';

// Typing loop helper component
const TypingLoop = ({ isDarkMode }) => {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrases = [
      "I build platforms.",
      "I solve complex logic.",
      "I design scalable systems."
    ];
    const currentPhrase = phrases[phraseIdx];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 80);
    }

    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIdx(prev => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx]);

  return (
    <span className={`inline-block font-semibold border-r-2 pr-1 animate-pulse ${isDarkMode ? 'text-[#e8e4d9] border-white' : 'text-[#0a0a0a] border-black'
      }`}>
      {text}
    </span>
  );
};

// ── Manifesto animated text ── each word staggers in with blur + slide
const MANIFESTO_LINES = [
  "I BUILD PLATFORMS,",
  "ACCELERATE GROWTH,",
  "CREATE IMPACT.",
];

const ManifestoText = ({ isDarkMode }) => {
  const wordColor = isDarkMode ? 'text-[#e8e4d9]' : 'text-black';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="overflow-hidden"
    >
      {MANIFESTO_LINES.map((line, lineIdx) => (
        <div key={lineIdx} className="flex flex-wrap overflow-hidden leading-none">
          {line.split(' ').map((word, wordIdx) => (
            <motion.span
              key={wordIdx}
              variants={wordVariants}
              className={`font-bebas text-[clamp(2.8rem,7vw,6rem)] tracking-tight uppercase mr-[0.22em] last:mr-0 ${wordColor}`}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

// GitHub Contribution Graph Block
// GitHub Contribution Graph \u2014 real data matching Swati's profile (293 contributions, Jul 2025\u2013Jun 2026)
const buildContribData = () => {
  // Each week is an array of 7 day levels [Sun..Sat]: 0=none 1=low 2=med 3=high 4=very-high
  // Pattern from actual GitHub screenshot:
  //   Jul\u2013Aug 2025: heavy commits
  //   Sep\u2013Nov 2025: mostly quiet
  //   Dec 2025: very sparse
  //   Jan\u2013Mar 2026: light activity
  //   Apr\u2013May 2026: moderate
  //   Jun 2026: very heavy (135 commits that month)
  const weeks = [
    [0,2,1,3,2,1,0],[0,3,4,2,3,1,0],[0,2,3,4,2,0,0],[0,1,2,3,4,2,0], // Jul
    [0,3,4,3,2,1,0],[0,2,3,4,3,2,0],[0,1,2,3,2,1,0],[0,0,1,2,1,0,0], // Aug
    [0,1,0,1,0,0,0],[0,0,1,0,0,1,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0], // Sep
    [0,0,0,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,1,0,0,0,0,0], // Oct
    [0,0,0,0,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0], // Nov
    [0,0,0,0,0,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0], // Dec
    [0,1,0,1,0,0,0],[0,0,1,0,1,0,0],[0,1,0,0,1,0,0],[0,0,0,1,0,0,0], // Jan
    [0,0,1,0,0,1,0],[0,1,0,1,0,0,0],[0,0,1,0,1,0,0],[0,0,0,0,0,1,0], // Feb
    [0,1,0,1,0,1,0],[0,0,1,0,0,1,0],[0,1,0,1,0,0,0],[0,0,0,1,0,0,0], // Mar
    [0,1,2,1,0,1,0],[0,2,1,0,1,2,0],[0,1,0,1,2,1,0],[0,0,1,2,1,0,0], // Apr
    [0,1,2,3,2,1,0],[0,2,3,2,1,2,0],[0,1,2,1,3,2,0],[0,2,1,2,3,1,0], // May
    [0,3,4,3,4,3,0],[0,4,3,4,3,4,0],[0,3,4,4,3,4,0],[0,4,3,4,4,3,0], // Jun (heavy!)
    [0,2,3,0,0,0,0],                                                    // partial
  ];
  const commitMap = { 0: 0, 1: 2, 2: 5, 3: 9, 4: 14 };
  const base = new Date(2025, 6, 1); // Jul 1, 2025
  const data = [];
  let id = 0, dayOffset = 0;
  weeks.forEach((week) => {
    week.forEach((level) => {
      const d = new Date(base);
      d.setDate(base.getDate() + dayOffset);
      data.push({ id: id++, date: d, commits: commitMap[level] ?? 0, level });
      dayOffset++;
    });
  });
  return data;
};

const ContributionGraph = ({ isDarkMode }) => {
  const cells = useMemo(() => buildContribData(), []);
  const [hoveredCell, setHoveredCell] = useState(null);

  const darkColors = ['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'];
  const lightColors = ['bg-[#ebedf0]', 'bg-[#9be9a8]', 'bg-[#40c463]', 'bg-[#30a14e]', 'bg-[#216e39]'];

  const getColor = (level) => (isDarkMode ? darkColors : lightColors)[level] ?? (isDarkMode ? darkColors[0] : lightColors[0]);

  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';

  const months = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];

  return (
    <div className="relative">
      {/* Tooltip bar */}
      <div className={`h-6 mb-2 text-xs font-mono select-none ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-black/50'}`}>
        {hoveredCell && hoveredCell.commits > 0 ? (
          <span className={`px-2.5 py-1 rounded shadow-sm ${isDarkMode ? 'bg-[#1e1e24] text-white border border-white/10' : 'bg-black text-white'}`}>
            {hoveredCell.commits} contribution{hoveredCell.commits !== 1 ? 's' : ''} on {hoveredCell.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        ) : hoveredCell ? (
          <span className={`px-2.5 py-1 rounded ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>
            No contributions on {hoveredCell.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        ) : (
          <span className={textMuted}>293 contributions in the last year</span>
        )}
      </div>

      <div className="overflow-x-auto pb-2">
        <div style={{ minWidth: '680px' }}>
          {/* Month labels */}
          <div className="flex mb-1 ml-8">
            {months.map((m, i) => (
              <div key={i} className={`text-[9px] font-mono ${textMuted}`} style={{ width: '56px' }}>{m}</div>
            ))}
          </div>
          {/* Day labels + grid */}
          <div className="flex gap-1">
            <div className="flex flex-col gap-[3px] mr-1 pt-0">
              {['','Mon','','Wed','','Fri',''].map((d, i) => (
                <div key={i} className={`h-[10px] text-[9px] font-mono leading-none flex items-center pr-1 ${textMuted}`} style={{ width: '28px' }}>
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {cells.map((cell) => (
                <div
                  key={cell.id}
                  onMouseEnter={() => setHoveredCell(cell)}
                  onMouseLeave={() => setHoveredCell(null)}
                  className={`w-[10px] h-[10px] rounded-[2px] transition-all hover:scale-125 hover:ring-1 cursor-pointer ${getColor(cell.level)} ${isDarkMode ? 'hover:ring-white/40' : 'hover:ring-black/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className={`flex justify-between items-center mt-3 text-[10px] font-mono ${textMuted}`}>
        <a href="https://github.com/Swati-a11" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 hover:underline">
          github.com/Swati-a11
        </a>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {(isDarkMode ? darkColors : lightColors).map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-[1px] ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

// Learning progress tracking component
const CurrentlyLearning = ({ isDarkMode }) => {
  const cardBg = isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-black/5';
  const textMuted = isDarkMode ? 'text-[#e8e4d9]/40' : 'text-black/40';
  const textNormal = isDarkMode ? 'text-[#e8e4d9]' : 'text-black';

  return (
    <div className="space-y-4">
      <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 ${isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
        }`}>
        Focus Tracks / Currently Learning
      </h3>
      <div className="space-y-3">
        {/* Completed DSA Item */}
        <div className={`flex items-center justify-between p-3.5 border rounded-2xl ${cardBg}`}>
          <div className="flex flex-col">
            <span className={`text-[10px] font-mono ${textMuted}`}>Data Structures & Algorithms</span>
            <span className={`text-sm font-semibold ${textNormal}`}>Arrays & Hashing</span>
          </div>
          <span className="text-xs bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium flex items-center gap-1 select-none">
            Completed ✅
          </span>
        </div>

        {/* In Progress Strings Item */}
        <div className={`flex flex-col p-3.5 border rounded-2xl space-y-2 ${cardBg}`}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono ${textMuted}`}>Pointers & Memory</span>
              <span className={`text-sm font-semibold ${textNormal}`}>Strings & Pointers</span>
            </div>
            <span className="text-xs bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-medium flex items-center gap-1 select-none">
              In Progress 🔄
            </span>
          </div>
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}>
            <div className="bg-emerald-500 h-full w-[65%]" />
          </div>
        </div>

        {/* Upcoming Graphs Item */}
        <div className={`flex items-center justify-between p-3.5 border rounded-2xl opacity-50 ${cardBg}`}>
          <div className="flex flex-col">
            <span className={`text-[10px] font-mono ${textMuted}`}>Advanced Data Structures</span>
            <span className={`text-sm font-semibold text-[#e8e4d9]/70`}>Trees & Graphs</span>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 select-none ${isDarkMode ? 'bg-white/10 text-white/50' : 'bg-slate-200 text-slate-600'
            }`}>
            Upcoming ⬜
          </span>
        </div>
      </div>
    </div>
  );
};

// Animated bounce emoji — spring pop on click/tap
const AnimatedEmoji = ({ children, delay = 0 }) => {
  const [popped, setPopped] = useState(false);
  return (
    <motion.span
      className="inline-block cursor-pointer select-none"
      initial={{ scale: 1 }}
      animate={popped ? { scale: [1, 1.8, 0.85, 1.3, 1], rotate: [0, -12, 12, -6, 0] } : { scale: 1 }}
      whileHover={{ scale: 1.25, rotate: [-3, 3, -3, 0] }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onAnimationComplete={() => setPopped(false)}
      onClick={() => setPopped(true)}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  );
};

// Animated section heading — word-by-word slow stagger
const SectionHeading = ({ text, className = '' }) => {
  const words = text.split(' ');
  return (
    <motion.h2
      className={`font-bebas tracking-wide uppercase ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em] last:mr-0"
          variants={{
            hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// Fun Facts card component
const FunFacts = ({ isDarkMode }) => {
  const textMuted = isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5';
  const textNormal = isDarkMode ? 'text-white/70 font-mono' : 'text-black/70 font-mono';

  return (
    <div className="flex flex-col justify-between h-full bg-transparent">
      <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 mb-4 ${textMuted}`}>
        Casual Facts
      </h3>
      <div className="space-y-4 flex-grow flex flex-col justify-around">
        <div className="flex items-center gap-3">
          <AnimatedEmoji><span className="text-xl">☕</span></AnimatedEmoji>
          <span className={`text-xs leading-tight ${textNormal}`}>Powered by black tea</span>
        </div>
        <div className="flex items-center gap-3">
          <AnimatedEmoji><span className="text-xl">⚡</span></AnimatedEmoji>
          <span className={`text-xs leading-tight ${textNormal}`}>Speed-coder</span>
        </div>
        <div className="flex items-center gap-3">
          <AnimatedEmoji><span className="text-xl">🎧</span></AnimatedEmoji>
          <span className={`text-xs leading-tight ${textNormal}`}>Lo-fi architecture playlist enthusiast</span>
        </div>
      </div>
    </div>
  );
};

// Light/Dark Mode Bento Project Carousel
const BentoProjects = ({ isDarkMode }) => {
  const projectsList = [
    {
      title: "CourseCraft",
      description: "An AI-powered learning management system with YouTube playlist tracking, AI notes generation, streak system, and practice questions. Built with MERN stack and Gemini API.",
      tags: ["React", "Node.js", "MongoDB", "Gemini API", "YouTube API"],
      link: "https://course-craft-ten.vercel.app",
      github: "https://github.com/Swati-a11/CourseCraft",
      screenshots: [cc1, cc2, cc3]
    },
    {
      title: "DreamDoodle",
      description: "An AI image generator with Razorpay payment integration, allowing users to generate and download AI-created artwork. Features credit-based system and gallery.",
      tags: ["React", "Node.js", "MongoDB", "Razorpay", "AI"],
      link: "https://dream-doodle.vercel.app",
      github: "https://github.com/Swati-a11/DreamDoodle",
      screenshots: [dd1, dd2, dd3]
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeProject = projectsList[currentIdx];

  useEffect(() => {
    setActiveScreenIdx(0);
    if (activeProject.screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setActiveScreenIdx((prev) => (prev + 1) % activeProject.screenshots.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIdx, activeProject.screenshots.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % projectsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? projectsList.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } } },
    exit: (dir) => ({ x: dir < 0 ? 80 : -80, opacity: 0, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } } })
  };

  const textMuted = isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5';
  const cardBg = isDarkMode ? 'bg-[#16161a] border-white/5' : 'bg-slate-50 border-black/5';
  const btnColor = isDarkMode ? 'bg-white text-black hover:bg-emerald-400' : 'bg-black text-white hover:bg-emerald-600';
  const tagColor = isDarkMode ? 'text-white/40' : 'text-black/40';

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 flex-grow mr-12 ${textMuted}`}>
          Selected Projects
        </h3>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 shadow-sm ${isDarkMode ? 'border-white/10 hover:bg-white hover:text-black text-white' : 'border-black/10 hover:bg-black hover:text-white text-black'
              }`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 shadow-sm ${isDarkMode ? 'border-white/10 hover:bg-white hover:text-black text-white' : 'border-black/10 hover:bg-black hover:text-white text-black'
              }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="min-h-[420px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`w-full grid grid-cols-1 md:grid-cols-12 gap-8 border rounded-3xl p-6 md:p-8 items-center ${cardBg}`}
          >
            <div className="col-span-1 md:col-span-6 flex flex-col justify-between h-full min-h-[260px]">
              <div>
                <div className="flex gap-3 mb-6">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-sm ${btnColor}`}
                  >
                    <Github size={16} className={isDarkMode ? 'fill-black' : 'fill-white'} />
                  </a>
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-sm ${btnColor}`}
                  >
                    <LinkIcon size={16} strokeWidth={2.5} />
                  </a>
                </div>

                <h4 className={`text-2xl font-bold tracking-tight mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {activeProject.title}
                </h4>

                <p className={`text-xs font-light leading-relaxed mb-6 ${isDarkMode ? 'text-[#e8e4d9]/70' : 'text-black/60'}`}>
                  {activeProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-auto">
                {activeProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[10px] uppercase tracking-wider font-semibold font-mono ${tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-[360px] aspect-[16/10]">
                {/* Screen */}
                <div className="absolute top-[6%] left-[12.5%] right-[12.5%] bottom-[12%] bg-black border-[3px] border-slate-800 rounded-t-lg shadow-xl flex flex-col overflow-hidden">
                  <div className="absolute top-0.5 left-1/2 -translate-x-1/2 flex gap-0.5 z-30">
                    <div className="w-1 h-1 rounded-full bg-slate-900" />
                  </div>
                  <div className="w-full h-full bg-slate-100 relative overflow-hidden flex-grow">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeScreenIdx}
                        src={activeProject.screenshots[activeScreenIdx]}
                        alt={`${activeProject.title} mockup`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.05] pointer-events-none" />
                  </div>
                  <div className="w-full bg-black py-0.5 border-t border-white/5 flex justify-center items-center">
                    <span className="text-[5px] font-medium tracking-widest text-[#86868b] font-sans">
                      MacBook Pro
                    </span>
                  </div>
                </div>
                {/* Base */}
                <div className="absolute bottom-[5.5%] left-[2%] right-[2%] h-[6.5%] bg-gradient-to-b from-[#d2d2d7] via-[#8e8e93] to-[#555557] rounded-b-lg border-t border-white/20 shadow-md flex items-start justify-center">
                  <div className="w-[14%] h-[35%] bg-slate-800 rounded-b" />
                </div>
                {/* shadow */}
                <div className="absolute bottom-0 left-[6%] right-[6%] h-[7%] bg-black/30 rounded-full blur-sm" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

function App() {
  const [introComplete, setIntroComplete] = useState(() => {
    return localStorage.getItem('introShown') === 'true';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  const [isBentoLayout, setIsBentoLayout] = useState(() => {
    const saved = localStorage.getItem('portfolio-layout');
    return saved ? saved === 'bento' : true;
  });

  const handleIntroComplete = () => {
    localStorage.setItem('introShown', 'true');
    setIntroComplete(true);
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const toggleLayout = () => {
    setIsBentoLayout(prev => {
      const next = !prev;
      localStorage.setItem('portfolio-layout', next ? 'bento' : 'scrolling');
      return next;
    });
  };

  // Scroll Progress Bar calculation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#e8e4d9';
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [isDarkMode]);

  // Experiences list
  const experiences = [
    {
      year: "2026",
      role: "Full Stack Intern",
      company: "COGNEFY",
      description: "Built an AI Customer Support Assistant from scratch — full RBAC system, chat sessions, document management, ticket system, and admin analytics dashboard."
    },
    {
      year: "2024",
      role: "Industrial Training (45 Days)",
      company: "The Core System, Chandigarh",
      description: "Full-stack development training in MERN Stack with AI integration. Built real-world projects and learned professional development practices."
    }
  ];

  // Capabilities
  const categories = [
    {
      title: "Frontend Tools",
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Framer Motion", "JavaScript"]
    },
    {
      title: "Backend Tools",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "FastAPI", "Python"]
    },
    {
      title: "AI Integration",
      skills: ["Gemini API", "OpenAI API", "YouTube API", "RAG Architecture"]
    }
  ];

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Card themes for Bento Layout
  const bentoCardBg = isDarkMode
    ? 'bg-[#121620]/45 border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.15)] text-[#e8e4d9]'
    : 'bg-white border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-black';

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${isDarkMode
        ? 'bg-[#0a0a0a] text-[#e8e4d9] cursor-none selection:bg-emerald-500/20 selection:text-[#e8e4d9]'
        : 'bg-white text-black cursor-none selection:bg-emerald-500/20 selection:text-black'
      }`}>

      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-green-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <CustomCursor isDarkMode={isDarkMode} />

      {/* Sidebar (always rendered, slides in/out) */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isDarkMode={isDarkMode}
      />

      {/* Intro animation */}
      {!introComplete && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Main portfolio layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        />

        {/* Hero Landing Page is always at the top of both layouts */}
        <Hero isDarkMode={isDarkMode} />

        <AnimatePresence mode="wait">
          {isBentoLayout ? (
            /* ========================================================
               BENTO GRID DASHBOARD LAYOUT (SUPPORTING BOTH THEMES)
               ======================================================== */
            <motion.main
              key="bento-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto px-4 md:px-6 pb-16 space-y-4 md:space-y-6 select-none"
            >
              {/* ── MANIFESTO BANNER ── Word-by-word stagger reveal ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`border rounded-3xl p-8 md:p-12 transition-colors duration-500 overflow-hidden relative ${bentoCardBg}`}
              >
                {/* Faint ambient glow behind text */}
                <div className={`absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[80px] pointer-events-none ${isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-400/8'
                  }`} />

                {/* Animated headline — each word staggers in */}
                <ManifestoText isDarkMode={isDarkMode} />

                {/* Two-column body below the headline */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className={`text-sm md:text-base font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/65' : 'text-black/65'
                      }`}
                  >
                    I specialize in crafting full-stack products for SaaS & AI startups — from LMS platforms to AI image generators. I'm passionate about building software that makes a real difference.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.05, duration: 0.6 }}
                    className={`text-sm md:text-base font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/65' : 'text-black/65'
                      }`}
                  >
                    Beyond coding, I love competitive programming in C++, following Striver's A2Z sheet daily — and believe sharp logic leads to elegant products.
                  </motion.p>
                </div>
              </motion.div>

              {/* Bento Grid Row 1: GitHub Contribution Graph — slides up on scroll */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: isDarkMode ? '0 20px 60px rgba(57,211,83,0.07)' : '0 20px 40px rgba(0,0,0,0.08)' }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 mb-6 ${
                  isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                }`}>
                  GitHub Contribution Activity
                </h3>
                <ContributionGraph isDarkMode={isDarkMode} />
              </motion.div>

              {/* Bento: GitHub Stats + Top Languages API + Custom Language Bars */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 flex-grow ${
                    isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                  }`}>
                    GitHub Stats &amp; Languages
                  </h3>
                  <a
                    href="https://github.com/Swati-a11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-[10px] font-mono text-emerald-500 hover:text-emerald-400 hover:underline flex items-center gap-1 flex-shrink-0"
                  >
                    View Profile <ExternalLink size={10} />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {/* ── Card 1: GitHub Stats ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.02, boxShadow: isDarkMode ? '0 16px 40px rgba(57,211,83,0.12)' : '0 16px 30px rgba(0,0,0,0.1)' }}
                    className={`rounded-2xl border p-5 flex flex-col gap-4 transition-all duration-300 ${
                      isDarkMode ? 'border-white/10 bg-[#0d1117]' : 'border-black/10 bg-white'
                    }`}
                  >
                    {/* Header */}
                    <div className={`flex items-center justify-between pb-3 border-b ${isDarkMode ? 'border-white/10' : 'border-black/8'}`}>
                      <div className="flex items-center gap-2">
                        <Github size={13} className={isDarkMode ? 'text-[#39d353]' : 'text-[#2da44e]'} />
                        <span className={`text-xs font-semibold ${isDarkMode ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>
                          Swati-a11's Stats
                        </span>
                      </div>
                      {/* Rank badge */}
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-10 h-10 rounded-full border-2 border-emerald-500/40 flex items-center justify-center"
                        style={{ background: isDarkMode ? 'rgba(57,211,83,0.08)' : 'rgba(34,197,94,0.08)' }}
                      >
                        <span className={`text-[10px] font-bold font-mono ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>A+</span>
                      </motion.div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Total Commits', value: '293+', icon: <GitBranch size={11}/>, color: '#39d353' },
                        { label: 'Jun Commits',   value: '135',  icon: <Calendar size={11}/>,  color: '#58a6ff' },
                        { label: 'Repos',         value: '10+',  icon: <BookOpen size={11}/>,  color: '#f78166' },
                        { label: 'Contributed to',value: '6',    icon: <CheckCircle size={11}/>,color: '#e3b341' },
                      ].map(({ label, value, icon, color }) => (
                        <div key={label} className={`rounded-xl p-3 flex flex-col gap-1 ${isDarkMode ? 'bg-white/[0.03]' : 'bg-black/[0.02]'}`}>
                          <span style={{ color }} className="opacity-80">{icon}</span>
                          <span className={`text-base font-bold font-mono leading-none ${isDarkMode ? 'text-[#c9d1d9]' : 'text-[#24292f]'}`}>{value}</span>
                          <span className={`text-[9px] font-mono leading-none ${isDarkMode ? 'text-white/35' : 'text-black/40'}`}>{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <a href="https://github.com/Swati-a11" target="_blank" rel="noopener noreferrer"
                      className={`text-[9px] font-mono text-center pt-1 border-t hover:text-emerald-400 transition-colors ${isDarkMode ? 'border-white/10 text-white/25' : 'border-black/8 text-black/30'}`}>
                      github.com/Swati-a11 ↗
                    </a>
                  </motion.div>

                  {/* ── Card 2: Top Languages (Donut) ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.02, boxShadow: isDarkMode ? '0 16px 40px rgba(57,211,83,0.12)' : '0 16px 30px rgba(0,0,0,0.1)' }}
                    className={`rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-300 ${
                      isDarkMode ? 'border-white/10 bg-[#0d1117]' : 'border-black/10 bg-white'
                    }`}
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-2 pb-3 border-b ${isDarkMode ? 'border-white/10' : 'border-black/8'}`}>
                      <Code size={13} className={isDarkMode ? 'text-[#39d353]' : 'text-[#2da44e]'} />
                      <span className={`text-xs font-semibold ${isDarkMode ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>Top Languages</span>
                    </div>

                    {/* Segmented bar */}
                    <div className="flex w-full h-3 rounded-full overflow-hidden gap-[2px]">
                      {[
                        { pct: 65, color: '#f7df1e' },
                        { pct: 15, color: '#e34c26' },
                        { pct: 10, color: '#264de4' },
                        { pct: 7,  color: '#3572A5' },
                        { pct: 3,  color: '#3178c6' },
                      ].map(({ pct, color }, i) => (
                        <motion.div
                          key={i}
                          style={{ backgroundColor: color }}
                          className="h-full first:rounded-l-full last:rounded-r-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ))}
                    </div>

                    {/* Language legend */}
                    <div className="flex flex-col gap-2 flex-grow justify-around">
                      {[
                        { name: 'JavaScript', pct: 65,  color: '#f7df1e' },
                        { name: 'HTML',        pct: 15,  color: '#e34c26' },
                        { name: 'CSS',         pct: 10,  color: '#264de4' },
                        { name: 'Python',      pct: 7,   color: '#3572A5' },
                        { name: 'TypeScript',  pct: 3,   color: '#3178c6' },
                      ].map(({ name, pct, color }) => (
                        <div key={name} className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className={`text-[10px] font-mono ${isDarkMode ? 'text-[#c9d1d9]' : 'text-[#24292f]'}`}>{name}</span>
                          </div>
                          <span className={`text-[10px] font-mono font-semibold ${isDarkMode ? 'text-white/50' : 'text-black/50'}`}>{pct}%</span>
                        </div>
                      ))}
                    </div>

                    <a href="https://github.com/Swati-a11?tab=repositories" target="_blank" rel="noopener noreferrer"
                      className={`text-[9px] font-mono text-center pt-1 border-t hover:text-emerald-400 transition-colors ${isDarkMode ? 'border-white/10 text-white/25' : 'border-black/8 text-black/30'}`}>
                      View all repos ↗
                    </a>
                  </motion.div>

                  {/* ── Card 3: Most Used Languages — Animated Bars ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.02, boxShadow: isDarkMode ? '0 16px 40px rgba(57,211,83,0.12)' : '0 16px 30px rgba(0,0,0,0.1)' }}
                    className={`rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-300 ${
                      isDarkMode ? 'border-white/10 bg-[#0d1117]' : 'border-black/10 bg-white'
                    }`}
                  >
                    <div className={`flex items-center gap-2 pb-3 border-b ${isDarkMode ? 'border-white/10' : 'border-black/8'}`}>
                      <Code size={13} className={isDarkMode ? 'text-[#39d353]' : 'text-[#2da44e]'} />
                      <span className={`text-xs font-semibold ${isDarkMode ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>Most Used Languages</span>
                    </div>
                    <div className="flex flex-col gap-2.5 flex-grow justify-around">
                      {[
                        { name: 'JavaScript', pct: 65, color: '#f7df1e', textColor: '#c9a000' },
                        { name: 'HTML',       pct: 15, color: '#e34c26', textColor: '#e34c26' },
                        { name: 'CSS',        pct: 10, color: '#264de4', textColor: '#264de4' },
                        { name: 'Python',     pct: 7,  color: '#3572A5', textColor: '#3572A5' },
                        { name: 'TypeScript', pct: 3,  color: '#3178c6', textColor: '#3178c6' },
                      ].map(({ name, pct, color, textColor }, i) => (
                        <div key={name} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className={`text-[10px] font-mono font-semibold ${isDarkMode ? 'text-[#c9d1d9]' : 'text-[#24292f]'}`}>{name}</span>
                            <span className="text-[9px] font-mono font-bold" style={{ color: textColor }}>{pct}%</span>
                          </div>
                          <div className={`w-full h-[5px] rounded-full overflow-hidden ${isDarkMode ? 'bg-white/10' : 'bg-black/8'}`}>
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`pt-2 border-t text-[9px] font-mono flex justify-between items-center ${isDarkMode ? 'border-white/10 text-white/30' : 'border-black/8 text-black/35'}`}>
                      <span>Based on public repos</span>
                      <a href="https://github.com/Swati-a11?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 hover:underline">All repos ↗</a>
                    </div>
                  </motion.div>

                </div>
              </motion.div>

              {/* Bento Grid Row 1b: Skills Marquee Strip */}
              <div className="rounded-3xl overflow-hidden">
                <Marquee isDarkMode={isDarkMode} />
              </div>

              {/* Bento Grid Row 2: Learning Strip & DSA Stats */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`md:col-span-6 border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
                >
                  <CurrentlyLearning isDarkMode={isDarkMode} />
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`md:col-span-6 border p-8 rounded-3xl flex flex-col justify-between transition-colors duration-500 ${bentoCardBg}`}
                >
                  <div className="space-y-4">
                    <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 ${isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                      }`}>
                      Problem Solving Metrics
                    </h3>
                    <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      50+ problems solved in C++ & Python.
                    </p>
                    <p className={`text-xs font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-black/60'}`}>
                      Systematically tracking and resolving algorithms following Striver's A2Z sheet, hosted on LeetCode.
                    </p>
                  </div>

                  <div className={`flex justify-between items-center p-3 border rounded-2xl mt-6 ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-black/5'
                    }`}>
                    <div className={`flex items-center gap-2 text-xs font-mono ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
                      <Code size={15} />
                      <span>C++ & Python</span>
                    </div>
                    <a
                      href="https://leetcode.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-500 hover:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      LeetCode profile <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Bento Grid Row 3: Projects carousel */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <BentoProjects isDarkMode={isDarkMode} />
              </motion.div>


              {/* Bento Grid Row 4: Fun Facts (standalone — untouched) */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <FunFacts isDarkMode={isDarkMode} />
              </motion.div>

              {/* Bento Grid Row 5: Core Capabilities (full width) */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 mb-6 ${isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                  }`}>
                  Core Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {categories.map((cat, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border space-y-3 ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50/60 border-black/5'
                      }`}>
                      <span className={`text-[10px] font-bold uppercase font-mono tracking-widest block ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
                        }`}>{cat.title}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-[11px] font-medium border px-2.5 py-1 rounded-full transition-colors duration-200 ${isDarkMode
                                ? 'bg-white/[0.03] border-white/10 text-white/70 hover:border-emerald-500/30 hover:text-white'
                                : 'bg-white border-black/10 text-black/70 hover:border-emerald-500/40 hover:text-emerald-700'
                              }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>


              {/* Bento Grid Row 5: Experience Timeline (Full width) */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 mb-6 ${isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                  }`}>
                  Experience / Journey
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="flex gap-4 items-start border-l-2 border-emerald-500/20 pl-4 py-1">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-emerald-500 font-bold">{exp.year}</span>
                        <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{exp.role}</span>
                        <span className={`text-xs font-mono mb-1 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>{exp.company}</span>
                        <p className={`text-xs font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-black/60'}`}>{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bento Grid Row 6: Call To Action Connect */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-12 rounded-3xl flex flex-col items-center justify-center text-center py-16 gap-6 transition-colors duration-500 ${bentoCardBg}`}
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-500 font-mono">
                    / Let's connect
                  </span>
                  <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    LET'S DISCUSS YOUR PROJECT
                  </h2>
                  <p className={`text-sm font-light max-w-md mx-auto leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
                    Always open to roles, project contracts, or internships in full-stack web and AI systems engineering.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                  <a
                    href="mailto:ss08swati14singh@gmail.com"
                    className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all duration-300 font-semibold text-xs tracking-wider uppercase text-center ${isDarkMode
                        ? 'bg-white text-black border-white hover:bg-emerald-400 hover:border-emerald-400'
                        : 'bg-black text-white border-black hover:bg-emerald-600 hover:border-emerald-600'
                      }`}
                  >
                    <Mail size={14} />
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/swati-kumari-25931a2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all duration-300 font-semibold text-xs tracking-wider uppercase text-center ${isDarkMode
                        ? 'bg-transparent text-white border-white/20 hover:bg-white hover:text-black hover:border-white'
                        : 'bg-transparent text-black border-black/10 hover:bg-slate-100 hover:border-black'
                      }`}
                  >
                    <Linkedin size={14} />
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>

              {/* Light/Dark Mode Bento Footer */}
              <footer className={`py-8 border-t text-[11px] md:text-xs ${isDarkMode ? 'text-[#e8e4d9]/40 border-white/5' : 'text-black/40 border-black/5'
                }`}>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="tracking-wide">
                    Copyright &copy; 2026 — Swati Kumari. Built with React & Tailwind.
                  </p>
                  <div className="flex gap-6 tracking-widest uppercase font-medium">
                    <a href="https://github.com/Swati-a11" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/swati-kumari-25931a2a6" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
                    <a href="mailto:ss08swati14singh@gmail.com" className="hover:text-emerald-500 transition-colors">Email</a>
                  </div>
                </div>
              </footer>
            </motion.main>
          ) : (
            /* ========================================================
               SCROLLING SECTIONS LAYOUT (SUPPORTING BOTH THEMES)
               ======================================================== */
            <motion.div
              key="scrolling-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Marquee isDarkMode={isDarkMode} />
              <About isDarkMode={isDarkMode} />
              <Skills isDarkMode={isDarkMode} />

              {/* GitHub Contribution Graph — scrolling layout */}
              <section className={`py-20 px-6 md:px-12 border-t transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0a0a] border-white/5 text-[#e8e4d9]' : 'bg-white border-black/5 text-black'}`}>
                <div className="max-w-4xl mx-auto">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7 }}
                    className={`text-xs uppercase tracking-[0.2em] block mb-6 ${isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40'}`}
                  >
                    / GitHub Activity
                  </motion.span>
                  <SectionHeading text="Contribution Graph" className="text-4xl md:text-5xl mb-10" />
                  <div className={`border rounded-3xl p-6 md:p-8 transition-colors duration-500 ${isDarkMode ? 'bg-[#121620]/45 border-white/5' : 'bg-slate-50/60 border-black/5'}`}>
                    <ContributionGraph isDarkMode={isDarkMode} />
                  </div>
                </div>
              </section>

              {/* Fun Facts — scrolling layout */}
              <section className={`py-20 px-6 md:px-12 border-t transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0a0a] border-white/5 text-[#e8e4d9]' : 'bg-white border-black/5 text-black'}`}>
                <div className="max-w-4xl mx-auto">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7 }}
                    className={`text-xs uppercase tracking-[0.2em] block mb-6 ${isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40'}`}
                  >
                    / Off the Clock
                  </motion.span>
                  <SectionHeading text="Casual Facts" className="text-4xl md:text-5xl mb-10" />
                  <div className={`border rounded-3xl p-8 transition-colors duration-500 ${isDarkMode ? 'bg-[#121620]/45 border-white/5' : 'bg-slate-50/60 border-black/5'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      <div className="flex items-start gap-4">
                        <AnimatedEmoji><span className="text-3xl">☕</span></AnimatedEmoji>
                        <div>
                          <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Powered by black tea</p>
                          <p className={`text-xs font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/55' : 'text-black/55'}`}>Every productive session begins with a cup. No exceptions.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <AnimatedEmoji><span className="text-3xl">⚡</span></AnimatedEmoji>
                        <div>
                          <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Speed-coder</p>
                          <p className={`text-xs font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/55' : 'text-black/55'}`}>I like shipping fast and iterating faster. Perfectionism is a myth.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <AnimatedEmoji><span className="text-3xl">🎧</span></AnimatedEmoji>
                        <div>
                          <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Lo-fi architecture playlist</p>
                          <p className={`text-xs font-light leading-relaxed ${isDarkMode ? 'text-[#e8e4d9]/55' : 'text-black/55'}`}>Deep focus sessions are always accompanied by lo-fi beats.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Projects isDarkMode={isDarkMode} />
              <DSA isDarkMode={isDarkMode} />
              <Experience isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
