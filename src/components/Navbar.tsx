'use client';

import { useState, useEffect } from 'react';
import { Mail, Menu, X, Terminal, ArrowUpRight, Search, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import CommandPalette from './CommandPalette';
import ResumeModal from './ResumeModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e2e8f0] py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#0f172a] transition-opacity hover:opacity-90"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0f172a] p-[1px] shadow-sm flex items-center justify-center text-white">
                <Terminal className="w-5 h-5 text-amber-400 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-[#0f172a] tracking-tight">
                  Virika <span className="text-[#b45309]">Olivia</span>
                </span>
                <span className="text-[10px] tracking-wider text-[#64748b] font-mono -mt-1 font-bold">
                  DATA SCIENCE &amp; SE
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white p-1.5 rounded-full border border-[#e2e8f0] shadow-xs backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#475569] hover:text-[#0f172a] hover:bg-[#faf9f6] rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-[#475569] text-xs font-bold hover:border-[#b45309] hover:text-[#0f172a] transition-all shadow-xs cursor-pointer"
                title="Search projects & commands (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#b45309]" />
                <span>Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-[#faf9f6] border border-[#e2e8f0] text-[10px] font-mono text-[#64748b]">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-[#0f172a] hover:bg-[#faf9f6] transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#b45309]" />
                <span>Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#e2e8f0] shadow-xs flex items-center justify-center text-[#475569] hover:text-[#0f172a] hover:border-[#0f172a] hover:bg-[#faf9f6] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#e2e8f0] shadow-xs flex items-center justify-center text-[#475569] hover:text-[#b45309] hover:border-[#b45309] hover:bg-[#faf9f6] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#0f172a] text-white shadow-sm hover:bg-[#1e293b] transition-all"
              >
                Connect
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="p-2 rounded-lg bg-white border border-[#e2e8f0] text-[#475569]"
                aria-label="Open Command Palette"
              >
                <Search className="w-5 h-5 text-[#b45309]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white border border-[#e2e8f0] text-[#0f172a]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf9f6] border-b border-[#e2e8f0] px-4 pt-3 pb-6 mt-3 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-bold text-[#0f172a] hover:bg-white rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-[#0f172a] border border-[#e2e8f0] text-sm font-bold"
              >
                <FileText className="w-4 h-4 text-[#b45309]" /> Resume
              </button>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white text-[#0f172a] border border-[#e2e8f0]"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
