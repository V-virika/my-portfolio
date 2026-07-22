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
              • <span className="text-indigo-400 font-bold">cgpa</span> — View academic performance score
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
      case 'cgpa':
        response = (
          <div className="text-xs font-mono text-emerald-400 font-bold">
            Academic Performance: CGPA 9.42 / 10.0 (Dayananda Sagar University - CSE Data Science)
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="space-y-1 text-xs font-mono">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="text-slate-300">
                {i + 1}. <span className="text-indigo-300 font-bold">{p.title}</span> [{p.category}]
                {p.metrics ? ` — ${p.metrics.label}: ${p.metrics.value}` : ''}
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div>Email: {PERSONAL_INFO.email}</div>
            <div>GitHub: {PERSONAL_INFO.github}</div>
            <div>LinkedIn: {PERSONAL_INFO.linkedin}</div>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        response = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for available options.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput('');
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const copyCLI = () => {
    navigator.clipboard.writeText('npx virika-soans-portfolio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#18181b] border border-[#27272a] rounded-2xl shadow-xl overflow-hidden font-mono text-xs">
      {/* Header bar */}
      <div className="px-4 py-3 bg-[#09090b] border-b border-[#27272a] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-semibold text-slate-400">
            virika@portfolio-cli: ~
          </span>
        </div>

        <button
          onClick={copyCLI}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#27272a] text-slate-300 text-[10px] hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-indigo-400" />}
          <span>npx virika-cli</span>
        </button>
      </div>

      {/* Terminal Display */}
      <div className="p-4 max-h-56 overflow-y-auto space-y-3 bg-[#09090b]/90 text-slate-200">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">virika@DSU:~$</span>
              <span className="text-white font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 border-l border-indigo-500/30 text-slate-300">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2 bg-[#18181b] border-t border-[#27272a] flex flex-wrap items-center gap-2 text-[11px]">
        <span className="text-slate-500 font-semibold">Quick Run:</span>
        {['help', 'projects', 'cgpa', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded bg-[#27272a] text-indigo-300 hover:text-white hover:bg-indigo-600/30 border border-indigo-500/20 transition-all font-semibold"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Command Input Form */}
      <form onSubmit={onFormSubmit} className="px-4 py-3 bg-[#09090b] border-t border-[#27272a] flex items-center gap-2">
        <span className="text-emerald-400 font-bold">virika@DSU:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'projects', 'cgpa', 'contact')..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder-slate-600"
        />
        <button
          type="submit"
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#27272a] transition-colors"
          aria-label="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
