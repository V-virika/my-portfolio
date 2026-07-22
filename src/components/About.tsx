'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '@/data/portfolioData';

export default function About() {
  const highlights = [
    'Specialized in Vision Transformers (Swin) & Explainable AI (Grad-CAM)',
    '1st Place Winner at University Expo 2024 & NASA Space Apps Global Nominee',
    'Proficient in Full-Stack Web App Development (React, Next.js, Node.js, Flask)',
  ];

  return (
    <section id="about" className="py-14 sm:py-16 bg-white text-[#0f172a] border-y border-[#e2e8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Re-triggering Fly-In */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf9f6] border border-[#e2e8f0] text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5" /> Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            About <span className="highlight-gold text-[#b45309]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#b45309] rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Profile Photo & Education Column with 3D Re-triggering Fly-In Left */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Clean Profile Avatar Card */}
            <motion.div
              whileHover={{ y: -6, rotateX: -3, scale: 1.02 }}
              className="bg-[#faf9f6] border border-[#e2e8f0] p-6 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-lg hover:border-[#b45309]/50 transition-all cursor-default"
            >
              <div className="relative w-32 h-32 rounded-2xl p-[3px] bg-gradient-to-tr from-[#b45309] to-[#0f172a] shadow-sm animate-pulse-gentle">
                <div className="w-full h-full rounded-[13px] overflow-hidden relative bg-white">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0f172a]">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-bold text-[#b45309] font-mono mt-1">{PERSONAL_INFO.title}</p>
              </div>
            </motion.div>

            {/* Academic Credentials Card */}
            <motion.div
              whileHover={{ y: -6, rotateX: 3, scale: 1.02 }}
              className="bg-[#faf9f6] border border-[#e2e8f0] p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#b45309]/50 transition-all cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#b45309]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Academic Credentials</h3>
                  <p className="text-xs text-[#b45309] font-mono font-bold">2022 – 2026</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#0f172a]">
                  Dayananda Sagar University
                </h4>
                <p className="text-sm text-[#475569] font-semibold">{PERSONAL_INFO.degree}</p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#64748b] font-bold">Cumulative Grade Point</span>
                  <span className="text-sm font-extrabold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                    CGPA 9.42 / 10
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Narrative & Achievements Column with 3D Re-triggering Fly-In Right */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Main Bio Card */}
            <div className="bg-[#faf9f6] border border-[#e2e8f0] p-7 rounded-2xl shadow-sm">
              <div className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium space-y-4">
                <p>{PERSONAL_INFO.bio}</p>
              </div>

              {/* Highlights checklist */}
              <div className="mt-6 pt-5 border-t border-[#e2e8f0] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748b] font-mono mb-3">
                  Core Highlights &amp; Milestones
                </h3>
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0f172a] font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements List */}
            <div id="achievements" className="bg-[#faf9f6] border border-[#e2e8f0] p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-[#e2e8f0] pb-3">
                <Award className="w-5 h-5 text-amber-600 animate-bounce" />
                <h3 className="text-lg font-bold text-[#0f172a]">Honors &amp; Awards</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACHIEVEMENTS.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#b45309] transition-colors cursor-default shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[#0f172a]">{achievement.title}</h4>
                      <span className="text-[11px] font-mono text-[#b45309] bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#475569]">{achievement.event}</p>
                    <p className="text-xs text-[#64748b] mt-1 font-medium">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
