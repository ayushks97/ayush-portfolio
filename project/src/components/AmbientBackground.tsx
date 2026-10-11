export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base obsidian gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050816] to-[#030712]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Indigo glow blob */}
      <div
        className="animate-gradient-drift absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />

      {/* Cyan glow blob */}
      <div
        className="animate-gradient-drift absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #22d3ee, transparent 70%)',
          animationDelay: '5s',
        }}
      />

      {/* Bottom indigo glow */}
      <div
        className="animate-gradient-drift absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #818cf8, transparent 70%)',
          animationDelay: '10s',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
