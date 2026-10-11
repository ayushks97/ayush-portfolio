import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Copy, ArrowUp } from 'lucide-react';
import { contactInfo, socials, personalInfo } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-3 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-400">
            Open to opportunities, collaborations, and conversations about cloud, AI, and web.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

          {/* Contact items */}
          <div className="relative grid gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => {
              const Icon = item.icon as LucideIcon;
              return (
                <button
                  key={item.id}
                  onClick={() => copyToClipboard(item.id, item.value)}
                  className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 transition-colors group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon
                      size={20}
                      className="text-indigo-300 transition-colors group-hover:text-cyan-300"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-gray-200">{item.value}</p>
                  </div>
                  {/* Copy indicator */}
                  <div className="flex items-center gap-1 text-xs text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
                    {copiedId === item.id ? (
                      <>
                        <Check size={12} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Click to copy
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Social links */}
          <div className="relative mt-8 flex items-center justify-center gap-4 border-t border-white/5 pt-8">
            {socials.map((social) => {
              const Icon = social.icon as LucideIcon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-200"
                >
                  <Icon
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  {social.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-gradient text-lg font-bold">&lt;/&gt;</span>
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-gray-600">
            Crafted with precision. Built for the future.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-400 transition-all hover:border-white/20 hover:text-white"
          >
            Back to top
            <ArrowUp
              size={16}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
