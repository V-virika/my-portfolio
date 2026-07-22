'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '@/data/portfolioData';

export default function HeroTerminal() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<
    { command: string; output: string | React.ReactNode }[]
  >([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-amber-400 font-bold">
            🚀 Virika Olivia Soans — Interactive Developer CLI v2.5
          </div>
          <div className="text-[#a1a1aa]">
            Type <span className="text-indigo-400 font-bold">&apos;help&apos;</span> or click quick actions below to inspect engineering records.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <div>Available Commands:</div>
            <div>
              • <span className="text-indigo-400 font-bold">bio</span> — View background &amp; degree info
            </div>
            <div>
              • <span className="text-indigo-400 font-bold">projects</span> — List core engineering projects &amp; accuracy
            </div>
            <div>
              • <span className="text-indigo-400 font-bold">contact</span> — Get direct email &amp; links
            </div>
            <div>
              • <span className="text-indigo-400 font-bold">clear</span> — Clear terminal window
            </div>
          </div>
        );
        break;
      case 'bio':
        response = (
          <div className="text-xs text-slate-300 font-mono leading-relaxed">
            {PERSONAL_INFO.bio}
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="space-y-1 text-xs font-mono">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="text-slate-300">
                {i + 1}. <span className="text-indigo-300 font-bold">{p.title}</span> [{p.category}]
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <div>Email: virika06@gmail.com</div>
            <div>GitHub: https://github.com/V-virika</div>
            <div>LinkedIn: https://linkedin.com/in/virika-olivia-soans-3727122b8</div>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput('');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('git clone https://github.com/V-virika/prostate-cancer-classification.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#090d16] border border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl font-mono text-xs text-slate-200">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#0f172a] border-b border-[#1e293b] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-amber-400" /> bash — virika@dev:~
          </span>
        </div>

        <button
          onClick={handleCopyCode}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1e293b] text-slate-300 hover:text-white text-[10px] font-bold transition-all"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-400" />}
          <span>{copied ? 'Copied Clone Command' : 'Copy Git Clone'}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            {item.command && (
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">virika@dev:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
            )}
            <div className="pl-4 text-slate-300">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompt */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) handleCommand(input);
        }}
        className="px-4 py-3 bg-[#0c101d] border-t border-[#1e293b] flex items-center gap-2"
      >
        <span className="text-emerald-400 font-bold">virika@dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help', 'bio', 'projects', 'contact'..."
          className="flex-1 bg-transparent border-none text-white text-xs placeholder-slate-500 focus:outline-none font-mono"
        />
        <button type="submit" className="text-slate-400 hover:text-amber-400 transition-colors">
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>

      {/* Quick Command Buttons */}
      <div className="px-4 py-2 bg-[#090d16] border-t border-[#1e293b]/50 flex flex-wrap gap-2 text-[11px]">
        {['help', 'bio', 'projects', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded bg-[#1e293b]/80 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer font-bold"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
