'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, MapPin, MessageSquareCheck, ExternalLink, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('virika06@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subjectStr = formData.subject || `Portfolio Contact from ${formData.name}`;
    const bodyStr = `Hello Virika,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;

    const mailtoSubject = encodeURIComponent(subjectStr);
    const mailtoBody = encodeURIComponent(bodyStr);

    const mailtoUrl = `mailto:virika06@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=virika06@gmail.com&su=${mailtoSubject}&body=${mailtoBody}`;

    const details = {
      name: formData.name,
      email: formData.email,
      subject: subjectStr,
      message: formData.message,
      mailtoUrl,
      gmailUrl,
    };

    setSubmittedDetails(details);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open pre-filled Gmail Web compose window directly in a new tab
      window.open(gmailUrl, '_blank');

      // Clear form inputs
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#faf9f6] text-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e2e8f0] text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-[#b45309]" /> Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Get In <span className="highlight-gold text-[#b45309]">Touch</span>
          </h2>
          <p className="text-[#334155] max-w-2xl mt-2 text-sm sm:text-base leading-relaxed font-medium">
            Looking for opportunities where I can apply my skills in data science, AI, and software engineering to create innovative solutions. Let&apos;s connect!
          </p>
          <div className="w-16 h-1 bg-[#b45309] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email Copy & Direct Mail Card */}
            <div className="bg-white border border-[#e2e8f0] p-6 rounded-2xl space-y-4 shadow-sm hover:border-[#b45309]/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] flex items-center justify-center text-[#b45309]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#64748b] uppercase tracking-wider font-mono">
                    Direct Email Address
                  </h3>
                  <a
                    href="mailto:virika06@gmail.com"
                    className="text-base font-bold text-[#0f172a] hover:text-[#b45309] transition-colors mt-0.5 block font-mono"
                  >
                    virika06@gmail.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] text-[#0f172a] text-xs font-bold hover:bg-[#e2e8f0] transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span className="text-emerald-700 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#b45309]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=virika06@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0f172a] text-white text-xs font-bold hover:bg-[#1e293b] transition-all"
                >
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>Open Gmail Web</span>
                </motion.a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#e2e8f0] p-5 rounded-2xl flex items-center gap-4 group hover:border-[#b45309] shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] flex items-center justify-center text-[#475569] group-hover:text-[#0f172a] transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">GitHub Profile</h4>
                  <p className="text-xs text-[#b45309] font-mono font-bold">@V-virika</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#e2e8f0] p-5 rounded-2xl flex items-center gap-4 group hover:border-[#b45309] shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] flex items-center justify-center text-[#b45309] transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">LinkedIn</h4>
                  <p className="text-xs text-[#b45309] font-mono font-bold">virika-soans</p>
                </div>
              </motion.a>
            </div>

            {/* Location & Status Pill */}
            <div className="bg-white border border-[#e2e8f0] p-5 rounded-2xl flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f172a]">Location &amp; Availability</h4>
                <p className="text-xs text-[#475569] font-bold">{PERSONAL_INFO.location} • Open for Roles</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-[#e2e8f0] p-7 sm:p-8 rounded-2xl shadow-sm relative">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Send a Message to virika06@gmail.com</h3>
              <p className="text-sm text-[#475569] font-medium mb-5">
                Fill out the form below to connect with Virika. Submitting will immediately open a pre-filled email window to <strong className="font-mono text-[#b45309]">virika06@gmail.com</strong>.
              </p>

              {submitted && submittedDetails && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <MessageSquareCheck className="w-5 h-5 text-emerald-700" />
                    <span>Message Prepared for virika06@gmail.com!</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                    Gmail Web composer has opened in a new tab. If it was blocked by your browser, click one of the options below:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={submittedDetails.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0f172a] text-white text-xs font-bold hover:bg-[#1e293b] transition-colors"
                    >
                      <Globe className="w-4 h-4 text-amber-400" /> Open in Gmail Web
                    </a>
                    <a
                      href={submittedDetails.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-bold hover:bg-emerald-100 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#b45309]" /> Open in Mail App
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(submittedDetails.message);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                    >
                      <Copy className="w-4 h-4" /> Copy Message Text
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider font-mono mb-1.5">
                      Your Name <span className="text-[#b45309]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#b45309] focus:bg-white transition-all text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider font-mono mb-1.5">
                      Your Email <span className="text-[#b45309]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#b45309] focus:bg-white transition-all text-sm font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider font-mono mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Role Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#b45309] focus:bg-white transition-all text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider font-mono mb-1.5">
                    Message <span className="text-[#b45309]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Virika, I'd like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-[#e2e8f0] text-[#0f172a] placeholder-slate-400 focus:outline-none focus:border-[#b45309] focus:bg-white transition-all text-sm font-semibold resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0f172a] text-white font-bold text-sm shadow-md hover:bg-[#1e293b] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Opening Email Composer...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Send Email to virika06@gmail.com</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
