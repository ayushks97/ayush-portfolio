import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
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

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
              Skills Matrix
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
        </motion.div>

        {/* Bento grid of skill categories */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = category.icon as LucideIcon;
            const isIndigo = category.accent === 'indigo';
            return (
              <motion.div
                key={category.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 ${
                  i === 0 || i === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-30 ${
                    isIndigo ? 'bg-indigo-500' : 'bg-cyan-500'
                  }`}
                />

                {/* Icon */}
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${
                    isIndigo
                      ? 'border-indigo-500/30 bg-indigo-500/10'
                      : 'border-cyan-500/30 bg-cyan-500/10'
                  }`}
                >
                  <Icon
                    size={22}
                    className={isIndigo ? 'text-indigo-300' : 'text-cyan-300'}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-base font-semibold text-white">{category.title}</h3>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-all duration-300 group-hover:border-white/15 ${
                        isIndigo
                          ? 'border-indigo-500/15 bg-indigo-500/5 text-indigo-200/80 hover:border-indigo-500/30 hover:bg-indigo-500/10'
                          : 'border-cyan-500/15 bg-cyan-500/5 text-cyan-200/80 hover:border-cyan-500/30 hover:bg-cyan-500/10'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
