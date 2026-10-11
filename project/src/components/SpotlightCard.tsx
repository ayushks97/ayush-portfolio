import { useRef, useState, type ReactNode } from 'react';
import { motion, type MotionValue, useTransform } from 'framer-motion';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'indigo' | 'cyan';
  childrenClassName?: string;
}

export default function SpotlightCard({
  children,
  className = '',
  glowColor = 'indigo',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -200, y: -200 });
  };

  const glowRgb = glowColor === 'indigo' ? '99, 102, 241' : '34, 211, 238';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden glass glass-hover rounded-2xl ${className}`}
      style={
        {
          '--glow-rgb': glowRgb,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowRgb}, 0.12), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export function useSpotlightGlow(
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
) {
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(99,102,241,0.1), transparent 40%)`
  );
  return background;
}
