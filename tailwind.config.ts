import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        montserratalternates: ['var(--font-montserrat-alternates)'],
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
