import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './node_modules/flowbite-react/lib/**/*.js'
  ],
  theme: {
    // colors: {
    //   gray: '#97989F',
    //   'blue-dark': '#181A2A',
    //   'blue-light': '#4B6BFB',
    //   'gray-dark': '#696A75',
    //   'navy-blue': '#242535'
    // },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Source Serif 4', 'serif']
    }
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
};
export default config;
