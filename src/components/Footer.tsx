'use client';

import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#e8e4d9] bg-[#f6f4ee] text-[#71717a] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <p className="text-sm font-bold text-[#0f172a] tracking-wide">
              Virika Olivia Soans
            </p>
            <p className="text-xs text-[#71717a] font-mono font-medium">
              B.Tech CS &amp; Engineering (Data Science) • Dayananda Sagar University (CGPA 9.42)
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-[#e8e4d9] text-[#475569] hover:text-[#0f172a] hover:border-[#0f172a] shadow-2xs transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-[#e8e4d9] text-[#475569] hover:text-[#b45309] hover:border-[#b45309] shadow-2xs transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:virika06@gmail.com`}
              className="p-2 rounded-lg bg-white border border-[#e8e4d9] text-[#475569] hover:text-[#b45309] hover:border-[#b45309] shadow-2xs transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Back-to-top */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#71717a] font-mono font-medium">
              &copy; {new Date().getFullYear()} Virika Olivia Soans
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-[#e8e4d9] text-[#475569] hover:text-[#0f172a] hover:bg-[#fcfbfa] hover:border-[#0f172a] shadow-2xs transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-[#b45309]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
