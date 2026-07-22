'use client';

import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#e2e8f0] text-[#0f172a] py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f172a] flex items-center justify-center text-white shadow-sm">
              <Terminal className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#0f172a]">Virika Olivia Soans</h3>
              <p className="text-xs text-[#64748b] font-medium">
                B.Tech CS &amp; Engineering (Data Science) • Dayananda Sagar University
              </p>
            </div>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#0f172a] transition-colors p-2 rounded-lg bg-[#faf9f6] border border-[#e2e8f0]"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#b45309] transition-colors p-2 rounded-lg bg-[#faf9f6] border border-[#e2e8f0]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f172a] text-white text-xs font-bold hover:bg-[#1e293b] transition-all cursor-pointer shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0] text-center text-xs text-[#64748b] font-medium">
          <p>© {new Date().getFullYear()} Virika Olivia Soans. Crafted with precision &amp; Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
