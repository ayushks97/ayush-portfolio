import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import { aboutBio, stats } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function AboutBento() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              About & Impact
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering with <span className="text-gradient">purpose</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
          {/* Bio card — spans 2 columns */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="md:col-span-2 md:row-span-1"
          >
            <SpotlightCard className="h-full p-7" glowColor="indigo">
              <div className="flex h-full flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10">
                    <GraduationCap size={22} className="text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Education & Background</h3>
                    <p className="text-sm text-gray-500">B.Tech Computer Science</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-gray-400">{aboutBio}</p>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300">
                    United College of Engg. & Research
                  </span>
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300">
                    AKTU
                  </span>
                  <span className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
                    3rd Year
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Stats cards */}
          {stats.map((stat, i) => {
            const Icon = stat.icon as LucideIcon;
            const isIndigo = stat.accent === 'indigo';
            return (
              <motion.div
                key={stat.id}
                custom={i + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={i === 0 ? 'md:col-span-1' : ''}
              >
                <SpotlightCard className="h-full p-6" glowColor={isIndigo ? 'indigo' : 'cyan'}>
                  <div className="flex flex-col gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isIndigo
                          ? 'border-indigo-500/30 bg-indigo-500/10'
                          : 'border-cyan-500/30 bg-cyan-500/10'
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isIndigo ? 'text-indigo-300' : 'text-cyan-300'}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-3xl font-bold tracking-tight ${
                          isIndigo ? 'text-indigo-200' : 'text-cyan-200'
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-sm font-medium text-white">{stat.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">{stat.sub}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}

          {/* Focus areas card — spans full width */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="md:col-span-3"
          >
            <SpotlightCard className="p-6" glowColor="cyan">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
                  <BookOpen size={20} className="text-cyan-300" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Cloud-Native Backends',
                    'Reactive Web Interfaces',
                    'Generative AI Solutions',
                    'Clean Code Architecture',
                    'High-Performance Engineering',
                  ].map((focus) => (
                    <span
                      key={focus}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-200"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
