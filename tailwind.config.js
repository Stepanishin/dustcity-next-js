/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color-bg": "#0c0d12 ",
        "custom-color-font": "#f5f7fa",
        "primary-color-font": "#22242b",
        "custom-color-border": "#181923",
        "custom-color-yellow": "#ffcc15",
        "color-color-yellow-hover": "#cda100",
      },
    },
  },
  plugins: [],
};
