'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderCode, Award, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', 'Healthcare', 'Web & IoT', 'Full Stack', 'Research'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-14 sm:py-16 bg-[#faf9f6] text-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e2e8f0] text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <FolderCode className="w-3.5 h-3.5 text-[#b45309]" /> Featured Engineering Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Key <span className="highlight-gold text-[#b45309]">Projects</span>
          </h2>
          <p className="text-[#334155] max-w-2xl mt-2 text-sm sm:text-base font-medium">
            Real-world applications spanning deep learning, vision transformers, IoT analytics, steganography, and full-stack web platforms.
          </p>
          <div className="w-16 h-1 bg-[#b45309] rounded-full mt-3" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.06 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0f172a] text-white shadow-md'
                  : 'bg-white border border-[#e2e8f0] text-[#475569] hover:text-[#0f172a] hover:border-[#b45309]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Re-triggering 3D Fly-Ins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, rotateX: 15, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -8, rotateX: -3, rotateY: 3, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 95, damping: 14, delay: (idx % 2) * 0.1 }}
              className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col justify-between relative group shadow-sm hover:shadow-2xl hover:border-[#b45309]/60 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image Banner - Full Uncropped Fit */}
              {project.image && (
                <div className="relative w-full h-56 sm:h-64 bg-[#f8fafc] p-2.5 overflow-hidden border-b border-[#e2e8f0] flex items-center justify-center">
                  <Image
                    src={`${project.image}?v=${Date.now()}`}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-contain object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-3 py-1 text-xs font-bold font-mono rounded-md bg-white/95 border border-[#e2e8f0] text-[#0f172a] shadow-xs">
                      {project.category}
                    </span>

                    {project.metrics && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-extrabold rounded-full bg-amber-50 border border-amber-200 text-[#b45309] shadow-xs animate-pulse">
                        <Award className="w-3.5 h-3.5" />
                        {project.metrics.value}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] group-hover:text-[#b45309] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#b45309] font-bold mt-1 mb-2.5">{project.subtitle}</p>
                  <p className="text-[#334155] text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Summary */}
                  <div className="mt-3.5 pt-3.5 border-t border-[#e2e8f0] space-y-1.5">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0f172a] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b45309] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions & Tags */}
                <div className="mt-5 pt-4 border-t border-[#e2e8f0] space-y-3">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-[#f1f5f9] border border-[#e2e8f0] text-[#334155]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#b45309] hover:text-[#78350f] transition-colors cursor-pointer"
                    >
                      <span>Read Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] text-[#0f172a] text-xs font-bold hover:bg-[#e2e8f0] transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#475569]" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
