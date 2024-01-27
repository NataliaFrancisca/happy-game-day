import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        familjen: ['var(--font-familjen-rotesk)'],
        fasterone: ['var(--font-faster-one)'],
      },

      backgroundColor: {
        purple: 'rgb(131,58,180)',
        red: 'rgba(253,29,29,.8)',
        orange: 'rgba(252,176,69,.8)'
      }
    },
  },
  plugins: [],
};
export default config;
