import type { Config } from 'tailwindcss';

const { DEFAULT_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "7rem",
        "2xl": "8rem",
      },
    },
    extend: {
      gridTemplateColumns: {},
      fontFamily: {
        iran: ["IRANSansWeb", "sans-serif"],
      },
      inset: {},
      padding: {},
      height: {},
      margin: {},
      borderRadius: {},
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          '50': '#fef9ec',
          '100': '#fceec9',
          '200': '#f9db8e',
          '300': '#f6c04c',
          '400': '#f4ab2b',
          '500': '#ed8a13',
          '600': '#d2670d',
          '700': '#ae470f',
          '800': '#8e3712',
          '900': '#752e12',
          '950': '#431605',
        },
        secondary: {
          '50': '#f8f8f7',
          '100': '#efefef',
          '200': '#dededd',
          '300': '#bebebb',
          '400': '#9a9a96',
          '500': '#7d7d7a',
          '600': '#666663',
          '700': '#535351',
          '800': '#474745',
          '900': '#3e3e3c',
          '950': '#292928',
        },
        tertiary: {
          '50': '#f5f4f1',
          '100': '#e5e4dc',
          '200': '#cdcbbb',
          '300': '#b1ac93',
          '400': '#9a9275',
          '500': '#8b8267',
          '600': '#776d57',
          '700': '#605648',
          '800': '#534a40',
          '900': '#484039',
          '950': '#29231f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
