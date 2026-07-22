'use client';

import { X, Download, FileText, CheckCircle2, Award, GraduationCap, Briefcase, BookOpen, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, PUBLICATIONS, EDUCATION_LIST } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-white border border-[#e2e8f0] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-[#0f172a]">
        {/* Header bar */}
        <div className="h-1.5 bg-[#b45309]" />

        {/* Header */}
        <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between bg-[#faf9f6]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#b45309]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#0f172a]">Official Resume</h3>
              <p className="text-xs text-[#b45309] font-mono font-bold">Virika Olivia Soans — CSE (Data Science)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0f172a] text-white text-xs font-bold hover:bg-[#1e293b] transition-all shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-[#e2e8f0] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-sm">
          {/* Candidate Contact & Header */}
          <div className="space-y-2 border-b border-[#e2e8f0] pb-6">
            <h4 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">{PERSONAL_INFO.name}</h4>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#64748b] font-bold">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <p className="text-[#334155] leading-relaxed text-xs sm:text-sm mt-3 font-medium">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Education Breakdown */}
          <div className="space-y-3 border-b border-[#e2e8f0] pb-6">
            <div className="flex items-center gap-2 text-[#b45309] font-bold uppercase tracking-wider text-xs font-mono">
              <GraduationCap className="w-4 h-4" /> Education History
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-[#0f172a] text-sm">{edu.institution}</h5>
                    <p className="text-xs text-[#475569] font-semibold">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-[#b45309] bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block">
                      {edu.score}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748b]">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div className="space-y-3 border-b border-[#e2e8f0] pb-6">
            <div className="flex items-center gap-2 text-[#1e3a8a] font-bold uppercase tracking-wider text-xs font-mono">
              <BookOpen className="w-4 h-4" /> Publications
            </div>
            <div className="space-y-2">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#e2e8f0]">
                  <p className="text-xs sm:text-sm font-bold text-[#0f172a]">{idx + 1}. &quot;{pub.title}&quot;</p>
                  <p className="text-xs font-mono text-[#b45309] font-bold mt-1">— {pub.journalYear}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3 border-b border-[#e2e8f0] pb-6">
            <div className="flex items-center gap-2 text-[#b45309] font-bold uppercase tracking-wider text-xs font-mono">
              <Briefcase className="w-4 h-4" /> Projects &amp; Research
            </div>
            <div className="grid grid-cols-1 gap-3">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#0f172a] text-xs sm:text-sm">{p.title}</span>
                    {p.metrics && (
                      <span className="text-[11px] font-mono text-[#b45309] bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">
                        {p.metrics.value}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#334155] font-medium">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-700 font-bold uppercase tracking-wider text-xs font-mono">
              <Award className="w-4 h-4" /> Achievements &amp; Awards
            </div>
            <div className="grid grid-cols-1 gap-2">
              {ACHIEVEMENTS.map((a, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0f172a]">{a.title}</span>
                    <span className="text-[#475569] font-semibold"> — {a.event}</span>
                  </div>
                  <span className="font-mono text-[#b45309] font-bold shrink-0">{a.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer PDF Action */}
        <div className="p-4 bg-[#faf9f6] border-t border-[#e2e8f0] flex items-center justify-between">
          <span className="text-xs text-[#64748b] font-mono font-semibold">
            Official PDF copy available (public/resume.pdf)
          </span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0f172a] text-white text-xs font-bold hover:bg-[#1e293b] transition-all"
          >
            <Download className="w-4 h-4" /> Open Full PDF
          </a>
        </div>
      </div>
    </div>
  );
}
