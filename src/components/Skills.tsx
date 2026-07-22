'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Cpu, Layout, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

export default function Skills() {
  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-[#b45309]" />,
    Code2: <Code2 className="w-5 h-5 text-[#1e3a8a]" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-700" />,
    Layout: <Layout className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section id="skills" className="py-14 sm:py-16 bg-[#f1f5f9]/60 text-[#0f172a] border-y border-[#e2e8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e2e8f0] text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <Cpu className="w-3.5 h-3.5" /> Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Skills &amp; <span className="highlight-gold text-[#b45309]">Competencies</span>
          </h2>
          <p className="text-[#334155] max-w-2xl mt-2 text-sm sm:text-base font-medium">
            Core technical stack across Machine Learning, Data Science, Full-Stack Architecture, and Analytics.
          </p>
          <div className="w-16 h-1 bg-[#b45309] rounded-full mt-3" />
        </motion.div>

        {/* Skill Category Cards - Clean Minimal Pills with Re-triggering Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
              transition={{ type: 'spring', stiffness: 90, damping: 15, delay: idx * 0.1 }}
              className="bg-white border border-[#e2e8f0] p-6 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-lg hover:border-[#b45309]/50 transition-all flex flex-col justify-between cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    className="w-9 h-9 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] flex items-center justify-center shrink-0"
                  >
                    {iconMap[category.iconName]}
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">{category.title}</h3>
                    <p className="text-xs text-[#64748b] font-medium">{category.description}</p>
                  </div>
                </div>

                {/* Minimal Skill Badges Grid with Re-triggering Spring Pop Animations */}
                <div className="mt-4 pt-3.5 border-t border-[#e2e8f0] flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.6, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      transition={{
                        type: 'spring',
                        stiffness: 160,
                        damping: 12,
                        delay: sIdx * 0.04,
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf9f6] border border-[#cbd5e1] text-xs font-semibold text-[#1e293b] hover:border-[#b45309] hover:bg-white transition-all shadow-2xs hover:shadow-xs cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b45309]" />
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-[#64748b] bg-white px-1.5 py-0.5 rounded border border-[#e2e8f0] font-bold">
                        {skill.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
