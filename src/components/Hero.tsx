'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ChevronRight, Sparkles, Terminal as TerminalIcon, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import HeroTerminal from './HeroTerminal';
import TypewriterText from './TypewriterText';
import Interactive3DShapes from './Interactive3DShapes';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-[#faf9f6] text-[#0f172a] overflow-hidden flex flex-col justify-center bg-grid-light">
      <Interactive3DShapes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Profile Photo, Headline & CTA */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status & Profile Photo Avatar Row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* User Profile Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-[#b45309] via-amber-400 to-[#0f172a] shadow-md shrink-0 cursor-pointer animate-float-gentle"
              >
                <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-white">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex flex-col justify-center px-4 py-2 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:border-[#b45309]/50 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  <span className="text-xs font-bold tracking-wide text-[#0f172a]">
                    Available for Data Analytics, AI &amp; Software Engineering Roles
                  </span>
                </div>
                <span className="text-xs text-[#64748b] font-mono font-semibold mt-0.5">
                  DSU CSE (Data Science) • <span className="text-[#b45309] font-bold">2022–2026</span>
                </span>
              </motion.div>
            </div>

            {/* Main Greeting & Dynamic Typewriter Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1]">
                Hi, I&apos;m <span className="highlight-gold text-[#b45309]">Virika Olivia Soans</span>
              </h1>
              <div className="text-xl sm:text-3xl font-bold tracking-tight text-[#1e3a8a] mt-3 sm:mt-4 min-h-[1.5em]">
                <TypewriterText />
              </div>
            </motion.div>

            {/* Subheadline Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.subheadline}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f172a] text-white font-bold text-sm shadow-md hover:bg-[#1e293b] transition-all duration-200"
              >
                <span>View Featured Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[#0f172a] font-bold text-sm shadow-sm hover:bg-[#f1f5f9] hover:border-[#b45309] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#b45309]" />
                <span>Get in Touch</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[#475569] hover:text-[#0f172a] hover:border-[#0f172a] transition-all text-xs font-bold shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#475569]" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>

            {/* Stat Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="bg-white border border-[#e2e8f0] p-4 rounded-2xl shadow-sm hover:border-[#b45309] hover:shadow-md transition-all cursor-default"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                    <span className="text-[#b45309]">{stat.value}</span>
                  </div>
                  <div className="text-xs font-bold text-[#475569] mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive CLI Terminal Console */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#475569] font-mono px-1 font-bold">
                <span className="flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#b45309]" />
                  <span>Interactive Developer Console</span>
                </span>
                <span className="text-[11px] text-[#b45309] font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Live CLI
                </span>
              </div>
              <HeroTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
