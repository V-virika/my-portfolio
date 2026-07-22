'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { PUBLICATIONS } from '@/data/portfolioData';
import Interactive3DShapes from './Interactive3DShapes';

export default function Publications() {
  return (
    <section id="publications" className="py-14 sm:py-16 bg-white text-[#0f172a] border-y border-[#e2e8f0] relative overflow-hidden">
      <Interactive3DShapes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#faf9f6] border border-[#e2e8f0] text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" /> Peer-Reviewed Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Academic <span className="highlight-gold text-[#b45309]">Publications</span>
          </h2>
          <p className="text-[#334155] max-w-2xl mt-2 text-sm sm:text-base font-medium">
            Published research papers in multimodal machine learning, deep learning diagnostics, and smart mobility.
          </p>
          <div className="w-16 h-1 bg-[#b45309] rounded-full mt-3" />
        </motion.div>

        {/* Publications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6, rotateX: -3, rotateY: 3, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
              className="bg-[#faf9f6] border border-[#e2e8f0] p-6 sm:p-7 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-xl hover:border-[#b45309]/50 transition-all flex flex-col justify-between group cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b45309] font-mono text-xs font-bold">
                    <FileText className="w-3.5 h-3.5 text-[#b45309]" />
                    {pub.journalYear}
                  </span>
                  <span className="text-[11px] font-mono text-[#64748b] font-bold">
                    Paper #{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0f172a] group-hover:text-[#b45309] transition-colors leading-snug">
                  &quot;{pub.title}&quot;
                </h3>
              </div>

              <div className="mt-5 pt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748b] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b45309]" /> Indexed Publication
                </span>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#b45309] hover:text-[#78350f] transition-colors"
                >
                  <span>View in Resume</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
