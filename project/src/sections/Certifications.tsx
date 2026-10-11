import { motion } from 'framer-motion';
import { BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { certifications } from '@/data/portfolio';
import type { LucideIcon } from 'lucide-react';

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  return (
    <section id="certifications" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                Certifications
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Verified <span className="text-gradient">credentials</span>
            </h2>
          </div>

          {/* Scroll buttons */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {certifications.map((cert, i) => {
            const Icon = cert.icon as LucideIcon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex h-64 w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${cert.color} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Top: icon + issuer */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color}`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400">
                    {cert.issuer}
                  </span>
                </div>

                {/* Middle: title */}
                <div className="space-y-1">
                  <h3 className="text-base font-semibold leading-snug text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-500">{cert.code}</p>
                </div>

                {/* Bottom: verification + score */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="inline-flex items-center gap-1.5">
                    <BadgeCheck size={16} className="text-emerald-400" />
                    <span className="text-xs font-medium text-emerald-300">Verified</span>
                  </div>
                  <span
                    className={`rounded-lg bg-gradient-to-r ${cert.color} bg-clip-text text-sm font-bold text-transparent`}
                  >
                    {cert.score}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
