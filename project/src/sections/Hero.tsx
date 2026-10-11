import { motion } from 'framer-motion';
import { ArrowRight, Mail, Zap, Code2, Cloud, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
              Computer Science Engineer
            </p>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient-shimmer">Ayush Kumar</span>
              <br />
              <span className="text-gradient-shimmer">Srivastava</span>
            </h1>
          </motion.div>

          {/* Role badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 glow-indigo">
              <Zap size={16} className="text-indigo-300" />
              <span className="text-sm font-medium text-indigo-200">
                {personalInfo.roleBadge}
              </span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg leading-relaxed text-gray-400"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:from-indigo-500 hover:to-indigo-400"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Explore Work</span>
              <ArrowRight
                size={18}
                className="relative transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 25px rgba(99,102,241,0.5)' }} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Mail size={18} className="text-gray-300" />
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Holographic avatar/code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="relative">
            {/* Ambient glow rings */}
            <div className="animate-pulse-glow absolute -inset-8 rounded-full bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 blur-3xl" />

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-indigo-500/20"
            />

            {/* Main card */}
            <div className="relative h-80 w-72 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-medium text-gray-600">profile.tsx</span>
              </div>

              {/* Code content */}
              <div className="space-y-2.5 p-5 font-mono text-xs leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-indigo-400">const</span>
                  <span className="text-cyan-300">dev</span>
                  <span className="text-gray-500">=</span>
                  <span className="text-gray-300">{'{'}</span>
                </div>
                <div className="pl-4 flex gap-1.5">
                  <span className="text-gray-500">name:</span>
                  <span className="text-emerald-300">'Ayush K.'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-4 flex gap-1.5">
                  <span className="text-gray-500">role:</span>
                  <span className="text-emerald-300">'Full-Stack'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-4 flex gap-1.5">
                  <span className="text-gray-500">cloud:</span>
                  <span className="text-emerald-300">'Azure'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-4 flex gap-1.5">
                  <span className="text-gray-500">ai:</span>
                  <span className="text-emerald-300">'GenAI'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-4 flex gap-1.5">
                  <span className="text-gray-500">rank:</span>
                  <span className="text-amber-300">'58K+'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-300">{'}'}</span>
                  <span className="ml-1 animate-pulse text-indigo-400">|</span>
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 top-12 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl"
              >
                <Code2 size={18} className="text-indigo-300" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 top-32 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl"
              >
                <Cloud size={18} className="text-cyan-300" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-3 bottom-16 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl"
              >
                <Sparkles size={18} className="text-amber-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
