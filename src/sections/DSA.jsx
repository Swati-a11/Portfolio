import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, CheckCircle, Clock } from 'lucide-react';

const DSA = () => {
  const topics = [
    { 
      name: "Arrays", 
      status: "In Progress", 
      icon: CheckCircle, 
      color: "border-emerald-500/20 bg-emerald-500/[0.01] text-emerald-400" 
    },
    { 
      name: "Strings", 
      status: "Coming up", 
      icon: Clock, 
      color: "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
    },
    { 
      name: "Linked Lists", 
      status: "Coming up", 
      icon: Clock, 
      color: "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
    },
    { 
      name: "Trees & Graphs", 
      status: "Coming up", 
      icon: Clock, 
      color: "border-white/5 bg-white/[0.005] text-[#e8e4d9]/50" 
    },
  ];

  return (
    <section 
      id="dsa" 
      className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-[#e8e4d9] overflow-hidden border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-[#e8e4d9]/45 block mb-6">
          / Problem Solving
        </span>

        <h2 className="font-bebas text-4xl md:text-6xl mb-8 tracking-wide uppercase">
          Solving problems, one line at a time.
        </h2>

        <p className="text-base md:text-lg font-light text-[#e8e4d9]/70 leading-relaxed mb-12 max-w-2xl">
          I solve DSA problems daily in C++ — currently <strong className="font-semibold text-white">50+ problems solved</strong> and counting. Following <strong className="font-semibold text-white">Striver's A2Z DSA Sheet</strong> systematically.
        </p>

        {/* Progress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div 
                key={idx} 
                className={`border p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ${topic.color}`}
              >
                <div>
                  <h3 className="text-base font-medium tracking-wide text-white mb-4">
                    {topic.name}
                  </h3>
                  <div className="text-xs font-light flex items-center gap-1.5 mt-auto">
                    <Icon size={14} />
                    {topic.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platforms and Languages */}
        <div className="flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.005]">
          <div className="flex items-center gap-3">
            <Code size={18} className="text-white/40" />
            <span className="text-sm font-light text-[#e8e4d9]/60">
              Language: <strong className="font-medium text-[#e8e4d9]">C++ / Python</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen size={18} className="text-white/40" />
            <span className="text-sm font-light text-[#e8e4d9]/60">
              Platform: <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 transition-colors">LeetCode</a>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DSA;
