import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 lg:px-8 lg:py-32">
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
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Featured Projects
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I've <span className="text-gradient">built</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = project.icon as LucideIcon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/20"
              >
                {/* Ambient gradient on hover */}
                <div
                  className={`pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* Preview area */}
                <div className="relative h-48 overflow-hidden border-b border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="flex h-full items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl`}
                    >
                      <Icon size={36} className="text-white/80" />
                    </motion.div>
                  </div>

                  {/* Preview overlay links */}
                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:bg-white/10"
                      aria-label="Live preview"
                    >
                      <ExternalLink size={16} className="text-gray-300" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:bg-white/10"
                      aria-label="GitHub repository"
                    >
                      <Github size={16} className="text-gray-300" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm font-medium text-gray-500">{project.subtitle}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-indigo-500/30 hover:text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-indigo-500 hover:to-indigo-400"
                    >
                      Live Preview
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-all hover:border-white/20 hover:bg-white/10"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
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
