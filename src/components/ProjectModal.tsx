'use client';

import Image from 'next/image';
import { X, ExternalLink, Award, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-white border border-[#e8e4d9] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header bar */}
        <div className="h-1.5 bg-[#b45309]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 border border-[#e8e4d9] text-[#71717a] hover:text-[#0f172a] hover:bg-[#f6f4ee] transition-all z-20 shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Project Screenshot Header - Full Uncropped Fit */}
          {project.image && (
            <div className="relative w-full h-64 sm:h-80 bg-[#f8fafc] p-3 border-b border-[#e8e4d9] flex items-center justify-center">
              <Image
                src={`${project.image}?v=${Date.now()}`}
                alt={project.title}
                fill
                unoptimized
                className="object-contain object-center"
              />
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-6">
            {/* Category & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#f6f4ee] border border-[#e8e4d9] text-[#b45309] font-mono">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {project.metrics.label}: {project.metrics.value}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{project.title}</h3>
              <p className="text-sm font-semibold text-[#b45309] mt-1 font-mono">{project.subtitle}</p>
            </div>

            {/* Detailed Narrative */}
            <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed border-t border-b border-[#e8e4d9] py-4 font-normal">
              <p>{project.fullDescription}</p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#71717a] uppercase tracking-wider font-mono">
                Key Engineering Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b45309] shrink-0 mt-1" />
                    <span className="text-sm text-[#0f172a] font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#71717a] uppercase tracking-wider font-mono">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#f6f4ee] border border-[#e8e4d9] text-[#475569]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" /> View Repository
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#f6f4ee] text-[#0f172a] border border-[#e8e4d9] hover:bg-[#e8e4d9] transition-colors font-semibold"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
