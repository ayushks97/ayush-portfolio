/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#030712',
        'obsidian-light': '#0a0f1e',
        indigo: {
          glow: '#6366f1',
        },
        cyan: {
          glow: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'gradient-drift': 'gradient-drift 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
