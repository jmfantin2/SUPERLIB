import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        burtons: 'burtons',
      },
      colors: {
        PAPER: '#ece7e4',
        IRON: '#262a2d',
        INDUSTRY: '#637465',
        EMERALD: '#10B981',
        CYAN: '#06B6D4',
        ORANGE: '#f9622b',
        ROSE: '#F43F5E',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
