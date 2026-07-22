'use client';

import { useState, useEffect } from 'react';
import { Search, X, FolderCode, Cpu, User, Mail, GraduationCap, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { PROJECTS, SKILL_CATEGORIES, PERSONAL_INFO } from '@/data/portfolioData';

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
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const navActions = [
    { title: 'About Virika Olivia Soans', href: '#about', icon: <User className="w-4 h-4 text-indigo-600" /> },
    { title: 'Academic Record (CGPA 9.42)', href: '#about', icon: <GraduationCap className="w-4 h-4 text-emerald-600" /> },
    { title: 'View All Projects', href: '#projects', icon: <FolderCode className="w-4 h-4 text-[#4338ca]" /> },
    { title: 'Skills & Tech Matrix', href: '#skills', icon: <Cpu className="w-4 h-4 text-purple-600" /> },
    { title: 'Contact Virika', href: '#contact', icon: <Mail className="w-4 h-4 text-amber-600" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#18181b]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Command Window */}
      <div className="relative w-full max-w-xl bg-white border border-[#e5e3df] rounded-2xl shadow-2xl overflow-hidden z-10 my-4 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#e5e3df] bg-[#faf9f6]">
          <Search className="w-5 h-5 text-[#71717a] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search projects, skills, credentials... (Press ESC to exit)"
            className="w-full bg-transparent text-[#18181b] placeholder-[#a1a1aa] focus:outline-none text-sm font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#e5e3df]/60 text-[#71717a] transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[11px] font-bold text-[#71717a] uppercase font-mono tracking-wider">
                Quick Navigation
              </div>
              {navActions.map((action) => (
                <a
                  key={action.title}
                  href={action.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#faf9f6] text-sm text-[#18181b] font-semibold transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {action.icon}
                    <span>{action.title}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-[#18181b] group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          )}

          {/* Projects Results */}
          <div className="space-y-1">
            <div className="px-3 py-1 text-[11px] font-bold text-[#71717a] uppercase font-mono tracking-wider">
              Projects ({filteredProjects.length})
            </div>
            {filteredProjects.length === 0 ? (
              <div className="px-3 py-4 text-xs text-[#71717a] text-center font-mono">
                No matching projects found for &quot;{query}&quot;
              </div>
            ) : (
              filteredProjects.map((p) => (
                <a
                  key={p.id}
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-start justify-between px-3 py-2.5 rounded-xl hover:bg-[#f4f2ed] transition-colors group"
                >
                  <div>
                    <div className="text-sm font-bold text-[#18181b] group-hover:text-[#4338ca] transition-colors">
                      {p.title}
                    </div>
                    <div className="text-xs text-[#52525b] line-clamp-1">{p.subtitle}</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#4338ca] shrink-0 mt-1" />
                </a>
              ))
            )}
          </div>
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#f4f2ed] border-t border-[#e5e3df] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
          <span>Press ESC to close</span>
          <span>Use ⌘K / Ctrl+K anytime</span>
        </div>
      </div>
    </div>
  );
}
