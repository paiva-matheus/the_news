import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      gray: '#97989F',
      'blue-dark': '#181A2A',
      'blue-light': '#4B6BFB',
      'gray-dark': '#696A75',
      'navy-blue': '#242535'
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Source Serif 4', 'serif']
    }
  },
  plugins: []
};
export default config;
