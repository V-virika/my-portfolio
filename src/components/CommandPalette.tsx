'use client';

import { useState, useEffect } from 'react';
import { Search, X, FolderCode, GraduationCap, Mail, FileText, ArrowRight, Award } from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          const evt = new CustomEvent('open-command-palette');
          window.dispatchEvent(evt);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'Featured Projects', href: '#projects', icon: <FolderCode className="w-4 h-4 text-[#b45309]" /> },
    { title: 'Academic Credentials', href: '#about', icon: <GraduationCap className="w-4 h-4 text-emerald-600" /> },
    { title: 'Peer-Reviewed Research', href: '#publications', icon: <Award className="w-4 h-4 text-amber-600" /> },
    { title: 'Contact & Email', href: '#contact', icon: <Mail className="w-4 h-4 text-blue-600" /> },
    { title: 'View Resume PDF', href: '/resume.pdf', icon: <FileText className="w-4 h-4 text-[#b45309]" />, external: true },
  ];

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-xl bg-white border border-[#e2e8f0] rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Search Bar */}
        <div className="flex items-center px-4 border-b border-[#e2e8f0]">
          <Search className="w-5 h-5 text-[#b45309] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, or publications... (ESC to close)"
            className="w-full px-3 py-4 text-sm bg-transparent text-[#0f172a] placeholder-[#94a3b8] focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#faf9f6]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {!query && (
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#64748b] font-mono">
              Quick Navigation
            </div>
          )}

          {!query &&
            quickLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#faf9f6] text-xs font-bold text-[#0f172a] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#cbd5e1] group-hover:text-[#b45309] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}

          {query && filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#64748b] font-mono">
                Matching Projects ({filteredProjects.length})
              </div>
              {filteredProjects.map((p) => (
                <a
                  key={p.id}
                  href="#projects"
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#faf9f6] text-xs font-bold text-[#0f172a] transition-colors group"
                >
                  <div>
                    <div className="text-sm font-bold text-[#0f172a] group-hover:text-[#b45309]">
                      {p.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#64748b] font-medium mt-0.5">
                      {p.category} • {p.tags.slice(0, 3).join(', ')}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#cbd5e1] group-hover:text-[#b45309] group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          )}

          {query && filteredProjects.length === 0 && (
            <div className="p-6 text-center text-xs text-[#64748b] font-medium">
              No matching projects or skills found for &quot;{query}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
