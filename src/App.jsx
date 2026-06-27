import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Mail, ChevronLeft, ChevronRight, Link as LinkIcon, Code, BookOpen, Check, RotateCw, ExternalLink, Calendar, Coffee, Bolt, Music, CheckCircle, Clock } from 'lucide-react';
import { Github, Linkedin } from './components/Icons';
import IntroAnimation from './components/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
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
    <span className={`inline-block font-semibold border-r-2 pr-1 animate-pulse ${
      isDarkMode ? 'text-[#e8e4d9] border-white' : 'text-[#0a0a0a] border-black'
    }`}>
      {text}
    </span>
  );
};

// GitHub Contribution Graph Block
const ContributionGraph = ({ isDarkMode }) => {
  const cells = useMemo(() => {
    const data = [];
    const baseDate = new Date(2026, 0, 1);
    for (let i = 0; i < 371; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);
      const rand = Math.random();
      const commits = rand < 0.5 
        ? 0 
        : rand < 0.75 
          ? Math.floor(Math.random() * 3) + 1 
          : Math.floor(Math.random() * 6) + 3;
      data.push({ id: i, date, commits });
    }
    return data;
  }, []);

  const [hoveredCell, setHoveredCell] = useState(null);

  const textMuted = isDarkMode ? 'text-[#e8e4d9]/45' : 'text-black/40';
  const ringColor = isDarkMode ? 'hover:ring-white' : 'hover:ring-black';

  return (
    <div className="relative">
      <div className={`h-6 mb-2 text-xs font-mono select-none ${isDarkMode ? 'text-[#e8e4d9]/60' : 'text-black/50'}`}>
        {hoveredCell ? (
          <span className={`px-2.5 py-1 rounded shadow-sm ${
            isDarkMode ? 'bg-[#1e1e24] text-white border border-white/10' : 'bg-black text-white'
          }`}>
            {hoveredCell.commits} commits on {hoveredCell.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        ) : (
          "Hover over cells to see commit records"
        )}
      </div>

      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[680px]">
          {cells.map((cell) => {
            let color = isDarkMode ? 'bg-[#161b22]' : 'bg-slate-100';
            
            if (isDarkMode) {
              if (cell.commits > 0 && cell.commits <= 2) color = 'bg-[#0e4429]';
              else if (cell.commits > 2 && cell.commits <= 4) color = 'bg-[#006d32]';
              else if (cell.commits > 4 && cell.commits <= 6) color = 'bg-[#26a641]';
              else if (cell.commits > 6) color = 'bg-[#39d353]';
            } else {
              if (cell.commits > 0 && cell.commits <= 2) color = 'bg-green-200';
              else if (cell.commits > 2 && cell.commits <= 4) color = 'bg-green-400';
              else if (cell.commits > 4 && cell.commits <= 6) color = 'bg-green-600';
              else if (cell.commits > 6) color = 'bg-green-800';
            }

            return (
              <div
                key={cell.id}
                onMouseEnter={() => setHoveredCell(cell)}
                onMouseLeave={() => setHoveredCell(null)}
                className={`w-[10px] h-[10px] rounded-[1.5px] transition-all hover:scale-125 hover:ring-1 cursor-pointer ${color} ${ringColor}`}
              />
            );
          })}
        </div>
      </div>

      <div className={`flex justify-between items-center mt-3 text-[10px] font-mono ${textMuted}`}>
        <span>371 days of mock commits</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className={`w-2.5 h-2.5 rounded-[1px] ${isDarkMode ? 'bg-[#161b22]' : 'bg-slate-100'}`} />
          <div className={`w-2.5 h-2.5 rounded-[1px] ${isDarkMode ? 'bg-[#0e4429]' : 'bg-green-200'}`} />
          <div className={`w-2.5 h-2.5 rounded-[1px] ${isDarkMode ? 'bg-[#006d32]' : 'bg-green-400'}`} />
          <div className={`w-2.5 h-2.5 rounded-[1px] ${isDarkMode ? 'bg-[#26a641]' : 'bg-green-600'}`} />
          <div className={`w-2.5 h-2.5 rounded-[1px] ${isDarkMode ? 'bg-[#39d353]' : 'bg-green-800'}`} />
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
      <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 ${
        isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
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
          <span className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 select-none ${
            isDarkMode ? 'bg-white/10 text-white/50' : 'bg-slate-200 text-slate-600'
          }`}>
            Upcoming ⬜
          </span>
        </div>
      </div>
    </div>
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
          <span className="text-xl">☕</span>
          <span className={`text-xs leading-tight ${textNormal}`}>Powered by black tea</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl">⚡</span>
          <span className={`text-xs leading-tight ${textNormal}`}>Speed-coder</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl">🎧</span>
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
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 shadow-sm ${
              isDarkMode ? 'border-white/10 hover:bg-white hover:text-black text-white' : 'border-black/10 hover:bg-black hover:text-white text-black'
            }`}
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={handleNext}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 shadow-sm ${
              isDarkMode ? 'border-white/10 hover:bg-white hover:text-black text-white' : 'border-black/10 hover:bg-black hover:text-white text-black'
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

  // Card themes for Bento Layout
  const bentoCardBg = isDarkMode 
    ? 'bg-[#121620]/45 border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.15)] text-[#e8e4d9]' 
    : 'bg-white border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-black';

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${
      isDarkMode 
        ? 'bg-[#0a0a0a] text-[#e8e4d9] cursor-none selection:bg-emerald-500/20 selection:text-[#e8e4d9]' 
        : 'bg-white text-black cursor-default selection:bg-emerald-500/20 selection:text-black'
    }`}>
      
      {/* Dynamic Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-green-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <CustomCursor />

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
          isBentoLayout={isBentoLayout} 
          toggleLayout={toggleLayout} 
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
              className="max-w-5xl mx-auto px-6 pb-16 space-y-6 select-none"
            >
              {/* Bento Grid Row 1: GitHub Graph */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 flex-grow ${
                    isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                  }`}>
                    GitHub Contribution Activity
                  </h3>
                </div>
                <ContributionGraph isDarkMode={isDarkMode} />
              </motion.div>

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
                    <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 ${
                      isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
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

                  <div className={`flex justify-between items-center p-3 border rounded-2xl mt-6 ${
                    isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-black/5'
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

              {/* Bento Grid Row 4: Fun Facts & Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`md:col-span-4 border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
                >
                  <FunFacts isDarkMode={isDarkMode} />
                </motion.div>

                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`md:col-span-8 border p-8 rounded-3xl flex flex-col justify-between transition-colors duration-500 ${bentoCardBg}`}
                >
                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 mb-4 ${
                      isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
                    }`}>
                      Core Capabilities
                    </h3>
                    <div className="space-y-4">
                      {categories.map((cat, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <span className={`text-[10px] font-semibold uppercase font-mono ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>{cat.title}</span>
                          <div className="flex flex-wrap gap-1">
                            {cat.skills.map((skill, sIdx) => (
                              <span 
                                key={sIdx} 
                                className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${
                                  isDarkMode ? 'bg-white/[0.02] border-white/5 text-white/80' : 'bg-slate-50 border-black/5 text-black'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bento Grid Row 5: Experience Timeline (Full width) */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`border p-8 rounded-3xl transition-colors duration-500 ${bentoCardBg}`}
              >
                <h3 className={`text-xs font-semibold uppercase tracking-widest border-b pb-2 mb-6 ${
                  isDarkMode ? 'text-white/40 border-white/5' : 'text-black/40 border-black/5'
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
                    className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all duration-300 font-semibold text-xs tracking-wider uppercase text-center ${
                      isDarkMode 
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
                    className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full border transition-all duration-300 font-semibold text-xs tracking-wider uppercase text-center ${
                      isDarkMode 
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
              <footer className={`py-8 border-t text-[11px] md:text-xs ${
                isDarkMode ? 'text-[#e8e4d9]/40 border-white/5' : 'text-black/40 border-black/5'
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
