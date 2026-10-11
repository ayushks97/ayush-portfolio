import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, Copy, ArrowUp } from 'lucide-react';
import { contactInfo, socials, personalInfo } from '@/data/portfolio';
import ContactForm from '@/components/ContactForm';
import type { LucideIcon } from 'lucide-react';

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showCopiedBadge, setShowCopiedBadge] = useState(false);

  const copyToClipboard = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    if (id === 'email') {
      setShowCopiedBadge(true);
      setTimeout(() => setShowCopiedBadge(false), 2500);
    }
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
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

        {/* Two-column: Contact info + Form */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-[70px]" />

            {/* Copied Email! dynamic badge */}
            <AnimatePresence>
              {showCopiedBadge && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                  className="absolute left-1/2 top-4 z-10 -translate-x-1/2"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-xl">
                    <Check size={16} />
                    Copied Email!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Details</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Click any card to copy to clipboard
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon as LucideIcon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => copyToClipboard(item.id, item.value)}
                      className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 transition-colors group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                        <Icon
                          size={18}
                          className="text-indigo-300 transition-colors group-hover:text-cyan-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          {item.label}
                        </p>
                        <p className="truncate text-sm font-medium text-gray-200">
                          {item.value}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1 text-xs text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
                        {copiedId === item.id ? (
                          <>
                            <Check size={12} /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                          </>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="space-y-3 border-t border-white/5 pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Follow Me
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon as LucideIcon;
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-200"
                      >
                        <Icon
                          size={18}
                          className="transition-transform group-hover:scale-110"
                        />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <ContactForm />
          </motion.div>
        </div>

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
