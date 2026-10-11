import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Experience & Leadership
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The journey so <span className="text-gradient">far</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Neon vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-cyan-500/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon as LucideIcon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className={`relative mb-12 flex items-start gap-6 sm:gap-0 ${
                  isLeft ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Node dot */}
                <div className="absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    {exp.current && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 ${
                        exp.current
                          ? 'border-indigo-400 bg-indigo-500'
                          : 'border-cyan-500/50 bg-cyan-500/20'
                      }`}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-12 w-full sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pl-12' : 'sm:pr-12'}`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:from-indigo-500/5 group-hover:to-cyan-500/5 group-hover:opacity-100" />

                    {/* Icon */}
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${
                        exp.current
                          ? 'border-indigo-500/30 bg-indigo-500/10'
                          : 'border-cyan-500/30 bg-cyan-500/10'
                      }`}
                    >
                      <Icon
                        size={20}
                        className={exp.current ? 'text-indigo-300' : 'text-cyan-300'}
                      />
                    </div>

                    {/* Period badge */}
                    <span
                      className={`mb-3 inline-flex rounded-md border px-2.5 py-1 text-xs font-medium ${
                        exp.current
                          ? 'border-indigo-500/20 bg-indigo-500/10 text-indigo-300'
                          : 'border-white/10 bg-white/5 text-gray-400'
                      }`}
                    >
                      {exp.period}
                    </span>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p
                      className={`mb-3 text-sm font-medium ${
                        exp.current ? 'text-indigo-300' : 'text-cyan-300'
                      }`}
                    >
                      {exp.org}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
